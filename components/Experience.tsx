"use client";

import { useState } from 'react';

const experiences = [
  {
    id: 1,
    title: "SINFO LOGISTICS",
    year: "2023-2024",
    description: "Managed logistics and volunteer teams for a large-scale university tech event.",
    icon: "🗺️" 
  },
  {
    id: 2,
    title: "STEM MENTOR",
    year: "2023-2024",
    description: "Led Arduino and basic robotics workshops for students. Guided multiple competition projects.",
    icon: "🤖" 
  },
  {
    id: 3,
    title: "ROB9-16 MENTOR",
    year: "2022-2023",
    description: "Mentored high school students in robotics. Focused on programming and mechanism design.",
    icon: "⚙️" 
  },
  {
    id: 4,
    title: "STUDENT COUNCIL",
    year: "2019-2022",
    description: "Organized events and represented student body in academic meetings.",
    icon: "🎓" 
  }
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[1]);

  return (
    <div className="flex flex-col items-center justify-center py-10 w-full">
      
      {/* Área do Pop-up (Detalhes) */}
      {selectedExperience && (
        <div 
          key={selectedExperience.id} 
          className="mb-16 p-6 md:p-8 w-full max-w-2xl bg-[#0d1117] border border-gray-800 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4 border-b border-gray-800 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {selectedExperience.title}
            </h2>
            <span className="text-lg font-medium text-emerald-400">
              {selectedExperience.year}
            </span>
          </div>
          
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            {selectedExperience.description}
          </p>
        </div>
      )}

      {/* A Timeline em Arco (adaptada para Dark Mode) */}
      <div className="relative w-full max-w-3xl h-32 flex items-center justify-center mt-10">
        
        {/* A Linha em Arco (fundo) */}
        <div className="absolute inset-0 border-t-2 border-gray-700 rounded-[100%_100%_0_0] -z-10 h-24 transform translate-y-4"></div>

        {/* Pontos de Interação */}
        {experiences.map((exp, index) => {
          const isSelected = exp.id === selectedExperience.id;
          const xPos = `${(index / (experiences.length - 1)) * 100}%`;

          return (
            <div 
              key={exp.id} 
              className="absolute group flex flex-col items-center cursor-pointer"
              style={{ left: xPos, transform: 'translateX(-50%) translateY(-50%)' }}
              onClick={() => setSelectedExperience(exp)}
            >
              {/* Rótulo de texto */}
              <span className={`absolute -top-10 text-xs md:text-sm font-mono font-bold whitespace-nowrap transition-all duration-300
                ${isSelected ? 'text-emerald-400 -translate-y-2' : 'text-gray-500 group-hover:text-gray-300'}
              `}>
                {exp.title}
              </span>

              {/* O Ponto de Interação */}
              <div 
                className={`relative w-6 h-6 md:w-8 md:h-8 rounded-full border-4 transition-all duration-300 transform group-hover:scale-110 
                  ${isSelected ? 'border-emerald-400 bg-[#0d1117] scale-125' : 'border-gray-700 bg-gray-800'}
                `}
              >
                {/* Ícone interior quando selecionado */}
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center text-xs md:text-sm">
                    {exp.icon}
                  </div>
                )}
                {/* Efeito de brilho (glow) */}
                {isSelected && (
                  <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-40"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}