import type { Metadata } from "next";
import { Open_Sans, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-poppins",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${openSans.variable} ${poppins.variable} ${dmSans.variable}`}
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}