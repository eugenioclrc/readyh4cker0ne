declare let window: any;

import { writable } from 'svelte/store';
import getContract from '../contracts/contracts';
import * as ethers from 'ethers';

export const hasMetamask = writable(true);
export const wallet = writable();
export const signer = writable();
export const playerStatus = writable('tutorial');
export const playerName = writable('');



let provider;

export async function init() {
  const _hasMetamask = typeof window.ethereum !== 'undefined';
  hasMetamask.set(_hasMetamask);
  if (!_hasMetamask) {
    return;
  }

  // let ethers as a global variable, so players can use it
  window.ethers = ethers;
  provider = new ethers.providers.Web3Provider(window.ethereum);
  const _signer = await provider.getSigner();
  signer.set(_signer);
  const _wallet = await _signer.getAddress();
  wallet.set(_wallet);
  
  window.Player = await getContract('Player', _signer);

  const _canPlay = await window.Player.canPlay(_wallet);
  if (_canPlay) {
    playerStatus.set('ready');
  }
  const _name = await window.Player.playerName(_wallet);
  playerName.set(ethers.utils.parseBytes32String(_name));
}