import { expect } from "chai";
import { assert } from "console";
import { ethers } from "hardhat";

describe("Player", function () {
  it("should deploy Player contract", async function () {
    const [deployer] = await ethers.getSigners();

    const Player = await ethers.getContractFactory("Player", deployer);
    const player = await Player.deploy();
    await player.deployed();

    const CTFs = await ethers.getContractFactory("CTFs", deployer);
    const ctfs = await CTFs.deploy(player.address);
    await ctfs.deployed();

    describe("#createPlayer", async () => {
      it("Should create new user", async () => {
        const playerName = ethers.utils.formatBytes32String("Player1");

        const tx = await player.createPlayer(playerName);
        await tx.wait();

        const currentLock = await player.playerLockUntil(deployer.address);
        await player.updateLock(
          ethers.constants.MaxUint256.sub(currentLock.sub(2))
        );

        expect(await player.canPlay(deployer.address)).to.equal(true);
      });

      it("#createChallenge 1", async () => {
        const ChallengeFactoyGuessTheNumber = await ethers.getContractFactory(
          "ChallengeFactoyGuessTheNumber",
          deployer
        );
        const challengeFactoyGuessTheNumber =
          await ChallengeFactoyGuessTheNumber.deploy();
        await challengeFactoyGuessTheNumber.deployed();

        await ctfs.createInstance(challengeFactoyGuessTheNumber.address, {
          value: ethers.utils.parseEther("1"),
        });

        const challengeAddress = await ctfs.getInstance(
          deployer.address,
          challengeFactoyGuessTheNumber.address
        );

        const Challenge = await ethers.getContractFactory(
          "ChallengeGuessTheNumber"
        );
        const challenge = await Challenge.attach(challengeAddress);

        expect(await challenge.isComplete()).to.equal(false);

        await expect(ctfs.complete(challenge.address)).to.be.reverted;

        expect(
          await ctfs.challengeComplete(
            deployer.address,
            challengeFactoyGuessTheNumber.address
          )
        ).to.equal(false);

        const tx = await challenge.guess(42, {
          value: ethers.utils.parseEther("1"),
        });
        await tx.wait(1);

        expect(await challenge.isComplete()).to.equal(true);
        await ctfs.complete(challengeFactoyGuessTheNumber.address);
        expect(
          await ctfs.challengeComplete(
            deployer.address,
            challengeFactoyGuessTheNumber.address
          )
        ).to.equal(true);
        // await challenge.
      });
    });
  });
});
