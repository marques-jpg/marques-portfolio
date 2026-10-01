import type { DirectoryNode } from "one-terminal";

export const vfs: DirectoryNode = {
  kind: "directory",
  entries: {
    "README.md": {
      kind: "file",
      fileType: "text",
      content:
        "Passionate about cybersecurity, software engineering, embedded systems, and web development.\nWhen I'm not coordinating tech events, I'm probably writing code or tinkering with an Arduino.\n\nType 'ls' to explore folders (Projects/, Experience/) or 'help' for available commands.",
    },
    "about.txt": {
      kind: "file",
      fileType: "text",
      content:
        "Guilherme Marques\nComputer Science and Engineering Student @ Instituto Superior Técnico (IST)\n\nFocus: Network Security, Systems Programming, Distributed Systems, Web Development.",
    },
    "contact.txt": {
      kind: "file",
      fileType: "text",
      content:
        "Email: guilherme@marques.at.eu.org\nLinkedIn: https://www.linkedin.com/in/guilherme-marques-3a1b7b368/\nGitHub: https://github.com/marques-jpg",
    },
    Projects: {
      kind: "directory",
      entries: {
        "range.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Cloudflare Internship Final Project - Range\n\nCloudflare Internship final project: a TypeScript simulation and analysis engine for exploring security rules, ordered phases, and candidate mitigations with privacy guarantees and an ephemeral Worker interface.\n\nTags: TypeScript, Cloudflare Workers, WAF, Security\nRepository: https://github.com/marques-jpg/Cloudflare-Internship-final-Project---Range",
        },
        "js-llm-robustness.md": {
          kind: "file",
          fileType: "text",
          content:
            "# JS LLM Robustness\n\nA research benchmark measuring whether local LLMs alter vulnerability classifications under semantics-preserving JavaScript AST transformations across 16 MITRE CWE categories.\n\nTags: JavaScript, Python, LLMs, AST, Security\nRepository: https://github.com/marques-jpg/JavaScript-LLM-Robustness-under-AST-Transformations",
        },
        "pryvo.md": {
          kind: "file",
          fileType: "text",
          content:
            "# PRYVO\n\nA modern, decentralized and fully private desktop chat application.\n\nTags: GO, Javascript, WebRTC, Wails, SQL\nRepository: https://github.com/Pryvo-private-chat-app/PRYVO",
        },
        "gonids.md": {
          kind: "file",
          fileType: "text",
          content:
            "# GoNIDS\n\nA network intrusion detection system in Go that ingests PCAPs and Zeek logs into SQLite, featuring stream detection for vertical/horizontal TCP scans and DNS NXDOMAIN bursts with a local web dashboard.\n\nTags: Go, Networking, Security, Zeek, SQLite\nRepository: https://github.com/marques-jpg/GoNIDS",
        },
        "portfolio.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Portfolio\n\nMy portfolio website. Built with Next.js and deployed with Cloudflare Pages.\n\nTags: Next.js, TypeScript, Cloudflare\nRepository: https://github.com/marques-jpg/marques-portfolio",
        },
        "neural-network-riscv.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Neural Network in RISC-V\n\nAn implementation in Assembly RISC-V of a feedforward Artificial Neural Network.\n\nTags: Assembly, RISC-V\nRepository: https://github.com/marques-jpg/Neural-Network-in-RISC-V",
        },
        "protein-energy-maximizer.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Protein Chain Energy Maximizer\n\nA Protein Chain Energy Maximizer algorithm written in C++ for my Analysis and Synthesis of Algorithms class.\n\nTags: C++\nRepository: https://github.com/marques-jpg/Projeto-ASA-1",
        },
        "dotfiles.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Dotfiles\n\nMy personal dotfiles for my NixOS system.\n\nTags: Nix, NixOS\nRepository: https://github.com/marques-jpg/dotfiles",
        },
        "weather-station.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Weather Station\n\nProject made for the 'Engenharia para todos' 'Familias Tech' activity. Made in C++ for the Arduino UNO. Using a Nokia LCD 5110 screen, a temperature and humidity sensor (DHT22) and an air pressure sensor (BMP085) to capture and display environmental data.\n\nTags: Arduino, DHT22, C++, BMP085, Nokia LCD 5510\nRepository: https://github.com/marques-jpg/Weather-Station",
        },
        "library-management.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Library Management System\n\nA text-based Library Management system written in Java for my Object-Oriented Programming class.\n\nTags: Java\nRepository: https://github.com/marques-jpg/Projeto-PO",
        },
        "sports-league-optimizer.md": {
          kind: "file",
          fileType: "text",
          content:
            "# MILP Sports League Optimizer\n\nA C++ implementation of a MILP Sports League Optimizer for my Analysis and Synthesis of Algorithms class.\n\nTags: Python, C++\nRepository: https://github.com/marques-jpg/Projeto-ASA-3",
        },
        "galo-bot.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Galo-Bot\n\nProject made for the Rob9-16 'Winter University'. Made in C++ for an Arduino Uno. The Tic-Tac-Toe game is displayed on a 3x3 LED matrix on a breadboard, featuring player detection and win validation.\n\nTags: Arduino, C++, LEDs, Breadboard\nRepository: https://github.com/marques-jpg/Galo-Bot",
        },
        "pacman-game.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Multi Client Pacman Game\n\nA C implementation of the Pacman game, built on a Client-Server architecture for my Operating Systems class.\n\nTags: C, Linux\nRepository: https://github.com/marques-jpg/Projeto-SO-2",
        },
        "8bit-spike-processor.md": {
          kind: "file",
          fileType: "text",
          content:
            "# 8-bit Spike Processor\n\nA logic diagram implementation of a processor with an 8-bit data path architecture.\n\nTags: Logisim\nRepository: https://github.com/marques-jpg/Processor-8-bit-Spike",
        },
        "star-battle-solver.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Star Battle Game Solver\n\nA Prolog implementation of a script whose main focus is to algorithmically solve Star Battle puzzles for my Programming Logic class.\n\nTags: Prolog\nRepository: https://github.com/marques-jpg/Projeto-LP",
        },
        "dag-truck-routing.md": {
          kind: "file",
          fileType: "text",
          content:
            "# DAG Path Counter & Truck Routing\n\nA C++ DAG Path Counter & Truck Routing algorithm for my Analysis and Synthesis of Algorithms class.\n\nTags: C++\nRepository: https://github.com/marques-jpg/Projeto-ASA-2",
        },
        "orbito-game.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Orbito Game\n\nOrbito game implementation in Python for my Programming Fundamentals class.\n\nTags: Python\nRepository: https://github.com/marques-jpg/Projeto-FP",
        },
        "vaccine-management.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Vaccine Management System\n\nA text-based Vaccine Management System implemented in C for my Introduction to Algorithms and Data Structures class.\n\nTags: C\nRepository: https://github.com/marques-jpg/Projeto-IAED",
        },
      },
    },
    Experience: {
      kind: "directory",
      entries: {
        "cloudflare.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Cloudflare - Security & Edge Platform Internship\nPeriod: June 2026 — September 2026\n\nDuring my internship at Cloudflare, I resolved critical customer-facing cases across Cloudflare's security and edge platform, focusing heavily on zones under active attack, including L3/L4 and L7 DDoS mitigation, rate limiting, and WAF evasion. I analyzed sophisticated threats such as SQL and OGNL injection attempts while diagnosing WAF false positives, undetected attack traffic, credential stuffing, and bot activity to identify the underlying signals driving each decision. Additionally, I troubleshot HTTP/HTTPS, DNS, TLS, and Cloudflare Workers applications leveraging Linux tooling, ClickHouse, and Grafana, actively reproducing edge platform anomalies and collaborating with senior engineers on complex escalations.",
        },
        "sinfo-coordinator.md": {
          kind: "file",
          fileType: "text",
          content:
            "# SINFO — Coordinator / President\nPeriod: May 2026 — Present\n\nAs one of the four Coordinators at SINFO, Portugal's largest free tech conference, I oversee the event's year-round operations and strategic details. My role involves managing and supporting a dedicated 30+ person team across multiple departments to ensure flawless logistics and execution. By streamlining cross-functional communication and acting as the primary liaison with external institutions, I strive to maintain the highest standards of organization to deliver a highly successful and impactful event.",
        },
        "engenharia-para-todos.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Engenharia Para Todos — STEM Mentor\nPeriod: October 2025 — September 2026\n\nResearch Scholarship: I serve as a STEM Mentor in a partnership between Instituto Superior Técnico, INESC-ID, and the Oeiras City Council. My role focuses on introducing primary school all the way to high school students to Computer Science and Electronics. I lead the 'Smart City' project, where I guide schools in developing intelligent urban models through monthly sessions on Programming, 3D Modeling, and Electronics. Additionally, I'm actively involved in outreach initiatives like 'Oeiras Educa', 'Lab in a Box', and 'STEAM Lab', bringing engineering concepts to life for younger audiences. I also represent the project and promote engineering concepts at public events.",
        },
        "rob9-16.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Rob9-16 — Mentor\nPeriod: October 2025 — March 2026\n\nResearch Scholarship: During the 'Winter Camp' at Instituto Superior Técnico, I served as a Mentor for the Rob9-16 program. I had the rewarding challenge of teaching children (ages 6-12) the fundamentals of engineering. We built a Tic-Tac-Toe game from scratch using Arduino, where I taught C++ programming, logic design, and how to assemble circuits on a breadboard. It was a great opportunity to simplify complex technical concepts into engaging, hands-on learning experiences.",
        },
        "sinfo-logistics.md": {
          kind: "file",
          fileType: "text",
          content:
            "# SINFO — Logistics Team\nPeriod: May 2025 — May 2026\n\nMy role on the Logistics Team at SINFO – The Biggest free Tech Conference in Portugal – has equipped me with essential skills. Operating in a high-stakes, fast-paced environment, I collaborate with a large team to manage technical setups, venue design, and onsite coordination. This experience has significantly sharpened my adaptability, teamwork and dynamic problem-solving capabilities under pressure.",
        },
        "student-council.md": {
          kind: "file",
          fileType: "text",
          content:
            "# Student Council\nPeriod: February 2024 — September 2024\n\nOrganized and managed school events at Escola Secundária de Odivelas and represented the student body in academic meetings.",
        },
      },
    },
  },
};
