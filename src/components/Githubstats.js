"use client";

import { useState, useEffect } from "react";
import { GitFork, Star, Users } from "lucide-react";

// Set this to your GitHub username
const GITHUB_USERNAME = "codecc-source";

export default function GithubStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((j) => active && setData(j))
      .catch(() => active && setError(true));
    return () => { active = false; };
  }, []);

  const stats = [
    { label: "Repos", value: data?.public_repos, icon: GitFork, accent: "var(--accent)" },
    { label: "Followers", value: data?.followers, icon: Users, accent: "var(--accent-2)" },
    { label: "Following", value: data?.following, icon: Star, accent: "var(--text-dim)" },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {stats.map(({ label, value, icon: Icon, accent }) => (
          <div key={label} className="panel-sunken p-3" style={{ borderRadius: 0 }}>
            <Icon className="h-4 w-4" style={{ color: accent }} />
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-faint)" }}>{label}</p>
            <p className="mt-1 text-lg font-semibold font-mono">{error ? "—" : (value ?? "··")}</p>
          </div>
        ))}
      </div>
      {!error ? (
        <div className="mt-4 overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=dark&hide_border=true&background=1A1916&stroke=2A2925&ring=F2A93B&fire=F2A93B&currStreakLabel=F2EEE3&sideLabels=A39C8D&dates=6E6A60&currStreakNum=F2EEE3&sideNums=F2EEE3`}
            alt="GitHub streak stats" className="w-full" loading="lazy"
          />
        </div>
      ) : (
        <p className="mt-4 font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>
          couldn&apos;t reach github api — set GITHUB_USERNAME in Githubstats.js
        </p>
      )}
    </div>
  );
}
