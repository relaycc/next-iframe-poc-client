import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";

import ErrorBoundary from "../components/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: false,
    connectors,
    provider,
  });

  return (
    <ErrorBoundary>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ErrorBoundary>
  );
}
