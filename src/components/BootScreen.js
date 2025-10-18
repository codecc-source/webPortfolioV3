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
  }, [bootStage, progress, onBootComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="w-full max-w-2xl px-8">
        <div className="mb-8">
          <div className="text-green-500 text-xs md:text-sm mb-4 font-mono">
            RETRO OS v1.0
          </div>
          <div className="text-green-500 text-xs md:text-sm mb-2 font-mono">
            Copyright (c) 2025 Your Name
          </div>
        </div>

        <div className="space-y-2 mb-8">
          {bootMessages.slice(0, bootStage + 1).map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500 text-[10px] md:text-xs font-mono"
            >
              {message} <span className="animate-pulse">█</span>
            </motion.div>
          ))}
        </div>

        <div className="w-full">
          <div className="pixel-borders bg-black p-1">
            <div className="w-full bg-gray-900 h-6 relative overflow-hidden">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
          <div className="text-green-500 text-xs mt-2 text-center font-mono">
            {progress}%
          </div>
        </div>
      </div>
    </motion.div>
  );
}
