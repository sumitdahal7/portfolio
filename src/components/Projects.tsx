"use client";

import { motion, Variants } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { projects, personalInfo } from "@/constants";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const accentColors: Record<string, string> = {
  "#10B981": "#10B981",
  "#3B82F6": "#3B82F6",
  "#8B5CF6": "#8B5CF6",
  "#EC4899": "#EC4899",
  "#F59E0B": "#F59E0B",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={item}>
            <SectionLabel>03 / Projects</SectionLabel>
          </motion.div>

          <div className="flex items-end justify-between mb-16">
            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl font-medium font-display text-text-primary"
            >
              Selected work.
            </motion.h2>
            <motion.a
              variants={item}
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-faint hover:text-text-primary transition-colors duration-300"
            >
              <Github size={14} />
              All Projects
            </motion.a>
          </div>

          {/* Featured project */}
          {projects[0] && (
            <motion.div
              variants={item}
              className="mb-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div
                className="group rounded-3xl p-8 relative overflow-hidden bg-bg-surface border border-white/5 transition-colors duration-300 hover:border-white/10"
              >
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-10 blur-[80px]"
                  style={{ background: projects[0].color || "var(--color-accent)" }}
                  aria-hidden
                />
                
                <div className="relative grid lg:grid-cols-2 gap-12">
                  <div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold font-mono"
                      style={{
                        background: (projects[0].color || "#e8ff47") + "15",
                        border: `1px solid ${projects[0].color || "#e8ff47"}30`,
                        color: projects[0].color || "#e8ff47",
                      }}
                    >
                      {projects[0].title.charAt(0)}
                    </div>
                    
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-faint mb-2 block">
                      Featured Project
                    </span>
                    
                    <h3 className="text-2xl font-medium text-text-primary font-sans mb-3">
                      {projects[0].title}
                    </h3>
                    
                    <p className="text-base text-text-muted font-sans mb-8 leading-relaxed">
                      {projects[0].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {projects[0].technologies.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <ul className="space-y-4 mb-8">
                      {projects[0].highlights.map((h) => (
                        <li key={h} className="text-sm text-text-faint flex items-start gap-3 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-accent/40" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-6">
                      <a href="#" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-primary hover:text-accent transition-colors">
                        Case Study <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(1).map((proj) => (
              <motion.div
                key={proj.id}
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group rounded-2xl p-6 h-full bg-bg-surface border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold font-mono mb-6"
                  style={{
                    background: (proj.color || "#888") + "10",
                    border: `1px solid ${proj.color || "#888"}20`,
                    color: proj.color || "#888",
                  }}
                >
                  {proj.title.charAt(0)}
                </div>

                <h3 className="text-lg font-medium text-text-primary font-sans mb-2">
                  {proj.title}
                </h3>
                
                <p className="text-xs text-text-muted font-sans line-clamp-3 mb-6 leading-relaxed">
                  {proj.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0, 3).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                  {proj.technologies.length > 3 && (
                    <span className="text-[9px] font-mono px-2 py-1 rounded bg-bg-elevated text-text-faint border border-white/5">
                      +{proj.technologies.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
