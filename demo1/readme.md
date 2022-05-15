To start truffle:
- ../node_modules/.bin/truffle development

To compile and migrate, run:
- truffle(develop)> migrate

To send transaction to specific addres:
- web3.eth.sendTransaction({to: "0xbDA1854c4CF6a0ab8620F941EC943Fb3CF6D89fb", value: 1234, gas: 300000, from: accounts[1]});

TO send transaction via metamask,
- convert wei to ether and add 300k gas fee and add item address and make payment.