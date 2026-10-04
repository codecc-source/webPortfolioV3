"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

const CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "b", "a"];
const ICONS = { ArrowUp, ArrowDown, ArrowLeft, ArrowRight };
const PAD = [["ArrowUp", "up"], ["ArrowLeft", "left"], ["ArrowDown", "down"], ["ArrowRight", "right"], ["b", "b"], ["a", "a"]];

export default function KonamiApp() {
  const [seq, setSeq] = useState([]);
  const [status, setStatus] = useState("idle");
  const seqRef = useRef([]);
  const busy = useRef(false);

  const press = useCallback((key) => {
    if (busy.current) return;
    const next = [...seqRef.current, key];
    seqRef.current = next;
    setSeq(next);
    if (key !== CODE[next.length - 1]) {
      busy.current = true;
      setStatus("error");
      setTimeout(() => {
        seqRef.current = [];
        setSeq([]);
        setStatus("idle");
        busy.current = false;
      }, 800);
    } else if (next.length === CODE.length) {
      busy.current = true;
      setStatus("ok");
    }
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (k.startsWith("Arrow")) e.preventDefault();
      else if (k !== "b" && k !== "a") return;
      press(k);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [press]);

  const msg =
    status === "ok" ? "ACCESS GRANTED — pacman.exe found"
    : status === "error" ? "ERROR: invalid sequence"
    : "waiting for input_";
  const color =
    status === "ok" ? "var(--accent-2)" : status === "error" ? "var(--danger)" : "var(--text-faint)";

  return (
    <div className="space-y-5 font-mono">
      <p className="font-pixel text-sm" style={{ color: "var(--danger)" }}>KONAMI CODE</p>
      <p className="text-xs" style={{ color: "var(--text-dim)" }}>&gt; enter konami code to open file (shorter version of konami code)</p>
      <div className="flex gap-2">
        {CODE.map((_, i) => {
          const k = seq[i];
          const Icon = k && ICONS[k];
          const state = status === "error" && i === seq.length - 1 ? "bad" : k ? "on" : "off";
          return (
            <span key={i} className="konami-slot" data-state={state}>
              {Icon ? <Icon size={18} /> : k ? k.toUpperCase() : "_"}
            </span>
          );
        })}
      </div>
      <div className="pad">
        {PAD.map(([key, area]) => {
          const Icon = ICONS[key];
          return (
            <button key={key} className="pad-btn" style={{ gridArea: area }} aria-label={area} onClick={() => press(key)}>
              {Icon ? <Icon size={18} /> : <span className="font-pixel text-sm">{key.toUpperCase()}</span>}
            </button>
          );
        })}
      </div>
      <p className="text-xs" style={{ color }}>{msg}</p>
      {status === "ok" && (
        <button className="btn-accent px-4 py-1.5 text-xs font-pixel" style={{ border: "2px solid var(--text)" }}
          onClick={() => window.dispatchEvent(new Event("run-pacman"))}>
          [ RUN pacman.exe ]
        </button>
      )}
    </div>
  );
}
