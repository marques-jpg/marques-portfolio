import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full mx-auto">
      
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-yellow-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute top-20 -right-10 w-72 h-72 bg-yellow-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        <div className="space-y-6 md:space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-300 backdrop-blur-md w-max">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Computer Science and Engineering Student @ IST
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-300">
              Guilherme Marques
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link 
              href="/projects" 
              className="px-6 py-2.5 md:px-8 md:py-3 rounded-lg bg-white text-black font-semibold text-sm md:text-base text-center hover:bg-gray-200 hover:scale-105 transition-all duration-200"
            >
              Explore My Work
            </Link>
            <Link 
              href="/experience" 
              className="px-6 py-2.5 md:px-8 md:py-3 rounded-lg bg-transparent text-white border border-gray-600 font-semibold text-sm md:text-base text-center hover:bg-transparent-200 hover:scale-105 transition-all duration-200"
            >
              View Experience
            </Link>
          </div>
        </div>

        <div className="w-full rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
          <div className="flex items-center px-4 py-2 bg-[#161b22] border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="mx-auto text-[10px] md:text-xs text-gray-500 font-mono">bash - guest@portfolio</div>
          </div>
          
          <div className="p-5 md:p-6 font-mono text-sm leading-relaxed">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-yellow-400 font-semibold">guest@portfolio:~$</span>
              <span className="text-gray-100">cat about_me.txt</span>
            </div>
            <p className="text-gray-300">
              Passionate about software engineering, embedded systems, cybersecurity, and hardware prototyping. 
              When I'm not organizing tech events, I'm probably writing code or tinkering with an Arduino.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-400 font-semibold">guest@portfolio:~$</span>
              <span className="w-2 h-4 bg-gray-400 animate-pulse"></span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}