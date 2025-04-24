'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <div className="flex items-center gap-4 z-10">
            <Image src="/logo.jpg" height="40" width="40" quality={100} className="rounded-full" alt="The Medica Clinics logo" />
            <Link href="/" className="text-2xl font-bold text-primary">
                Medica Clinics
            </Link>
        </div>
    );
}
