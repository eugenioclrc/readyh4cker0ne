/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICTFFactory, ICTFFactoryInterface } from "../ICTFFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "contract ICTF",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ICTFFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ICTFFactoryInterface {
    return new utils.Interface(_abi) as ICTFFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICTFFactory {
    return new Contract(address, _abi, signerOrProvider) as ICTFFactory;
  }
}
