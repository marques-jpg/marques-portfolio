import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full mx-auto">
      
      {/* Efeitos de luz no fundo (Glowing Orbs) */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute top-40 -right-10 w-72 h-72 bg-emerald-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

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
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400">
              Guilherme Marques
            </span>
          </h1>
          {/* Subtítulo estilo terminal */}
          <p className="text-xl md:text-2xl font-mono text-gray-400">
            {">"} building smart solutions_
          </p>
        </div>

        {/* Descrição */}
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
          Passionate about software engineering, embedded systems, and hardware prototyping. 
          When I'm not organizing tech events, I'm probably writing C++ or tinkering with Arduino.
        </p>

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