import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-24 text-gray-800 dark:text-gray-200">
      <Hero />
      <Projects />
      <Experience />
    </main>
  );
}