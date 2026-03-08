import React from 'react';

// O "colorGlow" define a cor do brilho quando passas o rato por cima!
const projectsData = [
  {
    id: 1,
    title: "Portfolio Pessoal & Terminal",
    description: "O meu portefólio interativo construído de raiz com Next.js, Tailwind CSS e uma interface de terminal inspirada no macOS. Alojado na margem da rede com Cloudflare Pages.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    colorGlow: "from-blue-500/20",
    url: "https://github.com/TEU_USER/portfolio",
    featured: true // Isto vai fazê-lo ocupar mais espaço!
  },
  {
    id: 2,
    title: "Smart City Prototype",
    description: "Maquete inteligente com controlo de tráfego e iluminação pública automatizada.",
    tags: ["Arduino", "C++", "Sensors"],
    colorGlow: "from-emerald-500/20",
    url: "https://github.com/",
    featured: false
  },
  {
    id: 3,
    title: "Tic-Tac-Toe Hardware",
    description: "Um jogo do galo físico feito do zero com matrizes LED e lógica de microcontroladores.",
    tags: ["Hardware", "Logic", "C++"],
    colorGlow: "from-yellow-500/20",
    url: "https://github.com/",
    featured: false
  },
  {
    id: 4,
    title: "Event Manager CLI",
    description: "Ferramenta de linha de comandos para gerir a logística e horários de voluntários da SINFO.",
    tags: ["Rust", "CLI", "Tooling"],
    colorGlow: "from-purple-500/20",
    url: "https://github.com/",
    featured: true // Outro projeto em destaque para equilibrar a grelha
  },
  {
    id: 5,
    title: "Data Analyzer",
    description: "Script para análise automática de feedback de eventos.",
    tags: ["Python", "Pandas"],
    colorGlow: "from-red-500/20",
    url: "https://github.com/",
    featured: false
  }
];

export default function Projects() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      
      {/* GRELHA ASSIMÉTRICA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {projectsData.map((project) => (
          <a 
            key={project.id} 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            // Se for 'featured', ocupa 2 colunas em ecrãs médios/grandes. Se não, ocupa 1.
            className={`group relative flex flex-col justify-between p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-1
              ${project.featured ? 'md:col-span-2' : 'col-span-1'}
            `}
          >
            {/* EFEITO DE LUZ NO FUNDO (Aparece no hover) */}
            <div className={`absolute -inset-x-0 -bottom-0 h-1/2 bg-gradient-to-t ${project.colorGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="relative z-10 mb-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* RODAPÉ DO CARTÃO: Tags e Botão */}
            <div className="relative z-10 flex items-end justify-between gap-4 mt-auto">
              
              {/* Tags de Tecnologias */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Ícone Redondo com Seta (Anima no hover) */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center transform group-hover:scale-110 group-hover:bg-gray-200 transition-all duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

            </div>
          </a>
        ))}

      </div>
    </div>
  );
}