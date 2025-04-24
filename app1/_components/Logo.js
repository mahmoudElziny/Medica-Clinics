import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.jpg";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} height="40" width="40" quality={100} className="rounded-full" alt="The Medica Clinics logo" />
      <span className="text-xl font-semibold text-[#5A6A7A]">
        MedicaClinics
      </span>
    </Link>
  );
}

export default Logo;
