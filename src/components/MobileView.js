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
  User,
  Folder,
} from "lucide-react";
import Modal from "./Modal";

export default function MobileView() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "PROJECT ALPHA",
      subtitle: "FULL-STACK APP",
      description: "Real-time collaboration platform with data visualization built with React and Node.js.",
      tech: ["React", "Node.js", "MongoDB"],
      year: "2024",
    },
    {
      id: 2,
      title: "PROJECT BETA",
      subtitle: "MOBILE-FIRST",
      description: "Responsive design system with stunning visual performance across all devices.",
      tech: ["Next.js", "Tailwind CSS", "GraphQL"],
      year: "2024",
    },
    {
      id: 3,
      title: "PROJECT GAMMA",
      subtitle: "AI ANALYTICS",
      description: "Intelligent dashboard leveraging ML for real-time insights and analysis.",
      tech: ["Python", "TensorFlow", "React"],
      year: "2023",
    },
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
      {/* Scan line effect */}
      <div className="fixed inset-0 scan-line pointer-events-none z-50" />

      <div className="relative z-10">
        {/* HERO SECTION */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4 pt-16 pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <div className="text-xs text-cyan-400 mb-3 font-mono glow-text">
                {"// MOBILE TERMINAL"}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-green-400 mb-4 glow-text"
            >
              DEVELOPER
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xs text-green-300 mb-8 font-mono"
            >
              FULL-STACK DEVELOPER
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col gap-3"
            >
              <button className="button-frame px-6 py-2 bg-gradient-to-r from-cyan-400 to-green-400 text-slate-950 font-bold hover:from-cyan-300 hover:to-green-300 transition-all duration-300 text-xs rounded-xl">
                VIEW PROJECTS
              </button>
              <button className="button-frame px-6 py-2 border border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 text-xs rounded-xl">
                CONTACT ME
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section
          className="py-12 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-green-400 mb-2 glow-text"
          >
            FEATURED_PROJECTS
          </motion.h2>

          <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-cyan-400 mb-8" />

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.button
                key={project.id}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                className="panel-frame w-full p-4 bg-gradient-to-br from-slate-900 to-slate-950 border-slate-700/60 transition-all duration-300 text-left rounded-3xl"
              >
                <h3 className="text-sm font-bold text-green-400 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-green-300 mb-2 opacity-70">
                  {project.subtitle}
                </p>
                <p className="text-xs text-green-300/70 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] px-2 py-1 bg-green-400/10 text-cyan-300 border border-green-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section
          className="py-12 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-green-400 mb-2 glow-text"
          >
            TECH_STACK
          </motion.h2>

          <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-cyan-400 mb-8" />

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { category: "Frontend", items: ["React", "Next.js", "Tailwind"] },
              { category: "Backend", items: ["Node.js", "Python", "GraphQL"] },
              { category: "Tools", items: ["Git", "Docker", "AWS"] },
            ].map((skill) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="panel-frame p-4 bg-gradient-to-br from-slate-900/50 to-slate-950 border-slate-700/60 rounded-3xl"
              >
                <h3 className="text-sm font-bold text-cyan-300 mb-3">
                  {skill.category.toUpperCase()}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {skill.items.map((item) => (
                    <div
                      key={item}
                      className="text-xs text-green-300 border-l-2 border-green-500 pl-2 py-1"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          className="py-12 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-green-400 mb-6 glow-text text-center"
          >
            LET&apos;S_CONNECT
          </motion.h2>

          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a
              href="mailto:your.email@example.com"
              className="button-frame px-4 py-3 bg-gradient-to-r from-cyan-400 to-green-400 text-slate-950 font-bold hover:from-cyan-300 hover:to-green-300 transition-all duration-300 flex items-center justify-center gap-2 text-sm rounded-xl"
            >
              <Mail className="w-4 h-4" />
              EMAIL
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button-frame px-4 py-3 border border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 text-sm rounded-xl"
            >
              <Github className="w-4 h-4" />
              GITHUB
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button-frame px-4 py-3 border border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 flex items-center justify-center gap-2 text-sm rounded-xl"
            >
              <Linkedin className="w-4 h-4" />
              LINKEDIN
            </a>
          </motion.div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          className="border-t-2 border-green-500 bg-black/80 py-6 px-4 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-xs text-green-400 font-mono">
              {"// MOBILE OPTIMIZED"}
            </p>
            <p className="text-xs text-green-300 mt-1 font-mono opacity-70">
              © 2024 CTJR
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
          <div className="space-y-4">
            <div>
              <p className="text-xs text-green-400 mb-2 font-mono">TYPE</p>
              <p className="text-sm text-green-300">{selectedProject.subtitle}</p>
            </div>

            <div>
              <p className="text-xs text-green-400 mb-2 font-mono">DESCRIPTION</p>
              <p className="text-sm text-green-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div>
              <p className="text-xs text-green-400 mb-2 font-mono">TECH</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-green-500/20 text-green-300 text-xs border border-green-500/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
