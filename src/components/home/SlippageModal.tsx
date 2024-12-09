import { CancelSquareIcon } from "hugeicons-react";
import { Settings03Icon } from "hugeicons-react";
import { useState } from "react";

interface SlippageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSlippageChange: (value: number) => void;
  currentSlippage: number;
}

const SlippageModal = ({
  isOpen,
  onClose,
  onSlippageChange,
  currentSlippage,
}: SlippageModalProps) => {
  const [selectedSpeed, setSelectedSpeed] = useState<
    "normal" | "fast" | "instant"
  >("normal");
  if (!isOpen) return null;

  const slippageOptions = [0.3, 0.5, 1.5, 2.5];
  const speedOptions = [
    { id: "normal", label: "Normal" },
    { id: "fast", label: "Fast" },
    { id: "instant", label: "Instant" },
  ] as const;

  return (
    <div className="fixed inset-0 flex items-start justify-center pt-[102px] bg-black/50 backdrop-blur-xl z-50">
      <div className="w-[448px] bg-[#000814] border-2 border-white rounded-md shadow-[0_5px_0_0_rgba(255,255,255,1)]">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Settings03Icon className="w-6 h-6 text-white" />
            <span className="text-white font-dxdynamix">Slippage</span>
          </div>
          <button onClick={onClose} className="text-white">
            <CancelSquareIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6">
          <div className="h-[1px] bg-white/16 my-4" />

          {/* Slippage Options */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-1">
              {slippageOptions.map((value) => (
                <button
                  key={value}
                  onClick={() => onSlippageChange(value)}
                  className={`flex-1 py-3 px-6 rounded-md border border-white ${
                    currentSlippage === value
                      ? "bg-[#1A3DCA] translate-y-[2px] shadow-[0_1px_0_0_rgba(255,255,255,1)]"
                      : "bg-white/[0.02] shadow-[0_3px_0_0_rgba(255,255,255,1)]"
                  }`}
                >
                  <span className="text-white font-dxdynamix">{value}%</span>
                </button>
              ))}
            </div>

            <p className="text-white/34 text-xs text-gray-400">
              *Use recommended slippage tolerance levels for optimal performance
            </p>

            <div className="flex items-center bg-white/10 rounded-md px-4 py-3">
              <input
                type="number"
                value={currentSlippage}
                onChange={(e) => onSlippageChange(Number(e.target.value))}
                className="bg-transparent text-white/30 outline-none w-full"
                placeholder="0"
              />
              <span className="text-white">%</span>
            </div>
          </div>
        </div>

        <hr className="border-white/16 my-8 mx-6 border-gray-500" />

        {/* Transaction Speed */}
        <div className="px-6">
          <h3 className="text-white font-dxdynamix text-sm mb-4">
            Transaction speed
          </h3>
          <div className="flex gap-1">
            {speedOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedSpeed(option.id)}
                className={`flex-1 py-3 px-6 rounded-md border border-white ${
                  selectedSpeed === option.id
                    ? "bg-[#1A3DCA] translate-y-[2px] shadow-[0_1px_0_0_rgba(255,255,255,1)]"
                    : "bg-white/[0.02] shadow-[0_3px_0_0_rgba(255,255,255,1)]"
                }`}
              >
                <span className="text-white font-dxdynamix">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Confirm Button */}
        <div className="p-6 mt-8">
          <button
            onClick={onClose}
            className="w-full py-4 bg-[#1A3DCA] border border-white rounded-[10px] text-white font-dxdynamix shadow-[0_2px_0_0_rgba(255,255,255,1)]"
          >
            Set Slippage
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlippageModal;
