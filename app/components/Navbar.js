import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/logo.jpg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <div className="flex justify-between items-center gap-5">
        <Image
          src={LogoImage}
          className="rounded-full"
          alt="logo"
          width={40}
          height={40}
        />
        <Link href="/" className="text-xl font-semibold text-primary">
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
        <button className="ml-16 bg-primary-light hover:bg-primary rounded-3xl px-5 py-3 text-white text-sm font-semibold">
          Book now
        </button>
      </div>
    </nav>
  );
}
