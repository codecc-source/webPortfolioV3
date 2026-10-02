"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="fixed inset-0 bg-black/60 z-[70]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[71] left-4 right-4 top-1/2 -translate-y-1/2 mx-auto max-w-lg"
          >
            <div className="win">
              <div className="win-title" style={{ cursor: "default" }}>
                <span className="flex-1 truncate">{title}.dat</span>
                <button className="win-btn" onClick={onClose} aria-label="Close">×</button>
              </div>
              <div className="win-body" style={{ maxHeight: "70vh" }}>{children}</div>
              <div className="flex justify-end px-4 py-3" style={{ borderTop: "2px solid var(--border-strong)" }}>
                <button onClick={onClose} className="btn-accent px-4 py-1.5 text-xs font-pixel" style={{ border: "2px solid var(--text)" }}>
                  [ OK ]
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
