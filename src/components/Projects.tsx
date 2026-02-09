"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/constants";
import { ExternalLink, Layers, MapPin } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100,100,100,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/5 dark:from-purple-500/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-500/5 dark:from-cyan-500/10 to-transparent blur-3xl" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6 shadow-sm">
            <Layers className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of geospatial web applications and data visualization
            platforms I&apos;ve built for government and international
            organizations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: project.color + "30" }}
              />
              <div className="relative h-full p-6 md:p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3"
                      style={{
                        backgroundColor: project.color + "20",
                        color: project.color,
                      }}
                    >
                      <MapPin className="w-3 h-3" />
                      GIS Project
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                  <motion.div
                    className="p-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/5"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-white/10">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Interested in seeing more of my work?
          </p>
          <motion.a
            href="https://github.com/sumitdahal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
