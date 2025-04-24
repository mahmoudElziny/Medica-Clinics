import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-lg">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/services" className="text-[#5A6A7A] hover:text-[#008B8B] transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-[#5A6A7A] hover:text-[#008B8B] transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-[#5A6A7A] hover:text-[#008B8B] transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
