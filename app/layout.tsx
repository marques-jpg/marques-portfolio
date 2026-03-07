import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guilherme Marques | Portefólio",
  description: "Portefólio de Guilherme Marques, Estudante de Engenharia Informática.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* O bg-[#1a1a1a] força o fundo escuro da imagem que enviaste */}
      <body className={`${inter.className} bg-[#1a1a1a] text-white min-h-screen`}>
        {/* max-w-5xl alarga a página */}
        <div className="max-w-5xl mx-auto px-8 flex flex-col min-h-screen">
          <Navbar />
          {/* flex-grow flex flex-col justify-center centra a página inicial verticalmente */}
          <main className="flex-grow flex flex-col justify-center pb-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}