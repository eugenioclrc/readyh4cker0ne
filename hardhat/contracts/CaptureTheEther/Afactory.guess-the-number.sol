pragma solidity 0.8;

import "../ICTFFactory.sol";
import "./Achallenge.guess-the-number.sol";

contract ChallengeFactoyGuessTheNumber is ICTFFactory {

    function create(address) external payable returns (ICTF){
        return new ChallengeGuessTheNumber{value: msg.value}();
    }

    function getPrice() external pure returns (uint256) {
        return 0.01 ether;
    }

}