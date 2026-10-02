"use client";

import { FolderOpen, Mail, Github, Globe } from "lucide-react";
import GithubStats from "./Githubstats";
import { profile, projects, skills, experience, links } from "./data";

const linkIcons = { Email: Mail, GitHub: Github, Portfolio: Globe };
const dim = { color: "var(--text-dim)" };

function Bullets({ items }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((b) => (
        <li key={b} className="flex gap-2 text-sm leading-6" style={dim}>
          <span style={{ color: "var(--accent)" }}>›</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetail({ project }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="eyebrow mb-1.5">Type</p>
        <p className="text-sm" style={dim}>{project.subtitle}</p>
      </div>
      <div>
        <p className="eyebrow mb-1.5">Details</p>
        <Bullets items={project.bullets} />
      </div>
      <div>
        <p className="eyebrow mb-1.5">Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => <span key={t} className="os-chip">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function AppContent({ id, onOpenProject }) {
  switch (id) {
    case "about":
      return (
        <div className="space-y-4">
          <h1 className="font-display text-2xl font-semibold leading-tight">{profile.name}</h1>
          <p className="font-mono text-[12px]" style={{ color: "var(--accent)" }}>{profile.role}</p>
          <p className="text-sm leading-7" style={dim}>{profile.summary}</p>
          <p className="font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>{profile.location}</p>
        </div>
      );
    case "projects":
      return (
        <div>
          <p className="eyebrow mb-2">{projects.length} items — click to open</p>
          {projects.map((p) => (
            <button key={p.id} className="file-row" onClick={() => onOpenProject(p)}>
              <FolderOpen size={18} style={{ color: "var(--accent)" }} />
              <span className="flex-1">
                <span className="block font-display text-sm font-semibold">{p.title}</span>
                <span className="block font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>{p.subtitle}</span>
              </span>
            </button>
          ))}
        </div>
      );
    case "experience":
      return (
        <div className="space-y-6">
          {experience.map((e) => (
            <div key={e.role} className="pl-3" style={{ borderLeft: "2px solid var(--accent)" }}>
              <p className="text-sm font-semibold">{e.role}</p>
              <p className="font-mono text-[11px]" style={{ color: "var(--accent-2)" }}>{e.org} · {e.period}</p>
              <Bullets items={e.bullets} />
            </div>
          ))}
        </div>
      );
    case "skills":
      return (
        <div className="space-y-4">
          {skills.map((s) => (
            <div key={s.category}>
              <p className="eyebrow">{s.category}</p>
              <div className="mt-2 flex flex-wrap gap-2">{s.items.map((i) => <span key={i} className="os-chip">{i}</span>)}</div>
            </div>
          ))}
        </div>
      );
    case "github":
      return <GithubStats />;
    case "now":
      return (
        <p className="text-sm leading-7" style={dim}>
          Software Engineer at Odysse.io (remote, Poland) since April 2025 — WordPress, Core Web Vitals, and
          automation workflows.<span className="blink" style={{ color: "var(--accent)" }}> █</span>
        </p>
      );
    case "contact":
      return (
        <div className="space-y-2.5">
          {links.map((l) => {
            const Icon = linkIcons[l.label];
            return (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="os-link">
                <Icon size={16} style={{ color: "var(--accent)" }} />{l.label}
              </a>
            );
          })}
        </div>
      );
    default:
      return null;
  }
}
