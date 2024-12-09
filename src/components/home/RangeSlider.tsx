const RangeSlider = () => {
  return (
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
  );
};

export default RangeSlider;
