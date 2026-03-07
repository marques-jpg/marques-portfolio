import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guilherme Marques",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1a1a1a] text-white min-h-screen flex flex-col px-8 py-4 md:px-16 md:py-8`}>
        <Navbar />
        <main className="flex-grow flex flex-col justify-center max-w-4xl w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}