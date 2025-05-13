import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

const metadata = {
  title: "Medica Clinics",
  description:
    "Medical services including plastic surgery, laser, and dental care",
};

export default function Home() {
  return (
    <div className="bg-transparent">
      <HeroSection />
      <Services />
      <WhyChooseUs />
    </div>
  );
}
