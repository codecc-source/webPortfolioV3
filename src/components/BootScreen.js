"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const lines = [
  "RETRO BIOS v1.0  (C) 2026",
  "CPU: PIXEL-86 @ 33MHz ........ OK",
  "MEMORY TEST:",
  "VIDEO: CRT-AMBER 640x480 ...... OK",
  "KEYBOARD ...................... OK",
  "MOUNTING /portfolio ........... OK",
  "LOADING RETRO_OS ..............",
];

export default function BootScreen({ onBootComplete }) {
  const [shown, setShown] = useState(1);
  const [mem, setMem] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (shown >= lines.length) return;
    const delay = shown === 3 ? 900 : 260;
    const t = setTimeout(() => setShown((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [shown]);

  useEffect(() => {
    if (shown < 3) return;
    const t = setInterval(() => setMem((m) => Math.min(m + 512, 16384)), 25);
    return () => clearInterval(t);
  }, [shown]);

  useEffect(() => {
    if (shown >= lines.length) {
      const t = setTimeout(() => setReady(true), 400);
      return () => clearTimeout(t);
    }
  }, [shown]);

  const go = useCallback(() => {
    if (ready) onBootComplete();
  }, [ready, onBootComplete]);

  useEffect(() => {
    if (!ready) return;
    window.addEventListener("keydown", go);
    return () => window.removeEventListener("keydown", go);
  }, [ready, go]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bios fixed inset-0 z-50"
      onClick={go}
    >
      <div className="bios-inner">
        <p className="bios-logo">▓▒░ RETRO_OS ░▒▓</p>
        {lines.slice(0, shown).map((l, i) => (
          <p key={l}>
            {l}
            {i === 2 && <span> {String(mem).padStart(5, " ")}K</span>}
            {i === 2 && mem >= 16384 && <span> OK</span>}
          </p>
        ))}
        <p className="mt-4">
          {ready ? (
            <>PRESS ANY KEY TO BOOT<span className="blink">_</span></>
          ) : (
            <span className="blink">█</span>
          )}
        </p>
      </div>
      <div className="crt" />
    </motion.div>
  );
}
