"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";


const TerminalComponent = dynamic(
  () => import("one-terminal").then((mod) => mod.Terminal),
  { ssr: false }
);

import { vfs } from "./terminalVfs";

export default function InteractiveTerminal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full max-w-2xl rounded-xl overflow-hidden bg-black border border-gray-800 shadow-2xl min-h-[260px]">
        <div className="flex items-center px-4 py-2 bg-[#111] border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="mx-auto text-[10px] md:text-xs text-gray-500 font-mono">
            bash — guest@portfolio
          </div>
        </div>
        <div className="p-5 md:p-6 font-mono text-sm leading-relaxed text-left text-neutral-500">
          guest@portfolio:~$
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl text-left shadow-2xl rounded-xl overflow-hidden border border-gray-800 bg-black">
      <TerminalComponent
        fileStructure={vfs}
        prompt="guest@portfolio:~$ "
        windowChrome={[
          "mac",
          {
            titleBarText: "bash — guest@portfolio",
            titleBarTextColor: "#9ca3af",
            cornerRadius: 12,
          },
        ]}
        theme={{
          backgroundColor: "#000000",
          textColor: "#e5e7eb",
          promptColor: "#4ade80",
          fontFamily:
            'var(--font-mono), "JetBrainsMono Nerd Font", monospace',
          fontSize: "14px",
          lineHeight: "1.6",
          cursor: {
            shape: "block",
            color: "#4ade80",
            blink: true,
            blinkRate: 750,
          },
        }}
        demo={{
          script: ["cat README.md"],
          mode: "type-writer",
          defaultCharDelayMs: 40,
          defaultAfterLineDelayMs: 250,
          behavior: "interactive",
        }}
        extraCommands={{
          cv: {
            run: () => {
              if (typeof window !== "undefined") {
                window.open("/cv.pdf", "_blank");
              }
              return "Opening CV...";
            },
          },
          sudo: {
            run: () => "Permission denied: you are a guest user 😉",
          },
        }}
        style={{
          minHeight: "240px",
          maxHeight: "380px",
        }}
        className="w-full"
      />
    </div>
  );
}
