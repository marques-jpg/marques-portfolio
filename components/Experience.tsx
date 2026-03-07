"use client"; // Obrigatório para usar cliques e estado no Next.js (App Router)

import { useState } from 'react';

// Dados da tua experiência organizados num array para ser fácil de manter!
const experiences = [
  {
    id: 1,
    title: "SINFO LOGISTICS",
    nodeLabel: "SINFO LOGISTICS",
    name: "Guilherme Marques",
    year: "2023-2024",
    description: "Managed logistics and volunteer teams for a large-scale university tech event.",
    icon: "🤖" // Ícone do ponto ativo
  },
  {
    id: 2,
    title: "SCHOLARSHIP",
    nodeLabel: "Scholarship [active]",
    name: "ENGENHARIA PARA TODOS",
    year: "2023-2024",
    description: "Led Arduino and basic robotics workshops for students. Guided multiple competition projects.",
    icon: "🤖" // Ícone do ponto ativo
  },
  {
    id: 3,
    title: "ROB9-16 MENTOR",
    nodeLabel: "ROB9-16 MENTOR",
    name: "Guilherme Marques",
    year: "2022-2023",
    description: "Mentored high school students in robotics. Focused on programming and mechanism design.",
    icon: "🤖" // Ícone do ponto ativo
  },
  {
    id: 4,
    title: "STUDENT COUNCIL",
    nodeLabel: "STUDENT COUNCIL",
    name: "Guilherme Marques",
    year: "2021-2022",
    description: "Organized events and represented student body in academic meetings.",
    icon: "🤖" // Ícone do ponto ativo
  }
];

export default function ExperienceTimelinePage() {
  // Estado para armazenar qual experiência está selecionada (começa com id 2, o "SCHOLARSHIP")
  const [selectedExperience, setSelectedExperience] = useState(experiences[1]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-950 text-white font-serif min-h-screen">
      
      {/* 1. Título da Página com aparência rabiscada */}
      <h1 className="text-4xl font-bold mb-16 underline decoration-wavy decoration-white">
        Minha Experiência
      </h1>

      {/* 2. Área do Pop-up (Detalhes) - Posicionada acima da timeline */}
      {selectedExperience && (
        <div 
          key={selectedExperience.id} // Chave para re-carregar animação ao mudar de seleção
          className="mb-12 p-8 w-full max-w-2xl bg-black border-4 border-white rounded-3xl shadow-xl transform transition-all duration-300 scale-100 opacity-100"
        >
          {/* Título Principal (bold e grande como no rascunho) */}
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">
            {selectedExperience.title}
          </h2>
          {/* Subtítulo (Nome) */}
          <h3 className="text-xl font-medium mb-1">
            {selectedExperience.name}
          </h3>
          {/* Ano (como texto simples) */}
          <span className="text-gray-400">
            {selectedExperience.year}
          </span>
          
          {/* Descrição com linha divisória rústica */}
          <div className="mt-6 border-t border-gray-600 pt-4">
            <p className="text-lg leading-relaxed text-gray-300">
              {selectedExperience.description}
            </p>
          </div>
        </div>
      )}

      {/* 3. A Timeline em Arco (Estrutura principal) */}
      <div className="relative w-full max-w-4xl h-48 flex items-center justify-center">
        
        {/* A Linha em Arco Rústica (fundo) */}
        <div className="absolute inset-0 border-t-8 border-dashed border-white rounded-[100%_100%_0_0] h-24 mt-20 transform translate-y-12 shadow-inner -z-10"></div>

        {/* Gerar os quatro pontos de interação fixos */}
        {experiences.map((exp, index) => {
          const isActive = exp.id === selectedExperience.id;
          
          // Cálculo de posição para o arco (espaçamento igual em 100%)
          const xPos = `${(index / (experiences.length - 1)) * 100}%`;
          
          // Cálculo de altura para o arco: os do meio sobem, os das pontas descem
          // Posição vertical de referência: container h-48.
          // O centro (index 1 e 2) fica mais alto (ex: top: 30px) e os cantos (index 0 e 3) ficam mais baixos (ex: top: 100px).
          const yPos = index === 0 || index === experiences.length - 1 ? '100px' : '30px';

          return (
            <div 
              key={exp.id} 
              className="absolute group flex flex-col items-center cursor-pointer"
              style={{ left: xPos, top: yPos }} // Posicionamento absoluto no arco
              onClick={() => setSelectedExperience(exp)} // Muda a seleção ao clicar
            >
              {/* Rótulo de texto (visível em todos, mais apagado nos não ativos) */}
              <span className={`mb-2 text-xs font-mono transition-colors duration-300 whitespace-nowrap
                ${isActive ? 'text-red-500 font-bold' : 'text-gray-500 group-hover:text-gray-300'}
              `}>
                {exp.nodeLabel}
              </span>

              {/* O Ponto de Interação (Bolha/Rabisco) */}
              <div 
                className={`relative w-10 h-10 rounded-full border-4 transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center
                  ${isActive ? 'border-red-600 bg-red-800 scale-125' : 'border-gray-900 bg-black hover:border-gray-500'}
                  shadow-[0_0_15px_rgba(0,0,0,0.2)]
                `}
              >
                {/* Ícone (como o robô vermelho) quando selecionado */}
                {isActive && (
                  <div className="text-red-300 text-lg">
                    {exp.icon}
                  </div>
                )}
                {/* Efeito de brilho (glow) para o ponto ativo */}
                {isActive && (
                  <div className="absolute inset-0 bg-red-600 rounded-full blur-lg opacity-40 -z-10"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}