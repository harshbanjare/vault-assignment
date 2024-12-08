import Image from "next/image";
import { Rocket01Icon } from "hugeicons-react";
import Animation from "@/components/home/Animation";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-black my-20">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          {/* Hodling text container */}
          <div className="relative animate-[rotateHolding_0.5s_ease-out_forwards]">
            {/* Hodling background with stroke */}
            <span
              className="absolute text-6xl font-bold font-clash text-white/[0.07] 
              [-webkit-text-stroke:16px_rgba(255,255,255,0.99)] blur-[0px]
              origin-center"
            >
              Hodling
            </span>
            {/* Hodling foreground text */}
            <span
              className="relative text-6xl font-bold font-clash text-[#2049F8] 
              origin-center"
            >
              Hodling
            </span>
          </div>

          {/* "isn't just a flex" text */}
          <span className="text-white/40 text-6xl font-awesome">
            isn&apos;t just a flex,
          </span>
        </div>

        {/* "it's a Strategy" container */}
        <div className="flex items-center gap-2">
          <span className="text-white/40 text-6xl font-awesome mr-3">
            it's a{" "}
          </span>
          <div className="relative inline-block animate-[rotateStrategy_0.5s_ease-out_forwards]">
            {/* Strategy background with stroke */}
            <span
              className="absolute text-6xl font-bold font-clash text-white/[0.07] 
              [-webkit-text-stroke:16px_rgba(255,255,255,0.99)]
              origin-center"
            >
              Strategy
            </span>
            {/* Strategy foreground text */}
            <span
              className="relative text-6xl font-bold font-clash text-[#2049F8]
              origin-center"
            >
              Strategy
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 my-10">
        <button className="flex items-center justify-center w-[66px] h-[52px] bg-[#7B61FF] border border-white rounded-xl shadow-[0_2px_0_0_rgba(255,255,255,1)]">
          <Image
            src="/assets/discord.png"
            width={32}
            height={32}
            alt="discord"
          />
        </button>

        <button className="flex flex-row items-center gap-2 rounded-xl px-12 border shadow-[0_2px_0_0_rgba(255,255,255,1)]">
          <Rocket01Icon size={24} />
          Launch App
        </button>
      </div>

      <Animation />
    </div>
  );
}
