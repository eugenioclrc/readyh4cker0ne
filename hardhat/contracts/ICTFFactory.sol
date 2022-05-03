pragma solidity 0.8;

import "./ICTF.sol";

interface ICTFFactory {
  function create(address) external payable returns(ICTF);
  function getPrice() external view returns (uint256);
}