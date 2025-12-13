import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_KR } from "next/font/google"; // Added Noto_Sans_KR
import "./globals.css";
import React from "react";
import NoiseOverlay from "@/components/NoiseOverlay";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation"; // Added
import GlobalFooter from "@/components/GlobalFooter"; // Added

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Remin | Clearing the Mind",
  description: "From fog to clarity. A mental health journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${notoSansKr.variable} antialiased bg-remin-clear text-remin-text selection:bg-remin-blue selection:text-white`}
      >
        <SmoothScroll />
        <NoiseOverlay />
        <Navigation />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
