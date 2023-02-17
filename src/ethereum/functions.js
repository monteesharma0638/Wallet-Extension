import { ethers } from "ethers";

async function createNewWallet(){
    const wallet = await ethers.Wallet.createRandom();
    return wallet;
}