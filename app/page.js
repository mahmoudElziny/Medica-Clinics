import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-transparent">
      <HeroSection />
      <Services />
      <WhyChooseUs />
    </div>
  );
}
