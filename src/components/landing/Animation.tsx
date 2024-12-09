import Image from "next/image";

const Animation = () => {
  return (
    <div className="my-20 relative h-[200px] flex items-center justify-center">
      {/** Cartoons - all centered behind the logo initially*/}
      <Image
        src="/assets/ponke.png"
        width={50}
        height={50}
        className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        animate-[slideUpPonke_3s_ease-in-out_forwards]"
        alt="ponke"
        priority
      />
      <Image
        src="/assets/doge1.png"
        width={50}
        height={50}
        className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        animate-[slideUpDoge1_3s_ease-in-out_forwards]"
        alt="doge1"
        priority
      />
      <Image
        src="/assets/pepe.png"
        width={50}
        height={50}
        className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        animate-[slideUpPepe_3s_ease-in-out_forwards]"
        alt="pepe"
        priority
      />
      <Image
        src="/assets/doge2.png"
        width={50}
        height={50}
        className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        animate-[slideUpDoge2_3s_ease-in-out_forwards]"
        alt="doge2"
        priority
      />

      {/** animated component - hidden by default only visible at the last step of animation */}
      <Image
        src="/assets/animation-component.png"
        width={420}
        height={420}
        className="absolute z-40 animate-[showAnimatedComponent_3s_ease-in-out_forwards] opacity-0"
        alt="animated component"
        priority
      />

      {/** Main Logo  */}
      <Image
        src="/assets/hero-logo.png"
        width={140}
        height={140}
        className="z-50 relative animate-[moveLogo_3s_ease-in-out_forwards]"
        alt="hero logo"
        priority
      />
    </div>
  );
};

export default Animation;
