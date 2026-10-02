"use client";

import { useState, useEffect } from "react";

const fmt = new Intl.DateTimeFormat([], { hour: "2-digit", minute: "2-digit" });

export default function Clock({ className, style }) {
  const [t, setT] = useState(null);

  useEffect(() => {
    let id;
    const tick = () => {
      const d = new Date();
      setT(d);
      id = setTimeout(tick, 1000 - d.getMilliseconds());
    };
    tick();
    return () => clearTimeout(id);
  }, []);

  if (!t) return <span suppressHydrationWarning className={className} style={style}>--:--</span>;

  const on = t.getSeconds() % 2 === 0;
  return (
    <span suppressHydrationWarning className={className} style={style}>
      {fmt.formatToParts(t).map((p, i) =>
        p.type === "literal" && /[:.]/.test(p.value)
          ? <span key={i} style={{ opacity: on ? 1 : 0 }}>{p.value}</span>
          : p.value
      )}
    </span>
  );
}
