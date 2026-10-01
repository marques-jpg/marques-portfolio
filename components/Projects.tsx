import React from 'react';

const projectsData = [
  {
    id: 1,
    title: "Cloudflare Internship Final Project - Range",
    description: "Cloudflare Internship final project: a TypeScript simulation and analysis engine for exploring security rules, ordered phases, and candidate mitigations with privacy guarantees and an ephemeral Worker interface.",
    tags: ["TypeScript", "Cloudflare Workers", "WAF", "Security"],
    url: "https://github.com/marques-jpg/Cloudflare-Internship-final-Project---Range",
    featured: true
  },
  {
    id: 2,
    title: "JS LLM Robustness",
    description: "A research benchmark measuring whether local LLMs alter vulnerability classifications under semantics-preserving JavaScript AST transformations across 16 MITRE CWE categories.",
    tags: ["JavaScript", "Python", "LLMs", "AST", "Security"],
    url: "https://github.com/marques-jpg/JavaScript-LLM-Robustness-under-AST-Transformations",
    featured: false
  },
  {
    id: 3,
    title: "PRYVO",
    description: "A modern, decentralized and fully private desktop chat application",
    tags: ["GO", "Javascript", "WebRTC", "Wails", "SQL"],
    url: "https://github.com/Pryvo-private-chat-app/PRYVO",
    featured: false
  },
  {
    id: 4,
    title: "GoNIDS",
    description: "A network intrusion detection system in Go that ingests PCAPs and Zeek logs into SQLite, featuring stream detection for vertical/horizontal TCP scans and DNS NXDOMAIN bursts with a local web dashboard.",
    tags: ["Go", "Networking", "Security", "Zeek", "SQLite"],
    url: "https://github.com/marques-jpg/GoNIDS",
    featured: true
  },
  {
    id: 5,
    title: "Portfolio",
    description: "My portfolio website. Built with Next.js and deployed with Cloudflare Pages.",
    tags: ["Next.js", "TypeScript", "Cloudflare"],
    url: "https://github.com/marques-jpg/marques-portfolio",
    featured: true
  },
  {
    id: 6,
    title: "Neural Network in RISC-V",
    description: "An implementation in Assembly RISC-V of a feedforward Artificial Neural Network.",
    tags: ["Assembly, RISC-V"],
    url: "https://github.com/marques-jpg/Neural-Network-in-RISC-V",
    featured: false
  },
  {
    id: 7,
    title: "Protein Chain Energy Maximizer",
    description: "A Protein Chain Energy Maximizer algorithm written in C++ for my Analysis and Synthesis of Algorithms class.",
    tags: ["C++"],
    url: "https://github.com/marques-jpg/Projeto-ASA-1",
    featured: false
  },
  {
    id: 8,
    title: "Dotfiles",
    description: "My personal dotfiles for my NixOS system",
    tags: ["Nix", "NixOS"],
    url: "https://github.com/marques-jpg/dotfiles",
    featured: true
  },
  {
    id: 9,
    title: "Weather Station",
    description: "Project made for the 'Engenharia para todos' 'Familas Tech' activity. Made in C++ for the arduino UNO. Using a Nokia LCD 5110 screen, a temperature and Humidity sensor (DHT22) and an air pressure sensor (BMP085) we can capture all the information we need and display it on the nokia screen",
    tags: ["Arduino", "DHT22", "C++", "BMP085", "Nokia LCD 5510"],
    url: "https://github.com/marques-jpg/Weather-Station",
    featured: true
  },
  {
    id: 10,
    title: "Library Managment System",
    description: "A text based Library Management system written in Java for my Object-Oriented Programming class.",
    tags: ["Java"],
    url: "https://github.com/marques-jpg/Projeto-PO",
    featured: false
  },
  {
    id: 11,
    title: "MILP Sports League Optimizer",
    description: "A C++ implementation of a MILP Sports League Optimizer for my Analysis and Synthesis of Algorithms class",
    tags: ["Python"],
    url: "https://github.com/marques-jpg/Projeto-ASA-3",
    featured: false
  },
  {
    id: 12,
    title: "Galo-Bot",
    description: "Project made for the Rob9-16 'Winter University'. Made in C++ and for an Arduino Uno. The game is displayed in a 3x3 grid made with LEDs, the 'X' player is represented by a fully turned on LED, the 'O' player is represented by a LED ticking really fast and the cursor is represented by a LED ticking slower than the 'O' player. In the end the winning player is displayed in the grid.",
    tags: ["Arduino", "C++", "LEDs", "Breadboard"],
    url: "https://github.com/marques-jpg/Galo-Bot",
    featured: true
  },
  {
    id: 13,
    title: "Multi Client Pacman game",
    description: "A C implementation of the pacman game, built on a Client-Server architecture for my Operating Systems class.",
    tags: ["C", "Linux"],
    url: "https://github.com/marques-jpg/Projeto-SO-2",
    featured: true
  },
  {
    id: 14,
    title: "8-bit Spike Processor",
    description: "A logic diagram implementation of a processor with a 8-bit data path architecture",
    tags: ["Logisim"],
    url: "https://github.com/marques-jpg/Processor-8-bit-Spike",
    featured: false
  },
  {
    id: 15,
    title: "Star Battle game Solver",
    description: "A Prolog Implementation of a Script wich the main focuse is to algorithmically solve Star Battle for my Programming Logic class.",
    tags: ["Prolog"],
    url: "https://github.com/marques-jpg/Projeto-LP",
    featured: false
  },
  {
    id: 16,
    title: "DAG Path Counter & Truck Routing",
    description: "A C++ DAG Path Counter & Truck Routing algorithm for my Anaysis and Synthesis fo Algorithms class.",
    tags: ["C++"],
    url: "https://github.com/marques-jpg/Projeto-ASA-2",
    featured: true
  },
  {
    id: 17,
    title: "Orbito game",
    description: "Orbito game implementation in Python for my Programming Fundaments class.",
    tags: ["Python"],
    url: "https://github.com/marques-jpg/Projeto-FP",
    featured: true
  },
  {
    id: 18,
    title: "Vaccine Managment System",
    description: "A text based Vaccine Managment System implemented in C for my Introduction to Algorithms and Data Structure.",
    tags: ["C"],
    url: "https://github.com/marques-jpg/Projeto-IAED",
    featured: false
  }
];

export default function Projects() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {projectsData.map((project, i) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col justify-between p-6 bg-card border border-edge overflow-hidden transition-all duration-300 hover:border-ink-2 hover:-translate-y-0.5
              ${project.featured ? 'md:col-span-2' : 'col-span-1'}
            `}
          >
            {/* Project number */}
            <span className="absolute top-4 right-5 text-[10px] text-ink-3 tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="mb-6">
              <h3 className="text-base font-semibold text-ink tracking-tight mb-2 pr-8">
                {project.title}
              </h3>
              <p className="text-ink-2 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex items-end justify-between gap-4 mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 border border-edge text-[10px] text-ink-3 tracking-wider uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 flex-shrink-0 text-ink-3 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>
        ))}

      </div>
    </div>
  );
}
