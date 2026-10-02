"use client";

import { useState, useEffect } from "react";

const BLOCKS = 20;

export default function LoadingBar({ ms, label, children }) {
  const [p, setP] = useState(0);

  useEffect(() => {
    const step = 60;
    const id = setInterval(() => {
      setP((v) => Math.min(100, v + ((100 * step) / ms) * (0.5 + Math.random())));
    }, step);
    return () => clearInterval(id);
  }, [ms]);

  const done = p >= 100;
  const on = Math.floor((p / 100) * BLOCKS);

  return (
    <>
      {!done && (
        <div className="loading">
          <p className="font-pixel text-xs">LOADING {label}...</p>
          <div className="loadbar">
            {Array.from({ length: BLOCKS }, (_, i) => <span key={i} data-on={i < on} />)}
          </div>
          <p className="loading-pct">{Math.floor(p)}%</p>
        </div>
      )}
      <div style={{ display: done ? "block" : "none" }}>{children}</div>
    </>
  );
}
