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
          return new HDWalletProvider(process.env.MNEMONIC, process.env.URL, MetaMaskAccountIndex )
      },
      network_id: process.env.NETWORK_ID
    }
  },
  compilers: {    
    solc: {
    version: "^0.6.0"
    }
  }
};
