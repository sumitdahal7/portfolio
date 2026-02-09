"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences, education, certifications } from "@/constants";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
} from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6 shadow-sm">
            <Briefcase className="w-4 h-4 text-purple-500 dark:text-purple-400" />
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              Career Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 md:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-4 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-ping opacity-50" />
                </div>

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:col-start-2"
                  }`}
                >
                  <div className="group p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-100 dark:hover:bg-white/[0.07] transition-all duration-300 shadow-sm">
                    {/* Header */}
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
                        <Calendar className="w-3 h-3" />
                        {exp.period.includes("Present") ? "Current" : ""}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-500">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/[0.07] transition-colors shadow-sm"
                >
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 dark:text-gray-500">
                      {edu.period}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/[0.07] transition-colors flex items-center gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-900 dark:text-white">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
