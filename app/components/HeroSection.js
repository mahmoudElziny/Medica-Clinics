"use client";
import Image from "next/image";
import nurse from "../../public/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background.png";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function HeroSection() {
  return (
    <section className="flex justify-center items-center bg-white p-20">
      <div className="flex flex-col gap-8 w-1/2 justify-center ">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`text-[46px] leading-normal font-semibold text-primary ${playfair.className}`}
        >
          Special Care and Best <br />
          Treatment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="text-sm text-gray"
        >
          i must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: "easeOut",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0 },
            }}
            className="bg-primary-light hover:bg-primary rounded-3xl px-5 py-3
        text-white text-sm font-semibold items-start w-44 shadow-lg"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="w-1/2 flex justify-center items-center"
      >
        <Image
          src={nurse}
          alt="hero"
          className="transition delay-50 duration-200 ease-in-out hover:-translate-y-1 scale-110 hover:scale-125"
        />
      </motion.div>
    </section>
  );
}
