"use client";

import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const home = () => { window.location.href = "/"; };
    window.addEventListener("keydown", home);
    return () => window.removeEventListener("keydown", home);
  }, []);

  return (
    <main className="bsod" onClick={() => { window.location.href = "/"; }}>
      <div className="bsod-inner">
        <p className="bsod-title">CTJR_OSv3</p>
        <p>A problem has been detected and CTJR_OSv3 has been halted to protect your browsing session.</p>
        <p>PAGE_NOT_FOUND (404)</p>
        <p>The page you requested does not exist or has been moved. Check the address and try again.</p>
        <p>*** STOP: 0x00000194 (0xDEADBEEF, 0x00000000, 0x00000404, 0x00000001)</p>
        <p>Press any key to return to the desktop<span className="blink">_</span></p>
      </div>
    </main>
  );
}
