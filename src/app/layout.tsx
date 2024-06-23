import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const lato = Lexend({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pure Feedback",
  description: "Developed By Jayash Saini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} first-color overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
