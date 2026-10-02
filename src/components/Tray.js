"use client";

import { useState } from "react";
import { Wifi, Volume2, VolumeX, BatteryFull } from "lucide-react";

export default function Tray() {
  const [muted, setMuted] = useState(false);
  return (
    <div className="tray">
      <span className="tray-ico" data-tip="Connected: PisoWifi"><Wifi size={14} /></span>
      <button className="tray-ico" data-tip={muted ? "Volume: muted" : "Volume: 60%"} aria-label="Toggle volume" onClick={() => setMuted((m) => !m)}>
        {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </button>
      <span className="tray-ico" data-tip="Battery: 100%"><BatteryFull size={14} /></span>
    </div>
  );
}
