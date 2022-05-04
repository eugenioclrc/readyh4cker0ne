/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CTFs, CTFsInterface } from "../CTFs";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_players",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    name: "CompleteInstance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    name: "CreateInstance",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "contract ICTFFactory",
        name: "",
        type: "address",
      },
    ],
    name: "challengeComplete",
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
  {
    inputs: [
      {
        internalType: "contract ICTFFactory",
        name: "_factory",
        type: "address",
      },
    ],
    name: "complete",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICTFFactory",
        name: "_factory",
        type: "address",
      },
    ],
    name: "createInstance",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_player",
        type: "address",
      },
      {
        internalType: "contract ICTFFactory",
        name: "_instance",
        type: "address",
      },
    ],
    name: "getInstance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "contract ICTFFactory",
        name: "",
        type: "address",
      },
    ],
    name: "instances",
    outputs: [
      {
        internalType: "contract ICTF",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICTFFactory",
        name: "",
        type: "address",
      },
    ],
    name: "instancesFinished",
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
  {
    inputs: [
      {
        internalType: "contract ICTFFactory",
        name: "",
        type: "address",
      },
    ],
    name: "instancesInit",
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
  {
    inputs: [],
    name: "players",
    outputs: [
      {
        internalType: "contract IPlayer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620012c8380380620012c88339818101604052810190620000379190620000dc565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506200010e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000a48262000077565b9050919050565b620000b68162000097565b8114620000c257600080fd5b50565b600081519050620000d681620000ab565b92915050565b600060208284031215620000f557620000f462000072565b5b60006200010584828501620000c5565b91505092915050565b60805161119062000138600039600081816102950152818161069d0152610be901526111906000f3fe60806040526004361061007b5760003560e01c806393af02921161004e57806393af0292146101535780639e5c9b1e1461017c578063cd37c85c146101b9578063dc0b3564146101f65761007b565b80631aac8010146100805780633d7672b2146100bd57806365d3e44b146100fa5780637726f77614610137575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a29190610c80565b610221565b6040516100b49190610cc6565b60405180910390f35b3480156100c957600080fd5b506100e460048036038101906100df9190610d0d565b610239565b6040516100f19190610dac565b60405180910390f35b34801561010657600080fd5b50610121600480360381019061011c9190610c80565b61027b565b60405161012e9190610cc6565b60405180910390f35b610151600480360381019061014c9190610c80565b610293565b005b34801561015f57600080fd5b5061017a60048036038101906101759190610c80565b61069b565b005b34801561018857600080fd5b506101a3600480360381019061019e9190610d0d565b610b12565b6040516101b09190610dd6565b60405180910390f35b3480156101c557600080fd5b506101e060048036038101906101db9190610d0d565b610bb8565b6040516101ed9190610e0c565b60405180910390f35b34801561020257600080fd5b5061020b610be7565b6040516102189190610e48565b60405180910390f35b60026020528060005260406000206000915090505481565b60006020528160005260406000206020528060005260406000206000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630823d5f3336040518263ffffffff1660e01b81526004016102ec9190610dd6565b602060405180830381865afa158015610309573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032d9190610e8f565b61036c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036390610f19565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff166398d5fdca6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103dd9190610f65565b9050803414610421576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041890610fde565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16639ed9331834336040518363ffffffff1660e01b815260040161045b9190610dd6565b60206040518083038185885af1158015610479573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061049e919061103c565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105a79190611098565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f0b2fa63bd009de2f2fdc6ec8bc159ba1d7b6be886695a46f91dc16a9b73167736000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161068f9190610dd6565b60405180910390a25050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630823d5f3336040518263ffffffff1660e01b81526004016106f49190610dd6565b602060405180830381865afa158015610711573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107359190610e8f565b610774576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076b90610f19565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663b2fa1c9e6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561085f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108839190610e8f565b6108c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b99061113a565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663b2fa1c9e6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561090d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109319190610e8f565b15610b0e576000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a249190611098565b9250508190555060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167f778694edc42097e4bd02b3fb42c83d15343f2737176ef7c9560a4fae7066286c82604051610b059190610dd6565b60405180910390a25b5050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905092915050565b60016020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c3b82610c10565b9050919050565b6000610c4d82610c30565b9050919050565b610c5d81610c42565b8114610c6857600080fd5b50565b600081359050610c7a81610c54565b92915050565b600060208284031215610c9657610c95610c0b565b5b6000610ca484828501610c6b565b91505092915050565b6000819050919050565b610cc081610cad565b82525050565b6000602082019050610cdb6000830184610cb7565b92915050565b610cea81610c30565b8114610cf557600080fd5b50565b600081359050610d0781610ce1565b92915050565b60008060408385031215610d2457610d23610c0b565b5b6000610d3285828601610cf8565b9250506020610d4385828601610c6b565b9150509250929050565b6000819050919050565b6000610d72610d6d610d6884610c10565b610d4d565b610c10565b9050919050565b6000610d8482610d57565b9050919050565b6000610d9682610d79565b9050919050565b610da681610d8b565b82525050565b6000602082019050610dc16000830184610d9d565b92915050565b610dd081610c30565b82525050565b6000602082019050610deb6000830184610dc7565b92915050565b60008115159050919050565b610e0681610df1565b82525050565b6000602082019050610e216000830184610dfd565b92915050565b6000610e3282610d79565b9050919050565b610e4281610e27565b82525050565b6000602082019050610e5d6000830184610e39565b92915050565b610e6c81610df1565b8114610e7757600080fd5b50565b600081519050610e8981610e63565b92915050565b600060208284031215610ea557610ea4610c0b565b5b6000610eb384828501610e7a565b91505092915050565b600082825260208201905092915050565b7f506c61796572206973206e6f7420616c6c6f77656420746f20706c6179000000600082015250565b6000610f03601d83610ebc565b9150610f0e82610ecd565b602082019050919050565b60006020820190508181036000830152610f3281610ef6565b9050919050565b610f4281610cad565b8114610f4d57600080fd5b50565b600081519050610f5f81610f39565b92915050565b600060208284031215610f7b57610f7a610c0b565b5b6000610f8984828501610f50565b91505092915050565b7f4e6f7420656e6f75676820657468657200000000000000000000000000000000600082015250565b6000610fc8601083610ebc565b9150610fd382610f92565b602082019050919050565b60006020820190508181036000830152610ff781610fbb565b9050919050565b600061100982610c30565b9050919050565b61101981610ffe565b811461102457600080fd5b50565b60008151905061103681611010565b92915050565b60006020828403121561105257611051610c0b565b5b600061106084828501611027565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110a382610cad565b91506110ae83610cad565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110e3576110e2611069565b5b828201905092915050565b7f4368616c6c656e6765206973206e6f7420636f6d706c65746500000000000000600082015250565b6000611124601983610ebc565b915061112f826110ee565b602082019050919050565b6000602082019050818103600083015261115381611117565b905091905056fea26469706673582212200285e4e2cd4eaf69e2b81a0f3bcf988c19cab922d8cf9b2c9487bd0e3821f77764736f6c634300080c0033";

type CTFsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CTFsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CTFs__factory extends ContractFactory {
  constructor(...args: CTFsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override attach(address: string): CTFs {
    return super.attach(address) as CTFs;
  }
  override connect(signer: Signer): CTFs__factory {
    return super.connect(signer) as CTFs__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CTFsInterface {
    return new utils.Interface(_abi) as CTFsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CTFs {
    return new Contract(address, _abi, signerOrProvider) as CTFs;
  }
}
