import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Karla } from "next/font/google";

import "./globals.css";

const karla = Karla({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Zinduka Afrika Foundation",
  description: "Arise! Change The World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className} bg-background antialiased text-lg`}>
        {children}
      </body>
    </html>
  );
}
