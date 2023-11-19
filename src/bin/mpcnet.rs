use clap::Parser;

use futures::prelude::*;
use libp2p::PeerId;
use libp2p::{core::Multiaddr, multiaddr::Protocol};
use mpcnet::network;
use mpcnet::repository::{HashMapShareEntryDao, ShareEntry, ShareEntryDaoTrait, SledShareEntryDao};
use rand::seq::IteratorRandom;
use rand::RngCore;
use std::borrow::BorrowMut;
use std::collections::HashMap;
use std::error::Error;
use std::sync::Mutex;
use tokio::spawn;
use tracing::debug;
use tracing::error;
use tracing_subscriber::EnvFilter;

use mpcnet::protocol::Request;
use mpcnet::sss::combine_shares;
use mpcnet::sss::generate_refresh_key;
use mpcnet::sss::refresh_share;
use mpcnet::sss::split_secret;

use mpcnet::event::Event;

#[derive(Debug, Parser)]
enum CliArgument {
    /// Run as a share provider.
    Provide {
        /// use embedded database for persistence
        /// otherwise use memory database
        #[clap(long, short)]
        db_path: Option<String>,
    },
    /// Combine shares to rebuild the secret.
    Combine {
        /// key of the share to get.
        #[clap(long, short)]
        key: String,

        /// Share threshold.
        #[clap(long, short)]
        threshold: usize,

        /// Debug mode displays the shares
        #[clap(long, short)]
        debug: bool,
    },
    /// Split a secret into shares and register them with the network.
    Split {
        /// Share threshold.
        #[clap(long, short)]
        threshold: usize,

        /// Number of shares to generate.
        #[clap(long, short)]
        shares: usize,

        /// key to use to register shares for the secret
        #[clap(long, short)]
        key: Option<String>,

        /// Secret to split.
        #[clap(long)]
        secret: String,

        /// Debug mode displays the shares
        #[clap(long, short)]
        debug: bool,
    },

    /// Get the list of providers for a share.
    Ls {
        /// key of the share.
        #[clap(long, short)]
        key: String,
    },

    /// Refresh the shares
    Refresh {
        /// key of the share.
        #[clap(long, short)]
        key: String,

        /// Share threshold.
        #[clap(long, short)]
        threshold: usize,

        /// Key size.
        #[clap(long, short)]
        size: usize,
    },
}

#[derive(Parser, Debug)]
#[clap(name = "MpcNet Threshold Network")]
struct Opt {
    /// Fixed value to generate deterministic peer ID.
    #[clap(long, short)]
    secret_key_seed: Option<u8>,

    /// Address of a peer to connect to.
    #[clap(long, short)]
    peer: Option<Multiaddr>,

    /// Address to listen on.
    #[clap(long, short)]
    listen_address: Option<Multiaddr>,

    /// Subcommand to run.
    #[clap(subcommand)]
    argument: CliArgument,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let sender = get_sender();
    debug!("sender ID: {}", sender);

    let _ = tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::from_default_env())
        .try_init();

    let opt = Opt::parse();

    let (mut network_client, mut network_events, network_event_loop) =
        network::new(opt.secret_key_seed).await?;

    // Spawn the network task for it to run in the background.
    spawn(network_event_loop.run());

    // In case a listen address was provided use it, otherwise listen on any
    // address.
    match opt.listen_address {
        Some(addr) => network_client
            .start_listening(addr)
            .await
            .expect("Listening not to fail."),
        None => network_client
            .start_listening("/ip4/0.0.0.0/tcp/0".parse()?)
            .await
            .expect("Listening not to fail."),
    };

    // In case the user provided an address of a peer on the CLI, dial it.
    if let Some(addr) = opt.peer {
        debug!("Dialing peer at {}.", addr);
        let Some(Protocol::P2p(peer_id)) = addr.iter().last() else {
            return Err("Expect peer multiaddr to contain peer ID.".into());
        };
        network_client
            .dial(peer_id, addr)
            .await
            .expect("Dial to succeed");
    }

    debug!("Waiting for network to be ready...");

    match opt.argument {
        // Providing a share.
        CliArgument::Provide { db_path } => {
            // check if the db_path is set, if so use sled, otherwise use HashMap
            let dao: Box<dyn ShareEntryDaoTrait> = if db_path.is_some() {
                debug!("Using Sled DB");
                Box::new(SledShareEntryDao::new(&db_path.unwrap())?)
            } else {
                debug!("Using HashMap DB");
                Box::new(HashMapShareEntryDao {
                    map: Mutex::new(HashMap::new()),
                })
            };

            fn check_share_owner(entry: &ShareEntry, sender_id: &PeerId) -> bool {
                PeerId::from_bytes(&entry.sender).unwrap() == *sender_id
            }

            loop {
                match network_events.next().await {
                    // Reply with the content of the file on incoming requests.
                    Some(Event::InboundRequest { request, channel }) => {
                        match request {
                            Request::RegisterShare(req) => {
                                debug!("-- Request: {:#?}.", req);
                                if let Some(share_entry) = dao.get(&req.key)? {
                                    debug!("Retrieved Entry: {:?}", share_entry);
                                    let sender = PeerId::from_bytes(&req.sender).unwrap();
                                    debug!("-- Sender: {:#?}.", sender);

                                    // check that the peer requesting the share is the owner
                                    if !check_share_owner(&share_entry, &sender) {
                                        println!("⚠️ Share exists, not owned by sender {:?}, actual owner: {:?}", sender, share_entry.sender);
                                        network_client.respond_register_share(false, channel).await;
                                        continue;
                                    }
                                }

                                network_client.start_providing(req.key.clone()).await;
                                debug!(
                                    "-- Sender: {:#?}.",
                                    PeerId::from_bytes(&req.sender).unwrap()
                                );
                                dao.insert(
                                    &req.key.clone(),
                                    &ShareEntry {
                                        share: req.share,
                                        sender: req.sender,
                                    },
                                )?;
                                network_client.respond_register_share(true, channel).await;
                                println!("🚀 Registered share for key: {:?}.", req.key);
                            }
                            Request::GetShare(req) => {
                                debug!("-- Request: {:#?}.", req);
                                let share_entry =
                                    dao.get(&req.key).unwrap().ok_or("Share not found")?;

                                let sender = PeerId::from_bytes(&req.sender).unwrap();
                                debug!("-- Sender: {:#?}.", sender);

                                // check that the peer requesting the share is the owner
                                if !check_share_owner(&share_entry, &sender) {
                                    println!(
                                        "⚠️ Share not owned by sender {:?}, actual owner: {:?}",
                                        sender, share_entry.sender
                                    );
                                    network_client
                                        .respond_share((0u8, vec![]), false, channel)
                                        .await;
                                    continue;
                                }
                                network_client
                                    .respond_share(share_entry.share.clone(), true, channel)
                                    .await;
                                println!("💡 Sent share for key: {:?}.", req.key);
                            }
                            Request::RefreshShare(req) => {
                                debug!("-- Request: {:#?}.", req);

                                let mut share_entry =
                                    dao.get(&req.key).unwrap().ok_or("Share not found")?;

                                let sender = PeerId::from_bytes(&req.sender).unwrap();
                                debug!("-- Sender: {:#?}.", sender);

                                // check that the peer requesting the share is the owner
                                if !check_share_owner(&share_entry, &sender) {
                                    println!(
                                        "⚠️ Share not owned by sender {:?}, actual owner: {:?}",
                                        sender, share_entry.sender
                                    );
                                    network_client.respond_refresh_shares(false, channel).await;
                                    continue;
                                }

                                debug!("share before refresh: {:?}", share_entry.share);
                                let _ = refresh_share(
                                    (
                                        share_entry.share.0.borrow_mut(),
                                        share_entry.share.1.borrow_mut(),
                                    ),
                                    &req.refresh_key,
                                );
                                dao.insert(&req.key, &share_entry)?;
                                debug!("share after refresh: {:?}", share_entry.share);
                                network_client.respond_refresh_shares(true, channel).await;
                                println!("🔄 Refreshed share for key: {:?}", req.key);
                            }
                        }
                    }
                    e => debug!("unhandled client event: {e:?}"),
                }
            }
        }

        // Locating and getting a share.
        CliArgument::Combine {
            key,
            threshold,
            debug,
        } => {
            // sleep for a bit to give the network time to bootstrap
            tokio::time::sleep(std::time::Duration::from_secs(1)).await;

            debug!("Looking for providers of share {}...", key);
            // Locate all nodes providing the share.
            let providers = network_client.get_providers(key.clone()).await;
            if providers.is_empty() {
                return Err(format!("Could not find provider for share {key}.").into());
            }

            debug!("Found {} providers for share {}.", providers.len(), key);

            // Request a share from each node.
            let requests = providers.into_iter().map(|p| {
                let mut network_client = network_client.clone();
                let name = key.clone();
                async move { network_client.request_share(p, name, sender).await }.boxed()
            });

            debug!("Requesting share from providers.");

            let rng = &mut rand::thread_rng();
            let sample = requests.choose_multiple(rng, threshold);

            let shares = futures::future::join_all(sample).await;
            let u: Vec<&(u8, Vec<u8>)> = shares
                .iter()
                .map(|r| {
                    if let Err(e) = r {
                        error!("Error: {:?}", e);
                    }
                    r.as_ref().unwrap()
                })
                .collect();

            // create a shares map for combining
            let shares_map: HashMap<u8, Vec<u8>> = u.iter().map(|(k, v)| (*k, v.clone())).collect();
            shares.iter().for_each(|r| {
                if let Err(e) = r {
                    error!("Error: {:?}", e);
                }
                debug!("Received r: {:?}", r.as_ref().unwrap());
            });

            let secret = combine_shares(&shares_map);
            debug!("Received shares: {:?}", &shares);

            // if the debug flag is set, print the shares
            if debug {
                println!("🐛 [debug] shares: ");
                // print the shares in a more readable hex format
                for (_, v) in shares_map.iter() {
                    println!("  {}", hex::encode(v));
                }
            }

            println!(
                "🔑 secret: {:#?}",
                String::from_utf8(secret.unwrap()).unwrap()
            );
        }

        // Splitting a secret.
        CliArgument::Split {
            threshold,
            shares,
            secret,
            key,
            debug,
        } => {
            // sleep for a bit to give the network time to bootstrap
            tokio::time::sleep(std::time::Duration::from_secs(1)).await;

            // if key is None assign a random key
            let key = key.unwrap_or_else(|| {
                let mut rng = rand::thread_rng();
                let mut key = [0u8; 32];
                rng.fill_bytes(&mut key);
                hex::encode(key)
            });

            let split_shares = split_secret(secret.as_bytes(), threshold, shares)?;
            debug!("Shares: {:?}", split_shares);
            // Locate all nodes providing the share.
            let providers = network_client.get_all_providers().await;
            if providers.is_empty() {
                return Err(format!("Could not find providers.").into());
            }
            // check that there are the correct number of providers
            if providers.len() < shares {
                return Err(format!(
                    "Not enough providers to accomodate shares. Wait for more providers to join"
                )
                .into());
            }

            debug!("*** Found {} providers.", providers.len());

            // make sure to only send shares to only shares number of providers
            let requests = providers
                .clone()
                .into_iter()
                .take(shares)
                .enumerate()
                .map(|(i, p)| {
                    let mut network_client = network_client.clone();
                    let share_id = (i + 1) as u8;
                    let share = split_shares.get(&share_id).ok_or("Share not found");
                    let k = &key;
                    async move {
                        network_client
                            .request_register_share(
                                (share_id, share.unwrap().to_vec()),
                                k.to_string(),
                                p,
                                sender,
                            )
                            .await
                    }
                    .boxed()
                });

            // Await all of the requests and ensure they all succee
            futures::future::join_all(requests)
                .await
                .iter()
                .for_each(|r| {
                    if let Err(e) = r {
                        error!("Error: {:?}", e);
                    }
                });

            if debug {
                println!("🐛 [debug] shares: ");
                // print the shares in a more readable hex format
                for (_, v) in split_shares.iter() {
                    println!("  {}", hex::encode(v));
                }
            }

            println!("✂️  Secret has been split and distributed across network.");
            println!("    key: {:#?}", key);
            println!("    threshold: {:#?}", threshold);
            println!("    providers: {:#?}", providers)
        }
        CliArgument::Ls { key } => {
            let providers = network_client.get_providers(key.clone()).await;
            if providers.is_empty() {
                return Err(format!("Could not find provider for share {key}.").into());
            }

            // println!("Found {} providers for share {}.", providers.len(), key);
            println!("✂️  Share Providers: {:#?}", providers);
        }
        CliArgument::Refresh {
            key,
            threshold,
            size,
        } => {
            // sleep for a bit to give the network time to bootstrap
            tokio::time::sleep(std::time::Duration::from_secs(1)).await;

            let providers = network_client.get_providers(key.clone()).await;
            if providers.is_empty() {
                return Err(format!("Could not find provider for share {key}.").into());
            }

            debug!("Found {} providers for share {}.", providers.len(), key);

            let refresh_key = generate_refresh_key(threshold, size).unwrap();
            debug!("🔑 Refresh Key: {:#?}", refresh_key);

            let requests = providers.clone().into_iter().map(|p| {
                let k = key.clone();
                let ref_key = refresh_key.clone();
                let mut network_client = network_client.clone();
                debug!("🔄 Refreshing share for key: {:?} to peer {:?}", &k, p);
                async move {
                    network_client
                        .request_refresh_shares(k, ref_key, p, sender)
                        .await
                }
                .boxed()
            });

            // Await all of the requests and ensure they all succeed
            futures::future::join_all(requests).await;

            // println!("Found {} providers for share {}.", providers.len(), key);
            print!(
                "🔄 Refreshed {} shares for key: {:?}",
                providers.len(),
                &key
            );
        }
    }

    Ok(())
}

fn get_sender() -> PeerId {
    // create a deterministic peer id from a fixed value
    let mut bytes = [0u8; 32];
    bytes[0] = 42;
    let id_keys = libp2p::identity::Keypair::ed25519_from_bytes(bytes).unwrap();
    //let id_keys = libp2p::identity::Keypair::generate_ed25519();
    id_keys.public().to_peer_id()
}