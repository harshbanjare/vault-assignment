"use client";

import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiConfig, chains } from "@/config/wagmi";
import "@rainbow-me/rainbowkit/styles.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";
import "./fonts.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: "#2049F8",
              borderRadius: "large",
            })}
          >
            <Navbar />
            {children}
            <Footer />
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
