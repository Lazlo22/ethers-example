# Ethers.js by Example
Learn how to use ethers.js from these examples

## Technology Stack & Tools

- Javascript (Writing scripts)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Node.js](https://nodejs.org/en/) (To run our scripts and install ethers.js)
- [Infura](https://infura.io/) (Node provider)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ npm install
```

### 3. Create .env file in the root of the project and add your INFURA_API_KEY

## Ethers.js scripts

### account.js - Reads balance of ether of wallet address
```
$ npm run balance
```

### read_smart_contract.js - Reads the balance of Dai wallet address from the Dai contract
```
$ npm run read-contract
```

### send_signed_transaction.js - Transfers 0.025 ether from account1 to account2
- Input your senderAccountAddress public key
- Input your receiverAccountAddress public key
- Input your senderPrivateKey private key
```
$ npm run send-transaction
```

### contract_event_stream.js - Queries a block for transfer events
```
$ npm run contract-events
```

### blocks.js - Get transactions from block
```
$ npm run blocks
```