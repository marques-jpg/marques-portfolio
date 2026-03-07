"use client";

import { useState } from 'react';

const experiences = [
  {
    id: 1,
    title: "SINFO - LOGISTICS TEAM",
    logo: "/logos/sinfo.png", // Certifica-te que este ficheiro existe na pasta public/logos/
    year: "May 2025 - Present",
    description: "Biggest free tech conference in Portugal. Tasked with Logistics :Venue design, technical setup, and onsite coordination.",
  },
  {
    id: 2,
    title: "SCHOLARSHIP: ENGENHARIA PARA TODOS",
    logo: "/logos/ept.svg", // Usa o logo do IST ou outro à tua escolha
    year: "October 2025 - Present",
    description: "I serve as a STEM Mentor in a partnership between Instituto Superior Técnico, INESC-ID, and the Oeiras City Council. My role focuses on introducing primary school all the way to high school students to Computer Science and Electronics. I lead the 'Smart City' project, where I guide schools in developing intelligent urban models through monthly sessions on Programming, 3D Modeling, and Electronics. Additionally, I’m actively involved in outreach initiatives like 'Oeiras Educa', 'Lab in a Box', and 'STEAM Lab', bringing engineering concepts to life for younger audiences. I also represent the project and promote engineering concepts at public events.",
  },
  {
    id: 3,
    title: "SCHOLARSHIP: ROB9-16",
    logo: "/logos/rob916.svg", 
    year: "October 2025 - March 2026",
    description: "During the 'Winter Camp' at Instituto Superior Técnico, I served as a Mentor for the Rob9-16 program. I had the rewarding challenge of teaching children (ages 6-12) the fundamentals of engineering. We built a Tic-Tac-Toe game from scratch using Arduino, where I taught C++ programming, logic design, and how to assemble circuits on a breadboard. It was a great opportunity to simplify complex technical concepts into engaging, hands-on learning experiences.",
  },
  {
    id: 4,
    title: "STUDENT COUNCIL - ESCOLA SECUNDÁRIA DE ODIVELAS",
    logo: "/logos/adelaide.png", // Logo da escola ou do conselho
    year: "February 2024 - September 2024",
    description: "Organized and managed school events and represented student body in academic meetings.", 
  }
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[1]);
  
  return (
    <div className="flex flex-col items-center justify-center py-10 w-full">
      <div className="relative isolate flex flex-col items-center justify-center py-10 w-full">

        {selectedExperience && (
          <div key={selectedExperience.id} className="relative mb-10 w-full max-w-2xl">
            {/* Glow centrado atrás da caixa */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-yellow-500/25 blur-[120px] animate-pulse" />
            </div>

            {/* Caixa de texto */}
            <div className="relative z-10 p-6 md:p-8 w-full bg-[#0d1117] border border-gray-800 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* TOPO DA CAIXA: Adicionado o flex com o logo e o título */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 border-b border-gray-800 pb-4">
                
                {/* Flex container para alinhar o Logo + Título */}
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedExperience.logo} 
                    alt={`${selectedExperience.title} logo`} 
                    className="w-12 h-12 object-contain rounded-md bg-white/5 p-1" // Fundo subtil caso o logo seja escuro
                  />
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {selectedExperience.title}
                  </h2>
                </div>

                <span className="text-lg font-medium text-yellow-400 md:ml-auto">
                  {selectedExperience.year}
                </span>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                {selectedExperience.description}
              </p>
            </div>
          </div>
        )}

        {/* A Timeline em Arco */}
        <div className="relative w-full max-w-3xl h-40 mt-8 mx-auto">
          
          {/* A Linha em Arco (fundo) */}
          <div className="absolute top-12 left-0 right-0 border-t-2 border-gray-700 rounded-[100%_100%_0_0] -z-10 h-24"></div>

          {/* Pontos de Interação */}
          {experiences.map((exp, index) => {
            const isSelected = exp.id === selectedExperience.id;
            
            // Posição Horizontal
            const xPos = `${(index / (experiences.length - 1)) * 100}%`;
            
            // Posição Vertical
            const isEdge = index === 0 || index === experiences.length - 1;
            const yPos = isEdge ? '90px' : '56px';

            return (
              <div 
                key={exp.id} 
                className="absolute group flex flex-col items-center cursor-pointer"
                style={{ left: xPos, top: yPos, transform: 'translateX(-50%) translateY(-50%)' }}
                onClick={() => setSelectedExperience(exp)}
              >
                {/* Rótulo de texto */}
                <span className={`absolute -top-10 text-xs md:text-sm font-mono font-bold whitespace-nowrap transition-all duration-300
                  ${isSelected ? 'text-yellow-400 -translate-y-2' : 'text-gray-500 group-hover:text-gray-300'}
                `}>
                  {exp.title}
                </span>

                {/* O Ponto de Interação */}
                <div 
                  className={`relative w-6 h-6 md:w-8 md:h-8 rounded-full border-4 transition-all duration-300 transform group-hover:scale-110 
                    ${isSelected ? 'border-yellow-400 bg-[#0d1117] scale-125' : 'border-gray-700 bg-gray-800'}
                  `}
                >
                  {/* Ícone interior quando selecionado */}
                  {isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center text-xs md:text-sm">
                    </div>
                  )}
                  {/* Efeito de brilho (glow) */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-40"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}