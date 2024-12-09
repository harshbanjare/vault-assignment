import Image from "next/image";
import { useState, useMemo } from "react";

import { CoinsSwapIcon } from "hugeicons-react";

interface Token {
  name: string;
  symbol: string;
  image: string;
}

const depositTokens: Token[] = [
  {
    name: "Dogecoin",
    symbol: "DOGE",
    image: "/assets/tokens/doge.svg",
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB",
    image: "/assets/tokens/shiba.svg",
  },
  {
    name: "Pepe",
    symbol: "PEPE",
    image: "/assets/tokens/pepe.svg",
  },
  {
    name: "Bonk",
    symbol: "BONK",
    image: "/assets/tokens/bonk.svg",
  },
  {
    name: "Floki",
    symbol: "FLOKI",
    image: "/assets/tokens/floki.svg",
  },
];

const withdrawTokens: Token[] = [
  {
    name: "MS Doge",
    symbol: "DOGE",
    image: "/assets/tokens/ms_doge.png",
  },
  {
    name: "MS SHIB",
    symbol: "SHIB",
    image: "/assets/tokens/ms_shib.png",
  },
  {
    name: "MS PEPE",
    symbol: "PEPE",
    image: "/assets/tokens/ms_pepe.png",
  },
  {
    name: "MS BONK",
    symbol: "BONK",
    image: "/assets/tokens/ms_bonk.png",
  },
  {
    name: "MS FLOKI",
    symbol: "FLOKI",
    image: "/assets/tokens/ms_floki.png",
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (token: Token) => void;
  mode: "deposit" | "withdraw";
}

const TokenSelectorModal = ({ isOpen, onClose, onSelect, mode }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const tokens = mode === "deposit" ? depositTokens : withdrawTokens;

  const filteredTokens = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return tokens;

    return tokens.filter(
      (token) =>
        token.name.toLowerCase().includes(term) ||
        token.symbol.toLowerCase().includes(term)
    );
  }, [searchTerm, tokens]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-lg"
        onClick={onClose}
      />

      <div className="relative z-10 w-[448px] bg-[#000814] border border-white rounded-md shadow-[0_4px_0_0_rgba(255,255,255,1)]">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <CoinsSwapIcon className="w-5 h-5 text-white" />
            <div className="text-white font-dxdynamix">Set a token</div>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search coins"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 px-11 bg-white/5 rounded-md text-white placeholder-white/20 outline-none"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="space-y-2">
            {filteredTokens.length > 0 ? (
              filteredTokens.map((token) => (
                <button
                  key={token.symbol}
                  onClick={() => onSelect(token)}
                  className="flex items-center w-full p-4 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={token.image}
                      alt={`${token.name} Logo`}
                      width={36}
                      height={36}
                    />
                    <span className="text-white font-dxdynamix">
                      {token.name} {mode === "deposit" ? token.symbol : ""}
                    </span>
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center py-8 text-white/50 font-dxdynamix">
                No tokens found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSelectorModal;
