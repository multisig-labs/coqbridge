import { avalancheFuji } from "viem/chains";
import { coqnet } from "./chain";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

export const chains = [avalancheFuji, coqnet];

export const wagmiConfig = getDefaultConfig({
  appName: "CoqBridge",
  projectId: "14ced539274121ccca8d831af2c0a924",
  chains: [avalancheFuji, coqnet],
  ssr: true,
});
