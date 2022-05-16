const path = require("path");
require('dotenv').config({path: './.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: process.env.PORT,
      network_id: process.env.NETWORK_ID,
      host: process.env.HOST
    },
    ganache_local: {
      provider: function() {
          return new HDWalletProvider(process.env.MNEMONIC, process.env.GANACHE_URL, MetaMaskAccountIndex )
      },
      network_id: process.env.NETWORK_ID
    },
    goerli_infura: {
      provider: function() {
          return new HDWalletProvider(process.env.MNEMONIC, process.env.GOERLI_INFURA, MetaMaskAccountIndex )
      },
      network_id: process.env.GOERLI_NETWORK_ID
    },
    ropsten_infura: {
      provider: function() {
          return new HDWalletProvider(process.env.MNEMONIC, process.env.ROPSTEN_INFURA, MetaMaskAccountIndex )
      },
      network_id: process.env.ROPSTEN_NETWORK_ID
    },
    rinkeby_infura: {
      provider: function() {
          return new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_INFURA, MetaMaskAccountIndex )
      },
      network_id: process.env.RINKEBY_NETWORK_ID
    }
  },
  compilers: {    
    solc: {
    version: "^0.6.0"
    }
  }
};
