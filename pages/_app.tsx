import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { avalancheFuji } from "wagmi/chains";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { coqnet } from "../utils/chain";

const config = getDefaultConfig({
  appName: "CoqBridge",
  projectId: "14ced539274121ccca8d831af2c0a924",
  chains: [avalancheFuji, coqnet],
  ssr: true,
});

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
