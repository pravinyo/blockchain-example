to create network use,
geth init ./genesis.json --datadir mychaindata

to start the local network,
geth --datadir ./mychaindata

it is found the geth with above command tries to discover for other network with id mentioned in the genesis.json file, to stop geth to search for other network,
geth --datadir ./mychaindata --nodiscover

to list acounts,
eth.accounts

to check account for mining,
 eth.coinbase

to attach geth,

geth attach /home/pravin/blockchain-network/mychaindata/geth.ipc

to set miner,
miner.setEtherbase(eth.accounts[0]);

to start miner,
miner.start(numberOfThread);
E.g, miner.start(1);

=> we need miner to accept transactions on the network.

to check the balance,
web3.eth.getBalance(eth.accounts[0]);

------------------------------------------------------------
Tips and Tricks:

geth --datadir mychaindata --nodiscover --unlock 0 --mine --miner.threads 1
