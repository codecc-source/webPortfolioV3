"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-4 bottom-4 top-20 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-xl z-50"
          >
            <div
              className="h-full flex flex-col overflow-hidden rounded-2xl border"
              style={{
                background: "var(--bg-raised)",
                borderColor: "var(--border-strong)",
              }}
            >
              <div
                className="px-5 py-3.5 flex items-center justify-between border-b"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-sunken)",
                }}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  <span
                    className="font-mono text-xs tracking-wide truncate"
                    style={{ color: "var(--text)" }}
                  >
                    {title}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="rounded-md p-1.5 text-[color:var(--text-dim)] transition hover:text-[color:var(--text)] hover:bg-white/5"
                >
                  <X size={15} />
                </button>
              </div>

              <div
                className="flex-1 overflow-y-auto px-7 py-7"
                style={{ color: "var(--text)" }}
              >
                {children}
              </div>

              <div
                className="px-6 py-4 border-t flex justify-end"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--bg-sunken)",
                }}
              >
                <button
                  onClick={onClose}
                  className="btn-accent px-4 py-2 rounded-lg text-xs font-semibold font-mono"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
