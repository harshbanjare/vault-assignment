import AnalyticsFrame from "@/components/home/AnalyticsFrame";
import Calculator from "@/components/home/Calculator";

const Home: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center my-20 gap-24">
      {/* Left side - analytics frame */}
      <AnalyticsFrame />

      {/* Right side - calculator */}
      <Calculator />
    </div>
  );
};

export default Home;
