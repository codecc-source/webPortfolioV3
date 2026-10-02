"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { Power, Terminal } from "lucide-react";
import Modal from "./Modal";
import AppContent, { ProjectDetail } from "./AppContent";
import { apps } from "./data";

function Win({ app, index, z, active, boundsRef, onFocus, onClose, onMin, onOpenProject }) {
  const controls = useDragControls();
  const Icon = app.icon;
  return (
    <motion.div
      drag dragControls={controls} dragListener={false} dragMomentum={false} dragElastic={0}
      dragConstraints={boundsRef}
      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.15 }}
      onPointerDown={onFocus}
      className={`win ${active ? "" : "win-inactive"}`}
      style={{ position: "absolute", left: 150 + index * 34, top: 24 + index * 28, width: app.w, maxWidth: "calc(100vw - 170px)", zIndex: z }}
    >
      <div className="win-title" onPointerDown={(e) => controls.start(e)}>
        <Icon size={13} />
        <span className="flex-1 truncate">{app.file}</span>
        <button className="win-btn" aria-label="Minimize" onPointerDown={(e) => e.stopPropagation()} onClick={onMin}>_</button>
        <button className="win-btn" aria-label="Close" onPointerDown={(e) => e.stopPropagation()} onClick={onClose}>×</button>
      </div>
      <div className="win-body" style={{ maxHeight: "calc(100vh - 150px)" }}>
        <AppContent id={app.id} onOpenProject={onOpenProject} />
      </div>
    </motion.div>
  );
}

export default function DesktopView() {
  const [open, setOpen] = useState([]);
  const [min, setMin] = useState([]);
  const [selected, setSelected] = useState(null);
  const [startOpen, setStartOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [now, setNow] = useState(null);
  const boundsRef = useRef(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  const launch = (id) => {
    setMin((m) => m.filter((x) => x !== id));
    setOpen((o) => [...o.filter((x) => x !== id), id]);
    setStartOpen(false);
  };
  const close = (id) => setOpen((o) => o.filter((x) => x !== id));
  const minimize = (id) => setMin((m) => [...m, id]);
  const top = open.filter((id) => !min.includes(id)).slice(-1)[0];

  return (
    <div className="os-desktop" onPointerDown={() => setStartOpen(false)}>
      {/* desktop icons */}
      <div className="absolute left-3 top-3 z-[5] flex flex-col flex-wrap gap-2" style={{ maxHeight: "calc(100vh - 70px)" }}>
        {apps.map((a) => {
          const Icon = a.icon;
          return (
            <button key={a.id} className="os-icon" data-selected={selected === a.id}
              onClick={() => setSelected(a.id)} onDoubleClick={() => launch(a.id)}
              onKeyDown={(e) => e.key === "Enter" && launch(a.id)}>
              <span className="os-icon-tile"><Icon size={24} /></span>
              <span className="os-icon-label">{a.label}</span>
            </button>
          );
        })}
      </div>

      {/* window area */}
      <div ref={boundsRef} className="absolute inset-0 bottom-[42px] pointer-events-none">
        <div className="pointer-events-auto">
          <AnimatePresence>
            {open.filter((id) => !min.includes(id)).map((id) => {
              const app = apps.find((a) => a.id === id);
              return (
                <Win key={id} app={app} index={apps.indexOf(app)} z={10 + open.indexOf(id)}
                  active={id === top} boundsRef={boundsRef}
                  onFocus={() => setOpen((o) => (o[o.length - 1] === id ? o : [...o.filter((x) => x !== id), id]))}
                  onClose={() => close(id)} onMin={() => minimize(id)} onOpenProject={setProject} />
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* start menu */}
      <AnimatePresence>
        {startOpen && (
          <motion.div className="start-menu" onPointerDown={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.12 }}>
            <div className="px-3 py-2 font-pixel text-xs" style={{ background: "var(--accent)", color: "#14130f" }}>RETRO_OS v1.0</div>
            {apps.map((a) => {
              const Icon = a.icon;
              return <button key={a.id} className="start-item" onClick={() => launch(a.id)}><Icon size={16} />{a.label}</button>;
            })}
            <button className="start-item" style={{ borderTop: "2px solid var(--border-strong)" }} onClick={() => location.reload()}>
              <Power size={16} />Reboot
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* taskbar */}
      <div className="taskbar" onPointerDown={(e) => e.stopPropagation()}>
        <button className="task-btn start-btn" onClick={() => setStartOpen((s) => !s)}>
          <Terminal size={14} />START
        </button>
        <div className="flex flex-1 gap-2 overflow-hidden">
          {open.map((id) => {
            const a = apps.find((x) => x.id === id);
            return (
              <button key={id} className="task-btn" data-active={id === top}
                onClick={() => (id === top ? minimize(id) : launch(id))}>
                <span className="truncate">{a.label}</span>
              </button>
            );
          })}
        </div>
        <span suppressHydrationWarning className="font-pixel text-xs px-3" style={{ color: "var(--accent)" }}>
          {now ? now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "--:--"}
        </span>
      </div>

      <div className="crt" />
      {project && (
        <Modal isOpen onClose={() => setProject(null)} title={project.title}>
          <ProjectDetail project={project} />
        </Modal>
      )}
    </div>
  );
}
