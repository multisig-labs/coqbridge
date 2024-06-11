import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from 'viem/accounts';
import { avalancheFuji } from "viem/chains";

export const walletFujiClient = createWalletClient({
  chain: avalancheFuji,
  transport: http()
});

export const faucetAccount = privateKeyToAccount(process.env.PK as `0x${string}`);
