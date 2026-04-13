"use client";

import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, FileDown } from "lucide-react";
import { personalInfo } from "@/constants";
import { Button } from "@/components/ui/Button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 pt-24 pb-12">
      {/* Glow blob */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "var(--color-accent)",
          opacity: 0.04,
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Status badge */}
          <motion.div variants={item} className="mb-10">
            <span
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-accent/20 font-mono text-accent bg-accent/5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="mb-6 text-text-primary leading-[1.1] font-medium font-display text-[clamp(3.5rem,10vw,6rem)]"
          >
            Sumit <span className="text-accent">Dahal</span>
            <span className="text-text-faint">.</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="text-xl md:text-2xl mb-4 text-text-muted font-sans"
          >
            Frontend Engineer &mdash;{" "}
            <span className="text-text-faint">
              Geospatial &amp; Data-Driven Applications
            </span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-base leading-relaxed max-w-xl mb-10 text-text-muted font-sans"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Button variant="primary" asChild>
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown size={16} />
                Download CV
              </a>
            </Button>

            <Button variant="ghost" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Work
            </Button>

            {/* Social icons */}
            <div className="flex items-center gap-2 ml-4">
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all duration-200">
                <Github size={18} />
              </a>
              <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all duration-200">
                <Linkedin size={18} />
              </a>
              <a href={personalInfo.socialLinks.email} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all duration-200">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-12 pt-10 border-t border-white/5"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "5+", label: "GIS Projects" },
              { value: "4", label: "Mapping Libraries" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-medium mb-1 text-accent font-mono">
                  {stat.value}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-text-faint font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-text-faint hover:text-text-muted transition-colors duration-200 group"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="group-hover:text-accent transition-colors" />
        </motion.div>
        <div className="w-px h-12 bg-gradient-to-b from-text-faint/50 to-transparent" />
      </button>
    </section>
  );
}
