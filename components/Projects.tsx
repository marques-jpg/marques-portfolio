import React from 'react';

// O "colorGlow" define a cor do brilho quando passas o rato por cima!
const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description: "My portfolio website. Built with Next.js and deployed with Cloudflare Pages.",
    tags: ["Next.js", "TypeScript", "Cloudflare"],
    colorGlow: "from-yellow-500/20",
    url: "https://github.com/marques-jpg/marques-portfolio",
    featured: false // Isto vai fazê-lo ocupar mais espaço!
  },
  {
    id: 2,
    title: "Galo-Bot",
    description: "Project made for the Rob9-16 'Winter University'. Made in C++ and for an Arduino Uno. The game is displayed in a 3x3 grid made with LEDs, the 'X' player is represented by a fully turned on LED, the 'O' player is represented by a LED ticking really fast and the cursor is represented by a LED ticking slower than the 'O' player. In the end the winning player is displayed in the grid.",
    tags: ["Arduino", "C++", "LEDs", "Breadboard"],
    colorGlow: "from-orange-500/20",
    url: "https://github.com/marques-jpg/Galo-Bot",
    featured: true
  },
  {
    id: 3,
    title: "Weather Station",
    description: "Project made for the 'Engenharia para todos' 'Familas Tech' activity. Made in C++ for the arduino UNO. Using a Nokia LCD 5110 screen, a temperature and Humidity sensor (DHT22) and an air pressure sensor (BMP085) we can capture all the information we need and display it on the nokia screen",
    tags: ["Arduino", "DHT22", "C++", "BMP085", "Nokia LCD 5510"],
    colorGlow: "from-red-500/20",
    url: "https://github.com/marques-jpg/Weather-Station",
    featured: false
  },
  {
    id: 4,
    title: "Library Managment System",
    description: "This project is a Java-based Library Management System (BCI) for my Object-Oriented Programming class. It features a robust domain model for managing library users, various types of works (such as Books and DVDs), and a complete workflow for borrowing and returning items.",
    tags: ["Java"],
    colorGlow: "from-brown-500/20",
    url: "https://github.com/marques-jpg/Projeto-PO",
    featured: true // Outro projeto em destaque para equilibrar a grelha
  },
  {
    id: 5,
    title: "Multi Client Pacman game",
    description: "This project is a C implementation of a Pacman-inspired game built on a Client-Server architecture for my Operating Systems class. Its main focus is to demonstrate Inter-Process Communication (IPC) using Named Pipes (FIFOs), concurrency through Multithreading, and synchronization tools such as Mutexes, Condition Variables, and Semaphores.",
    tags: ["C", "Linux"],
    colorGlow: "from-pink-500/20",
    url: "https://github.com/marques-jpg/Projeto-SO-2",
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