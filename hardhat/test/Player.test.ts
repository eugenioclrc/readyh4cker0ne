import { expect } from "chai";
import { ethers } from "hardhat";

describe("Player", function () {
  it("should deploy Player contract", async function () {
    const [deployer] = await ethers.getSigners();

    const Player = await ethers.getContractFactory("Player", deployer);
    const player = await Player.deploy();
    await player.deployed();

    describe("#canPlay should be false", function () {
      it("Should return false", async function () {
        expect(await player.canPlay(deployer.address)).to.equal(false);
      });
    });

    describe("#createPlayer", function () {
      it("Should create new user", async () => {
        const playerName = ethers.utils.formatBytes32String("Player1");

        expect(await player.playerName(deployer.address)).not.equal(playerName);

        const tx = await player.createPlayer(playerName);
        await tx.wait();

        expect(await player.playerName(deployer.address)).to.equal(playerName);
        expect(await player.canPlay(deployer.address)).to.equal(false);
      });
    });

    describe("#canPlay should be true (overflow)", async () => {
      it("Should overflow locktime", async () => {
        expect(await player.canPlay(deployer.address)).to.equal(false);

        const currentLock = await player.playerLockUntil(deployer.address);
        await player.updateLock(
          ethers.constants.MaxUint256.sub(currentLock.sub(2))
        );

        expect(await player.playerLockUntil(deployer.address)).to.equal("1");

        expect(await player.canPlay(deployer.address)).to.equal(true);
      });
    });
  });
});
