// scripts/deploy.js
// https://www.npmjs.com/package/@nomicfoundation/hardhat-ethers
import { network } from "hardhat";

const { ethers } = await network.connect();

async function main () {
  // We get the contract to deploy
  // 我们得到了要部署的合约 
  const Box = await ethers.getContractFactory('Box');
  console.log('Deploying Box...');
  // 部署 Box 中...
  const box = await Box.deploy();
  await box.waitForDeployment();
  console.log('Box deployed to:', await box.getAddress());
  // Box 部署到：
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });