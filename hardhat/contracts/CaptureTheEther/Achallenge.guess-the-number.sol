pragma solidity 0.8;

import "../ICTF.sol";

contract ChallengeGuessTheNumber is ICTF {
    uint8 answer = 42;

    constructor() payable {
        require(msg.value == 1 ether, "You must pay 1 ether to play");
    }

    function isComplete() public view returns (bool) {
        return address(this).balance == 0;
    }

    function guess(uint8 n) public payable {
        require(msg.value == 1 ether, "You must pay 1 ether to play");

        if (n == answer) {
            payable(msg.sender).transfer(2 ether);
        }
    }
}