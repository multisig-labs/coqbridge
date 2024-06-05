import { createWalletClient, createPublicClient, http } from "viem";
import { avalancheFuji } from "viem/chains";
import { coqnet } from "./chain";

export const publicFujiClient = createPublicClient({
  chain: avalancheFuji,
  transport: http()
});

export const publicCoqnetClient = createPublicClient({
  chain: coqnet,
  transport: http()
});

export const walletFujiClient = createWalletClient({
  chain: avalancheFuji,
  transport: http()
});
