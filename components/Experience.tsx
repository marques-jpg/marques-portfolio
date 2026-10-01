"use client";

import { useState } from 'react';

const experiences = [
  {
    id: 1,
    title: "ENGENHARIA PARA TODOS",
    logo: "/logos/ept.png",
    year: "October 2025 - Present",
    description: "Research Scholarship: I serve as a STEM Mentor in a partnership between Instituto Superior Técnico, INESC-ID, and the Oeiras City Council. My role focuses on introducing primary school all the way to high school students to Computer Science and Electronics. I lead the 'Smart City' project, where I guide schools in developing intelligent urban models through monthly sessions on Programming, 3D Modeling, and Electronics. Additionally, I’m actively involved in outreach initiatives like 'Oeiras Educa', 'Lab in a Box', and 'STEAM Lab', bringing engineering concepts to life for younger audiences. I also represent the project and promote engineering concepts at public events.",
  },
  {
    id: 2,
    title: "SINFO - LOGISTICS",
    logo: "/logos/sinfo.png",
    year: "May 2025 - May 2026",
    description: "My role on the Logistics Team at SINFO – The Biggest free Tech Conference in Portugal – has equipped me with essential skills. Operating in a high-stakes, fast-paced environment, I collaborate with a large team to manage technical setups, venue design, and onsite coordination. This experience has significantly sharpened my adaptability, teamwork and dynamic problem-solving capabilities under pressure.",
  },
  {
    id: 3,
    title: "SINFO - COORDINATOR",
    logo: "/logos/sinfo.png",
    year: "May 2026 - Present",
    description: "As one of the four Coordinators at SINFO, Portugal's largest free tech conference, I oversee the event's year-round operations and strategic details. My role involves managing and supporting a dedicated 30+ person team across multiple departments to ensure flawless logistics and execution. By streamlining cross-functional communication and acting as the primary liaison with external institutions, I strive to maintain the highest standards of organization to deliver a highly successful and impactful event.",
  },
  {
    id: 4,
    title: "CLOUDFLARE",
    logo: "/logos/cloudflare.png",
    year: "June 2026 - September 2026",
    description: "During my internship at Cloudflare, I resolved critical customer-facing cases across Cloudflare’s security and edge platform, focusing heavily on zones under active attack, including L3/L4 and L7 DDoS mitigation, rate limiting, and WAF evasion. I analyzed sophisticated threats such as SQL and OGNL injection attempts while diagnosing WAF false positives, undetected attack traffic, credential stuffing, and bot activity to identify the underlying signals driving each decision. Additionally, I troubleshot HTTP/HTTPS, DNS, TLS, and Cloudflare Workers applications leveraging Linux tooling, ClickHouse, and Grafana, actively reproducing edge platform anomalies and collaborating with senior engineers on complex escalations.",
  },
  {
    id: 5,
    title: "ROB9-16",
    logo: "/logos/Rob916.png", 
    year: "October 2025 - March 2026",
    description: "Research Scholarship: During the 'Winter Camp' at Instituto Superior Técnico, I served as a Mentor for the Rob9-16 program. I had the rewarding challenge of teaching children (ages 6-12) the fundamentals of engineering. We built a Tic-Tac-Toe game from scratch using Arduino, where I taught C++ programming, logic design, and how to assemble circuits on a breadboard. It was a great opportunity to simplify complex technical concepts into engaging, hands-on learning experiences.",
  },
  {
    id: 6,
    title: "STUDENT COUNCIL",
    logo: "/logos/adelaide.png",
    year: "February 2024 - September 2024",
    description: "Organized and managed school events at Escola Secundária de Odivelas and represented student body in academic meetings.", 
  }
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[3]);
  
  return (
    <div className="flex flex-col items-center justify-center py-10 w-full">
      <div className="relative isolate flex flex-col items-center justify-center py-10 w-full">

        {selectedExperience && (
          <div key={selectedExperience.id} className="relative mb-10 w-full max-w-2xl">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            </div>

            <div className="relative z-10 p-6 md:p-8 w-full bg-[#0d1117] border border-gray-800 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 border-b border-gray-800 pb-4">
                
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedExperience.logo} 
                    alt={`${selectedExperience.title} logo`} 
                    className="w-12 h-12 object-contain rounded-md bg-white/5 p-1"
                  />
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {selectedExperience.title}
                  </h2>
                </div>

                <span className="text-lg font-medium text-gray-400 md:ml-auto">
                  {selectedExperience.year}
                </span>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                {selectedExperience.description}
              </p>
            </div>
          </div>
        )}

        <div className="relative w-full max-w-3xl h-40 mt-8 mx-auto">
          
          <div className="absolute top-12 left-0 right-0 border-t-2 border-gray-700 rounded-[100%_100%_0_0] -z-10 h-24"></div>

          {experiences.map((exp, index) => {
            const isSelected = exp.id === selectedExperience.id;
            
            const xPos = `${(index / (experiences.length - 1)) * 100}%`;
            
            const isEdge = index === 0 || index === experiences.length - 1;
            const yPos = isEdge ? '90px' : '56px';

            return (
              <div 
                key={exp.id} 
                className="absolute group flex flex-col items-center cursor-pointer"
                style={{ left: xPos, top: yPos, transform: 'translateX(-50%) translateY(-50%)' }}
                onClick={() => setSelectedExperience(exp)}
              >
                <span className={`absolute -top-10 text-xs md:text-sm font-mono font-bold whitespace-nowrap transition-all duration-300
                  ${isSelected ? 'text-white-400 -translate-y-2' : 'text-gray-500 group-hover:text-gray-300'}
                `}>
                  {exp.title}
                </span>

                <div 
                  className={`relative w-6 h-6 md:w-8 md:h-8 rounded-full border-4 transition-all duration-300 transform group-hover:scale-110 
                    ${isSelected ? 'border-white-400 bg-[#0d1117] scale-125' : 'border-gray-700 bg-gray-800'}`}>
                  {isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center text-xs md:text-sm">
                    </div>
                  )}
                  {isSelected && (
                    <div className="absolute inset-0 bg-gray-400 rounded-full blur-md opacity-40"></div>
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