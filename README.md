# Ethereum-Cryptography
This project uses secp256k1, keccak256 hashing, and BIP39 for generating vanity addresses, implementing secure cryptographic operations and creating mnemonic phrases.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
You will need to have the following installed:
1. npm 
2. node.js
3. ethereum-cryptography

## Installing
a) Create a new project in this directory 
```bash npm init -y```

b) Install ethereum-cryptography
```bash npm install ethereum-cryptography```

c) Edit the package.json file to include the following:
```json
"main": "ether.js"
"type": "module",
```

## Running the code
Run the script using the following command:
```bash node ether.js```

## The output
```json
"hex_address: '0xabcd5ddad1389a502cbf75fe01b1c6ecaac2a2a4", 
"printKey: 'private key in hex here"
```

## Verify the address by using etherscan
Go to etherscan.io and paste the address in the search bar to verify the address.

## Import private key into an ethereum wallet
You can import the private key into an ethereum wallet to access the funds.

## Extras
You can also use the commented code to generate memonic phrases and use them to generate private keys and addresses.


