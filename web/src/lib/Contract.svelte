<script>
  // import { onMount } from "svelte";
  import { HighlightAuto } from "svelte-highlight";
//   import atomOneDark from "svelte-highlight/styles/atom-one-dark";
	
  // import hljsDefineSolidity from 'highlightjs-solidity';

  


    const code = `pragma solidity 0.8;

contract Player {
	mapping(address => uint) public playerLockUntil;
	mapping(address => bytes32) public playerName;

	event CreatePlayer(address indexed player, bytes32 name);
	event UpdateName(address indexed player, bytes32 name);
	event UpdateLock(address player);


	function createPlayer(bytes32 _name) public {
		playerName[msg.sender] = _name;
		if(playerLockUntil[msg.sender] == 0) {
			playerLockUntil[msg.sender] = block.timestamp + 5 * 365 days;
			emit CreatePlayer(msg.sender, _name);
		} else {
			emit UpdateName(msg.sender, _name);
		}
	}

  function updateLock(uint _lockUntil) public {
		// we use unchecked for gas optimization
		unchecked {
			playerLockUntil[msg.sender] += _lockUntil;
		}
		emit UpdateLock(msg.sender);
	}

	function canPlay(address _player) public view returns (bool) {
		return playerLockUntil[_player] > 0 &&
			playerLockUntil[_player] < block.timestamp
			&& playerName[_player] != 0x0000000000000000000000000000000000000000000000000000000000000000;
	}
}`;

</script>

<svelte:head>
  <style>
    .hljs {
      background: transparent;
    }
  </style>
</svelte:head>
  <HighlightAuto {code} />
  