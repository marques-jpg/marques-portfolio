import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Inicializa a fonte Inter
const inter = Inter({ subsets: ["latin"] });

// Os teus metadados
export const metadata: Metadata = {
  title: "Gonçalo Marques | Portefólio",
  description: "Portefólio de Gonçalo Marques, Estudante de Engenharia Informática e de Computadores no Instituto Superior Técnico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-[#1a1a1a] text-black dark:text-white min-h-screen`}>
        <div className="max-w-3xl mx-auto px-6 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}