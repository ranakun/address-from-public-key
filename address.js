var Web3 = require('web3');

// input node inside parenthesis
var web3 = new Web3();

// The group key
var groupKey = '8783b9d77d4eed45f316c0ba64cd2b4097a8f42339ad21277131c6e958501d95';

// adding 0x as prefix to use Group Key as private Key
var privateKey = "0x"+groupKey;

// gives an account generated using the private Key
var account = web3.eth.accounts.privateKeyToAccount(privateKey);

// encrypting the account details for secure storage in database, decryption only possible using password
var encryptAccount = web3.eth.accounts.encrypt(privateKey, "password");
// var decryptAccount = web3.eth.accounts.decrypt(encryptAccount,"password");

// adding the account to a wallet
var wallet = web3.eth.accounts.wallet.add({privateKey});

// encrypting the wallet using a password
var encryptWallet = web3.eth.accounts.wallet.encrypt("password");
// var decryptWallet = web3.eth.accounts.wallet.decrypt(encryptWallet,"password");

// just to display the wallet details
console.log(wallet);