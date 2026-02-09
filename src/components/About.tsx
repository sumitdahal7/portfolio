"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, skills } from "@/constants";
import { Code2, Database, Globe, Users, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    items: skills.languages,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Frameworks",
    icon: Sparkles,
    items: skills.frameworks,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "GIS & Mapping",
    icon: Globe,
    items: skills.gis,
    color: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Databases",
    icon: Database,
    items: skills.databases,
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Tools & Libraries",
    icon: Code2,
    items: skills.tools,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Soft Skills",
    icon: Users,
    items: skills.softSkills,
    color: "from-pink-400 to-purple-500",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative Element */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />

              <div className="pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Crafting Digital Experiences with{" "}
                  <span className="text-cyan-600 dark:text-cyan-400">
                    Geospatial Precision
                  </span>
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {personalInfo.summary}
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Experienced in collaborating with cross-functional teams, GIS
                  specialists, and government partners to deliver resilient
                  technical solutions for Aid Management, Infrastructure
                  Planning, and Disaster Risk Management platforms.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <motion.div
                    className="text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      3+
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      Years Exp.
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      10+
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      Projects
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                      4+
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      GIS Libraries
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                  >
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
