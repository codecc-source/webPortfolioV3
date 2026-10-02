"use client";

import { useState, useEffect } from "react";

const CH = "!@#$%^&*<>?/|0123456789ABCDEFXZ";
const rnd = (n) => Array.from({ length: n }, () => CH[Math.floor(Math.random() * CH.length)]).join("");

function useGlitch(n) {
  const [s, setS] = useState("?".repeat(n));
  useEffect(() => {
    setS(rnd(n));
    const id = setInterval(() => setS(rnd(n)), 450);
    return () => clearInterval(id);
  }, [n]);
  return s;
}

export default function GlitchIcon({ mobile = false, selected = false, onSelect, onOpen }) {
  const name = useGlitch(8);
  const glyph = useGlitch(4);

  return (
    <button
      className={`os-icon glitch ${mobile ? "w-full" : ""}`}
      data-selected={selected}
      onClick={mobile ? onOpen : onSelect}
      onDoubleClick={mobile ? undefined : onOpen}
      onKeyDown={(e) => !mobile && e.key === "Enter" && onOpen()}
    >
      <span className="os-icon-tile" style={mobile ? { width: 60, height: 60 } : undefined}>{glyph}</span>
      <span className="os-icon-label">{name}.exe</span>
    </button>
  );
}
