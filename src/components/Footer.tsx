import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-32 pb-8 overflow-hidden">
      <div className="relative max-w-[1040px] mx-auto px-4">
        {/* Top row*/}
        <div className="flex flex-col md:flex-row justify-between mb-20">
          {/* Left column - Logo and description */}
          <div className="flex flex-col gap-6 max-w-[531px]">
            <img
              src="/assets/logo-footer.png"
              className="w-[140px]  h-[50px]"
              alt="logo"
            />

            <p className="text-white/50">
              The ultimate platform for turning coins into long-term gains.
              Stake, hold, and grow your assets with strategies designed for
              degen investors
            </p>
          </div>

          {/* Right column - Product links */}
          <div className="flex flex-col gap-4 mt-8 md:mt-0">
            <h3 className="text-white font-medium">Product</h3>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white/50 hover:text-white">
                About product
              </a>
              <a href="#" className="text-white/50 hover:text-white">
                Guide
              </a>
              <div className="flex items-center gap-1 text-white/50 hover:text-white cursor-pointer">
                <span>Join Discord</span>
                <Image
                  src="/assets/discord.png"
                  width={20}
                  height={20}
                  alt="discord"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex justify-center">
          <div className="text-sm text-white/60">
            2024 @metaborong all rights reserved
          </div>
        </div>
      </div>

      {/* Background gradient circle */}
      <div className="absolute left-1/2 -translate-x-1/2 translate-y-[70%] bottom-0 w-[780px] h-[780px] rounded-full bg-gradient-radial from-white/10 to-white/0 blur-md -z-10" />
    </footer>
  );
};

export default Footer;
