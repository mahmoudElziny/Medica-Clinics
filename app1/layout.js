import Header from "./_components/Header";
import "./_styles/globals.css"
import { Josefin_Sans } from "next/font/google"

const josefin = Josefin_Sans({
  subsets: ['latin'],
  dispalay: 'swap',
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description: "Luxurious cabins hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountain lakes and dark forest.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />

        <div>
          <main>
            {children}
          </main>
        </div>

      </body>
    </html>
  )
}
