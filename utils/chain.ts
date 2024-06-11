import { createPublicClient, defineChain, http } from "viem";
import { avalancheFuji } from "viem/chains";

export const coqnet = defineChain({
  id: 10255,
  name: "Coqnet",
  nativeCurrency: {
    decimals: 18,
    name: "Coqinu",
    symbol: "COQ",
  },
  rpcUrls: {
    default: {
      http: ["https://subnets.avax.network/coqnet/testnet/rpc"],
    },
  },
});

export const publicFujiClient = createPublicClient({
  chain: avalancheFuji,
  transport: http(),
});

export const publicCoqnetClient = createPublicClient({
  chain: coqnet,
  transport: http(),
});
