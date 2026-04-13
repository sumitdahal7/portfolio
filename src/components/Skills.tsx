"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skills } from "@/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const skillGroups = [
  { label: "Core Technologies", items: skills.core },
  { label: "GIS & Mapping", items: skills.gis },
  { label: "Styling & UI", items: skills.styling },
  { label: "Backend & Systems", items: skills.backend },
  { label: "Tools", items: skills.tools },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            <SectionLabel>04 / Skills</SectionLabel>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-medium mb-16 font-display text-text-primary"
          >
            Technical toolkit.
          </motion.h2>

          <div className="grid gap-12">
            {skillGroups.map((group) => (
              <motion.div key={group.label} variants={item}>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-faint mb-6">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="px-5 py-2.5 rounded-xl text-sm font-sans text-text-muted bg-bg-surface border border-white/5 transition-all duration-300 hover:border-accent/30 hover:text-text-primary group cursor-default"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={item}
            className="mt-20 p-8 rounded-3xl bg-accent/5 border border-accent/10"
          >
            <p className="text-sm font-sans leading-relaxed text-text-muted">
              <span className="text-accent font-medium">Coming next:</span> Actively deepening backend expertise in Node.js and distributed systems to become a full-cycle engineer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
