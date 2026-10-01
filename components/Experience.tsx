"use client";

import { useState } from 'react';

const experiences = [
  {
    id: 1,
    title: "ENGENHARIA PARA TODOS",
    logo: "/logos/ept.png",
    year: "October 2025 — Present",
    description: "Research Scholarship: I serve as a STEM Mentor in a partnership between Instituto Superior Técnico, INESC-ID, and the Oeiras City Council. My role focuses on introducing primary school all the way to high school students to Computer Science and Electronics. I lead the 'Smart City' project, where I guide schools in developing intelligent urban models through monthly sessions on Programming, 3D Modeling, and Electronics. Additionally, I'm actively involved in outreach initiatives like 'Oeiras Educa', 'Lab in a Box', and 'STEAM Lab', bringing engineering concepts to life for younger audiences. I also represent the project and promote engineering concepts at public events.",
  },
  {
    id: 2,
    title: "SINFO — LOGISTICS",
    logo: "/logos/sinfo.png",
    year: "May 2025 — May 2026",
    description: "My role on the Logistics Team at SINFO – The Biggest free Tech Conference in Portugal – has equipped me with essential skills. Operating in a high-stakes, fast-paced environment, I collaborate with a large team to manage technical setups, venue design, and onsite coordination. This experience has significantly sharpened my adaptability, teamwork and dynamic problem-solving capabilities under pressure.",
  },
  {
    id: 3,
    title: "SINFO — COORDINATOR",
    logo: "/logos/sinfo.png",
    year: "May 2026 — Present",
    description: "As one of the four Coordinators at SINFO, Portugal's largest free tech conference, I oversee the event's year-round operations and strategic details. My role involves managing and supporting a dedicated 30+ person team across multiple departments to ensure flawless logistics and execution. By streamlining cross-functional communication and acting as the primary liaison with external institutions, I strive to maintain the highest standards of organization to deliver a highly successful and impactful event.",
  },
  {
    id: 4,
    title: "CLOUDFLARE",
    logo: "/logos/cloudflare.png",
    year: "June 2026 — September 2026",
    description: "During my internship at Cloudflare, I resolved critical customer-facing cases across Cloudflare's security and edge platform, focusing heavily on zones under active attack, including L3/L4 and L7 DDoS mitigation, rate limiting, and WAF evasion. I analyzed sophisticated threats such as SQL and OGNL injection attempts while diagnosing WAF false positives, undetected attack traffic, credential stuffing, and bot activity to identify the underlying signals driving each decision. Additionally, I troubleshot HTTP/HTTPS, DNS, TLS, and Cloudflare Workers applications leveraging Linux tooling, ClickHouse, and Grafana, actively reproducing edge platform anomalies and collaborating with senior engineers on complex escalations.",
  },
  {
    id: 5,
    title: "ROB9-16",
    logo: "/logos/Rob916.png",
    year: "October 2025 — March 2026",
    description: "Research Scholarship: During the 'Winter Camp' at Instituto Superior Técnico, I served as a Mentor for the Rob9-16 program. I had the rewarding challenge of teaching children (ages 6-12) the fundamentals of engineering. We built a Tic-Tac-Toe game from scratch using Arduino, where I taught C++ programming, logic design, and how to assemble circuits on a breadboard. It was a great opportunity to simplify complex technical concepts into engaging, hands-on learning experiences.",
  },
  {
    id: 6,
    title: "STUDENT COUNCIL",
    logo: "/logos/adelaide.png",
    year: "February 2024 — September 2024",
    description: "Organized and managed school events at Escola Secundária de Odivelas and represented student body in academic meetings.",
  }
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[3]);

  return (
    <div className="flex flex-col items-center justify-center py-8 w-full">
      <div className="relative flex flex-col items-center justify-center w-full">

        {/* Detail card */}
        {selectedExperience && (
          <div key={selectedExperience.id} className="relative mb-12 w-full max-w-2xl">
            <div className="p-6 md:p-8 w-full bg-card border border-edge">

              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5 border-b border-edge pb-5">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedExperience.logo}
                    alt={`${selectedExperience.title} logo`}
                    className="w-10 h-10 object-contain bg-page p-1"
                  />
                  <h2 className="text-xl md:text-2xl font-semibold text-ink tracking-tight">
                    {selectedExperience.title}
                  </h2>
                </div>

                <span className="text-sm text-ink-3 md:ml-auto tracking-wide">
                  {selectedExperience.year}
                </span>
              </div>

              <p className="text-sm md:text-base leading-relaxed text-ink-2">
                {selectedExperience.description}
              </p>
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="relative w-full max-w-3xl mx-auto">

          {/* Horizontal line */}
          <div className="absolute top-[3px] left-0 right-0 h-[1px] bg-edge"></div>

          <div className="flex justify-between items-start">
            {experiences.map((exp) => {
              const isSelected = exp.id === selectedExperience.id;

              return (
                <div
                  key={exp.id}
                  className="group flex flex-col items-center cursor-pointer relative"
                  style={{ flex: 1 }}
                  onClick={() => setSelectedExperience(exp)}
                >
                  {/* Dot */}
                  <div
                    className={`relative w-[7px] h-[7px] transition-all duration-200
                      ${isSelected
                        ? 'bg-ink scale-150'
                        : 'bg-ink-3 group-hover:bg-ink-2'
                      }`}
                  >
                  </div>

                  {/* Label */}
                  <span className={`mt-4 text-[10px] md:text-xs text-center leading-tight transition-colors duration-200 max-w-[80px] md:max-w-none
                    ${isSelected ? 'text-ink' : 'text-ink-3 group-hover:text-ink-2'}
                  `}>
                    {exp.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}