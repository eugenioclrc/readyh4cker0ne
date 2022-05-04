/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ChallengeGuessTheNumber,
  ChallengeGuessTheNumberInterface,
} from "../../../CaptureTheEther/Achallenge.guess-the-number.sol/ChallengeGuessTheNumber";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "n",
        type: "uint8",
      },
    ],
    name: "guess",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "isComplete",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052602a6000806101000a81548160ff021916908360ff160217905550662386f26fc100003414610068576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161005f906100ca565b60405180910390fd5b6100ea565b600082825260208201905092915050565b7f596f75206d7573742070617920302e303120657468657220746f20706c617900600082015250565b60006100b4601f8361006d565b91506100bf8261007e565b602082019050919050565b600060208201905081810360008301526100e3816100a7565b9050919050565b610282806100f96000396000f3fe6080604052600436106100295760003560e01c80634ba4c16b1461002e578063b2fa1c9e1461004a575b600080fd5b6100486004803603810190610043919061016c565b610075565b005b34801561005657600080fd5b5061005f610124565b60405161006c91906101b4565b60405180910390f35b662386f26fc1000034146100be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100b59061022c565b60405180910390fd5b60008054906101000a900460ff1660ff168160ff161415610121573373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561011f573d6000803e3d6000fd5b505b50565b6000804714905090565b600080fd5b600060ff82169050919050565b61014981610133565b811461015457600080fd5b50565b60008135905061016681610140565b92915050565b6000602082840312156101825761018161012e565b5b600061019084828501610157565b91505092915050565b60008115159050919050565b6101ae81610199565b82525050565b60006020820190506101c960008301846101a5565b92915050565b600082825260208201905092915050565b7f596f75206d7573742070617920302e303120657468657220746f20706c617900600082015250565b6000610216601f836101cf565b9150610221826101e0565b602082019050919050565b6000602082019050818103600083015261024581610209565b905091905056fea26469706673582212203894c64c0ccd0a4ea87ccc6e51954b85678129d70953f12b188e5d86f7ed6ddb64736f6c634300080c0033";

type ChallengeGuessTheNumberConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChallengeGuessTheNumberConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChallengeGuessTheNumber__factory extends ContractFactory {
  constructor(...args: ChallengeGuessTheNumberConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ChallengeGuessTheNumber> {
    return super.deploy(overrides || {}) as Promise<ChallengeGuessTheNumber>;
  }
  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ChallengeGuessTheNumber {
    return super.attach(address) as ChallengeGuessTheNumber;
  }
  override connect(signer: Signer): ChallengeGuessTheNumber__factory {
    return super.connect(signer) as ChallengeGuessTheNumber__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChallengeGuessTheNumberInterface {
    return new utils.Interface(_abi) as ChallengeGuessTheNumberInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChallengeGuessTheNumber {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChallengeGuessTheNumber;
  }
}
