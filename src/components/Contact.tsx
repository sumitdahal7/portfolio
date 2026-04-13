"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personalInfo } from "@/constants";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

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

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 text-center border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={item} className="flex justify-center">
            <SectionLabel>06 / Contact</SectionLabel>
          </motion.div>

          <motion.h2
            variants={item}
            className="font-medium mb-8 font-display text-text-primary leading-tight text-[clamp(2.5rem,8vw,5rem)]"
          >
            Let&apos;s build <span className="text-accent italic">something</span>
            <span className="text-text-faint">.</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg leading-relaxed mb-12 max-w-xl mx-auto text-text-muted font-sans"
          >
            Have a project in mind or want to explore opportunities? I&apos;m
            always open to interesting technical conversations.
          </motion.p>

          {/* Email link */}
          <motion.div variants={item} className="mb-16">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-4 text-3xl md:text-5xl font-medium font-display text-accent transition-all duration-300 hover:opacity-80 group"
            >
              {personalInfo.email}
              <ArrowRight
                size={32}
                className="transition-transform duration-300 group-hover:translate-x-3"
              />
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Phone */}
          <motion.p
            variants={item}
            className="text-xs font-mono tracking-[0.2em] uppercase text-text-faint"
          >
            {personalInfo.phone}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
