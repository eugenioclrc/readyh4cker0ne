import { ethers } from "hardhat";

async function main() {
  const Player = await ethers.getContractFactory("Player");
  const player = await Player.deploy();

  await player.deployed();

  console.log("Player deployed to:", player.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
