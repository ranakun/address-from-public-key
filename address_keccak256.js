const keccak256 = require('js-sha3').keccak256;

async function getAddressFromGroupKey(groupKey) {
  try {

    const address = keccak256(Buffer.from(groupKey, 'hex')).slice(64 - 40);

    console.log(`Public Key: 0x${groupKey}`);
    console.log(`Address: 0x${address.toString()}`);
  } catch (err) {
    console.log(err);
  }
}

getAddressFromGroupKey('8783b9d77d4eed45f316c0ba64cd2b4097a8f42339ad21277131c6e958501d95');