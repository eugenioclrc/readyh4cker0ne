pragma solidity 0.8;

import "../ICTF.sol";

contract ChallengeGuessTheNumber is ICTF {
    uint8 answer = 42;

    constructor() payable {
        require(msg.value == 0.01 ether, "You must pay 0.01 ether to play");
    }

    function isComplete() public view returns (bool) {
        return address(this).balance == 0;
    }

    function guess(uint8 n) public payable {
        require(msg.value == 0.01 ether, "You must pay 0.01 ether to play");

        if (n == answer) {
            payable(msg.sender).transfer(address(this).balance);
        }
    }
}