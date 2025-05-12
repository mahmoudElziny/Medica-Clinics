import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Medica Clinics",
  description:
    "Medical services including plastic surgery, laser, and dental care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="w-4/5 mx-auto">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
