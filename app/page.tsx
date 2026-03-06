import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-gray-800 dark:text-gray-200">
      <div className="space-y-24">
        <Hero />
        <Projects />
        <Experience />
      </div>
      <Footer />
    </main>
  );
}