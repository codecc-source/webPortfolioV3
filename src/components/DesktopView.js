"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FolderOpen,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Layers,
  Activity,
  CircleDot,
  Terminal,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Modal from "./Modal";
import GithubStats from "./Githubstats";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function DesktopView() {
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
      subtitle: "Collaboration suite",
      description:
        "A responsive shell built for team workflows, live dashboards, and clean system controls.",
      tech: ["React", "Node.js", "MongoDB"],
      year: "2026",
      size: "lg",
    },
    {
      id: 2,
      title: "Project Beta",
      subtitle: "Performance interface",
      description:
        "A polished interactive portfolio shell with restrained motion and crisp card layouts.",
      tech: ["Next.js", "Tailwind", "GraphQL"],
      year: "2026",
      size: "sm",
    },
    {
      id: 3,
      title: "Project Gamma",
      subtitle: "AI research hub",
      description:
        "A data console for visual insights, intuitive controls, and intelligent status panels.",
      tech: ["Python", "TensorFlow", "React"],
      year: "2025",
      size: "sm",
    },
    {
      id: 4,
      title: "Project Delta",
      subtitle: "Automation engine",
      description:
        "A scripting pipeline that batches repetitive ops work into scheduled, observable jobs.",
      tech: ["Node.js", "Apps Script", "Cron"],
      year: "2025",
      size: "sm",
    },
    {
      id: 5,
      title: "Project Epsilon",
      subtitle: "Client CMS toolkit",
      description:
        "A set of theme and plugin extensions giving non-technical editors real layout control.",
      tech: ["WordPress", "PHP", "JS"],
      year: "2025",
      size: "sm",
    },
    {
      id: 6,
      title: "Project Zeta",
      subtitle: "3D pricing widget",
      description:
        "A client-side STL parser and pricing calculator with a live Babylon.js viewer.",
      tech: ["JavaScript", "Babylon.js", "Duda"],
      year: "2026",
      size: "lg",
    },
  ];

  const widgets = [
    {
      label: "Status",
      value: "Available",
      icon: CircleDot,
      accent: "var(--accent-2)",
    },
    {
      label: "Focus",
      value: "Frontend",
      icon: Activity,
      accent: "var(--accent)",
    },
    {
      label: "Based in",
      value: "Remote",
      icon: Layers,
      accent: "var(--text-dim)",
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
    { category: "Tooling", items: ["Git", "Apps Script", "Docker"] },
  ];

  const experience = [
    {
      role: "Freelance Web Developer",
      org: "Self-employed",
      period: "2023 — present",
      description:
        "Building and maintaining client sites and custom product widgets, spanning WordPress theme/plugin work, CMS customization, and automation scripting.",
      icon: Terminal,
    },
    {
      role: "Frontend Contractor",
      org: "Various agencies",
      period: "2021 — 2023",
      description:
        "Delivered responsive interfaces and performance fixes across multiple client codebases, focused on layout stability and load-time improvements.",
      icon: Briefcase,
    },
    {
      role: "Started building",
      org: "Self-taught",
      period: "2019",
      description:
        "Picked up HTML, CSS, and JavaScript and started shipping small sites, which grew into a full freelance practice.",
      icon: GraduationCap,
    },
  ];

  return (
    <div
      className="min-h-screen scan-texture"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      {/* Top status bar */}
      <div
        className="fixed inset-x-0 top-0 z-20 border-b"
        style={{
          borderColor: "var(--border)",
          background: "rgba(18,18,16,0.85)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10 py-4 font-mono text-[11px] tracking-wide">
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            <span style={{ color: "var(--text)" }}>workspace</span>
          </div>
          <span suppressHydrationWarning style={{ color: "var(--text-faint)" }}>
            {now
              ? now.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "--:--"}
          </span>
          <span style={{ color: "var(--accent-2)" }}>online</span>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 pt-28 sm:pt-32 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <section className="stack-lg space-y-8">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="panel p-8 sm:p-10"
            >
              <p className="eyebrow">portfolio / 2026</p>
              <h1
                className="font-display mt-3 text-4xl sm:text-5xl font-semibold leading-[1.05]"
                style={{ color: "var(--text)" }}
              >
                Building calm,
                <br />
                considered interfaces.
              </h1>
              <p
                className="mt-5 max-w-lg text-sm sm:text-[15px] leading-7"
                style={{ color: "var(--text-dim)" }}
              >
                I design and build product interfaces — from system architecture
                down to the pixel-level details that make software feel
                trustworthy.
              </p>

              <div className="mt-9 widget-grid grid-cols-3 gap-3 sm:gap-4">
                {widgets.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="panel-sunken p-4 sm:p-5">
                      <Icon
                        className="h-4 w-4"
                        style={{ color: item.accent }}
                      />
                      <p
                        className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em]"
                        style={{ color: "var(--text-faint)" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="mt-1 text-sm font-medium"
                        style={{ color: "var(--text)" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* About */}
            <motion.div {...fadeUp} className="panel p-8 sm:p-10">
              <p className="eyebrow">about</p>
              <h2
                className="font-display mt-2 text-xl font-semibold"
                style={{ color: "var(--text)" }}
              >
                A bit of context
              </h2>
              <p
                className="mt-4 text-sm sm:text-[15px] leading-7 max-w-2xl"
                style={{ color: "var(--text-dim)" }}
              >
                I'm a developer who likes systems that feel solid — fast load
                times, layouts that don't shift, and interfaces that explain
                themselves. Most of my work lives at the intersection of custom
                product builds and client platforms: WordPress themes and
                plugins, CMS widgets, and the small automation scripts that keep
                teams from doing the same task twice.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
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

            {/* Project grid */}
            <motion.div {...fadeUp}>
              <div className="mb-5 mt-2 flex items-center justify-between">
                <h2
                  className="font-display text-xl font-semibold"
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

              <div className="project-grid sm:grid-cols-2 gap-5">
                {projects.map((project, i) => (
                  <motion.button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                    whileHover={{ y: -3 }}
                    className={`panel group text-left p-7 sm:p-8 transition-colors hover:border-[color:var(--border-strong)] ${
                      project.size === "lg" ? "sm:col-span-2" : ""
                    }`}
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
                        className="h-4 w-4 shrink-0 opacity-50 transition group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ color: "var(--accent)" }}
                      />
                    </div>
                    <p
                      className="mt-5 text-sm leading-6"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {project.description}
                    </p>
                    <div className="mt-5 chip-row flex flex-wrap items-center gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="chip px-2.5 py-1 text-[11px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      <span
                        className="ml-auto font-mono text-[11px]"
                        style={{ color: "var(--text-faint)" }}
                      >
                        {project.year}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Experience timeline */}
            <motion.div {...fadeUp} className="panel p-8 sm:p-10">
              <p className="eyebrow">history</p>
              <h2
                className="font-display mt-2 text-xl font-semibold"
                style={{ color: "var(--text)" }}
              >
                Experience
              </h2>
              <div className="mt-7 space-y-7">
                {experience.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.role}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                          style={{ background: "var(--accent-soft)" }}
                        >
                          <Icon
                            className="h-4 w-4"
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
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <p
                            className="text-sm font-semibold"
                            style={{ color: "var(--text)" }}
                          >
                            {item.role}
                          </p>
                          <span
                            className="font-mono text-[11px]"
                            style={{ color: "var(--text-faint)" }}
                          >
                            {item.org}
                          </span>
                        </div>
                        <p
                          className="font-mono text-[11px] mt-0.5"
                          style={{ color: "var(--accent-2)" }}
                        >
                          {item.period}
                        </p>
                        <p
                          className="mt-2 text-sm leading-6 max-w-xl"
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
          </section>

          <aside className="stack-md space-y-6">
            <motion.div {...fadeUp} className="panel p-7">
              <p className="eyebrow">contact</p>
              <h3
                className="font-display mt-2 text-lg font-semibold"
                style={{ color: "var(--text)" }}
              >
                Let's talk
              </h3>
              <div className="mt-5 space-y-2.5">
                {quickLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="panel-sunken flex items-center gap-3 px-4 py-3.5 text-sm transition hover:border-[color:var(--border-strong)]"
                      style={{ color: "var(--text)" }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{ color: "var(--accent)" }}
                      />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <GithubStats />

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
          </aside>
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col gap-2 border-t pt-6 text-[11px] font-mono sm:flex-row sm:justify-end"
          style={{ borderColor: "var(--border)", color: "var(--text-faint)" }}
        >
          <span style={{ margin: "0 auto" }}>© 2026</span>
        </motion.footer>

        {selectedProject && (
          <Modal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
          >
            <div className="space-y-6">
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
      </main>
    </div>
  );
}
