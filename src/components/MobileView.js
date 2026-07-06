"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  FolderOpen,
  ArrowUpRight,
  CircleDot,
  Terminal,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Modal from "./Modal";
import GithubStats from "./Githubstats";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
};

export default function MobileView() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      subtitle: "Collaboration shell",
      description:
        "A compact console with responsive tiles, status quicklinks, and restrained motion.",
      tech: ["React", "Node.js", "MongoDB"],
      year: "2026",
    },
    {
      id: 2,
      title: "Project Beta",
      subtitle: "Performance UI",
      description:
        "A polished interface with quick access actions and a modern handheld layout.",
      tech: ["Next.js", "Tailwind", "GraphQL"],
      year: "2026",
    },
    {
      id: 3,
      title: "Project Gamma",
      subtitle: "AI dashboard",
      description:
        "A mini data hub that surfaces key features quickly while staying legible.",
      tech: ["Python", "TensorFlow", "React"],
      year: "2025",
    },
    {
      id: 4,
      title: "Project Delta",
      subtitle: "Automation engine",
      description:
        "A scripting pipeline that batches repetitive ops work into scheduled jobs.",
      tech: ["Node.js", "Apps Script", "Cron"],
      year: "2025",
    },
    {
      id: 5,
      title: "Project Epsilon",
      subtitle: "Client CMS toolkit",
      description:
        "Theme and plugin extensions giving non-technical editors real layout control.",
      tech: ["WordPress", "PHP", "JS"],
      year: "2025",
    },
    {
      id: 6,
      title: "Project Zeta",
      subtitle: "3D pricing widget",
      description:
        "A client-side STL parser and pricing calculator with a live 3D viewer.",
      tech: ["JavaScript", "Babylon.js", "Duda"],
      year: "2026",
    },
  ];

  const quickLinks = [
    { label: "Email", icon: Mail, href: "mailto:your.email@example.com" },
    { label: "GitHub", icon: Github, href: "https://github.com" },
    { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind", "Framer Motion"],
    },
    { category: "Backend", items: ["Node.js", "Python", "GraphQL", "REST"] },
    { category: "CMS / Platforms", items: ["WordPress", "Duda", "PHP"] },
  ];

  const experience = [
    {
      role: "Freelance Web Developer",
      org: "Self-employed",
      period: "2023 — present",
      description:
        "Building and maintaining client sites and custom product widgets.",
      icon: Terminal,
    },
    {
      role: "Frontend Contractor",
      org: "Various agencies",
      period: "2021 — 2023",
      description:
        "Delivered responsive interfaces and performance fixes for clients.",
      icon: Briefcase,
    },
    {
      role: "Started building",
      org: "Self-taught",
      period: "2019",
      description: "Picked up HTML, CSS, and JavaScript and started shipping.",
      icon: GraduationCap,
    },
  ];

  return (
    <div
      className="min-h-screen scan-texture"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <div
        className="fixed inset-x-0 top-0 z-20 border-b"
        style={{
          borderColor: "var(--border)",
          background: "rgba(18,18,16,0.85)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="flex items-center justify-between px-5 py-3.5 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <span>workspace</span>
          </div>
          <span suppressHydrationWarning style={{ color: "var(--text-faint)" }}>
            {now
              ? now.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "--:--"}
          </span>
        </div>
      </div>

      <main className="relative z-10 px-5 pt-20 pb-14">
        <div className="mx-auto max-w-md stack-lg space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="panel p-7"
          >
            <p className="eyebrow">portfolio / 2026</p>
            <h1
              className="font-display mt-3 text-3xl font-semibold leading-tight"
              style={{ color: "var(--text)" }}
            >
              Building calm, considered interfaces.
            </h1>
            <p
              className="mt-4 text-sm leading-7"
              style={{ color: "var(--text-dim)" }}
            >
              I design and build product interfaces, from architecture down to
              pixel-level detail.
            </p>
            <div className="mt-6 flex items-center gap-2 panel-sunken px-4 py-3 w-fit">
              <CircleDot
                className="h-3.5 w-3.5"
                style={{ color: "var(--accent-2)" }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: "var(--text)" }}
              >
                Available for work
              </span>
            </div>
          </motion.div>

          {/* About */}
          <motion.div {...fadeUp} className="panel p-7">
            <p className="eyebrow">about</p>
            <h2
              className="font-display mt-2 text-lg font-semibold"
              style={{ color: "var(--text)" }}
            >
              A bit of context
            </h2>
            <p
              className="mt-3 text-sm leading-6"
              style={{ color: "var(--text-dim)" }}
            >
              I like systems that feel solid — fast load times, layouts that
              don&apos;t shift, and interfaces that explain themselves. Most of
              my work sits between custom product builds and client CMS
              platforms.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Detail-oriented", "Performance-minded", "Ships fast"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="chip px-2.5 py-1 text-[11px] font-mono"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div {...fadeUp}>
            <div className="mb-4 mt-1 flex items-center justify-between">
              <h2
                className="font-display text-lg font-semibold"
                style={{ color: "var(--text)" }}
              >
                Selected work
              </h2>
              <span
                className="font-mono text-[11px]"
                style={{ color: "var(--text-faint)" }}
              >
                {projects.length} projects
              </span>
            </div>

            <div className="project-grid gap-4">
              {projects.map((project, i) => (
                <motion.button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
                  whileTap={{ scale: 0.98 }}
                  className="panel group text-left p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="grid h-10 w-10 place-items-center rounded-xl"
                        style={{ background: "var(--accent-soft)" }}
                      >
                        <FolderOpen
                          className="h-4.5 w-4.5"
                          style={{ color: "var(--accent)" }}
                        />
                      </div>
                      <div>
                        <p
                          className="font-display text-[15px] font-semibold"
                          style={{ color: "var(--text)" }}
                        >
                          {project.title}
                        </p>
                        <p
                          className="font-mono text-[11px]"
                          style={{ color: "var(--text-faint)" }}
                        >
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 opacity-50"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <p
                    className="mt-3 text-sm leading-6 line-clamp-2"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {project.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div {...fadeUp} className="panel p-7">
            <p className="eyebrow">history</p>
            <h2
              className="font-display mt-2 text-lg font-semibold"
              style={{ color: "var(--text)" }}
            >
              Experience
            </h2>
            <div className="mt-6 space-y-6">
              {experience.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex gap-3"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                        style={{ background: "var(--accent-soft)" }}
                      >
                        <Icon
                          className="h-3.5 w-3.5"
                          style={{ color: "var(--accent)" }}
                        />
                      </div>
                      {i < experience.length - 1 && (
                        <span
                          className="mt-2 w-px flex-1"
                          style={{ background: "var(--border)" }}
                        />
                      )}
                    </div>
                    <div className="pb-1">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        {item.role}
                      </p>
                      <p
                        className="font-mono text-[11px] mt-0.5"
                        style={{ color: "var(--accent-2)" }}
                      >
                        {item.org} · {item.period}
                      </p>
                      <p
                        className="mt-1.5 text-sm leading-6"
                        style={{ color: "var(--text-dim)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <GithubStats />

          {/* Toolkit */}
          <motion.div {...fadeUp} className="panel p-7">
            <p className="eyebrow">toolkit</p>
            <h3
              className="font-display mt-2 text-lg font-semibold"
              style={{ color: "var(--text)" }}
            >
              Core skills
            </h3>
            <div className="mt-5 space-y-4">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <p
                    className="font-mono text-[11px] uppercase tracking-[0.12em]"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {skill.category}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="chip px-2.5 py-1 text-[11px] font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Now */}
          <motion.div {...fadeUp} className="panel p-7">
            <div className="flex items-center gap-2">
              <Sparkles
                className="h-4 w-4"
                style={{ color: "var(--accent)" }}
              />
              <p className="eyebrow">now</p>
            </div>
            <p
              className="mt-3 text-sm leading-6"
              style={{ color: "var(--text-dim)" }}
            >
              Currently building a client-side 3D print pricing calculator —
              porting an STL parser and pricing engine to run entirely in the
              browser.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeUp} className="panel p-7">
            <p className="eyebrow">contact</p>
            <h3
              className="font-display mt-2 text-lg font-semibold"
              style={{ color: "var(--text)" }}
            >
              Let&apos;s talk
            </h3>
            <div className="mt-5 stack-md space-y-2.5">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel-sunken flex items-center gap-3 px-4 py-3.5 text-sm"
                  style={{ color: "var(--text)" }}
                >
                  <item.icon
                    className="h-4 w-4"
                    style={{ color: "var(--accent)" }}
                  />
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          <p
            className="text-center font-mono text-[11px]"
            style={{ color: "var(--text-faint)" }}
          >
            © 2026
          </p>
        </div>
      </main>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-5">
            <div>
              <p className="eyebrow mb-1.5">Type</p>
              <p className="text-sm" style={{ color: "var(--text)" }}>
                {selectedProject.subtitle}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-1.5">Description</p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-dim)" }}
              >
                {selectedProject.description}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-1.5">Stack</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="chip px-2.5 py-1 text-[11px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow mb-1.5">Year</p>
              <p className="text-sm" style={{ color: "var(--text)" }}>
                {selectedProject.year}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
