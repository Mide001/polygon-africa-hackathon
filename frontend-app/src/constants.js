export const WEB3_STORAGE_API = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk4OTExNTUwNzFGMTRCQjQ0NTQzMjc1MzdCNTkwMTAwZjkyNTNhRTgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njk0OTgyMDMwODcsIm5hbWUiOiJUb2tlbiBBUEkifQ.Y3ZYCqcOEGgZbMv2m1nk1KDR8BfuCIkwqckkiPYg5-Q";

export const NFT_STORAGE_API = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgxODYyMTY2OWY1NTEwOTAzMWZkNTM5NEYwNDg0NGNkZDZmMjkyRDkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2OTQ5ODc0MzU3MywibmFtZSI6Ik5GVC1BUEkifQ.JGA74LbM7x66eDZRsLCK2CffLb8p39yE91tUB4FK-Oc";

export const NFT_CONTRACT_ADDRESS = "0xf64bB4c7eaaB6dD61b58Ce68eF50495eDBC36D18";

export const NFT_FRACTION_ADDRESS = "0xb6EC3aCfa7027Df9831661Ce392Fadd31615A75e";

export const NFT_CREATE_ADDRESS = "0xA0Cf7646a1556F4C3821390263a1aCf8EdEd7E24";

export const TOKENNFT_CONTRACT_ADDRESS = "0xf64bB4c7eaaB6dD61b58Ce68eF50495eDBC36D18";

export const NFT_CREATE_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_royaltyRecipient",
        "type": "address"
      },
      {
        "internalType": "uint128",
        "name": "_royaltyBps",
        "type": "uint128"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ApprovalCallerNotOwnerNorApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ApprovalQueryForNonexistentToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ApprovalToCurrentOwner",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ApproveToCaller",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BalanceQueryForZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintToZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintZeroQuantity",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OwnerQueryForNonexistentToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferCallerNotOwnerNorApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferFromIncorrectOwner",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferToNonERC721ReceiverImplementer",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferToZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "URIQueryForNonexistentToken",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "prevURI",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "newURI",
        "type": "string"
      }
    ],
    "name": "ContractURIUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newRoyaltyRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newRoyaltyBps",
        "type": "uint256"
      }
    ],
    "name": "DefaultRoyalty",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "prevOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnerUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "royaltyRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "royaltyBps",
        "type": "uint256"
      }
    ],
    "name": "RoyaltyForToken",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_baseURI",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "batchMintTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBaseURICount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getBatchIdAtIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDefaultRoyaltyInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "getRoyaltyInfoForToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "isApprovedOrOwner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isApprovedOrOwnerOf",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_tokenURI",
        "type": "string"
      }
    ],
    "name": "mintTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes[]",
        "name": "data",
        "type": "bytes[]"
      }
    ],
    "name": "multicall",
    "outputs": [
      {
        "internalType": "bytes[]",
        "name": "results",
        "type": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextTokenIdToMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "salePrice",
        "type": "uint256"
      }
    ],
    "name": "royaltyInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "royaltyAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_uri",
        "type": "string"
      }
    ],
    "name": "setContractURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_royaltyRecipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_royaltyBps",
        "type": "uint256"
      }
    ],
    "name": "setDefaultRoyaltyInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "setOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_bps",
        "type": "uint256"
      }
    ],
    "name": "setRoyaltyInfoForToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

export const NFT_CONTRACT_ABI = [
    {
  "_format": "hh-sol-artifact-1",
  "contractName": "Creatives",
  "sourceName": "contracts/NFTCollection.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_royaltyRecipient",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "_royaltyBps",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ApprovalCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalToCurrentOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApproveToCaller",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BalanceQueryForZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintZeroQuantity",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFromIncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToNonERC721ReceiverImplementer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "URIQueryForNonexistentToken",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "prevURI",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "newURI",
          "type": "string"
        }
      ],
      "name": "ContractURIUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newRoyaltyRecipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newRoyaltyBps",
          "type": "uint256"
        }
      ],
      "name": "DefaultRoyalty",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "prevOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "royaltyRecipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "royaltyBps",
          "type": "uint256"
        }
      ],
      "name": "RoyaltyForToken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_baseURI",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "batchMintTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBaseURICount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getBatchIdAtIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDefaultRoyaltyInfo",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getRoyaltyInfoForToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "",
          "type": "uint16"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "isApprovedOrOwner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isApprovedOrOwnerOf",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_tokenURI",
          "type": "string"
        }
      ],
      "name": "mintTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes[]",
          "name": "data",
          "type": "bytes[]"
        }
      ],
      "name": "multicall",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "results",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextTokenIdToMint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "salePrice",
          "type": "uint256"
        }
      ],
      "name": "royaltyInfo",
      "outputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "royaltyAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "setContractURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_royaltyRecipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_royaltyBps",
          "type": "uint256"
        }
      ],
      "name": "setDefaultRoyaltyInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_bps",
          "type": "uint256"
        }
      ],
      "name": "setRoyaltyInfoForToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162002a8338038062002a8383398101604081905262000034916200030d565b8383838383838160029080519060200190620000529291906200019a565b508051620000689060039060208401906200019a565b505060008055506200007a336200009d565b6200008f826001600160801b038316620000ef565b5050505050505050620003f6565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b612710811115620001385760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b604482015260640160405180910390fd5b600a80546001600160a01b0384166001600160b01b03199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b828054620001a890620003b9565b90600052602060002090601f016020900481019282620001cc576000855562000217565b82601f10620001e757805160ff191683800117855562000217565b8280016001018555821562000217579182015b8281111562000217578251825591602001919060010190620001fa565b506200022592915062000229565b5090565b5b808211156200022557600081556001016200022a565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200026857600080fd5b81516001600160401b038082111562000285576200028562000240565b604051601f8301601f19908116603f01168101908282118183101715620002b057620002b062000240565b81604052838152602092508683858801011115620002cd57600080fd5b600091505b83821015620002f15785820183015181830184015290820190620002d2565b83821115620003035760008385830101525b9695505050505050565b600080600080608085870312156200032457600080fd5b84516001600160401b03808211156200033c57600080fd5b6200034a8883890162000256565b955060208701519150808211156200036157600080fd5b50620003708782880162000256565b604087015190945090506001600160a01b03811681146200039057600080fd5b60608601519092506001600160801b0381168114620003ae57600080fd5b939692955090935050565b600181811c90821680620003ce57607f821691505b60208210811415620003f057634e487b7160e01b600052602260045260246000fd5b50919050565b61267d80620004066000396000f3fe6080604052600436106101c35760003560e01c8063600dd5ea116100f65780639bcf7a151161008f578063b88d4fde11610061578063b88d4fde14610594578063c87b56dd146105b4578063e8a3d485146105d4578063e985e9c5146105e957005b80639bcf7a15146104fc578063a22cb4651461051c578063ac9650d81461053c578063b24f2d391461056957005b8063754a81d9116100c8578063754a81d9146104895780638da5cb5b146104a9578063938e3d7b146104c757806395d89b41146104e757005b8063600dd5ea146104145780636352211e1461043457806363b45e2d1461045457806370a082311461046957005b806323b872dd1161016857806342842e0e1161013a57806342842e0e1461037257806342966c6814610392578063430c2081146103b25780634cc157df146103d257005b806323b872dd146102de5780632419f51b146102fe5780632a55205a1461031e5780633b1475a71461035d57005b8063081812fc116101a1578063081812fc14610243578063095ea7b31461027b57806313af40351461029b57806318160ddd146102bb57005b806275a317146101cc57806301ffc9a7146101ec57806306fdde031461022157005b366101ca57005b005b3480156101d857600080fd5b506101ca6101e7366004611f97565b610632565b3480156101f857600080fd5b5061020c610207366004611ffa565b610663565b60405190151581526020015b60405180910390f35b34801561022d57600080fd5b506102366106d0565b604051610218919061206f565b34801561024f57600080fd5b5061026361025e366004612082565b610762565b6040516001600160a01b039091168152602001610218565b34801561028757600080fd5b506101ca61029636600461209b565b6107a6565b3480156102a757600080fd5b506101ca6102b63660046120c5565b61082d565b3480156102c757600080fd5b50600154600054035b604051908152602001610218565b3480156102ea57600080fd5b506101ca6102f93660046120e0565b610866565b34801561030a57600080fd5b506102d0610319366004612082565b610871565b34801561032a57600080fd5b5061033e61033936600461211c565b6108df565b604080516001600160a01b039093168352602083019190915201610218565b34801561036957600080fd5b506000546102d0565b34801561037e57600080fd5b506101ca61038d3660046120e0565b61091c565b34801561039e57600080fd5b506101ca6103ad366004612082565b610937565b3480156103be57600080fd5b5061020c6103cd36600461209b565b610942565b3480156103de57600080fd5b506103f26103ed366004612082565b6109c1565b604080516001600160a01b03909316835261ffff909116602083015201610218565b34801561042057600080fd5b506101ca61042f36600461209b565b610a2c565b34801561044057600080fd5b5061026361044f366004612082565b610a5a565b34801561046057600080fd5b50600c546102d0565b34801561047557600080fd5b506102d06104843660046120c5565b610a6c565b34801561049557600080fd5b506101ca6104a436600461213e565b610aba565b3480156104b557600080fd5b506009546001600160a01b0316610263565b3480156104d357600080fd5b506101ca6104e23660046121bb565b610b34565b3480156104f357600080fd5b50610236610b61565b34801561050857600080fd5b506101ca6105173660046121ef565b610b70565b34801561052857600080fd5b506101ca610537366004612214565b610b9f565b34801561054857600080fd5b5061055c610557366004612250565b610c35565b60405161021891906122c4565b34801561057557600080fd5b50600a546001600160a01b03811690600160a01b900461ffff166103f2565b3480156105a057600080fd5b506101ca6105af366004612326565b610d29565b3480156105c057600080fd5b506102366105cf366004612082565b610d6d565b3480156105e057600080fd5b50610236610e5b565b3480156105f557600080fd5b5061020c610604366004612381565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b61064461063e60005490565b82610ee9565b61065f82600160405180602001604052806000815250610f62565b5050565b60006301ffc9a760e01b6001600160e01b03198316148061069457506380ac58cd60e01b6001600160e01b03198316145b806106af5750635b5e139f60e01b6001600160e01b03198316145b806106ca57506001600160e01b0319821663152a902d60e11b145b92915050565b6060600280546106df906123b4565b80601f016020809104026020016040519081016040528092919081815260200182805461070b906123b4565b80156107585780601f1061072d57610100808354040283529160200191610758565b820191906000526020600020905b81548152906001019060200180831161073b57829003601f168201915b5050505050905090565b600061076d82611102565b61078a576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006107b182610a5a565b9050806001600160a01b0316836001600160a01b031614156107e65760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b0382161461081d576108008133610604565b61081d576040516367d9dca160e11b815260040160405180910390fd5b61082883838361112d565b505050565b610835611189565b61085a5760405162461bcd60e51b8152600401610851906123ef565b60405180910390fd5b610863816111b6565b50565b610828838383611208565b600061087c600c5490565b82106108ba5760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b6044820152606401610851565b600c82815481106108cd576108cd612417565b90600052602060002001549050919050565b6000806000806108ee866109c1565b90945084925061ffff1690506127106109078287612443565b6109119190612478565b925050509250929050565b61082883838360405180602001604052806000815250610d29565b6108638160016113e3565b60008061094e83610a5a565b9050806001600160a01b0316846001600160a01b0316148061099557506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b806109b95750836001600160a01b03166109ae84610762565b6001600160a01b0316145b949350505050565b6000818152600b60209081526040808320815180830190925280546001600160a01b031680835260019091015492820192909252829115610a085780516020820151610a22565b600a546001600160a01b03811690600160a01b900461ffff165b9250925050915091565b610a34611189565b610a505760405162461bcd60e51b8152600401610851906123ef565b61065f8282611596565b6000610a658261163c565b5192915050565b60006001600160a01b038216610a95576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b03166000908152600560205260409020546001600160401b031690565b610ac2611189565b610b0e5760405162461bcd60e51b815260206004820152601760248201527f4e6f7420617574686f72697a656420746f206d696e742e0000000000000000006044820152606401610851565b610b21610b1a60005490565b8484611756565b5050610b2e848483610f62565b50505050565b610b3c611189565b610b585760405162461bcd60e51b8152600401610851906123ef565b610863816117c3565b6060600380546106df906123b4565b610b78611189565b610b945760405162461bcd60e51b8152600401610851906123ef565b6108288383836118a5565b6001600160a01b038216331415610bc95760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6060816001600160401b03811115610c4f57610c4f611ef5565b604051908082528060200260200182016040528015610c8257816020015b6060815260200190600190039081610c6d5790505b50905060005b82811015610d2257610cf230858584818110610ca657610ca6612417565b9050602002810190610cb8919061248c565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061196e92505050565b828281518110610d0457610d04612417565b60200260200101819052508080610d1a906124d9565b915050610c88565b5092915050565b610d34848484611208565b6001600160a01b0383163b15610b2e57610d508484848461199a565b610b2e576040516368d2bf6b60e11b815260040160405180910390fd5b6000818152600e6020526040812080546060929190610d8b906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610db7906123b4565b8015610e045780601f10610dd957610100808354040283529160200191610e04565b820191906000526020600020905b815481529060010190602001808311610de757829003601f168201915b50505050509050600081511115610e1b5792915050565b6000610e2684611a91565b905080610e3285611c2d565b604051602001610e439291906124f4565b60405160208183030381529060405292505050919050565b60088054610e68906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610e94906123b4565b8015610ee15780601f10610eb657610100808354040283529160200191610ee1565b820191906000526020600020905b815481529060010190602001808311610ec457829003601f168201915b505050505081565b6000828152600e602052604090208054610f02906123b4565b159050610f435760405162461bcd60e51b815260206004820152600f60248201526e15549248185b1c9958591e481cd95d608a1b6044820152606401610851565b6000828152600e60209081526040909120825161082892840190611e40565b6000546001600160a01b038416610f8b57604051622e076360e81b815260040160405180910390fd5b82610fa95760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038416600081815260056020908152604080832080546fffffffffffffffffffffffffffffffff1981166001600160401b038083168b0181169182176801000000000000000067ffffffffffffffff1990941690921783900481168b01811690920217909155858452600490925290912080546001600160e01b0319168317600160a01b42909316929092029190911790558190818501903b156110bf575b60405182906001600160a01b03881690600090600080516020612628833981519152908290a4611088600087848060010195508761199a565b6110a5576040516368d2bf6b60e11b815260040160405180910390fd5b80821061104f5782600054146110ba57600080fd5b6110f2565b5b6040516001830192906001600160a01b03881690600090600080516020612628833981519152908290a48082106110c0575b506000908155610b2e9085838684565b60008054821080156106ca575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b600061119d6009546001600160a01b031690565b6001600160a01b0316336001600160a01b031614905090565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b60006112138261163c565b9050836001600160a01b031681600001516001600160a01b03161461124a5760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b038616148061126857506112688533610604565b8061128357503361127884610762565b6001600160a01b0316145b9050806112a357604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b0384166112ca57604051633a954ecd60e21b815260040160405180910390fd5b6112d66000848761112d565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff198082166001600160401b0392831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b429092169190910217835587018084529220805491939091166113aa5760005482146113aa57805460208601516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b031660008051602061262883398151915260405160405180910390a45050505050565b60006113ee8361163c565b80519091508215611454576000336001600160a01b038316148061141757506114178233610604565b8061143257503361142786610762565b6001600160a01b0316145b90508061145257604051632ce44b5f60e11b815260040160405180910390fd5b505b6114606000858361112d565b6001600160a01b0380821660008181526005602090815260408083208054600160801b6000196001600160401b0380841691909101811667ffffffffffffffff198416811783900482166001908101831690930277ffffffffffffffff0000000000000000ffffffffffffffff19909416179290921783558b86526004909452828520805460ff60e01b1942909316600160a01b026001600160e01b03199091169097179690961716600160e01b17855591890180845292208054919490911661155e57600054821461155e57805460208701516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038716171781555b5050604051869250600091506001600160a01b03841690600080516020612628833981519152908390a4505060018054810190555050565b6127108111156115da5760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b6044820152606401610851565b600a80546001600160a01b0384166001600160b01b03199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b60408051606081018252600080825260208201819052918101919091528160005481101561173d57600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b81046001600160401b031692820192909252600160e01b90910460ff1615159181018290529061173b5780516001600160a01b0316156116d2579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b82046001600160401b031693830193909352600160e01b900460ff1615159281019290925215611736579392505050565b6116d2565b505b604051636f96cda160e11b815260040160405180910390fd5b6000806117638486612523565b600c8054600181019091557fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7018190556000818152600d6020908152604090912085519294508493506117ba929091860190611e40565b50935093915050565b6000600880546117d2906123b4565b80601f01602080910402602001604051908101604052809291908181526020018280546117fe906123b4565b801561184b5780601f106118205761010080835404028352916020019161184b565b820191906000526020600020905b81548152906001019060200180831161182e57829003601f168201915b5050855193945061186793600893506020870192509050611e40565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a16818360405161189992919061253b565b60405180910390a15050565b6127108111156118e95760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b6044820152606401610851565b6040805180820182526001600160a01b0384811680835260208084018681526000898152600b8352869020945185546001600160a01b031916941693909317845591516001909301929092559151838152909185917f7365cf4122f072a3365c20d54eff9b38d73c096c28e1892ec8f5b0e403a0f12d910160405180910390a3505050565b6060611993838360405180606001604052806027815260200161260160279139611d2a565b9392505050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906119cf903390899088908890600401612569565b602060405180830381600087803b1580156119e957600080fd5b505af1925050508015611a19575060408051601f3d908101601f19168201909252611a169181019061259c565b60015b611a74573d808015611a47576040519150601f19603f3d011682016040523d82523d6000602084013e611a4c565b606091505b508051611a6c576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b60606000611a9e600c5490565b90506000600c805480602002602001604051908101604052809291908181526020018280548015611aee57602002820191906000526020600020905b815481526020019060010190808311611ada575b5050505050905060005b82811015611bf257818181518110611b1257611b12612417565b6020026020010151851015611be057600d6000838381518110611b3757611b37612417565b602002602001015181526020019081526020016000208054611b58906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054611b84906123b4565b8015611bd15780601f10611ba657610100808354040283529160200191611bd1565b820191906000526020600020905b815481529060010190602001808311611bb457829003601f168201915b50505050509350505050919050565b611beb600182612523565b9050611af8565b5060405162461bcd60e51b815260206004820152600f60248201526e125b9d985b1a59081d1bdad95b9259608a1b6044820152606401610851565b606081611c515750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611c7b5780611c65816124d9565b9150611c749050600a83612478565b9150611c55565b6000816001600160401b03811115611c9557611c95611ef5565b6040519080825280601f01601f191660200182016040528015611cbf576020820181803683370190505b5090505b84156109b957611cd46001836125b9565b9150611ce1600a866125d0565b611cec906030612523565b60f81b818381518110611d0157611d01612417565b60200101906001600160f81b031916908160001a905350611d23600a86612478565b9450611cc3565b60606001600160a01b0384163b611d925760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610851565b600080856001600160a01b031685604051611dad91906125e4565b600060405180830381855af49150503d8060008114611de8576040519150601f19603f3d011682016040523d82523d6000602084013e611ded565b606091505b5091509150611dfd828286611e07565b9695505050505050565b60608315611e16575081611993565b825115611e265782518084602001fd5b8160405162461bcd60e51b8152600401610851919061206f565b828054611e4c906123b4565b90600052602060002090601f016020900481019282611e6e5760008555611eb4565b82601f10611e8757805160ff1916838001178555611eb4565b82800160010185558215611eb4579182015b82811115611eb4578251825591602001919060010190611e99565b50611ec0929150611ec4565b5090565b5b80821115611ec05760008155600101611ec5565b80356001600160a01b0381168114611ef057600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611f1c57600080fd5b81356001600160401b0380821115611f3657611f36611ef5565b604051601f8301601f19908116603f01168101908282118183101715611f5e57611f5e611ef5565b81604052838152866020858801011115611f7757600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215611faa57600080fd5b611fb383611ed9565b915060208301356001600160401b03811115611fce57600080fd5b611fda85828601611f0b565b9150509250929050565b6001600160e01b03198116811461086357600080fd5b60006020828403121561200c57600080fd5b813561199381611fe4565b60005b8381101561203257818101518382015260200161201a565b83811115610b2e5750506000910152565b6000815180845261205b816020860160208601612017565b601f01601f19169290920160200192915050565b6020815260006119936020830184612043565b60006020828403121561209457600080fd5b5035919050565b600080604083850312156120ae57600080fd5b6120b783611ed9565b946020939093013593505050565b6000602082840312156120d757600080fd5b61199382611ed9565b6000806000606084860312156120f557600080fd5b6120fe84611ed9565b925061210c60208501611ed9565b9150604084013590509250925092565b6000806040838503121561212f57600080fd5b50508035926020909101359150565b6000806000806080858703121561215457600080fd5b61215d85611ed9565b93506020850135925060408501356001600160401b038082111561218057600080fd5b61218c88838901611f0b565b935060608701359150808211156121a257600080fd5b506121af87828801611f0b565b91505092959194509250565b6000602082840312156121cd57600080fd5b81356001600160401b038111156121e357600080fd5b6109b984828501611f0b565b60008060006060848603121561220457600080fd5b8335925061210c60208501611ed9565b6000806040838503121561222757600080fd5b61223083611ed9565b91506020830135801515811461224557600080fd5b809150509250929050565b6000806020838503121561226357600080fd5b82356001600160401b038082111561227a57600080fd5b818501915085601f83011261228e57600080fd5b81358181111561229d57600080fd5b8660208260051b85010111156122b257600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561231957603f19888603018452612307858351612043565b945092850192908501906001016122eb565b5092979650505050505050565b6000806000806080858703121561233c57600080fd5b61234585611ed9565b935061235360208601611ed9565b92506040850135915060608501356001600160401b0381111561237557600080fd5b6121af87828801611f0b565b6000806040838503121561239457600080fd5b61239d83611ed9565b91506123ab60208401611ed9565b90509250929050565b600181811c908216806123c857607f821691505b602082108114156123e957634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600e908201526d139bdd08185d5d1a1bdc9a5e995960921b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561245d5761245d61242d565b500290565b634e487b7160e01b600052601260045260246000fd5b60008261248757612487612462565b500490565b6000808335601e198436030181126124a357600080fd5b8301803591506001600160401b038211156124bd57600080fd5b6020019150368190038213156124d257600080fd5b9250929050565b60006000198214156124ed576124ed61242d565b5060010190565b60008351612506818460208801612017565b83519083019061251a818360208801612017565b01949350505050565b600082198211156125365761253661242d565b500190565b60408152600061254e6040830185612043565b82810360208401526125608185612043565b95945050505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611dfd90830184612043565b6000602082840312156125ae57600080fd5b815161199381611fe4565b6000828210156125cb576125cb61242d565b500390565b6000826125df576125df612462565b500690565b600082516125f6818460208701612017565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220dda2a51f5ddb86b9f1e657c21a73bc250569379d048e97d58d279a04c2a0ef4164736f6c63430008090033",
  "deployedBytecode": "0x6080604052600436106101c35760003560e01c8063600dd5ea116100f65780639bcf7a151161008f578063b88d4fde11610061578063b88d4fde14610594578063c87b56dd146105b4578063e8a3d485146105d4578063e985e9c5146105e957005b80639bcf7a15146104fc578063a22cb4651461051c578063ac9650d81461053c578063b24f2d391461056957005b8063754a81d9116100c8578063754a81d9146104895780638da5cb5b146104a9578063938e3d7b146104c757806395d89b41146104e757005b8063600dd5ea146104145780636352211e1461043457806363b45e2d1461045457806370a082311461046957005b806323b872dd1161016857806342842e0e1161013a57806342842e0e1461037257806342966c6814610392578063430c2081146103b25780634cc157df146103d257005b806323b872dd146102de5780632419f51b146102fe5780632a55205a1461031e5780633b1475a71461035d57005b8063081812fc116101a1578063081812fc14610243578063095ea7b31461027b57806313af40351461029b57806318160ddd146102bb57005b806275a317146101cc57806301ffc9a7146101ec57806306fdde031461022157005b366101ca57005b005b3480156101d857600080fd5b506101ca6101e7366004611f97565b610632565b3480156101f857600080fd5b5061020c610207366004611ffa565b610663565b60405190151581526020015b60405180910390f35b34801561022d57600080fd5b506102366106d0565b604051610218919061206f565b34801561024f57600080fd5b5061026361025e366004612082565b610762565b6040516001600160a01b039091168152602001610218565b34801561028757600080fd5b506101ca61029636600461209b565b6107a6565b3480156102a757600080fd5b506101ca6102b63660046120c5565b61082d565b3480156102c757600080fd5b50600154600054035b604051908152602001610218565b3480156102ea57600080fd5b506101ca6102f93660046120e0565b610866565b34801561030a57600080fd5b506102d0610319366004612082565b610871565b34801561032a57600080fd5b5061033e61033936600461211c565b6108df565b604080516001600160a01b039093168352602083019190915201610218565b34801561036957600080fd5b506000546102d0565b34801561037e57600080fd5b506101ca61038d3660046120e0565b61091c565b34801561039e57600080fd5b506101ca6103ad366004612082565b610937565b3480156103be57600080fd5b5061020c6103cd36600461209b565b610942565b3480156103de57600080fd5b506103f26103ed366004612082565b6109c1565b604080516001600160a01b03909316835261ffff909116602083015201610218565b34801561042057600080fd5b506101ca61042f36600461209b565b610a2c565b34801561044057600080fd5b5061026361044f366004612082565b610a5a565b34801561046057600080fd5b50600c546102d0565b34801561047557600080fd5b506102d06104843660046120c5565b610a6c565b34801561049557600080fd5b506101ca6104a436600461213e565b610aba565b3480156104b557600080fd5b506009546001600160a01b0316610263565b3480156104d357600080fd5b506101ca6104e23660046121bb565b610b34565b3480156104f357600080fd5b50610236610b61565b34801561050857600080fd5b506101ca6105173660046121ef565b610b70565b34801561052857600080fd5b506101ca610537366004612214565b610b9f565b34801561054857600080fd5b5061055c610557366004612250565b610c35565b60405161021891906122c4565b34801561057557600080fd5b50600a546001600160a01b03811690600160a01b900461ffff166103f2565b3480156105a057600080fd5b506101ca6105af366004612326565b610d29565b3480156105c057600080fd5b506102366105cf366004612082565b610d6d565b3480156105e057600080fd5b50610236610e5b565b3480156105f557600080fd5b5061020c610604366004612381565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b61064461063e60005490565b82610ee9565b61065f82600160405180602001604052806000815250610f62565b5050565b60006301ffc9a760e01b6001600160e01b03198316148061069457506380ac58cd60e01b6001600160e01b03198316145b806106af5750635b5e139f60e01b6001600160e01b03198316145b806106ca57506001600160e01b0319821663152a902d60e11b145b92915050565b6060600280546106df906123b4565b80601f016020809104026020016040519081016040528092919081815260200182805461070b906123b4565b80156107585780601f1061072d57610100808354040283529160200191610758565b820191906000526020600020905b81548152906001019060200180831161073b57829003601f168201915b5050505050905090565b600061076d82611102565b61078a576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006107b182610a5a565b9050806001600160a01b0316836001600160a01b031614156107e65760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b0382161461081d576108008133610604565b61081d576040516367d9dca160e11b815260040160405180910390fd5b61082883838361112d565b505050565b610835611189565b61085a5760405162461bcd60e51b8152600401610851906123ef565b60405180910390fd5b610863816111b6565b50565b610828838383611208565b600061087c600c5490565b82106108ba5760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b6044820152606401610851565b600c82815481106108cd576108cd612417565b90600052602060002001549050919050565b6000806000806108ee866109c1565b90945084925061ffff1690506127106109078287612443565b6109119190612478565b925050509250929050565b61082883838360405180602001604052806000815250610d29565b6108638160016113e3565b60008061094e83610a5a565b9050806001600160a01b0316846001600160a01b0316148061099557506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b806109b95750836001600160a01b03166109ae84610762565b6001600160a01b0316145b949350505050565b6000818152600b60209081526040808320815180830190925280546001600160a01b031680835260019091015492820192909252829115610a085780516020820151610a22565b600a546001600160a01b03811690600160a01b900461ffff165b9250925050915091565b610a34611189565b610a505760405162461bcd60e51b8152600401610851906123ef565b61065f8282611596565b6000610a658261163c565b5192915050565b60006001600160a01b038216610a95576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b03166000908152600560205260409020546001600160401b031690565b610ac2611189565b610b0e5760405162461bcd60e51b815260206004820152601760248201527f4e6f7420617574686f72697a656420746f206d696e742e0000000000000000006044820152606401610851565b610b21610b1a60005490565b8484611756565b5050610b2e848483610f62565b50505050565b610b3c611189565b610b585760405162461bcd60e51b8152600401610851906123ef565b610863816117c3565b6060600380546106df906123b4565b610b78611189565b610b945760405162461bcd60e51b8152600401610851906123ef565b6108288383836118a5565b6001600160a01b038216331415610bc95760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6060816001600160401b03811115610c4f57610c4f611ef5565b604051908082528060200260200182016040528015610c8257816020015b6060815260200190600190039081610c6d5790505b50905060005b82811015610d2257610cf230858584818110610ca657610ca6612417565b9050602002810190610cb8919061248c565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061196e92505050565b828281518110610d0457610d04612417565b60200260200101819052508080610d1a906124d9565b915050610c88565b5092915050565b610d34848484611208565b6001600160a01b0383163b15610b2e57610d508484848461199a565b610b2e576040516368d2bf6b60e11b815260040160405180910390fd5b6000818152600e6020526040812080546060929190610d8b906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610db7906123b4565b8015610e045780601f10610dd957610100808354040283529160200191610e04565b820191906000526020600020905b815481529060010190602001808311610de757829003601f168201915b50505050509050600081511115610e1b5792915050565b6000610e2684611a91565b905080610e3285611c2d565b604051602001610e439291906124f4565b60405160208183030381529060405292505050919050565b60088054610e68906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610e94906123b4565b8015610ee15780601f10610eb657610100808354040283529160200191610ee1565b820191906000526020600020905b815481529060010190602001808311610ec457829003601f168201915b505050505081565b6000828152600e602052604090208054610f02906123b4565b159050610f435760405162461bcd60e51b815260206004820152600f60248201526e15549248185b1c9958591e481cd95d608a1b6044820152606401610851565b6000828152600e60209081526040909120825161082892840190611e40565b6000546001600160a01b038416610f8b57604051622e076360e81b815260040160405180910390fd5b82610fa95760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038416600081815260056020908152604080832080546fffffffffffffffffffffffffffffffff1981166001600160401b038083168b0181169182176801000000000000000067ffffffffffffffff1990941690921783900481168b01811690920217909155858452600490925290912080546001600160e01b0319168317600160a01b42909316929092029190911790558190818501903b156110bf575b60405182906001600160a01b03881690600090600080516020612628833981519152908290a4611088600087848060010195508761199a565b6110a5576040516368d2bf6b60e11b815260040160405180910390fd5b80821061104f5782600054146110ba57600080fd5b6110f2565b5b6040516001830192906001600160a01b03881690600090600080516020612628833981519152908290a48082106110c0575b506000908155610b2e9085838684565b60008054821080156106ca575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b600061119d6009546001600160a01b031690565b6001600160a01b0316336001600160a01b031614905090565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b60006112138261163c565b9050836001600160a01b031681600001516001600160a01b03161461124a5760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b038616148061126857506112688533610604565b8061128357503361127884610762565b6001600160a01b0316145b9050806112a357604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b0384166112ca57604051633a954ecd60e21b815260040160405180910390fd5b6112d66000848761112d565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff198082166001600160401b0392831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b429092169190910217835587018084529220805491939091166113aa5760005482146113aa57805460208601516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b031660008051602061262883398151915260405160405180910390a45050505050565b60006113ee8361163c565b80519091508215611454576000336001600160a01b038316148061141757506114178233610604565b8061143257503361142786610762565b6001600160a01b0316145b90508061145257604051632ce44b5f60e11b815260040160405180910390fd5b505b6114606000858361112d565b6001600160a01b0380821660008181526005602090815260408083208054600160801b6000196001600160401b0380841691909101811667ffffffffffffffff198416811783900482166001908101831690930277ffffffffffffffff0000000000000000ffffffffffffffff19909416179290921783558b86526004909452828520805460ff60e01b1942909316600160a01b026001600160e01b03199091169097179690961716600160e01b17855591890180845292208054919490911661155e57600054821461155e57805460208701516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038716171781555b5050604051869250600091506001600160a01b03841690600080516020612628833981519152908390a4505060018054810190555050565b6127108111156115da5760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b6044820152606401610851565b600a80546001600160a01b0384166001600160b01b03199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b60408051606081018252600080825260208201819052918101919091528160005481101561173d57600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b81046001600160401b031692820192909252600160e01b90910460ff1615159181018290529061173b5780516001600160a01b0316156116d2579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b82046001600160401b031693830193909352600160e01b900460ff1615159281019290925215611736579392505050565b6116d2565b505b604051636f96cda160e11b815260040160405180910390fd5b6000806117638486612523565b600c8054600181019091557fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7018190556000818152600d6020908152604090912085519294508493506117ba929091860190611e40565b50935093915050565b6000600880546117d2906123b4565b80601f01602080910402602001604051908101604052809291908181526020018280546117fe906123b4565b801561184b5780601f106118205761010080835404028352916020019161184b565b820191906000526020600020905b81548152906001019060200180831161182e57829003601f168201915b5050855193945061186793600893506020870192509050611e40565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a16818360405161189992919061253b565b60405180910390a15050565b6127108111156118e95760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b6044820152606401610851565b6040805180820182526001600160a01b0384811680835260208084018681526000898152600b8352869020945185546001600160a01b031916941693909317845591516001909301929092559151838152909185917f7365cf4122f072a3365c20d54eff9b38d73c096c28e1892ec8f5b0e403a0f12d910160405180910390a3505050565b6060611993838360405180606001604052806027815260200161260160279139611d2a565b9392505050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906119cf903390899088908890600401612569565b602060405180830381600087803b1580156119e957600080fd5b505af1925050508015611a19575060408051601f3d908101601f19168201909252611a169181019061259c565b60015b611a74573d808015611a47576040519150601f19603f3d011682016040523d82523d6000602084013e611a4c565b606091505b508051611a6c576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b60606000611a9e600c5490565b90506000600c805480602002602001604051908101604052809291908181526020018280548015611aee57602002820191906000526020600020905b815481526020019060010190808311611ada575b5050505050905060005b82811015611bf257818181518110611b1257611b12612417565b6020026020010151851015611be057600d6000838381518110611b3757611b37612417565b602002602001015181526020019081526020016000208054611b58906123b4565b80601f0160208091040260200160405190810160405280929190818152602001828054611b84906123b4565b8015611bd15780601f10611ba657610100808354040283529160200191611bd1565b820191906000526020600020905b815481529060010190602001808311611bb457829003601f168201915b50505050509350505050919050565b611beb600182612523565b9050611af8565b5060405162461bcd60e51b815260206004820152600f60248201526e125b9d985b1a59081d1bdad95b9259608a1b6044820152606401610851565b606081611c515750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611c7b5780611c65816124d9565b9150611c749050600a83612478565b9150611c55565b6000816001600160401b03811115611c9557611c95611ef5565b6040519080825280601f01601f191660200182016040528015611cbf576020820181803683370190505b5090505b84156109b957611cd46001836125b9565b9150611ce1600a866125d0565b611cec906030612523565b60f81b818381518110611d0157611d01612417565b60200101906001600160f81b031916908160001a905350611d23600a86612478565b9450611cc3565b60606001600160a01b0384163b611d925760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610851565b600080856001600160a01b031685604051611dad91906125e4565b600060405180830381855af49150503d8060008114611de8576040519150601f19603f3d011682016040523d82523d6000602084013e611ded565b606091505b5091509150611dfd828286611e07565b9695505050505050565b60608315611e16575081611993565b825115611e265782518084602001fd5b8160405162461bcd60e51b8152600401610851919061206f565b828054611e4c906123b4565b90600052602060002090601f016020900481019282611e6e5760008555611eb4565b82601f10611e8757805160ff1916838001178555611eb4565b82800160010185558215611eb4579182015b82811115611eb4578251825591602001919060010190611e99565b50611ec0929150611ec4565b5090565b5b80821115611ec05760008155600101611ec5565b80356001600160a01b0381168114611ef057600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611f1c57600080fd5b81356001600160401b0380821115611f3657611f36611ef5565b604051601f8301601f19908116603f01168101908282118183101715611f5e57611f5e611ef5565b81604052838152866020858801011115611f7757600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215611faa57600080fd5b611fb383611ed9565b915060208301356001600160401b03811115611fce57600080fd5b611fda85828601611f0b565b9150509250929050565b6001600160e01b03198116811461086357600080fd5b60006020828403121561200c57600080fd5b813561199381611fe4565b60005b8381101561203257818101518382015260200161201a565b83811115610b2e5750506000910152565b6000815180845261205b816020860160208601612017565b601f01601f19169290920160200192915050565b6020815260006119936020830184612043565b60006020828403121561209457600080fd5b5035919050565b600080604083850312156120ae57600080fd5b6120b783611ed9565b946020939093013593505050565b6000602082840312156120d757600080fd5b61199382611ed9565b6000806000606084860312156120f557600080fd5b6120fe84611ed9565b925061210c60208501611ed9565b9150604084013590509250925092565b6000806040838503121561212f57600080fd5b50508035926020909101359150565b6000806000806080858703121561215457600080fd5b61215d85611ed9565b93506020850135925060408501356001600160401b038082111561218057600080fd5b61218c88838901611f0b565b935060608701359150808211156121a257600080fd5b506121af87828801611f0b565b91505092959194509250565b6000602082840312156121cd57600080fd5b81356001600160401b038111156121e357600080fd5b6109b984828501611f0b565b60008060006060848603121561220457600080fd5b8335925061210c60208501611ed9565b6000806040838503121561222757600080fd5b61223083611ed9565b91506020830135801515811461224557600080fd5b809150509250929050565b6000806020838503121561226357600080fd5b82356001600160401b038082111561227a57600080fd5b818501915085601f83011261228e57600080fd5b81358181111561229d57600080fd5b8660208260051b85010111156122b257600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561231957603f19888603018452612307858351612043565b945092850192908501906001016122eb565b5092979650505050505050565b6000806000806080858703121561233c57600080fd5b61234585611ed9565b935061235360208601611ed9565b92506040850135915060608501356001600160401b0381111561237557600080fd5b6121af87828801611f0b565b6000806040838503121561239457600080fd5b61239d83611ed9565b91506123ab60208401611ed9565b90509250929050565b600181811c908216806123c857607f821691505b602082108114156123e957634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600e908201526d139bdd08185d5d1a1bdc9a5e995960921b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561245d5761245d61242d565b500290565b634e487b7160e01b600052601260045260246000fd5b60008261248757612487612462565b500490565b6000808335601e198436030181126124a357600080fd5b8301803591506001600160401b038211156124bd57600080fd5b6020019150368190038213156124d257600080fd5b9250929050565b60006000198214156124ed576124ed61242d565b5060010190565b60008351612506818460208801612017565b83519083019061251a818360208801612017565b01949350505050565b600082198211156125365761253661242d565b500190565b60408152600061254e6040830185612043565b82810360208401526125608185612043565b95945050505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611dfd90830184612043565b6000602082840312156125ae57600080fd5b815161199381611fe4565b6000828210156125cb576125cb61242d565b500390565b6000826125df576125df612462565b500690565b600082516125f6818460208701612017565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220dda2a51f5ddb86b9f1e657c21a73bc250569379d048e97d58d279a04c2a0ef4164736f6c63430008090033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
]

export const NFT_FRACTION_ABI = [
    {
  "_format": "hh-sol-artifact-1",
  "contractName": "NFTFraction",
  "sourceName": "contracts/NFTFraction.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_tokensintialized",
      "outputs": [
        {
          "internalType": "contract TokenNFT",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_collectionAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "createToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "fractionalizedTokens",
      "outputs": [
        {
          "internalType": "contract TokenNFT",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_collectionAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokens",
      "outputs": [
        {
          "internalType": "contract TokenNFT[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50611e51806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806324d624771461005c5780632bbb70a61461008c5780638cb84e181461009f578063aa6ca808146100d3578063de200c79146100e8575b600080fd5b61006f61006a366004610325565b610119565b6040516001600160a01b0390911681526020015b60405180910390f35b61006f61009a3660046103ab565b6101cd565b61006f6100ad3660046103c4565b6001600160a01b0391821660009081526020818152604080832093835292905220541690565b6100db6101f7565b60405161008391906103ee565b61006f6100f63660046103c4565b60006020818152928152604080822090935290815220546001600160a01b031681565b600080868660405161012a90610259565b610135929190610488565b604051809103906000f080158015610151573d6000803e3d6000fd5b506001600160a01b03808716600090815260208181526040808320898452909152812080549284166001600160a01b0319938416811790915560018054808201825592527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6909101805490921617905591505095945050505050565b600181815481106101dd57600080fd5b6000918252602090912001546001600160a01b0316905081565b6060600180548060200260200160405190810160405280929190818152602001828054801561024f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610231575b5050505050905090565b611965806104b783390190565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261028d57600080fd5b813567ffffffffffffffff808211156102a8576102a8610266565b604051601f8301601f19908116603f011681019082821181831017156102d0576102d0610266565b816040528381528660208588010111156102e957600080fd5b836020870160208301376000602085830101528094505050505092915050565b80356001600160a01b038116811461032057600080fd5b919050565b600080600080600060a0868803121561033d57600080fd5b853567ffffffffffffffff8082111561035557600080fd5b61036189838a0161027c565b9650602088013591508082111561037757600080fd5b506103848882890161027c565b94505061039360408701610309565b94979396509394606081013594506080013592915050565b6000602082840312156103bd57600080fd5b5035919050565b600080604083850312156103d757600080fd5b6103e083610309565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b8181101561042f5783516001600160a01b03168352928401929184019160010161040a565b50909695505050505050565b6000815180845260005b8181101561046157602081850181015186830182015201610445565b81811115610473576000602083870101525b50601f01601f19169290920160200192915050565b60408152600061049b604083018561043b565b82810360208401526104ad818561043b565b9594505050505056fe60806040526007805463ffffffff191690553480156200001e57600080fd5b5060405162001965380380620019658339810160408190526200004191620001ee565b8151829082906200005a9060039060208501906200007b565b508051620000709060049060208401906200007b565b505050505062000295565b828054620000899062000258565b90600052602060002090601f016020900481019282620000ad5760008555620000f8565b82601f10620000c857805160ff1916838001178555620000f8565b82800160010185558215620000f8579182015b82811115620000f8578251825591602001919060010190620000db565b50620001069291506200010a565b5090565b5b808211156200010657600081556001016200010b565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014957600080fd5b81516001600160401b038082111562000166576200016662000121565b604051601f8301601f19908116603f0116810190828211818310171562000191576200019162000121565b81604052838152602092508683858801011115620001ae57600080fd5b600091505b83821015620001d25785820183015181830184015290820190620001b3565b83821115620001e45760008385830101525b9695505050505050565b600080604083850312156200020257600080fd5b82516001600160401b03808211156200021a57600080fd5b620002288683870162000137565b935060208501519150808211156200023f57600080fd5b506200024e8582860162000137565b9150509250929050565b600181811c908216806200026d57607f821691505b602082108114156200028f57634e487b7160e01b600052602260045260246000fd5b50919050565b6116c080620002a56000396000f3fe6080604052600436106101ae5760003560e01c80635347238a116100eb5780637ff9b5961161008f578063db006a7511610061578063db006a75146104e2578063dd62ed3e14610502578063f51f96dd14610522578063f97ed5091461053857005b80637ff9b5961461047757806395d89b411461048d578063a457c2d7146104a2578063a9059cbb146104c257005b8063613b4d32116100c8578063613b4d32146103e15780636aa00371146103e957806370a08231146104215780637a1ac61e1461045757005b80635347238a1461038d578063593b76c7146103ad5780635c474f9e146103c257005b806323b872dd1161015257806333a543ce1161012f57806333a543ce1461031857806339509351146103385780633ccfd60b1461035857806340c10f191461036d57005b806323b872dd146102c95780632d296bf1146102e9578063313ce567146102fc57005b8063158ef93e1161018b578063158ef93e1461025657806317d70f7c1461027057806318160ddd146102945780631f078ced146102a957005b806306fdde03146101b7578063095ea7b3146101e2578063150b7a021461021257005b366101b557005b005b3480156101c357600080fd5b506101cc610559565b6040516101d99190611376565b60405180910390f35b3480156101ee57600080fd5b506102026101fd3660046113e7565b6105eb565b60405190151581526020016101d9565b34801561021e57600080fd5b5061023d61022d366004611427565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016101d9565b34801561026257600080fd5b506007546102029060ff1681565b34801561027c57600080fd5b5061028660065481565b6040519081526020016101d9565b3480156102a057600080fd5b50600254610286565b3480156102b557600080fd5b506101b56102c4366004611503565b610603565b3480156102d557600080fd5b506102026102e436600461151c565b6106b1565b6101b56102f7366004611503565b6106d5565b34801561030857600080fd5b50604051601281526020016101d9565b34801561032457600080fd5b506007546102029062010000900460ff1681565b34801561034457600080fd5b506102026103533660046113e7565b61080f565b34801561036457600080fd5b506101b5610831565b34801561037957600080fd5b506101b56103883660046113e7565b610928565b34801561039957600080fd5b506101b56103a8366004611503565b610936565b3480156103b957600080fd5b506101b56109d0565b3480156103ce57600080fd5b5060075461020290610100900460ff1681565b6101b5610a5f565b3480156103f557600080fd5b50600554610409906001600160a01b031681565b6040516001600160a01b0390911681526020016101d9565b34801561042d57600080fd5b5061028661043c366004611558565b6001600160a01b031660009081526020819052604090205490565b34801561046357600080fd5b506101b561047236600461157a565b610bab565b34801561048357600080fd5b50610286600b5481565b34801561049957600080fd5b506101cc610cda565b3480156104ae57600080fd5b506102026104bd3660046113e7565b610ce9565b3480156104ce57600080fd5b506102026104dd3660046113e7565b610d64565b3480156104ee57600080fd5b506101b56104fd366004611503565b610d72565b34801561050e57600080fd5b5061028661051d3660046115ad565b610e1e565b34801561052e57600080fd5b50610286600a5481565b34801561054457600080fd5b50600754610202906301000000900460ff1681565b606060038054610568906115e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610594906115e0565b80156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050505050905090565b6000336105f9818585610e49565b5060019392505050565b60075462010000900460ff166106605760405162461bcd60e51b815260206004820152601c60248201527f546f6b656e2073616c65206e6f7420636f6d706c65746564207965740000000060448201526064015b60405180910390fd5b600a8190556007805461ff0019166101001790556040517f94f8c8908c1dbd658ce08b602b9a461c5c57666f9f66e5b5abc8f7821e04cc60906106a69083815260200190565b60405180910390a150565b6000336106bf858285610f6d565b6106ca858585610fe1565b506001949350505050565b60075462010000900460ff1661071c5760405162461bcd60e51b815260206004820152600c60248201526b4e6f7420666f722073616c6560a01b6044820152606401610657565b6009548111156107675760405162461bcd60e51b8152602060048201526016602482015275151bdad95b88185b5bdd5b9d081a5b98dbdc9c9958dd60521b6044820152606401610657565b80600b546107759190611631565b3410156107bd5760405162461bcd60e51b8152602060048201526016602482015275139bdd08195b9bdd59da08185b5bdd5b9d081cd95b9d60521b6044820152606401610657565b80600860008282546107cf9190611650565b909155506107df90503382611185565b6040518181527ffd5e60d339fe12c15225961ffc5e18b853411f5ca458c38acf2946ac25779caf906020016106a6565b6000336105f98185856108228383610e1e565b61082c9190611650565b610e49565b600254156108905760405162461bcd60e51b815260206004820152602660248201527f416c6c20746f6b656e20686f6c646572732068617665206e6f7420636c61696d6044820152651959081e595d60d21b6064820152608401610657565b60405133904790600090839083908381818185875af1925050503d80600081146108d6576040519150601f19603f3d011682016040523d82523d6000602084013e6108db565b606091505b50509050806109235760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321032ba3432b960611b6044820152606401610657565b505050565b6109328282611185565b5050565b60075460ff166109885760405162461bcd60e51b815260206004820152601960248201527f546f6b656e206e6f7420696e697469616c697a656420796574000000000000006044820152606401610657565b6007805462ff0000191662010000179055600b8190556040517f433f912ff14339886272d9fd787778e49026c79098ac8eb954bf1034b69ad2f7906106a69083815260200190565b60075462010000900460ff16610a285760405162461bcd60e51b815260206004820152601960248201527f546f6b656e2073616c6520616c726561647920636c6f736564000000000000006044820152606401610657565b6007805462ff0000191690556040517f8a540784cf148f0feb41e2fdf0ae2d9e6b6e714c4b62c2295d74671f9c6b3d5f90600090a1565b600754610100900460ff16610aa55760405162461bcd60e51b815260206004820152600c60248201526b4e6f7420666f722073616c6560a01b6044820152606401610657565b600a54341015610af05760405162461bcd60e51b8152602060048201526016602482015275139bdd08195b9bdd59da08185b5bdd5b9d081cd95b9d60521b6044820152606401610657565b6005546006546040516323b872dd60e01b815230600482015233602482015260448101919091526001600160a01b03909116906323b872dd90606401600060405180830381600087803b158015610b4657600080fd5b505af1158015610b5a573d6000803e3d6000fd5b50506007805463ff00ff00191663010000001790555050604080513481523360208201527f9cf94036b63590f8bb7ba01debc7a1bb8f67ea2b6b26fcb1dcd21e5b5f09c62c910160405180910390a1565b60075460ff1615610bf35760405162461bcd60e51b8152602060048201526012602482015271105b1c9958591e481a5b9a5d185b1a5e995960721b6044820152606401610657565b600580546001600160a01b0319166001600160a01b038516908117909155600654604051632142170760e11b815233600482015230602482015260448101919091526342842e0e90606401600060405180830381600087803b158015610c5857600080fd5b505af1158015610c6c573d6000803e3d6000fd5b5050506006839055506007805462ff00ff1916620100011790556009819055604080516001600160a01b0385168152602081018490529081018290527f6622d3e86784ccb284b99d669fc14f025ba31aaa7933e11fae4191ed86634aa99060600160405180910390a1505050565b606060048054610568906115e0565b60003381610cf78286610e1e565b905083811015610d575760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610657565b6106ca8286868403610e49565b6000336105f9818585610fe1565b6007546301000000900460ff16610dbf5760405162461bcd60e51b8152602060048201526011602482015270596f752063616e6e6f742072656465656d60781b6044820152606401610657565b476000610dcb60025490565b610dd58385611631565b610ddf9190611668565b9050610deb3384611244565b604051339082156108fc029083906000818181858888f19350505050158015610e18573d6000803e3d6000fd5b50505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b038316610eab5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610657565b6001600160a01b038216610f0c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610657565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610f798484610e1e565b90506000198114610e185781811015610fd45760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610657565b610e188484848403610e49565b6001600160a01b0383166110455760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610657565b6001600160a01b0382166110a75760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610657565b6001600160a01b0383166000908152602081905260409020548181101561111f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610657565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610e18565b6001600160a01b0382166111db5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610657565b80600260008282546111ed9190611650565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b0382166112a45760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610657565b6001600160a01b038216600090815260208190526040902054818110156113185760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610657565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b600060208083528351808285015260005b818110156113a357858101830151858201604001528201611387565b818111156113b5576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146113e257600080fd5b919050565b600080604083850312156113fa57600080fd5b611403836113cb565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561143d57600080fd5b611446856113cb565b9350611454602086016113cb565b925060408501359150606085013567ffffffffffffffff8082111561147857600080fd5b818701915087601f83011261148c57600080fd5b81358181111561149e5761149e611411565b604051601f8201601f19908116603f011681019083821181831017156114c6576114c6611411565b816040528281528a60208487010111156114df57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60006020828403121561151557600080fd5b5035919050565b60008060006060848603121561153157600080fd5b61153a846113cb565b9250611548602085016113cb565b9150604084013590509250925092565b60006020828403121561156a57600080fd5b611573826113cb565b9392505050565b60008060006060848603121561158f57600080fd5b611598846113cb565b95602085013595506040909401359392505050565b600080604083850312156115c057600080fd5b6115c9836113cb565b91506115d7602084016113cb565b90509250929050565b600181811c908216806115f457607f821691505b6020821081141561161557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561164b5761164b61161b565b500290565b600082198211156116635761166361161b565b500190565b60008261168557634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212204c2cca0ababfc26e2709325afacd84c25bc2bc75683f40b0a4b36f65aaed6da964736f6c63430008090033a26469706673582212207398e88389b1a371549057d86598a8bf6506e89723f0570ea94cdb52be4f642f64736f6c63430008090033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c806324d624771461005c5780632bbb70a61461008c5780638cb84e181461009f578063aa6ca808146100d3578063de200c79146100e8575b600080fd5b61006f61006a366004610325565b610119565b6040516001600160a01b0390911681526020015b60405180910390f35b61006f61009a3660046103ab565b6101cd565b61006f6100ad3660046103c4565b6001600160a01b0391821660009081526020818152604080832093835292905220541690565b6100db6101f7565b60405161008391906103ee565b61006f6100f63660046103c4565b60006020818152928152604080822090935290815220546001600160a01b031681565b600080868660405161012a90610259565b610135929190610488565b604051809103906000f080158015610151573d6000803e3d6000fd5b506001600160a01b03808716600090815260208181526040808320898452909152812080549284166001600160a01b0319938416811790915560018054808201825592527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6909101805490921617905591505095945050505050565b600181815481106101dd57600080fd5b6000918252602090912001546001600160a01b0316905081565b6060600180548060200260200160405190810160405280929190818152602001828054801561024f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610231575b5050505050905090565b611965806104b783390190565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261028d57600080fd5b813567ffffffffffffffff808211156102a8576102a8610266565b604051601f8301601f19908116603f011681019082821181831017156102d0576102d0610266565b816040528381528660208588010111156102e957600080fd5b836020870160208301376000602085830101528094505050505092915050565b80356001600160a01b038116811461032057600080fd5b919050565b600080600080600060a0868803121561033d57600080fd5b853567ffffffffffffffff8082111561035557600080fd5b61036189838a0161027c565b9650602088013591508082111561037757600080fd5b506103848882890161027c565b94505061039360408701610309565b94979396509394606081013594506080013592915050565b6000602082840312156103bd57600080fd5b5035919050565b600080604083850312156103d757600080fd5b6103e083610309565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b8181101561042f5783516001600160a01b03168352928401929184019160010161040a565b50909695505050505050565b6000815180845260005b8181101561046157602081850181015186830182015201610445565b81811115610473576000602083870101525b50601f01601f19169290920160200192915050565b60408152600061049b604083018561043b565b82810360208401526104ad818561043b565b9594505050505056fe60806040526007805463ffffffff191690553480156200001e57600080fd5b5060405162001965380380620019658339810160408190526200004191620001ee565b8151829082906200005a9060039060208501906200007b565b508051620000709060049060208401906200007b565b505050505062000295565b828054620000899062000258565b90600052602060002090601f016020900481019282620000ad5760008555620000f8565b82601f10620000c857805160ff1916838001178555620000f8565b82800160010185558215620000f8579182015b82811115620000f8578251825591602001919060010190620000db565b50620001069291506200010a565b5090565b5b808211156200010657600081556001016200010b565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014957600080fd5b81516001600160401b038082111562000166576200016662000121565b604051601f8301601f19908116603f0116810190828211818310171562000191576200019162000121565b81604052838152602092508683858801011115620001ae57600080fd5b600091505b83821015620001d25785820183015181830184015290820190620001b3565b83821115620001e45760008385830101525b9695505050505050565b600080604083850312156200020257600080fd5b82516001600160401b03808211156200021a57600080fd5b620002288683870162000137565b935060208501519150808211156200023f57600080fd5b506200024e8582860162000137565b9150509250929050565b600181811c908216806200026d57607f821691505b602082108114156200028f57634e487b7160e01b600052602260045260246000fd5b50919050565b6116c080620002a56000396000f3fe6080604052600436106101ae5760003560e01c80635347238a116100eb5780637ff9b5961161008f578063db006a7511610061578063db006a75146104e2578063dd62ed3e14610502578063f51f96dd14610522578063f97ed5091461053857005b80637ff9b5961461047757806395d89b411461048d578063a457c2d7146104a2578063a9059cbb146104c257005b8063613b4d32116100c8578063613b4d32146103e15780636aa00371146103e957806370a08231146104215780637a1ac61e1461045757005b80635347238a1461038d578063593b76c7146103ad5780635c474f9e146103c257005b806323b872dd1161015257806333a543ce1161012f57806333a543ce1461031857806339509351146103385780633ccfd60b1461035857806340c10f191461036d57005b806323b872dd146102c95780632d296bf1146102e9578063313ce567146102fc57005b8063158ef93e1161018b578063158ef93e1461025657806317d70f7c1461027057806318160ddd146102945780631f078ced146102a957005b806306fdde03146101b7578063095ea7b3146101e2578063150b7a021461021257005b366101b557005b005b3480156101c357600080fd5b506101cc610559565b6040516101d99190611376565b60405180910390f35b3480156101ee57600080fd5b506102026101fd3660046113e7565b6105eb565b60405190151581526020016101d9565b34801561021e57600080fd5b5061023d61022d366004611427565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016101d9565b34801561026257600080fd5b506007546102029060ff1681565b34801561027c57600080fd5b5061028660065481565b6040519081526020016101d9565b3480156102a057600080fd5b50600254610286565b3480156102b557600080fd5b506101b56102c4366004611503565b610603565b3480156102d557600080fd5b506102026102e436600461151c565b6106b1565b6101b56102f7366004611503565b6106d5565b34801561030857600080fd5b50604051601281526020016101d9565b34801561032457600080fd5b506007546102029062010000900460ff1681565b34801561034457600080fd5b506102026103533660046113e7565b61080f565b34801561036457600080fd5b506101b5610831565b34801561037957600080fd5b506101b56103883660046113e7565b610928565b34801561039957600080fd5b506101b56103a8366004611503565b610936565b3480156103b957600080fd5b506101b56109d0565b3480156103ce57600080fd5b5060075461020290610100900460ff1681565b6101b5610a5f565b3480156103f557600080fd5b50600554610409906001600160a01b031681565b6040516001600160a01b0390911681526020016101d9565b34801561042d57600080fd5b5061028661043c366004611558565b6001600160a01b031660009081526020819052604090205490565b34801561046357600080fd5b506101b561047236600461157a565b610bab565b34801561048357600080fd5b50610286600b5481565b34801561049957600080fd5b506101cc610cda565b3480156104ae57600080fd5b506102026104bd3660046113e7565b610ce9565b3480156104ce57600080fd5b506102026104dd3660046113e7565b610d64565b3480156104ee57600080fd5b506101b56104fd366004611503565b610d72565b34801561050e57600080fd5b5061028661051d3660046115ad565b610e1e565b34801561052e57600080fd5b50610286600a5481565b34801561054457600080fd5b50600754610202906301000000900460ff1681565b606060038054610568906115e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610594906115e0565b80156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050505050905090565b6000336105f9818585610e49565b5060019392505050565b60075462010000900460ff166106605760405162461bcd60e51b815260206004820152601c60248201527f546f6b656e2073616c65206e6f7420636f6d706c65746564207965740000000060448201526064015b60405180910390fd5b600a8190556007805461ff0019166101001790556040517f94f8c8908c1dbd658ce08b602b9a461c5c57666f9f66e5b5abc8f7821e04cc60906106a69083815260200190565b60405180910390a150565b6000336106bf858285610f6d565b6106ca858585610fe1565b506001949350505050565b60075462010000900460ff1661071c5760405162461bcd60e51b815260206004820152600c60248201526b4e6f7420666f722073616c6560a01b6044820152606401610657565b6009548111156107675760405162461bcd60e51b8152602060048201526016602482015275151bdad95b88185b5bdd5b9d081a5b98dbdc9c9958dd60521b6044820152606401610657565b80600b546107759190611631565b3410156107bd5760405162461bcd60e51b8152602060048201526016602482015275139bdd08195b9bdd59da08185b5bdd5b9d081cd95b9d60521b6044820152606401610657565b80600860008282546107cf9190611650565b909155506107df90503382611185565b6040518181527ffd5e60d339fe12c15225961ffc5e18b853411f5ca458c38acf2946ac25779caf906020016106a6565b6000336105f98185856108228383610e1e565b61082c9190611650565b610e49565b600254156108905760405162461bcd60e51b815260206004820152602660248201527f416c6c20746f6b656e20686f6c646572732068617665206e6f7420636c61696d6044820152651959081e595d60d21b6064820152608401610657565b60405133904790600090839083908381818185875af1925050503d80600081146108d6576040519150601f19603f3d011682016040523d82523d6000602084013e6108db565b606091505b50509050806109235760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321032ba3432b960611b6044820152606401610657565b505050565b6109328282611185565b5050565b60075460ff166109885760405162461bcd60e51b815260206004820152601960248201527f546f6b656e206e6f7420696e697469616c697a656420796574000000000000006044820152606401610657565b6007805462ff0000191662010000179055600b8190556040517f433f912ff14339886272d9fd787778e49026c79098ac8eb954bf1034b69ad2f7906106a69083815260200190565b60075462010000900460ff16610a285760405162461bcd60e51b815260206004820152601960248201527f546f6b656e2073616c6520616c726561647920636c6f736564000000000000006044820152606401610657565b6007805462ff0000191690556040517f8a540784cf148f0feb41e2fdf0ae2d9e6b6e714c4b62c2295d74671f9c6b3d5f90600090a1565b600754610100900460ff16610aa55760405162461bcd60e51b815260206004820152600c60248201526b4e6f7420666f722073616c6560a01b6044820152606401610657565b600a54341015610af05760405162461bcd60e51b8152602060048201526016602482015275139bdd08195b9bdd59da08185b5bdd5b9d081cd95b9d60521b6044820152606401610657565b6005546006546040516323b872dd60e01b815230600482015233602482015260448101919091526001600160a01b03909116906323b872dd90606401600060405180830381600087803b158015610b4657600080fd5b505af1158015610b5a573d6000803e3d6000fd5b50506007805463ff00ff00191663010000001790555050604080513481523360208201527f9cf94036b63590f8bb7ba01debc7a1bb8f67ea2b6b26fcb1dcd21e5b5f09c62c910160405180910390a1565b60075460ff1615610bf35760405162461bcd60e51b8152602060048201526012602482015271105b1c9958591e481a5b9a5d185b1a5e995960721b6044820152606401610657565b600580546001600160a01b0319166001600160a01b038516908117909155600654604051632142170760e11b815233600482015230602482015260448101919091526342842e0e90606401600060405180830381600087803b158015610c5857600080fd5b505af1158015610c6c573d6000803e3d6000fd5b5050506006839055506007805462ff00ff1916620100011790556009819055604080516001600160a01b0385168152602081018490529081018290527f6622d3e86784ccb284b99d669fc14f025ba31aaa7933e11fae4191ed86634aa99060600160405180910390a1505050565b606060048054610568906115e0565b60003381610cf78286610e1e565b905083811015610d575760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610657565b6106ca8286868403610e49565b6000336105f9818585610fe1565b6007546301000000900460ff16610dbf5760405162461bcd60e51b8152602060048201526011602482015270596f752063616e6e6f742072656465656d60781b6044820152606401610657565b476000610dcb60025490565b610dd58385611631565b610ddf9190611668565b9050610deb3384611244565b604051339082156108fc029083906000818181858888f19350505050158015610e18573d6000803e3d6000fd5b50505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b038316610eab5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610657565b6001600160a01b038216610f0c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610657565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610f798484610e1e565b90506000198114610e185781811015610fd45760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610657565b610e188484848403610e49565b6001600160a01b0383166110455760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610657565b6001600160a01b0382166110a75760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610657565b6001600160a01b0383166000908152602081905260409020548181101561111f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610657565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610e18565b6001600160a01b0382166111db5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610657565b80600260008282546111ed9190611650565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b0382166112a45760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610657565b6001600160a01b038216600090815260208190526040902054818110156113185760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610657565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b600060208083528351808285015260005b818110156113a357858101830151858201604001528201611387565b818111156113b5576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146113e257600080fd5b919050565b600080604083850312156113fa57600080fd5b611403836113cb565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561143d57600080fd5b611446856113cb565b9350611454602086016113cb565b925060408501359150606085013567ffffffffffffffff8082111561147857600080fd5b818701915087601f83011261148c57600080fd5b81358181111561149e5761149e611411565b604051601f8201601f19908116603f011681019083821181831017156114c6576114c6611411565b816040528281528a60208487010111156114df57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60006020828403121561151557600080fd5b5035919050565b60008060006060848603121561153157600080fd5b61153a846113cb565b9250611548602085016113cb565b9150604084013590509250925092565b60006020828403121561156a57600080fd5b611573826113cb565b9392505050565b60008060006060848603121561158f57600080fd5b611598846113cb565b95602085013595506040909401359392505050565b600080604083850312156115c057600080fd5b6115c9836113cb565b91506115d7602084016113cb565b90509250929050565b600181811c908216806115f457607f821691505b6020821081141561161557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561164b5761164b61161b565b500290565b600082198211156116635761166361161b565b500190565b60008261168557634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212204c2cca0ababfc26e2709325afacd84c25bc2bc75683f40b0a4b36f65aaed6da964736f6c63430008090033a26469706673582212207398e88389b1a371549057d86598a8bf6506e89723f0570ea94cdb52be4f642f64736f6c63430008090033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
]

export const TOKEN_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "NFTPrice",
        "type": "uint256"
      }
    ],
    "name": "NFTsaleStart",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      }
    ],
    "name": "NFTsold",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "tokenBought",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_contractAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "tokenCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "tokenSaleEnded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenPrice",
        "type": "uint256"
      }
    ],
    "name": "tokenSaleStart",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "CloseTokenSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "buyToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "canRedeem",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "collectionAddress",
    "outputs": [
      {
        "internalType": "contract IERC721A",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_collectionAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenPrice",
        "type": "uint256"
      }
    ],
    "name": "initializeSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initialized",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "purchaseNFT",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "putForSale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "redeem",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "salePrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "saleStarted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenSaleStarted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]