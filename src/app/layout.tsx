import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./built-globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amir Yousry | Senior Vibe Engineer",
  description: "Building world-class AI products with speed and precision.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth dark">
      <body
        className={`${ibmPlexSansArabic.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-primary`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
