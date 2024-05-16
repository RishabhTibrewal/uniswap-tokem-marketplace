// // import React, { Children } from "react";
import "../styles/globals.css";

// // import "@rainbow-me/rainbowkit/styles.css"
// // import { mainnet, polygon, sepolia } from '@wagmi/core/chains'


// // import {
// //   getDefaultWallets,
// //   darkTheme,
// //   midnightTheme,
// //   RainbowKitProvider,
// //   configureChains,
// //   apiProvider,

// // } from "@rainbow-me/rainbowkit";

// // import { chain, createClient, WagmiProvider } from "wagmi";
// // import { infuraProvider } from "wagmi/providers/infura";

// // const { chains, provider } = configureChains(
// //   // [mainnet, polygon,sepolia],
// //   [chain.sepolia],
// //   [ 
// //     infuraProvider({ 
// //       apiKey: '8ac8af59f3714adaada9d8ea8a606c9e',
// //       priority: 1,
// //       }),
// //   ]
// // );
 

// // const { connectors }  = getDefaultWallets({

// //   appName: "Custom Dex",
// //   // mainnet, polygon, sepolia,
// //   chains,
// // });

// // const WagmiClient = createClient({
// //   autoConnect: true,
// //   connectors,
// //   // publicClient,
// //   provider,
// // });


// // const myTheme = merge(midnightTheme(), {
// //   colors: {
// //     accentColor: '#18181b',
// //     accentColorForeground: "#fff",
// //   },
// // });

// // function MyApp({ Component, pageProps }) {
// //   return (
// //     <WagmiConfig client={WagmiClient}>
// //       <RainbowKitProvider chains={chains} theme= {myTheme}>
// //         <Component {...pageProps}/>
// //       </RainbowKitProvider>
// //     </WagmiConfig>
// //   );
// // }

// // // export default MyApp;


// import '@rainbow-me/rainbowkit/styles.css';
// import { getDefaultConfig, RainbowKitProvider, } from '@rainbow-me/rainbowkit';
// import { WagmiProvider } from 'wagmi';
// import { mainnet, polygon, optimism, arbitrum, base, sepolia } from 'wagmi/chains';
// import { QueryClientProvider, QueryClient,} from "@tanstack/react-query";

// const config = getDefaultConfig({
//   appName: 'My RainbowKit App',
//   projectId: '95f8ce26a83baf6d9b6db95a07e082a1',
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: false, // If your dApp uses server side rendering (SSR)
// });

// const queryClient = new QueryClient();
// function MyApp() { 
//   return (
//     <WagmiProvider config={config}>
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider>
//           {/* Your App */}
//         {Children}
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   );
// };

// export default MyApp;


import { ConnectButton } from '@rainbow-me/rainbowkit';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton />
    </div>
  );
};

export default App;
