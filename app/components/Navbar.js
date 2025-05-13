"use client";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/logo.jpg";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const dancing = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-20 bg-white">
      <div className="flex justify-between items-center gap-5">
        <Image
          src={LogoImage}
          className="rounded-full"
          alt="logo"
          width={45}
          height={45}
        />
        <Link
          href="/"
          className={`${dancing.className} text-4xl font-bold text-primary`}
        >
          Medica Clinics
        </Link>
      </div>
      <div className="flex items-center justify-between gap-10 text-sm">
        <Link href="/" className="font-semibold hover:text-primary-light">
          Home
        </Link>
        <Link href="/about" className="font-semibold hover:text-primary-light">
          About
        </Link>
        <Link
          href="/services"
          className="font-semibold hover:text-primary-light"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="font-semibold hover:text-primary-light"
        >
          Contact
        </Link>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-16 bg-primary-light hover:bg-primary rounded-3xl px-5 py-3 text-white text-sm font-semibold shadow-lg"
        >
          Book now
        </motion.button>
      </div>
    </nav>
  );
}
