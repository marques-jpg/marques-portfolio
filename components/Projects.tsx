import React from 'react';

// Aqui defines todos os teus projetos. Podes adicionar ou remover à vontade!
const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    stars: 3,
    description: "My Developer Portfolio built with Next.js, Tailwind CSS and deployed on Cloudflare Pages.",
    language: "TypeScript",
    languageColor: "bg-blue-500", // Cor da bolinha da linguagem
    tags: ["nextjs", "react", "tailwind"],
    sourceUrl: "https://github.com/TEU_USER/marques-portfolio",
    visitUrl: "https://marques.at.eu.org" // Deixa vazio ("") se não tiver site ao vivo
  },
  {
    id: 2,
    title: "Smart City Prototype",
    stars: 5,
    description: "Arduino-based smart city model with automated lighting and traffic control systems.",
    language: "C++",
    languageColor: "bg-pink-500",
    tags: ["arduino", "electronics", "sensors"],
    sourceUrl: "https://github.com/",
    visitUrl: ""
  },
  {
    id: 3,
    title: "Tic-Tac-Toe Robot",
    stars: 2,
    description: "An interactive Tic-Tac-Toe game built from scratch using Arduino and LED matrices.",
    language: "C++",
    languageColor: "bg-pink-500",
    tags: ["hardware", "logic-design", "c++"],
    sourceUrl: "https://github.com/",
    visitUrl: ""
  },
  {
    id: 4,
    title: "Data Analyzer",
    stars: 1,
    description: "Python script to automate the analysis of event logistics and participant feedback.",
    language: "Python",
    languageColor: "bg-yellow-500",
    tags: ["pandas", "automation", "data"],
    sourceUrl: "https://github.com/",
    visitUrl: ""
  },
  {
    id: 5,
    title: "Event Manager CLI",
    stars: 0,
    description: "Command-line tool to help organize and schedule university tech events efficiently.",
    language: "Rust",
    languageColor: "bg-orange-500",
    tags: ["cli", "terminal", "tooling"],
    sourceUrl: "https://github.com/",
    visitUrl: ""
  },
  {
    id: 6,
    title: "dotfiles",
    stars: 4,
    description: "My personal macOS/Linux dotfiles and terminal configurations.",
    language: "Shell",
    languageColor: "bg-green-500",
    tags: ["bash", "zsh", "config"],
    sourceUrl: "https://github.com/",
    visitUrl: ""
  }
];

export default function Projects() {
  return (
    // Grelha: 1 coluna no telemóvel, 2 em tablets, 3 em computadores
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto py-10">
      
      {projectsData.map((project) => (
        <div 
          key={project.id} 
          className="flex flex-col p-6 bg-[#0d1117] border border-gray-800 rounded-xl hover:border-gray-600 transition-colors duration-300 shadow-lg"
        >
          {/* TOPO: Título e Estrelas */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white hover:text-blue-400 cursor-pointer transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 text-gray-400 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
              {project.stars}
            </div>
          </div>

          {/* DESCRIÇÃO */}
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* TECNOLOGIAS (Linguagem + Tags) */}
          <div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-gray-400">
            {/* Linguagem Principal */}
            <div className="flex items-center gap-1.5 mr-2">
              <span className={`w-2.5 h-2.5 rounded-full ${project.languageColor}`}></span>
              <span className="font-medium text-gray-300">{project.language}</span>
            </div>
            
            {/* Tags da cor do fundo com letras azuis (como na foto) */}
            {project.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full font-mono">
                {tag}
              </span>
            ))}
          </div>

          {/* BOTÕES: Source e Visit */}
          <div className="flex gap-3 mt-auto pt-4 border-t border-gray-800">
            
            <a 
              href={project.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-[#21262d] hover:bg-[#30363d] border border-gray-700 rounded-lg text-sm font-medium text-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Source
            </a>

            {/* Só mostra o botão "Visit" se houver um link preenchido no visitUrl */}
            {project.visitUrl && (
              <a 
                href={project.visitUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-white text-black rounded-lg text-sm font-semibold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                Visit
              </a>
            )}

          </div>
        </div>
      ))}

    </div>
  );
}