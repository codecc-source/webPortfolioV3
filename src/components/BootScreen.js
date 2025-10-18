"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootScreen({ onBootComplete }) {
  const [bootStage, setBootStage] = useState(0);
  const [progress, setProgress] = useState(0);

  const bootMessages = [
    "INITIALIZING SYSTEM...",
    "LOADING BIOS...",
    "DETECTING HARDWARE...",
    "LOADING PORTFOLIO.EXE...",
    "MOUNTING FILESYSTEM...",
    "STARTING SERVICES...",
    "READY.",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (bootStage < bootMessages.length - 1) {
      const timeout = setTimeout(() => {
        setBootStage((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timeout);
    } else if (bootStage === bootMessages.length - 1 && progress === 100) {
      const timeout = setTimeout(() => {
        onBootComplete();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [bootStage, progress, onBootComplete, bootMessages.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="boot-screen fixed inset-0 z-50 bg-black"
    >
      <div className="boot-content">
        <div className="boot-header">
          <div className="boot-header-line">RETRO OS v1.0</div>
          <div className="boot-header-line">Copyright (c) CTJR</div>
        </div>

        <div className="boot-messages">
          {bootMessages.slice(0, bootStage + 1).map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="boot-message"
            >
              {message} <span className="animate-pulse">█</span>
            </motion.div>
          ))}
        </div>

        <div className="boot-progress">
          <div className="pixel-borders bg-black p-1">
            <div className="w-full bg-gray-900 h-4 sm:h-6 relative overflow-hidden">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
          <div className="progress-text">{progress}%</div>
        </div>
      </div>
    </motion.div>
  );
}
