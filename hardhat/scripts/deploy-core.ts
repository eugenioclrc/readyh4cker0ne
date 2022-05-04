import { ethers, network } from "hardhat";


async function main() {
  const Player = await ethers.getContractFactory("Player");
  const player = await Player.deploy();

  await player.deployed();

  console.log("Player deployed to:", player.address);

  const CTFs = await ethers.getContractFactory("CTFs");
  const ctfs = await CTFs.deploy(player.address);

  await ctfs.deployed();
  console.log("Main CTFs deployed to:", ctfs.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
