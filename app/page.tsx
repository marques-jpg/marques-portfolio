import Link from 'next/link';

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

      {/* Terminal — original style, rounded corners, own color palette */}
      <div className="w-full max-w-2xl rounded-xl overflow-hidden bg-black border border-gray-800 shadow-2xl">
        <div className="flex items-center px-4 py-2 bg-[#111] border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="mx-auto text-[10px] md:text-xs text-gray-500 font-mono">bash — guest@portfolio</div>
        </div>

        <div className="p-5 md:p-6 font-mono text-sm leading-relaxed text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-green-400 font-semibold">guest@portfolio:~$</span>
            <span className="text-gray-100">cat README.md</span>
          </div>
          <p className="text-gray-300">
            Passionate about cybersecurity, software engineering, embedded systems, and web development.
            When I&apos;m not coordinating tech events, I&apos;m probably writing code or tinkering with an Arduino.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-green-400 font-semibold">guest@portfolio:~$</span>
            <span className="w-2 h-4 bg-gray-400 animate-pulse"></span>
          </div>
        </div>
      </div>

    </div>
  );
}