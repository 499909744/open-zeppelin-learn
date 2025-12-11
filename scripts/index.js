// scripts/index.js
import { network } from "hardhat";
const { ethers } = await network.connect();


async function main1 () {
  // Our code will go here
  // 我们的代码将放在这里
  // Retrieve accounts from the local node
  // 从本地节点检索帐户
  const accounts = (await ethers.getSigners()).map(signer => signer.address);
  console.log(accounts);
}

async function main2 () {
  // Set up an ethers contract, representing our deployed Box instance
  // 设置一个 ethers 合约，表示我们部署的 Box 实例
  const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const Box = await ethers.getContractFactory('Box');
  const box = Box.attach(address);

  // Call the retrieve() function of the deployed Box contract
  // 调用已部署的 Box 合约的 retrieve() 函数
  const value = await box.retrieve();
  console.log('Box value is', value.toString());
  // Box 值为
}

async function main3 () {
  // Set up an ethers contract, representing our deployed Box instance
  // 设置一个 ethers 合约，表示我们部署的 Box 实例
  const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const Box = await ethers.getContractFactory('Box');
  const box = Box.attach(address);
  // Send a transaction to store() a new value in the Box
  // 发送一个交易以在 Box 中 store() 一个新值
  await box.store(23);

  // Call the retrieve() function of the deployed Box contract
  // 调用已部署的 Box 合约的 retrieve() 函数
  const value = await box.retrieve();
  console.log('Box value is', value.toString());
  // Box 值为
}

main3()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });