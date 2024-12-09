"use client";

import { Home2, Book1, InfoCircle, WalletAdd } from "iconsax-react";
import { DashboardCircleSettingsIcon, Analytics01Icon } from "hugeicons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center w-full my-8">
      <div className="flex flex-row justify-between items-center gap-5 max-w-[1040px]">
        {/* Left section with logo and nav links */}
        <div className="flex flex-row items-center gap-[60px] bg-[#204AF8]/90 border border-white rounded-lg p-2.5 shadow-[0_2px_0_0_rgba(255,255,255,1)]">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <Image src="/assets/logo.png" width={72} height={21} alt="logo" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row items-center gap-8">
            <NavLink icon={<Home2 size="20" color="#FFFFFF" />} text="Home" />
            <NavLink
              icon={<DashboardCircleSettingsIcon size="20" color="#FFFFFF" />}
              text="Admin"
            />
            <NavLink
              icon={<Analytics01Icon size="20" color="#FFFFFF" />}
              text="Analytics"
            />
            <NavLink icon={<Book1 size="20" color="#FFFFFF" />} text="Guide" />
            <NavLink
              icon={<InfoCircle size="20" color="#FFFFFF" />}
              text="About"
            />
          </div>
        </div>

        {/* Right section with buttons */}
        <div className="flex gap-5">
          {/* Discord button */}
          <button className="flex items-center justify-center w-[66px] h-[52px] bg-[#7B61FF] border border-white rounded-xl shadow-[0_2px_0_0_rgba(255,255,255,1)]">
            <Image
              src="/assets/discord.png"
              width={32}
              height={32}
              alt="discord"
            />
          </button>

          {/* Wallet button - only show on /home */}
          {pathname === "/home" && (
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
              }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                return (
                  <div
                    {...(!ready && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={openConnectModal}
                            className="flex items-center px-4 py-3 bg-black border border-white rounded-xl shadow-[0_2px_0_0_rgba(255,255,255,1)] hover:bg-black/80 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-white">Connect Wallet</span>
                              <WalletAdd size="20" color="#FFFFFF" />
                            </div>
                          </button>
                        );
                      }

                      return (
                        <button
                          onClick={openAccountModal}
                          className="flex items-center px-4 py-3 bg-black border border-white rounded-xl shadow-[0_2px_0_0_rgba(255,255,255,1)] hover:bg-black/80 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-white">
                              {account.displayName}
                            </span>
                            <WalletAdd size="20" color="#FFFFFF" />
                          </div>
                        </button>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper component for navigation links
const NavLink = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex flex-row items-center gap-1 cursor-pointer">
    {icon}
    <span className="text-white text-md">{text}</span>
  </div>
);

export default Navbar;
