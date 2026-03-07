import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full mx-auto">
      
      {/* Efeitos de luz no fundo (Glowing Orbs) */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-yellow-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute top-40 -right-10 w-72 h-72 bg-orange-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

      <div className="relative z-10 space-y-8 mt-10 md:mt-20">
        
        {/* Badge de Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 backdrop-blur-md w-max">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Computer Science Student @ IST
        </div>

        {/* Título Principal com Gradiente */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I'm <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-300">
            Guilherme Marques
          </span>
        </h1>

        {/* JANELA DE TERMINAL */}
        <div className="w-full max-w-2xl mt-8 rounded-xl overflow-hidden bg-[#0d1117] border border-gray-800 shadow-2xl">
          {/* Topo do terminal (botões) */}
          <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="mx-auto text-xs text-gray-500 font-mono">bash - guest@portfolio</div>
          </div>
          
          {/* Corpo do terminal */}
          <div className="p-5 font-mono text-sm md:text-base leading-relaxed">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-emerald-400 font-semibold">guest@portfolio:~$</span>
              <span className="text-gray-100">sudo cat about_me.txt</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400">[sudo] password for guest: </span>
              <span className="text-gray-100 tracking-[0.2em]">********</span>
            </div>
            <p className="text-gray-300">
              Passionate about software engineering, embedded systems, and hardware prototyping. 
              When I'm not organizing tech events, I'm probably writing C++ or tinkering with Arduino.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-emerald-400 font-semibold">guest@portfolio:~$</span>
              {/* Cursor a piscar */}
              <span className="w-2.5 h-5 bg-gray-400 animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Botões de Navegação Rápidos */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Link 
            href="/projects" 
            className="px-8 py-3 rounded-lg bg-white text-black font-semibold text-center hover:bg-gray-200 hover:scale-105 transition-all duration-200"
          >
            Explore My Work
          </Link>
          <Link 
            href="/experience" 
            className="px-8 py-3 rounded-lg bg-transparent border border-gray-600 text-white font-semibold text-center hover:border-gray-400 hover:bg-white/5 transition-all duration-200"
          >
            View Experience
          </Link>
        </div>
        
      </div>
    </div>
  );
}