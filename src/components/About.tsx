"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personalInfo, skills, languages } from "@/constants";
import {
  MapPin,
  Globe,
  Code2,
  Server,
  Wrench,
  FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const techGroups = [
  { icon: Code2, label: "Core", items: skills.core },
  { icon: Globe, label: "GIS", items: skills.gis },
  { icon: Server, label: "Backend", items: skills.backend },
  { icon: Wrench, label: "Tools", items: skills.tools },
];

export default function About() {
  return (
    <section
      id="about"
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
            <SectionLabel>02 / About</SectionLabel>
          </motion.div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 items-start">
            {/* Left — Text */}
            <div>
              <motion.h2
                variants={item}
                className="text-4xl md:text-5xl font-medium mb-8 font-display text-text-primary leading-tight"
              >
                Crafting high-performance interfaces for complex geospatial
                problems.
              </motion.h2>

              <motion.p
                variants={item}
                className="text-lg leading-relaxed mb-6 text-text-muted font-sans"
              >
                {personalInfo.summary}
              </motion.p>

              <motion.p
                variants={item}
                className="text-base leading-relaxed mb-10 text-text-faint font-sans"
              >
                Based in{" "}
                <span className="text-text-primary">
                  {personalInfo.location}
                </span>
                , I work with GIS specialists and cross-functional teams to deliver robust technical solutions for Aid Management and Disaster Risk platforms.
              </motion.p>

              {/* Tech stack group items */}
              <motion.div variants={item} className="space-y-6 mb-12">
                {techGroups.map((group) => (
                  <div key={group.label} className="flex items-start gap-4">
                    <div className="flex items-center gap-2 pt-1 min-w-[100px] font-mono text-[10px] uppercase tracking-widest text-text-faint">
                      <group.icon size={12} className="text-accent" />
                      {group.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-1 rounded border border-white/5 bg-white/[0.02] text-text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={item}>
                <Button variant="primary" asChild>
                  <a
                    href={personalInfo.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileDown size={16} />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Right — Visual card */}
            <motion.div variants={item} className="sticky top-32">
              <div className="rounded-2xl p-8 bg-bg-surface border border-white/5 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-bg-elevated border border-white/10 flex items-center justify-center text-2xl font-medium text-accent font-mono mb-8">
                    SD
                  </div>
                  <h3 className="text-xl font-medium text-text-primary font-sans mb-1">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm text-text-muted font-sans mb-6">
                    {personalInfo.title}
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                    {[
                      { n: "3+", l: "Yrs Exp" },
                      { n: "5+", l: "GIS Apps" },
                      { n: "4", l: "Map Libs" },
                      { n: "2", l: "Companies" },
                    ].map((s) => (
                      <div key={s.l}>
                        <p className="text-2xl font-mono font-medium text-accent mb-1">
                          {s.n}
                        </p>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-text-faint">
                          {s.l}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
