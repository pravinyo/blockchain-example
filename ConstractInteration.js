let Web3 = require('web3'); //attention CAPITAL Web3
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
let account = "0xe579DE08af467c14A1fCd3f0c0e123A4F03692fa";
let contract_address = "0x147fdf3bbE91eA77Dc33FD6ED72a19e7E11da0e0";
let functionCallInputData = "0x06540f7e";
let ABI_CONFIG = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_myUint",
				"type": "uint256"
			}
		],
		"name": "setUint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "message1",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "message2",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "myUint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// low Level Interation

function readDateValue_lowLevel() {
    return web3.eth.call({
        from: account,
        to: contract_address,
        data: functionCallInputData})
        .then(console.log);
}
// high Level Interaction
// Using ABI Array
var myContract = new web3.eth.Contract(ABI_CONFIG, contract_address);

function readDataValue() {    
    return myContract.methods.myUint()
    .call()
    .then(console.log)
    .catch(console.error);
}

function updateValue() {
    return myContract.methods.setUint(50)
    .send({from: account})
    .then(result => {
        console.log(result);
        readDataValue();
    });
}

// lowLevelInteration();

// Now we know that 0x06540f7e sent as data field in interacting with the function “myUint”
// let keccka_hash = web3.utils.sha3("myUint()").substr(0,10); // same as functionCallInputData
// if(keccka_hash === functionCallInputData) {
//     console.log("keccka hash is same as functionCallInputData");
// }else {
//     console.log("keccka hash is different from functionCallInputData");
// }

updateValue();