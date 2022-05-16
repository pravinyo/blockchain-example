### Install Ganache cli:
=> npm install -g ganache-cli

### To list account in ganache,
- yarn console
- run accounts in truffle.

```
You should be able to list the accounts by simply typing in "accounts". These are the same accounts as in Ganache. You are connected to your node via RPC. The node is Ganache. You can send off transactions using the private keys behind these accounts. Ganache will sign them.
```

We have to send a transaction from these accounts to MetaMask. Copy the account in MetaMask:
Type in:
- web3.eth.sendTransaction({from: accounts[0], to:"PASTE_ACCOUNT_FROM_METAMASK", value: web3.utils.toWei("1","ether")})
    - ex. web3.eth.sendTransaction({from: accounts[0], to:"0x33A9C27B7Ed487c92FfCE2283D6C31C9107bdabd", value: web3.utils.toWei("1","ether")})
