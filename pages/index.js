import React from "react";
import { Footer, HeroSection, Header, Card } from "../components/index";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
// import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';



const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: '95f8ce26a83baf6d9b6db95a07e082a1',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
  ],
  ssr: false,
});

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
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

// const home = () => {
//   return(
//     <div className="bg-[#1A1A1A]">
//     Hey
//       <Header/>
//       {/* <HeroSection/>
//       <Card/>
//       <Footer/> */}
//       <ConnectButton/>
//     </div>
//   );
// };

// export default home;
