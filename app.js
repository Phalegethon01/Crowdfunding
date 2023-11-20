import { loadContract } from "./src/load-contract";


// For Web3.js
const Web3 = require('web3');
const web3 = new Web3('http://localhost:7545');




// For ethers.js
const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('http://localhost:7545');


