import { defineChain } from 'viem'

export const coqnet = defineChain({
  id: 10255,
  name: 'Coqnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Coqinu',
    symbol: 'COQ',
  },
  rpcUrls: {
    default: {
      http: ['https://subnets.avax.network/coqnet/testnet/rpc'],
    },
  }
})
