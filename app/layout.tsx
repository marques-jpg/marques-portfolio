import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}`
        }} />
      </head>
      <body className={`${jetbrains.className} bg-page text-ink min-h-screen flex flex-col px-6 py-6 md:px-16 md:py-10`}>
        <Navbar />
        <main className="flex-grow flex flex-col justify-center max-w-5xl w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}