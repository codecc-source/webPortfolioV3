"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootScreen({ onBootComplete }) {
  const [bootStage, setBootStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [readyToContinue, setReadyToContinue] = useState(false);

  const bootMessages = [
    "INITIALIZING SYSTEM...",
    "LOADING BIOS...",
    "DETECTING HARDWARE...",
    "LOADING PORTFOLIO.EXE...",
    "MOUNTING FILESYSTEM...",
    "STARTING SERVICES...",
    "COMPILING ASSETS...",
    "LOADING UI FRAMEWORK...",
    "FINAL CHECKS...",
    "READY.",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 10 + 4;
        if (next >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (bootStage < bootMessages.length - 1) {
      const timeout = setTimeout(() => {
        setBootStage((prev) => prev + 1);
      }, 650);
      return () => clearTimeout(timeout);
    }
  }, [bootStage, bootMessages.length]);

  useEffect(() => {
    if (bootStage === bootMessages.length - 1 && progress >= 100) {
      setReadyToContinue(true);
    }
  }, [bootStage, progress]);

  const handleContinue = useCallback(() => {
    if (readyToContinue) {
      onBootComplete();
    }
  }, [readyToContinue, onBootComplete]);

  useEffect(() => {
    if (!readyToContinue) return;
    const onKeyDown = () => handleContinue();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [readyToContinue, handleContinue]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="boot-screen fixed inset-0 z-50 bg-black"
      onClick={handleContinue}
    >
      <div className="boot-overlay" />
      <div className="boot-content modern-pixel">
        <div className="boot-header">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="boot-header-line"
          >
            RETRO PORTFOLIO OS v3.0
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="boot-header-line"
          >
            © 2024 CTJR
          </motion.div>
        </div>

        <div className="boot-messages">
          <AnimatePresence>
            {bootMessages.slice(0, bootStage + 1).map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="boot-message"
              >
                <span className="text-green-400">{">"}</span>
                <span className="ml-2">{message}</span>
                {index === bootStage && bootStage < bootMessages.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="animate-pulse ml-1"
                  >
                    ▌
                  </motion.span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="boot-progress">
          <div className="pixel-borders bg-black/70 p-2 sm:p-3 rounded-md shadow-[0_0_12px_rgba(57,255,20,0.3)]">
            <div className="w-full bg-gray-800 h-5 sm:h-6 relative overflow-hidden rounded-sm border-2 border-green-500/50">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-cyan-400 shadow-[0_0_12px_#39ff14,0_0_24px_#00ffff]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeInOut" }}
              />
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
                }}
              />
            </div>
          </div>
          <motion.div
            className="progress-text text-green-400 font-bold"
            animate={{ opacity: [0.7, 1] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            {Math.floor(Math.min(progress, 100))}%
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-center mt-8 text-green-300/50 text-xs font-mono"
        >
          {readyToContinue ? (
            <p>Press any key or click to continue...</p>
          ) : (
            <p>Booting device... please wait.</p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
