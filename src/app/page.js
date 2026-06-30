"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import BootScreen from "@/components/BootScreen";
import DesktopView from "@/components/DesktopView";
import MobileView from "@/components/MobileView";

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleBootComplete = () => {
    setIsBooting(false);
  };

  return (
    <main className="overflow-hidden min-h-screen bg-slate-950 text-slate-100">
      <AnimatePresence mode="wait">
        {isBooting ? (
          <BootScreen key="boot" onBootComplete={handleBootComplete} />
        ) : isMobile ? (
          <MobileView key="mobile" />
        ) : (
          <DesktopView key="desktop" />
        )}
      </AnimatePresence>
    </main>
  );
}
