"use client";

import { FolderOpen, Mail, Github, ExternalLink, Construction } from "lucide-react";
import GithubStats from "./Githubstats";
import LoadingBar from "./LoadingBar";
import KonamiApp from "./KonamiApp";
import { apps, profile, projects, skills, experience, links } from "./data";

const linkIcons = { Email: Mail, GitHub: Github };
const dim = { color: "var(--text-dim)" };

function Bullets({ items, cols = false }) {
  return (
    <ul className={`mt-2 ${cols ? "grid gap-x-6 gap-y-1.5 md:grid-cols-2" : "space-y-1.5"}`}>
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
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-5">
        <div>
          <p className="eyebrow mb-1.5">
            {project.subtitle}{project.wip && <span className="os-chip ml-2">WIP</span>}
          </p>
          <p className="text-sm leading-7" style={dim}>{project.summary}</p>
        </div>
        <div>
          <p className="eyebrow mb-1.5">Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => <span key={t} className="os-chip">{t}</span>)}
          </div>
        </div>
        {(project.live || project.repo) && (
          <div className="flex flex-wrap gap-2">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="os-link">
                <ExternalLink size={14} style={{ color: "var(--accent)" }} />Live site
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="os-link">
                <Github size={14} style={{ color: "var(--accent)" }} />Source
              </a>
            )}
          </div>
        )}
      </div>
      <div>
        <p className="eyebrow mb-1.5">Highlights</p>
        <Bullets items={project.bullets} />
      </div>
    </div>
  );
}

function Inner({ id, onOpenProject }) {
  switch (id) {
    case "about":
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h1 className="font-display text-2xl font-semibold leading-tight">{profile.name}</h1>
            <p className="font-mono text-[12px] leading-5" style={{ color: "var(--accent)" }}>{profile.role}</p>
            {profile.about.map((p) => <p key={p.slice(0, 20)} className="text-sm leading-6" style={dim}>{p}</p>)}
            <p className="font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>{profile.location}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">What I do</p>
            <div className="space-y-3">
              {profile.focus.map((f) => (
                <div key={f.title} className="pl-3" style={{ borderLeft: "2px solid var(--accent)" }}>
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="mt-0.5 text-sm leading-6" style={dim}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "projects":
      return (
        <div>
          <p className="eyebrow mb-2">{projects.length} items — click to open</p>
          <div className="grid gap-x-3 md:grid-cols-2">
            {projects.map((p) => (
              <button key={p.id} className="file-row" onClick={() => onOpenProject(p)}>
                {p.wip
                  ? <Construction size={18} style={{ color: "var(--accent-2)" }} />
                  : <FolderOpen size={18} style={{ color: "var(--accent)" }} />}
                <span className="flex-1">
                  <span className="block font-display text-sm font-semibold">{p.title}</span>
                  <span className="block font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>{p.subtitle}</span>
                </span>
                {p.wip && <span className="os-chip">WIP</span>}
              </button>
            ))}
          </div>
        </div>
      );
    case "experience": {
      const cur = experience.find((e) => e.current);
      return (
        <div>
          <div className="timeline-now">
            <span className="timeline-dot" />
            <div>
              <p className="eyebrow">Current</p>
              <p className="text-sm font-semibold">{cur.role}</p>
              <p className="font-mono text-[11px]" style={{ color: "var(--accent-2)" }}>{cur.org} · {cur.period}</p>
            </div>
          </div>
          <p className="eyebrow mt-5">Timeline · newest first</p>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role} className="timeline-item" data-current={!!e.current}>
                <span className="timeline-node" />
                <div className="timeline-card">
                  <div className="timeline-head">
                    <span className="timeline-tag">{e.tag}</span>
                    <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>{e.period}</span>
                  </div>
                  <p className="text-sm font-semibold">{e.role}</p>
                  <p className="font-mono text-[11px]" style={{ color: "var(--accent-2)" }}>{e.org}</p>
                  <p className="mt-1.5 text-sm leading-6" style={dim}>{e.summary}</p>
                  <Bullets items={e.bullets} cols={!!e.current} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    }
    case "skills":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.category} className="skill-card">
              <div className="skill-head">{s.category}</div>
              <div className="skill-body">
                <p className="text-sm leading-5" style={dim}>{s.blurb}</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">{s.items.map((i) => <span key={i} className="os-chip">{i}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      );
    case "github":
      return <GithubStats />;
    case "now":
      return (
        <div className="space-y-3">
          <p className="text-sm leading-6" style={dim}>
            Software Engineer at Odysse.io (remote, Poland) since April 2025, working across multiple production
            WordPress sites.<span className="blink" style={{ color: "var(--accent)" }}> █</span>
          </p>
          <div>
            <p className="eyebrow">Day to day</p>
            <Bullets items={[
              "Plugin development, theme creation, bug testing and fixes.",
              "Performance passes with PageSpeed Insights and Core Web Vitals.",
              "Responsive, performance-safe UI components.",
              "Zapier workflows and API integrations with WordPress.",
            ]} />
          </div>
          <p className="font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>
            side project: this portfolio, CTJR_OSv3
          </p>
        </div>
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
    case "konami":
      return <KonamiApp />;
    default:
      return null;
  }
}

export default function AppContent(props) {
  const app = apps.find((a) => a.id === props.id);
  if (!app?.load) return <Inner {...props} />;
  return (
    <LoadingBar ms={app.load} label={app.file}>
      <Inner {...props} />
    </LoadingBar>
  );
}
