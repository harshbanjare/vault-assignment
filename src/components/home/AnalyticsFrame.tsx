import { InformationCircleIcon } from "hugeicons-react";
import Image from "next/image";

const AnalyticsFrame: React.FC = () => {
  return (
    <div className="relative flex">
      {/* Main analytics frame */}
      <div className="w-[500px] h-[500px] bg-white/[0.07] border border-white rounded-md shadow-[2.69px_2.69px_0px_0px_rgba(255,255,255,1)]">
        {/* Analytics header */}
        <div className="relative flex flex-col gap-3 mx-[34.5px] mt-[14px]">
          <div className="flex justify-between items-center">
            <span className="text-white font-dxdynamix">Analytics</span>
            <button className="w-[18px] h-[18px]">
              <InformationCircleIcon size={18} />
            </button>
          </div>

          {/* Chart area */}
          <div className="w-[430px] h-[200px] bg-[#171A35] border border-white rounded-[7px] shadow-[0px_2px_0px_0px_rgba(255,255,255,1)]">
            <div className="flex justify-center items-center h-full">
              <span className="text-white/30 font-dxdynamix">
                No data available
              </span>
            </div>
          </div>

          {/* Stats cards */}
          <div className="flex gap-1.5 w-full">
            {/* Current Price Card */}
            <div className="flex-1  bg-[#2049F8] border border-white rounded-[4px] p-2">
              <div className="flex gap-2">
                <Image
                  src="/assets/currentPrice.svg"
                  width={30}
                  height={30}
                  alt="current-price"
                />

                <div className="flex flex-col">
                  <span className="text-white text-md font-light">
                    Current price
                  </span>
                  <span className="text-white font-medium">0</span>
                </div>
              </div>
            </div>

            {/* TVL Card */}
            <div className="flex-1 bg-[#2049F8] border border-white rounded-[4px] p-2">
              <div className="flex gap-2">
                <Image src="/assets/tvl.svg" width={30} height={30} alt="tvl" />

                <div className="flex flex-col">
                  <span className="text-white text-md font-light">TVL</span>
                  <span className="text-white font-medium">0</span>
                </div>
              </div>
            </div>

            <div className="flex-1  bg-[#2049F8] border border-white rounded-[4px] p-2">
              <div className="flex gap-2 ">
                <Image
                  src="/assets/oneDayPrice.svg"
                  width={30}
                  height={30}
                  alt="24h-volume"
                />

                <div className="flex flex-col">
                  <span className="text-white text-md font-light">
                    24h price
                  </span>
                  <span className="text-white font-medium">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Trades section */}
          <div className="mt-4">
            <h3 className="text-white font-dxdynamix mb-3">Recent Trades</h3>
            <div className="w-full px-[15px] py-3 bg-[#F6853B]/[0.17] border border-white rounded-[7px]">
              <div className="grid grid-cols-3 gap-[74px] ">
                <span className="text-white text-xs whitespace-nowrap">
                  Timestamp
                </span>
                <span className="text-white text-xs whitespace-nowrap">
                  Token amount
                </span>
                <span className="text-white text-xs whitespace-nowrap">
                  msToken amount
                </span>
              </div>
            </div>
          </div>

          {/* Dots with curved lines */}
          <div className="absolute -right-6 top-20 flex flex-col gap-[110px] translate-x-[115px]">
            {[
              "/assets/line1.svg",
              "/assets/line2.svg",
              "/assets/line3.svg",
            ].map((line, index) => (
              <div key={index} className="relative flex items-center">
                <div className="w-4 h-4 rounded-full bg-white" />
                <div className="relative w-[111px] h-[24px]">
                  <Image
                    src={line}
                    alt={`curved-line-${index + 1}`}
                    fill
                    className="object-contain translate-x-[-5px]"
                    style={{ minWidth: "unset" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFrame;
