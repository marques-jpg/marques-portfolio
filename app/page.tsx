import Link from 'next/link';
import InteractiveTerminal from '@/components/InteractiveTerminal';

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center w-full mx-auto">

      {/* Status */}
      <div className="mb-8 text-xs tracking-wide text-ink-3">
        Computer Science &amp; Engineering Student @ IST
      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-ink leading-[1.05] mb-10">
        Guilherme<br />Marques
      </h1>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3 mb-14">
        <Link
          href="/projects"
          className="px-6 py-3 bg-ink text-page font-medium text-sm text-center hover:opacity-80 transition-opacity duration-200"
        >
          Explore My Work
        </Link>
        <Link
          href="/experience"
          className="px-6 py-3 border border-edge text-ink font-medium text-sm text-center hover:border-ink-2 transition-colors duration-200"
        >
          View Experience
        </Link>
      </div>

      {/* Interactive Terminal */}
      <InteractiveTerminal />

    </div>
  );
}