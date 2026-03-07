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
      {/* Reduzi o p-16 para py-8 para não roubar tanto ecrã na vertical */}
      <body className={`${inter.className} bg-[#1a1a1a] text-white min-h-screen flex flex-col px-8 py-4 md:px-16 md:py-8`}>
        <Navbar />
        {/* Removi o mt-12 e mb-20. O flex-grow e justify-center tratam de centrar sozinhos! */}
        <main className="flex-grow flex flex-col justify-center max-w-4xl w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}