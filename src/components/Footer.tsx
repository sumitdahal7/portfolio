"use client";

import { personalInfo } from "@/constants";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        
        <div className="flex items-center gap-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint/60">
            Deployed with Vercel
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint/60">
            Built with Next.js 16
          </p>
        </div>
      </div>
    </footer>
  );
}
