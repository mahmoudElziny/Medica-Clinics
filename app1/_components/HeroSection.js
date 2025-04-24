import Link from "next/link";


export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#40095d]">
            <h1 className="text-4xl font-bold text-[#FBFBFF]">Welcome to Medica Clinics</h1>
            <p className="text-lg text-[#FBFBFF] my-4">Your health is our priority</p>
            <Link href="/about" className="bg-[#008B8B] hover:bg-[#008B8B] text-[#FBFBFF] px-6 py-3 rounded-lg">
                Read more
            </Link>
        </div>
    );
}