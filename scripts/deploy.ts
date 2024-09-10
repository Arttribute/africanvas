const hre = require("hardhat");
require("dotenv").config();

async function main() {
  // Deploy the DrawDashNFT contract
  await africanvasEscrowContract();
}

async function africanvasEscrowContract() {
  const africanvasEscrow = await hre.ethers.deployContract("AfricanvasEscrow");
  await africanvasEscrow.waitForDeployment();
  console.log(`AfricanvasEscrow contract deployed to ${africanvasEscrow.target}`);
  return africanvasEscrow.target;
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});