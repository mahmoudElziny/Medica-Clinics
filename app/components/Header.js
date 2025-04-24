'use client';

import Logo from './Logo';
import NavigationBar from './Navigationbar';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-6 bg-white shadow-md">
            <Logo />
            <NavigationBar />
        </header>
    );
}
