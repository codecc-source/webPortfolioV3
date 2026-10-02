"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Power } from "lucide-react";
import Modal from "./Modal";
import AppContent, { ProjectDetail } from "./AppContent";
import Clock from "./Clock";
import Tray from "./Tray";
import GlitchIcon from "./GlitchIcon";
import { apps, profile } from "./data";

const dock = ["about", "projects", "contact"];

function Tile({ app, onOpen }) {
  const Icon = app.icon;
  if (app.glitch) return <GlitchIcon mobile onOpen={() => onOpen(app.id)} />;
  return (
    <button className="os-icon w-full" onClick={() => onOpen(app.id)}>
      <span className="os-icon-tile" style={{ width: 60, height: 60 }}><Icon size={28} /></span>
      <span className="os-icon-label">{app.label}</span>
    </button>
  );
}

export default function MobileView() {
  const [current, setCurrent] = useState(null);
  const [project, setProject] = useState(null);
  const [off, setOff] = useState(false);
  const reboot = () => {
    setOff(true);
    setTimeout(() => location.reload(), 650);
  };

  const app = apps.find((a) => a.id === current);

  return (
    <div className={`os-desktop ${off ? "crt-off" : "crt-on"}`}>
      <div className="m-status">
        <button className="flex items-center gap-1.5" style={{ color: "var(--accent)" }} onClick={reboot} aria-label="Reboot">
          <Power size={12} />CTJR_OSv3
        </button>
        <Clock />
        <Tray />
      </div>

      <main className="absolute inset-x-0 top-[30px] bottom-0 overflow-y-auto px-5 pt-5 pb-28">
        <div className="win mx-auto max-w-md mb-6">
          <div className="win-title"><span className="flex-1">welcome.txt</span></div>
          <div className="px-4 py-4">
            <h1 className="font-display text-xl font-semibold leading-tight">{profile.name}</h1>
            <p className="mt-2 font-mono text-[11px]" style={{ color: "var(--accent-2)" }}>{profile.role}</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-md grid-cols-3 gap-y-4">
          {apps.map((a) => <Tile key={a.id} app={a} onOpen={setCurrent} />)}
        </div>
      </main>

      <div className="m-dock">
        {dock.map((id) => <Tile key={id} app={apps.find((a) => a.id === id)} onOpen={setCurrent} />)}
      </div>

      <AnimatePresence>
        {app && (
          <motion.div key={app.id} className="m-app"
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.22, ease: "easeOut" }}>
            <div className="win-title">
              <button className="win-btn" aria-label="Back" onClick={() => setCurrent(null)}><ChevronLeft size={14} /></button>
              <span className="flex-1 truncate">{app.file}</span>
              <button className="win-btn" aria-label="Close" onClick={() => setCurrent(null)}>×</button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 pb-10">
              <AppContent id={app.id} onOpenProject={setProject} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="crt" />
      {project && (
        <Modal isOpen onClose={() => setProject(null)} title={project.title}>
          <ProjectDetail project={project} />
        </Modal>
      )}
    </div>
  );
}
