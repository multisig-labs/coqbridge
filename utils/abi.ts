export const erc20 = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
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
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  }
]

export const erc20source = [
  {
    "type": "function",
    "name": "addCollateral",
    "inputs": [
      {
        "name": "destinationBlockchainID",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "destinationBridgeAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "receiveTeleporterMessage",
    "inputs": [
      {
        "name": "sourceBlockchainID",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "originSenderAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "message",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "send",
    "inputs": [
      {
        "name": "input",
        "type": "tuple",
        "internalType": "struct SendTokensInput",
        "components": [
          {
            "name": "destinationBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "destinationBridgeAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFeeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "secondaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "requiredGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "multiHopFallback",
            "type": "address",
            "internalType": "address"
          }
        ]
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "sendAndCall",
    "inputs": [
      {
        "name": "input",
        "type": "tuple",
        "internalType": "struct SendAndCallInput",
        "components": [
          {
            "name": "destinationBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "destinationBridgeAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipientContract",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipientPayload",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "requiredGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipientGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "multiHopFallback",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "fallbackRecipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFeeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "secondaryFee",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "CallFailed",
    "inputs": [
      {
        "name": "recipientContract",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CallSucceeded",
    "inputs": [
      {
        "name": "recipientContract",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CollateralAdded",
    "inputs": [
      {
        "name": "destinationBlockchainID",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "destinationBridgeAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "remaining",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DestinationRegistered",
    "inputs": [
      {
        "name": "destinationBlockchainID",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "destinationBridgeAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "initialCollateralNeeded",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "tokenMultiplier",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "multiplyOnDestination",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensAndCallRouted",
    "inputs": [
      {
        "name": "teleporterMessageID",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "input",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct SendAndCallInput",
        "components": [
          {
            "name": "destinationBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "destinationBridgeAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipientContract",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipientPayload",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "requiredGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipientGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "multiHopFallback",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "fallbackRecipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFeeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "secondaryFee",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensAndCallSent",
    "inputs": [
      {
        "name": "teleporterMessageID",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "sender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "input",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct SendAndCallInput",
        "components": [
          {
            "name": "destinationBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "destinationBridgeAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipientContract",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipientPayload",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "requiredGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipientGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "multiHopFallback",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "fallbackRecipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFeeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "secondaryFee",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensRouted",
    "inputs": [
      {
        "name": "teleporterMessageID",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "input",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct SendTokensInput",
        "components": [
          {
            "name": "destinationBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "destinationBridgeAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFeeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "secondaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "requiredGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "multiHopFallback",
            "type": "address",
            "internalType": "address"
          }
        ]
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensSent",
    "inputs": [
      {
        "name": "teleporterMessageID",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "sender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "input",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct SendTokensInput",
        "components": [
          {
            "name": "destinationBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "destinationBridgeAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFeeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "secondaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "requiredGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "multiHopFallback",
            "type": "address",
            "internalType": "address"
          }
        ]
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensWithdrawn",
    "inputs": [
      {
        "name": "recipient",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  }
];

export const nativeTokenDestination = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "settings",
        "type": "tuple",
        "internalType": "struct TeleporterTokenDestinationSettings",
        "components": [
          {
            "name": "teleporterRegistryAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "teleporterManager",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "sourceBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "tokenSourceAddress",
            "type": "address",
            "internalType": "address"
          }
        ]
      },
      {
        "name": "nativeAssetSymbol",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "initialReserveImbalance",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "decimalsShift",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "multiplyOnDestination",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "burnedFeesReportingRewardPercentage_",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "BURNED_FOR_BRIDGE_ADDRESS",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "BURNED_TX_FEES_ADDRESS",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "MULTI_HOP_CALL_GAS_PER_WORD",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "MULTI_HOP_REQUIRED_GAS",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "NATIVE_MINTER",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract INativeMinter"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "REGISTER_DESTINATION_REQUIRED_GAS",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "SOURCE_CHAIN_BURN_ADDRESS",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "allowance",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "approve",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "blockchainID",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "burnedFeesReportingRewardPercentage",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "calculateNumWords",
    "inputs": [
      {
        "name": "payloadSize",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "decimals",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "decreaseAllowance",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "subtractedValue",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deposit",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getMinTeleporterVersion",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "increaseAllowance",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "addedValue",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "initialReserveImbalance",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isCollateralized",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isRegistered",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isTeleporterAddressPaused",
    "inputs": [
      {
        "name": "teleporterAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lastestBurnedFeesReported",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "multiplyOnDestination",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "pauseTeleporterAddress",
    "inputs": [
      {
        "name": "teleporterAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "receiveTeleporterMessage",
    "inputs": [
      {
        "name": "sourceBlockchainID",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "originSenderAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "message",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerWithSource",
    "inputs": [
      {
        "name": "feeInfo",
        "type": "tuple",
        "internalType": "struct TeleporterFeeInfo",
        "components": [
          {
            "name": "feeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "reportBurnedTxFees",
    "inputs": [
      {
        "name": "requiredGasLimit",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "send",
    "inputs": [
      {
        "name": "input",
        "type": "tuple",
        "internalType": "struct SendTokensInput",
        "components": [
          {
            "name": "destinationBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "destinationBridgeAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFeeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "secondaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "requiredGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "multiHopFallback",
            "type": "address",
            "internalType": "address"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "sendAndCall",
    "inputs": [
      {
        "name": "input",
        "type": "tuple",
        "internalType": "struct SendAndCallInput",
        "components": [
          {
            "name": "destinationBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "destinationBridgeAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipientContract",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipientPayload",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "requiredGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipientGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "multiHopFallback",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "fallbackRecipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFeeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "secondaryFee",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "sourceBlockchainID",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "teleporterRegistry",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract TeleporterRegistry"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenMultiplier",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenSourceAddress",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalMinted",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalNativeAssetSupply",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalSupply",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transfer",
    "inputs": [
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "name": "newOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unpauseTeleporterAddress",
    "inputs": [
      {
        "name": "teleporterAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateMinTeleporterVersion",
    "inputs": [
      {
        "name": "version",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdraw",
    "inputs": [
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "spender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "value",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CallFailed",
    "inputs": [
      {
        "name": "recipientContract",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CallSucceeded",
    "inputs": [
      {
        "name": "recipientContract",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Deposit",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MinTeleporterVersionUpdated",
    "inputs": [
      {
        "name": "oldMinTeleporterVersion",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "newMinTeleporterVersion",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReportBurnedTxFees",
    "inputs": [
      {
        "name": "teleporterMessageID",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "feesBurned",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TeleporterAddressPaused",
    "inputs": [
      {
        "name": "teleporterAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TeleporterAddressUnpaused",
    "inputs": [
      {
        "name": "teleporterAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensAndCallSent",
    "inputs": [
      {
        "name": "teleporterMessageID",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "sender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "input",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct SendAndCallInput",
        "components": [
          {
            "name": "destinationBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "destinationBridgeAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipientContract",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipientPayload",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "requiredGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipientGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "multiHopFallback",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "fallbackRecipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFeeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "secondaryFee",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensSent",
    "inputs": [
      {
        "name": "teleporterMessageID",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "sender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "input",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct SendTokensInput",
        "components": [
          {
            "name": "destinationBlockchainID",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "destinationBridgeAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFeeTokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "primaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "secondaryFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "requiredGasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "multiHopFallback",
            "type": "address",
            "internalType": "address"
          }
        ]
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TokensWithdrawn",
    "inputs": [
      {
        "name": "recipient",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "value",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Withdrawal",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  }
]
