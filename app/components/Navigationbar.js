'use client';

import Link from 'next/link';

export default function NavigationBar() {
    return (
        <nav className="flex gap-8 text-base font-medium text-dark">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}
