import { ethers } from 'ethers'

export const CLI_QUESTIONS = [
  {
    default: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
    message: 'ERC20 address you want to query',
    name: 'erc20Address',
    type: 'string',
    validate: (answer: string) =>
      ethers.utils.isAddress(answer) || 'Invalid address',
  },
  {
    default: '1000',
    message:
      'Minimum balance of ERC20 one must own to be part of the anonymity set',
    name: 'minBalance',
    type: 'string',
    validate: (answer: string) =>
      answer.match(/^[0-9]+$/)?.length !== undefined || 'Invalid number',
  },
  {
    message:
      'Raw signature (0x-prefixed) of the message signed by the private key of the address you want to prove is part of the list of addresses',
    name: 'rawSignature',
    type: 'string',
    validate: (answer: string) =>
      answer.match(/^0x[0-9a-fA-F]{130}$/)?.length !== undefined ||
      'Invalid raw signature format',
  },
  {
    default: 'Hello PSE',
    message: 'Message that you signed',
    name: 'message',
    type: 'string',
    validate: (answer: string) => answer.length !== 0 || 'Invalid message',
  },
]
