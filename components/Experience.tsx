"use client"; // Isto é obrigatório no Next.js sempre que usamos interatividade (cliques, estados)

import { useState } from 'react';

// Os teus dados de experiência guardados num array para ser fácil adicionar mais no futuro!
const experiences = [
  {
    id: 1,
    year: "2024 - Present",
    role: "STEM Mentor & Project Lead",
    company: "IST, INESC-ID & Oeiras Municipality",
    description: "Mentoring K-12 schools in building futuristic smart city prototypes. Conducting monthly workshops on Programming, 3D Modeling, and Electronics. Active contributor to hands-on engineering initiatives like 'Oeiras Educa' and 'Lab in a Box'."
  },
  {
    id: 2,
    year: "2023 - Present",
    role: "Logistics & Event Operations",
    company: "SINFO (Semana Informática)",
    description: "Managed end-to-end event production for one of Portugal's largest student-led tech events. Oversaw venue layout, technical AV infrastructure, and vendor management (catering/furniture). Optimized resources and coordinated on-site execution for thousands of attendees."
  },
  {
    id: 3,
    year: "2023",
    role: "Technical Mentor (Winter Camp)",
    company: "Rob9-16 @ IST",
    description: "Led a 3-day immersive STEM program. Mentored children (ages 6-12) in building an Arduino-based Tic-Tac-Toe game, teaching core C++ programming logic and hands-on electronic prototyping (breadboarding/LEDs)."
  },
  {
    id: 4,
    year: "2019 - 2022",
    role: "Student Council Member",
    company: "Odivelas Secondary School",
    description: "Active member of the Event Planning and Sports Departments, coordinating school-wide logistics and athletic tournaments."
  }
];

export default function Experience() {
  // Estado para guardar qual é a experiência que está selecionada no momento (começa na primeira: índice 0)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
      
      {/* LADO ESQUERDO: A Timeline Redonda/Vertical */}
      <div className="relative flex flex-row md:flex-col justify-between md:justify-start gap-4 md:gap-12 md:w-1/3">
        {/* Linha de fundo (vertical em desktop, horizontal em mobile) */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 md:top-0 md:left-[11px] md:w-0.5 md:h-full bg-gray-800 -z-10"></div>

        {experiences.map((exp, index) => {
          const isActive = index === activeIndex;
          return (
            <div 
              key={exp.id} 
              onClick={() => setActiveIndex(index)}
              className="flex items-center gap-6 cursor-pointer group"
            >
              {/* O Nó Circular (Redondo) da Timeline */}
              <div className="relative">
                <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 flex items-center justify-center
                  ${isActive ? 'border-emerald-400 bg-[#1a1a1a]' : 'border-gray-700 bg-gray-800 group-hover:border-gray-500'}
                `}>
                  {/* Ponto interior quando está ativo */}
                  {isActive && <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>}
                </div>
                {/* Efeito de brilho (glow) quando ativo */}
                {isActive && (
                  <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-40"></div>
                )}
              </div>

              {/* Ano (escondido em mobile para poupar espaço, visível em desktop) */}
              <span className={`hidden md:block text-sm font-bold transition-colors duration-300
                ${isActive ? 'text-emerald-400' : 'text-gray-500 group-hover:text-gray-300'}
              `}>
                {exp.year}
              </span>
            </div>
          );
        })}
      </div>

      {/* LADO DIREITO: Cartão de Informação Dinâmico */}
      <div className="md:w-2/3">
        <div 
          // A chave (key) faz com que o React recarregue a animação sempre que o index muda
          key={activeIndex} 
          className="bg-[#0d1117] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          {/* Ano (visível em mobile no topo do cartão) */}
          <span className="md:hidden text-emerald-400 text-sm font-bold mb-2 block">
            {experiences[activeIndex].year}
          </span>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {experiences[activeIndex].role}
          </h3>
          <h4 className="text-lg text-gray-400 font-medium mb-6">
            @ {experiences[activeIndex].company}
          </h4>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {experiences[activeIndex].description}
          </p>
        </div>
      </div>

    </div>
  );
}