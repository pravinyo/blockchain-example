let acc1 = "0xe579DE08af467c14A1fCd3f0c0e123A4F03692fa";
let acc2 = "0x22442F37c48878509B2A2Af1BF53e936f6C7012D";
let Web3 = require('web3'); //attention CAPITAL Web3
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

function getBalance(address) {
    return web3.eth.getBalance(address);
}

function transferEther(from, to, amount) {
    return web3.eth.sendTransaction({
        from: from,
        to: to,
        value: web3.utils.toWei(amount.toString(),"ether")});
}

getBalance(acc1)
.then(console.log);

// transferEther(acc1, acc2, 1)
// .then(console.log);