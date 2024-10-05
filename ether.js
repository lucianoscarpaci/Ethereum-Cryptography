import { randomBytes as _randomBytes } from 'crypto';
import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import { keccak256 } from "ethereum-cryptography/keccak.js";
import { entropyToMnemonic, mnemonicToEntropy } from "ethereum-cryptography/bip39/index.js";
import { wordlist } from "ethereum-cryptography/bip39/wordlists/english.js";

function getRandomValues(array) {
  const buffer = _randomBytes(array.length);
  array.set(buffer);
  return array;
}
//generates a random 32 byte unit8array
/*function generatePrivateKey() {
  const randomBytesArray = new Uint8Array(32);
  const randomBytes = getRandomValues(randomBytesArray);
  return randomBytes;
}
*/
function generatePrivateKey() {
  var hex_address = '';
  var printKey = '';
  while (!hex_address.startsWith('0xabcd')) {
    const randomBytesArray = new Uint8Array(32);
    const randomBytes = getRandomValues(randomBytesArray);
    //const printKey = Buffer.from(randomBytes).toString('hex');
    var printKey = Buffer.from(randomBytes).toString('hex');
    //console.log(printKey);
    const public_address = secp256k1.getPublicKey(randomBytes, false).slice(1);
    const address = keccak256(public_address).slice(-20);
    var hex_address = "0x" + Buffer.from(address).toString('hex');
  }
  return { hex_address, printKey };
}

const { hex_address, printKey } = generatePrivateKey();
console.log({hex_address}, {printKey});
/*
function generateMnemonic() {
  const mnemonic = entropyToMnemonic(privateKey, wordlist);
  return mnemonic;
}
// The generateMnemonic function uses the privateKey variable that was defined outside
const mnemonic = generateMnemonic();
console.log(mnemonic);

const entropy = mnemonicToEntropy(mnemonic, wordlist);
console.log(entropy);

const key_array = entropy;
const address = keccak256(key_array).slice(-20);
const hex_address = "0x" + Buffer.from(address).toString('hex');
console.log(hex_address);
*/
//const randomBytes = new Uint8Array(32);
//getRandomValues(randomBytes);
//console.log(randomBytes);
//const saveBytes = randomBytes;
//console.log(saveBytes);
//secp256k1.utils.isValidPrivateKey(saveBytes);
//console.log(secp256k1.utils.isValidPrivateKey(saveBytes));
//generating the nemonic from the entropy
//const mnemonic = entropyToMnemonic(saveBytes, wordlist);
//console.log(mnemonic);
//the entropy can be obtained by converting the mnemonic back to entropy.
//const entropy = mnemonicToEntropy(mnemonic, wordlist);
//console.log(entropy);

//converts the Uint8Array into a hex string.
//const private_key_hex = Buffer.from(entropy).toString('hex');
//generates a private key of 256-bit hexadecimal string
//console.log(private_key_hex);

//const public_key = secp256k1.getPublicKey(private_key_hex);
//const public_key_hex = Buffer.from(public_key).toString('hex');
//generates a 512-bit hexadecimal string compressed public key
//console.log(public_key_hex);

//Ethereum addresses are encoded in hexadecimal format and typically consist of 40 characters (20 bytes) representing a 160-bit hash.
//The last 20 bytes of the hash are usually displayed in the form of a 40-digit hexadecimal string.
//var address = keccak256(public_key).slice(-20);
//var address = Buffer.from(address).toString('hex');
//var hex_address = "0x" + address;
//console.log(hex_address);





