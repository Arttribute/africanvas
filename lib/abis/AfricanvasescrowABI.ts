export const AfricanvasescrowABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "commissionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "artist",
        type: "address",
      },
    ],
    name: "CommissionAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "commissionId",
        type: "uint256",
      },
    ],
    name: "CommissionApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "commissionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "artworkHash",
        type: "string",
      },
    ],
    name: "CommissionCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "commissionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "client",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "CommissionRequested",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_commissionId",
        type: "uint256",
      },
    ],
    name: "acceptCommission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_commissionId",
        type: "uint256",
      },
    ],
    name: "approveCommission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "commissionCount",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "commissions",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "client",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "artist",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "status",
        type: "string",
      },
      {
        internalType: "string",
        name: "artworkHash",
        type: "string",
      },
      {
        internalType: "bool",
        name: "clientApproved",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_commissionId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_artworkHash",
        type: "string",
      },
    ],
    name: "completeCommission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_commissionId",
        type: "uint256",
      },
    ],
    name: "getCommission",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "client",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "artist",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "string",
            name: "artworkHash",
            type: "string",
          },
          {
            internalType: "bool",
            name: "clientApproved",
            type: "bool",
          },
        ],
        internalType: "struct AfricanvasEscrow.Commission",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "requestCommission",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
