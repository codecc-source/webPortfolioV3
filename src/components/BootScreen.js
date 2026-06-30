"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootMessages = [
  "checking system integrity",
  "mounting workspace",
  "loading typography",
  "syncing layout grid",
  "calibrating accents",
  "shell ready",
];

export default function BootScreen({ onBootComplete }) {
  const [bootStage, setBootStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [readyToContinue, setReadyToContinue] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 9 + 5;
        if (next >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (bootStage < bootMessages.length - 1) {
      const timeout = setTimeout(() => setBootStage((prev) => prev + 1), 380);
      return () => clearTimeout(timeout);
    }
  }, [bootStage]);

  useEffect(() => {
    if (bootStage === bootMessages.length - 1 && progress >= 100) {
      setReadyToContinue(true);
    }
  }, [bootStage, progress]);

  const handleContinue = useCallback(() => {
    if (readyToContinue) onBootComplete();
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
      transition={{ duration: 0.4 }}
      className="boot-screen fixed inset-0 z-50"
      onClick={handleContinue}
    >
      <div className="relative flex min-h-screen items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="panel relative w-full max-w-md p-8"
        >
          <p className="eyebrow">workspace boot</p>
          <h1
            className="font-display mt-2 text-2xl font-semibold"
            style={{ color: "var(--text)" }}
          >
            Starting up
          </h1>

          <div
            className="panel-sunken mt-6 p-4 font-mono text-[12.5px]"
            style={{ color: "var(--text-dim)" }}
          >
            <AnimatePresence>
              {bootMessages.slice(0, bootStage + 1).map((message, index) => (
                <motion.div
                  key={message}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 py-0.5"
                >
                  <span
                    style={{
                      color:
                        index === bootStage &&
                        bootStage < bootMessages.length - 1
                          ? "var(--accent)"
                          : "var(--accent-2)",
                    }}
                  >
                    {index === bootStage && bootStage < bootMessages.length - 1
                      ? "›"
                      : "✓"}
                  </span>
                  <span className="flex-1" style={{ color: "var(--text)" }}>
                    {message}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-5">
            <div
              className="h-1.5 w-full rounded-full overflow-hidden"
              style={{ background: "var(--bg-sunken)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--accent)" }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
            <div
              className="mt-2 flex items-center justify-between font-mono text-[11px]"
              style={{ color: "var(--text-faint)" }}
            >
              <span>loading</span>
              <span style={{ color: "var(--text-dim)" }}>
                {Math.floor(Math.min(progress, 100))}%
              </span>
            </div>
          </div>

          <div
            className="mt-6 text-center font-mono text-[11px]"
            style={{ color: "var(--text-faint)" }}
          >
            {readyToContinue ? (
              <span style={{ color: "var(--accent)" }}>
                press any key to continue
              </span>
            ) : (
              "please wait…"
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
