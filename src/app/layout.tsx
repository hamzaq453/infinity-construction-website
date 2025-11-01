import type { Metadata } from "next";
import { Josefin_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/layout/CTA';
import WhatsAppButton from '@/components/layout/WhatsAppButton';


const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinity Construction Company",
  description: "Infinity Construction Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <CTA/>
        <Footer/>
        <WhatsAppButton/>
      </body>
    </html>
  );
}
