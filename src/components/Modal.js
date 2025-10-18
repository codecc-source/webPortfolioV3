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
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl z-50"
          >
            <div className="pixel-borders bg-gray-800 h-full flex flex-col">
              <div className="bg-green-500 text-black px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black pixel-borders"></div>
                  <span className="text-xs font-bold">{title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="hover:bg-green-400 p-1 transition-colors"
                    aria-label="Minimize"
                  >
                    <Minimize size={16} />
                  </button>
                  <button
                    className="hover:bg-green-400 p-1 transition-colors"
                    aria-label="Maximize"
                  >
                    <Maximize size={16} />
                  </button>
                  <button
                    onClick={onClose}
                    className="hover:bg-red-500 p-1 transition-colors"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 text-green-400 bg-black">
                {children}
              </div>

              <div className="bg-gray-700 px-4 py-2 border-t-2 border-green-500">
                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className="pixel-borders px-4 py-2 bg-green-500 text-black hover:bg-green-400 transition-colors text-xs"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
