import type { Metadata } from "next";
import { Open_Sans, Poppins, DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-dm",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agrowise",
  description:
    "Agrowise is an innovative agricultural platform that connects consumers with farmers implementing sustainable farming practices through the Community Supported Agriculture (CSA) concept.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" sizes="any" />
      <body
        className={`${inter.className} ${inter.variable} ${poppins.variable} ${dmSans.variable}`}
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
