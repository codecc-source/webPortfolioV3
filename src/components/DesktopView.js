"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import Modal from "./Modal";

export default function DesktopView() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "PROJECT ALPHA",
      subtitle: "FULL-STACK APPLICATION",
      description:
        "A revolutionary web platform featuring real-time collaboration, advanced data visualization, and seamless user experience built with cutting-edge technologies.",
      tech: ["React", "Node.js", "MongoDB", "WebSockets"],
      year: "2024",
    },
    {
      id: 2,
      title: "PROJECT BETA",
      subtitle: "MOBILE-FIRST EXPERIENCE",
      description:
        "Responsive design system delivering stunning visual performance across all devices with optimized performance and intuitive navigation patterns.",
      tech: ["Next.js", "Tailwind CSS", "GraphQL", "PostgreSQL"],
      year: "2024",
    },
    {
      id: 3,
      title: "PROJECT GAMMA",
      subtitle: "AI-POWERED ANALYTICS",
      description:
        "Intelligent analytics dashboard leveraging machine learning to provide actionable insights with real-time data processing and predictive analysis.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      year: "2023",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "GraphQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "PostgreSQL"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#39ff14"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Scan line effect */}
      <div className="fixed inset-0 scan-line pointer-events-none z-50" />

      <div className="relative z-10">
        {/* HERO SECTION */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <div className="text-sm md:text-base text-cyan-400 mb-4 font-mono glow-text">
                {"// WELCOME TO MY DIGITAL WORKSPACE"}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-400 mb-6 glow-text float-animation"
            >
              DEVELOPER
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center gap-2 mb-12"
            >
              <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-cyan-400" />
              <span className="text-sm md:text-base text-cyan-300 font-mono">
                CRAFTING DIGITAL EXPERIENCES
              </span>
              <div className="h-1 w-12 bg-gradient-to-l from-green-400 to-cyan-400" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xs md:text-sm text-green-300 mb-12 max-w-2xl mx-auto leading-relaxed font-mono"
            >
              Specializing in full-stack development with a passion for creating
              responsive, performant, and visually stunning applications. Expertise
              in React, Next.js, and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="px-8 py-3 bg-green-400 text-black font-bold hover:bg-green-300 transition-all duration-300 glow-box hover:glow-box-strong text-xs md:text-sm">
                VIEW PROJECTS
              </button>
              <button className="px-8 py-3 border-2 border-green-400 text-green-400 font-bold hover:bg-green-400 hover:text-black transition-all duration-300 text-xs md:text-sm">
                CONTACT ME
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section
          className="py-16 md:py-24 px-4 md:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-green-400 mb-4 glow-text"
            >
              FEATURED_PROJECTS
            </motion.h2>

            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-400 mb-12" />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, idx) => (
                <motion.button
                  key={project.id}
                  variants={itemVariants}
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="glow-box hover:glow-box-strong p-6 bg-gradient-to-br from-gray-900 to-black border border-green-500/30 transition-all duration-300 text-left group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                      {idx + 1}
                    </div>
                    <Rocket className="text-cyan-400 w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-green-400 mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-green-300 mb-4 opacity-70">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-green-300/80 mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-1 bg-green-400/10 text-cyan-300 border border-green-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-cyan-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW DETAILS
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section
          className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-transparent via-green-950/5 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-green-400 mb-4 glow-text"
            >
              TECH_STACK
            </motion.h2>

            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-400 mb-12" />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  className="glow-box p-8 bg-gradient-to-br from-gray-900/50 to-black border border-cyan-400/20"
                >
                  <Code2 className="text-cyan-400 w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold text-cyan-300 mb-6">
                    {skill.category.toUpperCase()}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skill.items.map((item) => (
                      <div
                        key={item}
                        className="text-xs text-green-300 border-l-2 border-green-500 pl-3 py-1"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          className="py-20 md:py-32 px-4 md:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-green-400 mb-8 glow-text"
            >
              LET'S_CONNECT
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm text-green-300 mb-12 font-mono"
            >
              Have a project in mind? Let's collaborate and create something extraordinary.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="mailto:your.email@example.com"
                className="glow-box hover:glow-box-strong px-8 py-4 bg-green-400 text-black font-bold hover:bg-green-300 transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <Mail className="w-5 h-5" />
                EMAIL
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-box hover:glow-box-strong px-8 py-4 border-2 border-green-400 text-green-400 font-bold hover:bg-green-400 hover:text-black transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <Github className="w-5 h-5" />
                GITHUB
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-box hover:glow-box-strong px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <Linkedin className="w-5 h-5" />
                LINKEDIN
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          className="border-t-2 border-green-500 bg-black/80 py-8 px-4 md:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs text-green-400 font-mono">
              {"// CRAFTED WITH ❤️ USING REACT & NEXT.JS"}
            </p>
            <p className="text-xs text-green-300 mt-2 font-mono opacity-70">
              © 2024 CTJR | ALL SYSTEMS OPERATIONAL
            </p>
          </div>
        </motion.footer>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            <div>
              <p className="text-xs text-green-400 mb-2 font-mono">PROJECT_TYPE</p>
              <p className="text-sm text-green-300">{selectedProject.subtitle}</p>
            </div>

            <div>
              <p className="text-xs text-green-400 mb-2 font-mono">DESCRIPTION</p>
              <p className="text-sm text-green-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div>
              <p className="text-xs text-green-400 mb-3 font-mono">TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-500/20 text-green-300 text-xs border border-green-500/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-green-400 mb-2 font-mono">YEAR</p>
              <p className="text-sm text-green-300">{selectedProject.year}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
