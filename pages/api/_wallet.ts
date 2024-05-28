import { createWalletClient, createPublicClient, http } from "viem";
import { privateKeyToAccount } from 'viem/accounts'
import { avalancheFuji } from "viem/chains";
import { coqnet } from "../../utils/chain";

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

//export const faucetAccount = privateKeyToAccount(process.env.PK as `0x${string}`);
