"use client";

import { useState } from "react";
import { Settings03Icon } from "hugeicons-react";
import { ArrowDown01Icon } from "hugeicons-react";

import { WalletAdd } from "iconsax-react";

import SlippageModal from "./SlippageModal";
import TokenSelectorModal from "./TokenSelectorModal";

import Image from "next/image";

type Mode = "deposit" | "withdraw";

const Calculator = () => {
  const [isSlippageModalOpen, setIsSlippageModalOpen] = useState(false);
  const [slippage, setSlippage] = useState(0.5);
  const [mode, setMode] = useState<Mode>("deposit");
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState({
    name: "Dogecoin",
    symbol: "DOGE",
    image: "/assets/tokens/doge.svg",
  });

  return (
    <div className="relative flex">
      <div className="w-[600px] h-[500px] bg-white/[0.07] border border-white rounded-md shadow-[2.69px_2.69px_0px_0px_rgba(255,255,255,1)]">
        <div className="flex flex-row gap-4 mx-[34px] mt-[14px] translate-y-[-50px]">
          {/* Deposit/Withdraw Toggle */}
          <div className="flex bg-[#171A35] border border-white rounded-[7px] shadow-[0_2px_0_0_rgba(255,255,255,1)] p-2">
            <button
              onClick={() => setMode("deposit")}
              className={`px-12 py-2 rounded-[4.3px] text-white font-dxdynamix transition-all duration-200 
                ${
                  mode === "deposit"
                    ? "bg-[#1A3DCA] border border-white"
                    : "hover:bg-white/5"
                }`}
            >
              Deposit
            </button>
            <button
              onClick={() => setMode("withdraw")}
              className={`px-12 py-2 ml-2 rounded-[4.3px] text-white font-dxdynamix transition-all duration-200
                ${
                  mode === "withdraw"
                    ? "bg-[#1A3DCA] border border-white"
                    : "hover:bg-white/5"
                }`}
            >
              Withdraw
            </button>
          </div>

          {/* Slippage Settings Button */}
          <button
            onClick={() => setIsSlippageModalOpen(true)}
            className="flex items-center justify-center h-[52px] bg-[#1A3DCA] border border-white rounded-[7px] shadow-[0_2px_0_0_rgba(255,255,255,1)] hover:bg-[#1534b1] transition-colors"
          >
            <div className="flex items-center gap-[5px] mx-[16px]">
              <Settings03Icon className="text-white" />
              <span className="text-white text-sm font-dxdynamix">
                Slippage: {slippage}%
              </span>
            </div>
          </button>
        </div>

        <div className="flex flex-col gap-6 px-8">
          {/*Deposit Card*/}
          <div className="w-[full] bg-[#171A35] flex flex-row border rounded-lg p-4 shadow-[0_3px_0_0_rgba(255,255,255,1)]">
            <div className="flex flex-1 flex-col w-1/2">
              <div className="text-sm font-dxdynamix">Deposit</div>
              <input
                type="text"
                value="0.00"
                disabled
                className="bg-[#171A35] outline-none font-dxdynamix my-4 text-4xl text-gray-600"
              />
              <div className="text-xs">$0</div>
            </div>

            <div className="flex flex-1 flex-col items-center gap-2">
              <div className="font-dxdynamix text-md">
                Assets Balance: 100.00 DOGE
              </div>

              {/*Token selector*/}
              <button
                onClick={() => setIsTokenModalOpen(true)}
                className="flex items-center justify-between w-full border bg-[#1A3DCA] hover:bg-[#1534b1] rounded-md px-4 py-2 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={selectedToken.image}
                    alt={`${selectedToken.name} Logo`}
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-dxdynamix">
                    {selectedToken.symbol}
                  </span>
                </div>
                <ArrowDown01Icon className="text-white w-4 h-4" />
              </button>

              {/*Range Slider*/}
              <div className="w-full relative">
                <input
                  type="range"
                  min={0}
                  max={3}
                  step={1}
                  className="w-full h-2 rounded-md outline outline-1 outline-white appearance-none bg-[#1A3DCA] cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[url('/assets/tokens/doge.svg')] [&::-webkit-slider-thumb]:bg-contain [&::-webkit-slider-thumb]:bg-no-repeat [&::-webkit-slider-thumb]:bg-center [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:bg-[url('/assets/tokens/doge.svg')] [&::-moz-range-thumb]:bg-contain [&::-moz-range-thumb]:bg-no-repeat [&::-moz-range-thumb]:bg-center [&::-moz-range-thumb]:border-0"
                />
                {/* Dots */}
                <div className="absolute top-[60%] -translate-y-1/2 left-0 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-[60%] -translate-y-1/2 left-1/3 -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-[60%] -translate-y-1/2 left-2/3 -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-[60%] -translate-y-1/2 right-0 w-3 h-3 bg-white rounded-full"></div>
                {/* Labels */}
                <div className="absolute top-[100%] left-0 text-xs text-white font-dxdynamix">
                  min
                </div>
                <div className="absolute top-[100%] left-1/3 -translate-x-1/2 text-xs text-white font-dxdynamix">
                  25%
                </div>
                <div className="absolute top-[100%] left-2/3 -translate-x-1/2 text-xs text-white font-dxdynamix">
                  75%
                </div>
                <div className="absolute top-[100%] right-0 -translate-x-1/2 text-xs text-white font-dxdynamix">
                  max
                </div>
              </div>
            </div>
          </div>

          {/*Receive Card*/}
          <div className="w-[full] bg-[#171A35] flex flex-row border rounded-lg p-4 shadow-[0_3px_0_0_rgba(255,255,255,1)]">
            <div className="flex flex-1 flex-col w-1/2">
              <div className="text-sm font-dxdynamix">Receive</div>
              <input
                type="text"
                value="0.00"
                disabled
                className="bg-[#171A35] outline-none font-dxdynamix my-4 text-4xl text-gray-600"
              />
              <div className="text-xs bg-[#F6851B] px-2 rotate-[-5deg] max-w-fit rounded-xl">
                1 DOGE = 0.890 ms DOGE
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center gap-2">
              <div className="font-dxdynamix text-md">
                ms DOGE Balance: 0.000 DOGE
              </div>
              {/*Token selector*/}
              <button className="flex items-center justify-between w-full border bg-[#1A3DCA] hover:bg-[#1534b1] rounded-md px-4 py-2 transition-colors">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/Ms Doge.png"
                    alt="MS Doge Logo"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-dxdynamix">DOGE</span>
                </div>
              </button>
            </div>
          </div>

          {/*Connect Wallet Button*/}
          <button className="w-full h-[50px] bg-black hover:bg-black/90 border border-white rounded-[10.4px] px-4 py-2 transition-colors shadow-[0_2px_0_0_rgba(255,255,255,1)] flex items-center justify-center gap-[7px]">
            <span className="text-white font-dxdynamix">Connect Wallet</span>
            <WalletAdd variant="Bold" color="white" size={20} />
          </button>
        </div>
      </div>

      <SlippageModal
        isOpen={isSlippageModalOpen}
        onClose={() => setIsSlippageModalOpen(false)}
        onSlippageChange={setSlippage}
        currentSlippage={slippage}
      />

      <TokenSelectorModal
        isOpen={isTokenModalOpen}
        onClose={() => setIsTokenModalOpen(false)}
        onSelect={(token) => {
          setSelectedToken(token);
          setIsTokenModalOpen(false);
        }}
      />
    </div>
  );
};

export default Calculator;
