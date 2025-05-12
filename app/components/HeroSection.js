import Image from "next/image";
import nurse from "../../public/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background.png";

export default function HeroSection() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-8 w-1/2 justify-center ">
        <h1 className={`text-4xl leading-normal font-semibold text-primary`}>
          Special Care and Best <br />
          Treatment
        </h1>
        <p className="text-sm text-gray">
          i must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth.
        </p>
        <button className="bg-primary-light hover:bg-primary rounded-3xl px-5 py-3 text-white text-sm font-semibold items-start w-44">
          Contact Us
        </button>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Image src={nurse} alt="hero" className="w-[1000px]" />
      </div>
    </div>
  );
}
