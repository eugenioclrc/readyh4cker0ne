// player 0x5FbDB2315678afecb367f032d93F642f64180aa3

import { get } from "svelte/store";
import { /*networkDetails,*/ signer } from "$lib/store.js";

import { Player__factory, CTFs__factory } from '../typechain-types/factories';

import type { Provider } from "@ethersproject/providers";


const contractAddress = {
  Player: '0x5382Bec2A5f3AbB9ef9D1759161Dc795575819a5',
  Ctfs: '0xf81BBa04072bb353be46CB8100D96Eb6Fb98FCf1'
};

const contractType = {
  Player: Player__factory,
  CTF: CTFs__factory,
};

const contracts = {};

export default async function getContract(name: string, _signer: Signer | Provider) {
  if(!_signer) {
    _signer = await get(signer);
  }
  if (contracts[name]) {
    return contracts[name].connect(_signer);
  }
  if(!contractAddress[name]) {
    throw new Error(`Contract ${name} not found`);
  }
  contracts[name] = await contractType[name].connect(contractAddress[name], _signer);
  return contracts[name];
}