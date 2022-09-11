
var Tx = require('ethereumjs-tx');
var Web3 = require('web3');

// connecting to ganache 
var web3 = new Web3(HTTP://127.0.0.1:7545);
const transact = {
    nonce:                    // indicates transaction number that increments with each transaction
    to:                       // reciever
    gasLimit:                 // max gas that the transaction is allowed to consume
    maxFeePerGas:             // max total gas that sender is willing to be pay
    maxPriorityFeePerGas:     // max priority fee(tip to miner) that sender is willing to pay
    value:                    // amount of wei to be sent
    message:                  // optional message if required
}