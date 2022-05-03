pragma solidity 0.8;

interface IPlayer {
	function canPlay(address) external view returns (bool);
}
