var searchIndex = JSON.parse('{\
"shard":{"doc":"Shamir Secret Sharing with Proactive Share Refresh","t":"AAAAAAAAAADLLLLLLLLLLLLLLLLLLLLLMLLLLLLLENNNNNNNNNNNLLFLLLLLLLLLLLLLMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMDMLLLLLLLLLLLLLLLLLLLREDNLLLLMLLLLLLMLLLLLLLLLLLLMMMMMMLMLLLLLLLLMMDENNNNLLLLLLLLLLLLLLLMLLLLMLLLLLLMFLLLMLLLLLLLLNNDDNDDNNNDDEELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMMMMMMMMMLLLLLLLLMMMMMMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFFFFFFFDDIDLLLLLLLLKLLLLLLLLLLLLLLLLLLLKLLKLLLLLKLLLLLLLLMLMLMMLLLLLLLLLLKLLLLLDLLLLMFLLLLLLLLLLLLFLLLLFFLFLLLLL","n":["client","command","config","constants","event","network","protocol","provider","repository","sss","Client","borrow","borrow_mut","clone","clone_into","deref","deref_mut","dial","drop","from","from_lossy","get_all_providers","get_providers","init","into","into_lossy","request_refresh_shares","request_register_share","request_share","respond_refresh_shares","respond_register_share","respond_share","sender","start_listening","start_providing","to_owned","try_from","try_into","type_id","vzip","Command","Dial","GetAllProviders","GetProviders","RequestRefreshShare","RequestRegisterShare","RequestShare","RespondRefreshShare","RespondRegisterShare","RespondShare","StartListening","StartProviding","borrow","borrow_mut","command_handler","deref","deref_mut","drop","fmt","from","from_lossy","init","into","into_lossy","try_from","try_into","type_id","vzip","addr","channel","channel","channel","key","key","key","key","key","peer","peer","peer","peer_addr","peer_id","refresh_key","sender","sender","sender","sender","sender","sender","sender","sender","sender_chan","sender_chan","sender_chan","share","share","success","success","success","threshold","ShardConfig","bootstrapper","borrow","borrow_mut","deref","deref_mut","deserialize","drop","fmt","from","from_lossy","init","into","into_lossy","new","serialize","try_from","try_from","try_into","type_id","vzip","DEFAULT_REFRESH_SECONDS","Event","EventLoop","InboundRequest","borrow","borrow","borrow_mut","borrow_mut","command_receiver","deref","deref","deref_mut","deref_mut","drop","drop","event_sender","fmt","from","from","from_lossy","from_lossy","init","init","into","into","into_lossy","into_lossy","new","pending_dial","pending_get_providers","pending_refresh_share","pending_register_share","pending_request_share","pending_start_providing","run","swarm","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","channel","request","Behaviour","BehaviourEvent","Gossipsub","Identify","Kademlia","RequestResponse","borrow","borrow","borrow_mut","borrow_mut","deref","deref","deref_mut","deref_mut","drop","drop","fmt","from","from","from_lossy","from_lossy","gossipsub","handle_established_inbound_connection","handle_established_outbound_connection","handle_pending_inbound_connection","handle_pending_outbound_connection","identify","init","init","into","into","into_lossy","into_lossy","kademlia","new","on_connection_handler_event","on_swarm_event","poll","request_response","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","GetShare","GetShare","GetShareRequest","GetShareResponse","RefreshShare","RefreshShareRequest","RefreshShareResponse","RefreshShares","RegisterShare","RegisterShare","RegisterShareRequest","RegisterShareResponse","Request","Response","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","deref","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","drop","drop","drop","drop","drop","drop","drop","drop","eq","eq","eq","eq","eq","eq","eq","eq","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","equivalent","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from_lossy","from_lossy","from_lossy","from_lossy","from_lossy","from_lossy","from_lossy","from_lossy","init","init","init","init","init","init","init","init","into","into","into","into","into","into","into","into","into_lossy","into_lossy","into_lossy","into_lossy","into_lossy","into_lossy","into_lossy","into_lossy","key","key","key","peer","peer","peer","refresh_key","sender","sender","sender","serialize","serialize","serialize","serialize","serialize","serialize","serialize","serialize","share","share","success","success","success","threshold","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","check_share_owner","dao","execute_get_share","execute_refresh_share","execute_register_share","refresh_loop","run_loop","HashMapShareEntryDao","ShareEntry","ShareEntryDaoTrait","SledShareEntryDao","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","delete","delete","delete","deref","deref","deref","deref_mut","deref_mut","deref_mut","deserialize","drop","drop","drop","fmt","from","from","from","from_lossy","from_lossy","from_lossy","get","get","get","get_all","get_all","get_all","init","init","init","insert","insert","insert","into","into","into","into_lossy","into_lossy","into_lossy","map","new","sender","serialize","share","threshold","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","update","update","update","vzip","vzip","vzip","Polynomial","borrow","borrow_mut","clone","clone_into","coefficients","combine_shares","deref","deref_mut","deserialize","drop","eq","equivalent","equivalent","equivalent","evaluate","fmt","from","from_lossy","generate_refresh_key","init","into","into_lossy","new","refresh_share","refresh_shares","serialize","split_secret","to_owned","try_from","try_into","type_id","vzip"],"q":[[0,"shard"],[10,"shard::client"],[40,"shard::command"],[68,"shard::command::Command"],[100,"shard::config"],[121,"shard::constants"],[122,"shard::event"],[165,"shard::event::Event"],[167,"shard::network"],[214,"shard::protocol"],[436,"shard::provider"],[443,"shard::repository"],[515,"shard::sss"],[548,"libp2p_identity::peer_id"],[549,"multiaddr"],[550,"core::error"],[551,"alloc::boxed"],[552,"core::result"],[553,"std::collections::hash::set"],[554,"alloc::string"],[555,"alloc::vec"],[556,"libp2p_request_response"],[557,"core::any"],[558,"core::fmt"],[559,"core::fmt"],[560,"config::error"],[561,"serde::ser"],[562,"config::config"],[563,"libp2p_swarm"],[564,"futures_channel::mpsc"],[565,"futures_channel::mpsc"],[566,"core::option"],[567,"core::fmt"],[568,"libp2p_swarm"],[569,"futures_core::stream"],[570,"libp2p_swarm"],[571,"core::task::wake"],[572,"libp2p_swarm"],[573,"std::sync::mutex"],[574,"alloc::sync"],[575,"tokio::time::interval"],[576,"core::marker"],[577,"std::collections::hash::map"],[578,"gf256::gf::__gf256_gen"]],"d":["The <code>client</code> module defines the network client …","The <code>command</code> module contains definitions of various …","The <code>config</code> module defines the <code>Config</code> struct, which is used …","The <code>constants</code> module defines various constants used in the …","The <code>event</code> module defines the different types of events …","The <code>network</code> module implements the necessary network …","The <code>protocol</code> module defines the communication protocols …","The <code>provider</code> module defines the <code>Provider</code> trait, which is …","The <code>repository</code> module manages data storage and retrieval. …","The <code>sss</code> (Shamir’s Secret Sharing) module is a crucial …","Represents a client in the network capable of issuing …","","","","","","","Dial the given peer at the given address.","","Returns the argument unchanged.","","Find all providers on the DHT.","Find the providers for the given key on the DHT.","","Calls <code>U::from(self)</code>.","","Request the refreshing of shares.","Request registration of the given share.","Request the content of the given share from the given peer.","Respond to a refresh shares request.","Respond to a register share request.","Respond with the provided share content to the given …","","Listen for incoming connections on the given address.","Advertise the local node as the provider of the given key …","","","","","","Represents commands that can be issued to the network.","","","","","","","","","","","","","","Handles incoming commands for the network event loop.","","","","","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","","","","","","","","","The default number of seconds between each refresh of the …","Represents various events that can occur in the network.","Manages the event loop for network operations.","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Constructs a new <code>EventLoop</code>.","","","","","","","Runs the event loop.","","","","","","","","","","","","Represents the combined network behaviour for the libp2p …","<code>NetworkBehaviour::ToSwarm</code> produced by Behaviour.","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","Creates a new libp2p Swarm instance with specified …","","","","","","","","","","","","","","","Represents a request to get a share.","Represents a response to a <code>GetShare</code> request.","","Represents a request to refresh share.","Represents a response to a <code>RefreshShare</code> request.","","","","Represents a request to register a new share.","Represents a response to a <code>RegisterShare</code> request.","Represents a request in a simple share exchange protocol.","Represents a response in a simple share exchange protocol.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Checks if the given <code>PeerId</code> is the owner of the <code>ShareEntry</code>.","Creates and returns a DAO instance based on the specified …","Executes the logic to retrieve and send a share …","Executes the share refresh logic asynchronously.","Executes the share registration logic asynchronously.","Periodically refreshes shares in a separate asynchronous …","Runs the main event loop asynchronously.","","Represents a share entry in the database.","Defines the Data Access Object (DAO) trait for <code>ShareEntry</code>.","A <code>ShareEntryDaoTrait</code> implementation using Sled, an …","","","","","","","","","Deletes a <code>ShareEntry</code> from the data store by its key.","Deletes a <code>ShareEntry</code> from the Sled database by its key.","Deletes a <code>ShareEntry</code> from the HashMap by its key.","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","Retrieves a <code>ShareEntry</code> from the data store by its key.","Retrieves a <code>ShareEntry</code> from the Sled database by its key.","Retrieves a <code>ShareEntry</code> from the HashMap by its key.","","","","","","","Inserts a <code>ShareEntry</code> into the data store.","Inserts a new <code>ShareEntry</code> into the Sled database.","Inserts a new <code>ShareEntry</code> into the HashMap.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","Creates a new instance of <code>SledShareEntryDao</code>.","","","","","","","","","","","","","","","Updates an existing <code>ShareEntry</code> in the data store.","Updates an existing <code>ShareEntry</code> in the Sled database.","Updates an existing <code>ShareEntry</code> in the HashMap.","","","","Represents a polynomial over the Galois field GF(2^8).","","","","","The coefficients of the polynomial, where each coefficient …","Combines shares to reconstruct a secret using Shamir’s …","","","","","","","","","Evaluates the polynomial at a given point.","","Returns the argument unchanged.","","Generates a set of polynomials for refreshing shares in a …","","Calls <code>U::from(self)</code>.","","Constructs a new polynomial of a given degree with random …","Refreshes a single share in a proactive secret sharing …","…","","Splits a secret into a specified number of shares using …","","","","",""],"i":[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,20,20,20,20,20,20,20,20,20,20,20,20,20,0,20,20,20,20,20,20,20,20,20,20,20,20,20,67,68,69,70,71,72,73,74,75,73,74,75,76,76,75,67,76,71,72,77,73,74,75,73,74,75,68,74,68,69,70,74,0,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,0,0,0,28,19,28,19,28,19,19,28,19,28,19,28,19,28,19,28,19,28,19,28,19,28,19,28,19,19,19,19,19,19,19,19,19,19,28,19,28,19,28,19,28,78,78,0,0,35,35,35,35,29,35,29,35,29,35,29,35,29,35,35,29,35,29,35,29,29,29,29,29,29,29,35,29,35,29,35,29,0,29,29,29,29,29,35,29,35,29,35,29,35,49,16,0,0,49,0,0,16,49,16,0,0,0,0,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,49,49,16,16,16,50,50,50,51,51,51,52,52,52,53,53,53,54,54,54,55,55,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,50,52,54,50,52,54,54,50,52,54,49,16,50,51,52,53,54,55,51,52,51,53,55,52,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,49,16,50,51,52,53,54,55,0,0,0,0,0,0,0,0,0,0,0,63,64,56,63,64,56,56,56,57,63,64,63,64,56,63,64,56,56,63,64,56,56,63,64,56,63,64,56,57,63,64,57,63,64,63,64,56,57,63,64,63,64,56,63,64,56,64,63,56,56,56,56,56,63,64,56,63,64,56,63,64,56,57,63,64,63,64,56,0,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,0,0,11,0,11,11,11,11,11],"f":[0,0,0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[1,1],[[-1,-2],2,[],[]],[3,-1,[]],[3,-1,[]],[[1,4,5],[[8,[2,[7,[6]]]]]],[3,2],[-1,-1,[]],[-1,-2,[],[]],[1,[[9,[4]]]],[[1,10],[[9,[4]]]],[[],3],[-1,-2,[],[]],[-1,-2,[],[]],[[1,10,[12,[11]],4,4],[[8,[13,[7,[6]]]]]],[[1,[2,[14,[12,[14]]]],10,15,4,4],[[8,[13,[7,[6]]]]]],[[1,4,10,4],[[8,[[2,[14,[12,[14]]]],[7,[6]]]]]],[[1,13,[17,[16]]],2],[[1,13,[17,[16]]],2],[[1,[2,[14,[12,[14]]]],13,[17,[16]]],2],0,[[1,5],[[8,[2,[7,[6]]]]]],[[1,10],2],[-1,-2,[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,18,[]],[-1,-2,[],[]],0,0,0,0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[[19,20],2],[3,-1,[]],[3,-1,[]],[3,2],[[20,21],22],[-1,-1,[]],[-1,-2,[],[]],[[],3],[-1,-2,[],[]],[-1,-2,[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,18,[]],[-1,-2,[],[]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[3,-1,[]],[3,-1,[]],[-1,[[8,[23]]],24],[3,2],[[23,21],22],[-1,-1,[]],[-1,-2,[],[]],[[],3],[-1,-2,[],[]],[-1,-2,[],[]],[[],[[8,[23,25]]]],[[23,-1],8,26],[-1,[[8,[-2]]],[],[]],[27,[[8,[23]]]],[-1,[[8,[-2]]],[],[]],[-1,18,[]],[-1,-2,[],[]],0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,2],[3,2],0,[[28,21],22],[-1,-1,[]],[-1,-1,[]],[-1,-2,[],[]],[-1,-2,[],[]],[[],3],[[],3],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[30,[29]],[31,[20]],[32,[28]]],19],0,0,0,0,0,0,[[19,[34,[33]]],2],0,[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,18,[]],[-1,18,[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,2],[3,2],[[35,21],[[8,[2,36]]]],[-1,-1,[]],[-1,-1,[]],[-1,-2,[],[]],[-1,-2,[],[]],0,[[29,37,4,5,5],[[8,[[38,[29]],39]]]],[[29,37,4,5,40],[[8,[[38,[29]],39]]]],[[29,37,5,5],[[8,[2,39]]]],[[29,37,[34,[4]],[41,[5]],40],[[8,[[12,[5]],39]]]],0,[[],3],[[],3],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,[[[34,[14]]],[[8,[[2,[1,[0,[42]],19,4]],[7,[6]]]]]],[[29,4,37,[43,[29]]],2],[[29,44],2],[[29,45],[[48,[[47,[[46,[29]]]]]]]],0,[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,18,[]],[-1,18,[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,0,0,0,0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[49,49],[16,16],[50,50],[51,51],[52,52],[53,53],[54,54],[55,55],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[[-1,-2],2,[],[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[-1,[[8,[49]]],24],[-1,[[8,[16]]],24],[-1,[[8,[50]]],24],[-1,[[8,[51]]],24],[-1,[[8,[52]]],24],[-1,[[8,[53]]],24],[-1,[[8,[54]]],24],[-1,[[8,[55]]],24],[3,2],[3,2],[3,2],[3,2],[3,2],[3,2],[3,2],[3,2],[[49,49],13],[[16,16],13],[[50,50],13],[[51,51],13],[[52,52],13],[[53,53],13],[[54,54],13],[[55,55],13],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[49,21],22],[[16,21],22],[[50,21],22],[[51,21],22],[[52,21],22],[[53,21],22],[[54,21],22],[[55,21],22],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[],3],[[],3],[[],3],[[],3],[[],3],[[],3],[[],3],[[],3],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,0,0,0,0,0,0,0,0,[[49,-1],8,26],[[16,-1],8,26],[[50,-1],8,26],[[51,-1],8,26],[[52,-1],8,26],[[53,-1],8,26],[[54,-1],8,26],[[55,-1],8,26],0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,18,[]],[-1,18,[]],[-1,18,[]],[-1,18,[]],[-1,18,[]],[-1,18,[]],[-1,18,[]],[-1,18,[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[56,4],13],[[[34,[10]]],[[8,[[59,[[58,[[7,[57]]]]]],[7,[6]]]]]],[[60,4,[17,[16]],[59,[[58,[[7,[57]]]]]],1],[[8,[2,[7,[6]]]]]],[[60,4,[41,[11]],[34,[[17,[16]]]],[59,[[58,[[7,[57]]]]]],1],[[8,[2,[7,[6]]]]]],[[60,4,[2,[14,[12,[14]]]],15,[17,[16]],[59,[[58,[[7,[57]]]]]],1],[[8,[2,[7,[6]]]]]],[[61,[59,[[58,[[7,[57]]]]]],1,4],2],[[[34,[10]],[34,[15]],4,1,-1],2,[42,62]],0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[56,56],[[-1,-2],2,[],[]],[[-1,60],[[8,[2,[7,[6]]]]],[]],[[63,60],[[8,[2,[7,[6]]]]]],[[64,60],[[8,[2,[7,[6]]]]]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[3,-1,[]],[-1,[[8,[56]]],24],[3,2],[3,2],[3,2],[[56,21],22],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[-1,60],[[8,[[34,[56]],[7,[6]]]]],[]],[[63,60],[[8,[[34,[56]],[7,[6]]]]]],[[64,60],[[8,[[34,[56]],[7,[6]]]]]],[-1,[[8,[[12,[[2,[10,56]]]],[7,[6]]]]],[]],[63,[[8,[[12,[[2,[10,56]]]],[7,[6]]]]]],[64,[[8,[[12,[[2,[10,56]]]],[7,[6]]]]]],[[],3],[[],3],[[],3],[[-1,60,56],[[8,[2,[7,[6]]]]],[]],[[63,60,56],[[8,[2,[7,[6]]]]]],[[64,60,56],[[8,[2,[7,[6]]]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,[60,[[8,[63,[7,[6]]]]]],0,[[56,-1],8,26],0,0,[-1,-2,[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,18,[]],[-1,18,[]],[-1,18,[]],[[-1,60,56],[[8,[2,[7,[6]]]]],[]],[[63,60,56],[[8,[2,[7,[6]]]]]],[[64,60,56],[[8,[2,[7,[6]]]]]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,[-1,-2,[],[]],[-1,-2,[],[]],[11,11],[[-1,-2],2,[],[]],0,[[[65,[14,[12,[14]]]]],[[34,[[12,[14]]]]]],[3,-1,[]],[3,-1,[]],[-1,[[8,[11]]],24],[3,2],[[11,11],13],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[-1,-2],13,[],[]],[[11,66],66],[[11,21],22],[-1,-1,[]],[-1,-2,[],[]],[[3,3],[[8,[[12,[11]],10]]]],[[],3],[-1,-2,[],[]],[-1,-2,[],[]],[[3,66],11],[[[2,[14,[12,[14]]]],[41,[11]]],[[8,[2,10]]]],[[[65,[14,[12,[14]]]],3],[[8,[2,10]]]],[[11,-1],8,26],[[[41,[14]],3,3],[[8,[[65,[14,[12,[14]]]],10]]]],[-1,-2,[],[]],[-1,[[8,[-2]]],[],[]],[-1,[[8,[-2]]],[],[]],[-1,18,[]],[-1,-2,[],[]]],"c":[],"p":[[3,"Client",10],[15,"tuple"],[15,"usize"],[3,"PeerId",548],[3,"Multiaddr",549],[8,"Error",550],[3,"Box",551],[4,"Result",552],[3,"HashSet",553],[3,"String",554],[3,"Polynomial",515],[3,"Vec",555],[15,"bool"],[15,"u8"],[15,"u64"],[4,"Response",214],[3,"ResponseChannel",556],[3,"TypeId",557],[3,"EventLoop",122],[4,"Command",40],[3,"Formatter",558],[6,"Result",558],[3,"ShardConfig",100],[8,"Deserializer",559],[4,"ConfigError",560],[8,"Serializer",561],[3,"Config",562],[4,"Event",122],[3,"Behaviour",167],[3,"Swarm",563],[3,"Receiver",564],[3,"Sender",564],[4,"IpAddr",565],[4,"Option",566],[4,"BehaviourEvent",167],[3,"Error",558],[3,"ConnectionId",567],[6,"THandler",563],[3,"ConnectionDenied",563],[4,"Endpoint",568],[15,"slice"],[8,"Stream",569],[6,"THandlerOutEvent",563],[4,"FromSwarm",570],[3,"Context",571],[6,"THandlerInEvent",563],[4,"ToSwarm",570],[4,"Poll",572],[4,"Request",214],[3,"GetShareRequest",214],[3,"GetShareResponse",214],[3,"RegisterShareRequest",214],[3,"RegisterShareResponse",214],[3,"RefreshShareRequest",214],[3,"RefreshShareResponse",214],[3,"ShareEntry",443],[8,"ShareEntryDaoTrait",443],[3,"Mutex",573],[3,"Arc",574],[15,"str"],[3,"Interval",575],[8,"Unpin",576],[3,"SledShareEntryDao",443],[3,"HashMapShareEntryDao",443],[3,"HashMap",577],[3,"gf256",578],[13,"StartListening",68],[13,"RespondShare",68],[13,"RespondRegisterShare",68],[13,"RespondRefreshShare",68],[13,"StartProviding",68],[13,"GetProviders",68],[13,"RequestShare",68],[13,"RequestRegisterShare",68],[13,"RequestRefreshShare",68],[13,"Dial",68],[13,"GetAllProviders",68],[13,"InboundRequest",165]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};