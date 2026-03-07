import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guilherme Marques | Portefólio",
  description: "Portefólio de Guilherme Marques, Estudante de Engenharia Informática e de Computadores no IST.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1a1a1a] text-white min-h-screen flex flex-col p-8 md:p-16`}>
        <Navbar />
        <main className="flex-grow flex flex-col justify-center max-w-4xl mt-12 mb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}