// SPDX-License-Identifier: MIT
pragma solidity 0.8;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

// WIP!

contract CTFBadges is ERC1155, Ownable {
    mapping(address => mapping(uint256 => bool)) internal claimed;

    mapping(address => bool) minters;

    string public constant symbol = "CTF";
    string public constant name = "H4CKER0NE CTFs Badges";

    string public contractURI;
    constructor() ERC1155("") {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function setMinter(address _minter, bool _value) public onlyOwner {
        minters[_minter] = _value;
    }

    function contractURI(string memory newcontracturi) public onlyOwner {
        contractURI = newcontracturi;
    }

    function mint(address account, uint256 id, bytes32 nonce, bytes calldata signature) external {
        require(!claimed[account][id], "Token already claimed");

        bytes32 signatureMsg = keccak256(
          abi.encodePacked(address(this), account, id, nonce)
        );

        address _minter = signatureMsg.toEthSignedMessageHash().recover(signature);
        require(minters[_minter], "Invalid minter signature");

        _mint(account, id, 1, "");
    }

}
