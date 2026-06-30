"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, Users, GitCommitHorizontal } from "lucide-react";

// Set this to your GitHub username
const GITHUB_USERNAME = "codecc-source";

export default function GithubStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => {
        if (!res.ok) throw new Error("github fetch failed");
        return res.json();
      })
      .then((json) => {
        if (active) setData(json);
      })
      .catch(() => {
        if (active) setError(true);
      });
    return () => {
      active = false;
    };
  }, []);

  const stats = [
    {
      label: "Public repos",
      value: data?.public_repos,
      icon: GitFork,
      accent: "var(--accent)",
    },
    {
      label: "Followers",
      value: data?.followers,
      icon: Users,
      accent: "var(--accent-2)",
    },
    {
      label: "Following",
      value: data?.following,
      icon: Star,
      accent: "var(--text-dim)",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="panel p-7 sm:p-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow">live data</p>
          <h2
            className="font-display mt-2 text-xl font-semibold"
            style={{ color: "var(--text)" }}
          >
            GitHub activity
          </h2>
        </div>
        <GitCommitHorizontal
          className="h-5 w-5"
          style={{ color: "var(--accent)" }}
        />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="panel-sunken p-4 sm:p-5">
              <Icon className="h-4 w-4" style={{ color: item.accent }} />
              <p
                className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em]"
                style={{ color: "var(--text-faint)" }}
              >
                {item.label}
              </p>
              <p
                className="mt-1 text-lg font-semibold font-mono"
                style={{ color: "var(--text)" }}
              >
                {error ? "—" : (item.value ?? "··")}
              </p>
            </div>
          );
        })}
      </div>

      {!error && (
        <div
          className="mt-5 overflow-hidden rounded-xl border"
          style={{ borderColor: "var(--border)" }}
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=dark&hide_border=true&background=1A1916&stroke=2A2925&ring=F2A93B&fire=F2A93B&currStreakLabel=F2EEE3&sideLabels=A39C8D&dates=6E6A60&currStreakNum=F2EEE3&sideNums=F2EEE3`}
            alt="GitHub streak stats"
            className="w-full"
            loading="lazy"
          />
        </div>
      )}

      {error && (
        <p
          className="mt-5 font-mono text-[11px]"
          style={{ color: "var(--text-faint)" }}
        >
          couldn't reach github api — set GITHUB_USERNAME in GithubStats.js
        </p>
      )}
    </motion.div>
  );
}
