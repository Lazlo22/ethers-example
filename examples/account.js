const {rpcURL} = require('../config/index');
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(rpcURL);
const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e';

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
};

main();

