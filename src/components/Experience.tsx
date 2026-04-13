"use client";

import { motion, Variants } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experiences, education, certifications } from "@/constants";
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

export default function Experience() {
  return (
    <section
      id="experience"
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
            <SectionLabel>05 / Experience</SectionLabel>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-medium mb-16 font-display text-text-primary"
          >
            Career timeline.
          </motion.h2>

          <div className="grid lg:grid-cols-[1.8fr_1fr] gap-16 lg:gap-24 items-start">
            {/* Left — Work experience */}
            <div className="space-y-12">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-0 top-3 bottom-3 w-px bg-white/5" aria-hidden />

                <div className="space-y-12 pl-8">
                  {experiences.map((exp, i) => (
                    <motion.div key={exp.id} variants={item} className="relative group">
                      {/* Timeline dot */}
                      <div
                        className={cn(
                          "absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors duration-500",
                          i === 0 ? "bg-accent border-accent" : "bg-bg-base border-white/10 group-hover:border-accent/50"
                        )}
                        aria-hidden
                      />

                      <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                          <div>
                            <h3 className="text-xl font-medium text-text-primary font-sans leading-none mb-2">
                              {exp.title}
                            </h3>
                            <p className={cn(
                              "text-sm font-medium font-sans",
                              i === 0 ? "text-accent" : "text-text-muted"
                            )}>
                              {exp.company}
                            </p>
                          </div>
                          <div className="md:text-right">
                            <span className="text-xs font-mono uppercase tracking-widest text-text-faint block">
                              {exp.period}
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-text-faint/60 mt-1 block">
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                          {exp.description.map((d, di) => (
                            <li
                              key={di}
                              className="flex items-start gap-3 text-sm leading-relaxed text-text-muted font-sans"
                            >
                              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-white/10" />
                              {d}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-mono px-2 py-1 rounded bg-bg-surface border border-white/5 text-text-faint"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Education + Certifications */}
            <div className="space-y-16 sticky top-32">
              {/* Education */}
              <motion.div variants={item}>
                <SectionLabel className="mb-8">Education</SectionLabel>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-bg-surface border border-white/5"
                    >
                      <h4 className="text-sm font-medium text-text-primary font-sans mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-text-muted font-sans mb-4">
                        {edu.institution}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-[10px] font-mono tracking-widest text-text-faint">
                          {edu.period}
                        </span>
                        <span className={cn(
                          "text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded",
                          i === 0 ? "bg-accent/10 text-accent border border-accent/20" : "bg-white/[0.03] text-text-faint border border-white/5"
                        )}>
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div variants={item}>
                <SectionLabel className="mb-8">Certifications</SectionLabel>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-bg-surface border border-white/5 flex items-center gap-4 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-bg-elevated border border-white/10 flex items-center justify-center text-accent text-xs transition-colors group-hover:bg-accent group-hover:text-bg-base">
                        ✓
                      </div>
                      <p className="text-xs text-text-muted font-sans">
                        {cert}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
