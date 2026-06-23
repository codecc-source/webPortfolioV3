"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minimize, Maximize } from "lucide-react";

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
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl z-50"
          >
            <div className="glow-box-strong bg-black border-2 border-green-500 h-full flex flex-col">
              {/* Title Bar */}
              <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-black px-4 py-3 flex items-center justify-between border-b-2 border-green-400">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [0.5, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="w-3 h-3 bg-black border-2 border-black"
                  ></motion.div>
                  <span className="text-xs md:text-sm font-bold">{title}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    className="hover:bg-green-400 p-1.5 transition-colors"
                    aria-label="Minimize"
                  >
                    <Minimize size={14} className="text-black" />
                  </button>
                  <button
                    className="hover:bg-green-400 p-1.5 transition-colors"
                    aria-label="Maximize"
                  >
                    <Maximize size={14} className="text-black" />
                  </button>
                  <button
                    onClick={onClose}
                    className="hover:bg-red-500 p-1.5 transition-colors"
                    aria-label="Close"
                  >
                    <X size={14} className="text-black" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 text-green-400 bg-black">
                <div className="text-green-300">{children}</div>
              </div>

              {/* Footer */}
              <div className="bg-gray-900 px-4 py-3 border-t-2 border-green-500 flex justify-end gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-green-500 text-black hover:bg-green-400 transition-all duration-300 text-xs font-bold border-2 border-black"
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
