"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const DIR_LIST = Object.values(DIRS);
const GHOST_COLORS = ["#ff6b6b", "#ff9ecd", "#ffb454", "#b794f6"];
const CHASE = [0.9, 0.65, 0.5, 0.75];
const LS_KEY = "ctjr-pacman-best";
const odd = (n) => (n % 2 === 0 ? n - 1 : n);

const loadBest = () => {
  try { return Number(localStorage.getItem(LS_KEY)) || 0; } catch { return 0; }
};
const saveBest = (v) => {
  try { localStorage.setItem(LS_KEY, String(v)); } catch {}
};

function buildMaze(cols, rows) {
  const g = new Uint8Array(cols * rows).fill(1);
  const idx = (x, y) => y * cols + x;
  const nx = (cols - 1) / 2;
  const ny = (rows - 1) / 2;
  const seen = new Uint8Array(nx * ny);
  const stack = [[0, 0]];
  seen[0] = 1;
  g[idx(1, 1)] = 0;
  while (stack.length) {
    const [cx, cy] = stack[stack.length - 1];
    const opts = DIR_LIST.map(([dx, dy]) => [cx + dx, cy + dy, dx, dy]).filter(
      ([x, y]) => x >= 0 && y >= 0 && x < nx && y < ny && !seen[y * nx + x]
    );
    if (!opts.length) { stack.pop(); continue; }
    const [x, y, dx, dy] = opts[Math.floor(Math.random() * opts.length)];
    seen[y * nx + x] = 1;
    g[idx(2 * x + 1, 2 * y + 1)] = 0;
    g[idx(2 * cx + 1 + dx, 2 * cy + 1 + dy)] = 0;
    stack.push([x, y]);
  }
  for (let y = 1; y < rows - 1; y++) {
    for (let x = 1; x < cols - 1; x++) {
      if (g[idx(x, y)] !== 1) continue;
      const link = (x % 2 === 0 && y % 2 === 1) || (x % 2 === 1 && y % 2 === 0);
      if (link && Math.random() < 0.3) g[idx(x, y)] = 0;
    }
  }
  for (let y = 1; y < rows - 1; y += 2) {
    if (((y - 1) / 2) % 3 === 1) { g[idx(0, y)] = 0; g[idx(cols - 1, y)] = 0; }
  }
  for (let x = 1; x < cols - 1; x += 2) {
    if (((x - 1) / 2) % 3 === 1) { g[idx(x, 0)] = 0; g[idx(x, rows - 1)] = 0; }
  }
  return g;
}

export default function PacmanGame({ onExit, mobile = false }) {
  const areaRef = useRef(null);
  const canvasRef = useRef(null);
  const input = useRef({ want: null });
  const swipe = useRef(null);
  const exitRef = useRef(onExit);
  const [size, setSize] = useState(null);
  const [run, setRun] = useState(0);
  const [overlay, setOverlay] = useState(null);
  const [hud, setHud] = useState({ score: 0, lives: 3, left: 0, best: 0 });

  useEffect(() => { exitRef.current = onExit; }, [onExit]);

  useEffect(() => {
    const el = areaRef.current;
    const measure = () => {
      const w = Math.floor(el.clientWidth);
      const h = Math.floor(el.clientHeight);
      setSize((s) => (s && Math.abs(s.w - w) < 3 && Math.abs(s.h - h) < 3 ? s : { w, h }));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const map = {
      ArrowUp: DIRS.up, w: DIRS.up, ArrowDown: DIRS.down, s: DIRS.down,
      ArrowLeft: DIRS.left, a: DIRS.left, ArrowRight: DIRS.right, d: DIRS.right,
    };
    const onKey = (e) => {
      if (e.key === "Escape") return exitRef.current();
      const d = map[e.key] ?? map[e.key.toLowerCase()];
      if (d) { e.preventDefault(); input.current.want = d; }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!size) return;
    const canvas = canvasRef.current;
    const tile = mobile ? 24 : 48;
    const cols = odd(Math.floor(size.w / tile));
    const rows = odd(Math.floor(size.h / tile));
    if (cols < 9 || rows < 9) return;
    const W = cols * tile;
    const H = rows * tile;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const grid = buildMaze(cols, rows);
    const wrapX = (x) => (x + cols) % cols;
    const wrapY = (y) => (y + rows) % rows;
    const open = (x, y) => grid[wrapY(y) * cols + wrapX(x)] === 0;
    const wallAt = (x, y) => x >= 0 && y >= 0 && x < cols && y < rows && grid[y * cols + x] === 1;

    const walls = document.createElement("canvas");
    walls.width = W * dpr;
    walls.height = H * dpr;
    const wc = walls.getContext("2d");
    wc.scale(dpr, dpr);
    wc.fillStyle = "#0c1633";
    wc.strokeStyle = "#4fc3f7";
    wc.lineWidth = 2;
    wc.shadowColor = "#4fc3f7";
    wc.shadowBlur = 6;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (!wallAt(x, y)) continue;
        const px = x * tile;
        const py = y * tile;
        wc.shadowBlur = 0;
        wc.fillRect(px, py, tile, tile);
        wc.shadowBlur = 6;
        wc.beginPath();
        const free = (a, b) => a >= 0 && b >= 0 && a < cols && b < rows && !wallAt(a, b);
        if (free(x, y - 1)) { wc.moveTo(px, py + 1); wc.lineTo(px + tile, py + 1); }
        if (free(x, y + 1)) { wc.moveTo(px, py + tile - 1); wc.lineTo(px + tile, py + tile - 1); }
        if (free(x - 1, y)) { wc.moveTo(px + 1, py); wc.lineTo(px + 1, py + tile); }
        if (free(x + 1, y)) { wc.moveTo(px + tile - 1, py); wc.lineTo(px + tile - 1, py + tile); }
        wc.stroke();
      }
    }

    const nxC = (cols - 1) / 2;
    const nyC = (rows - 1) / 2;
    const pacStart = [2 * Math.floor(nxC / 2) + 1, 2 * (nyC - 1) + 1];
    const homes = [0, 1, -1, 2].map((k) => [
      2 * Math.max(0, Math.min(nxC - 1, Math.floor(nxC / 2) + k)) + 1,
      2 * Math.floor(nyC / 2) + 1,
    ]);

    const pellets = new Uint8Array(cols * rows);
    for (let y = 1; y < rows - 1; y++) {
      for (let x = 1; x < cols - 1; x++) if (grid[y * cols + x] === 0) pellets[y * cols + x] = 1;
    }
    [[1, 1], [cols - 2, 1], [1, rows - 2], [cols - 2, rows - 2]].forEach(([x, y]) => { pellets[y * cols + x] = 2; });
    pellets[pacStart[1] * cols + pacStart[0]] = 0;
    const pelletIdx = [];
    pellets.forEach((v, i) => { if (v) pelletIdx.push(i); });
    let left = pelletIdx.length;
    const total = left;

    const place = (e, x, y) => { e.tx = x; e.ty = y; e.dx = 0; e.dy = 0; e.t = 0; };
    const pac = { tx: 0, ty: 0, dx: 0, dy: 0, t: 0, face: 0 };
    const ghosts = homes.map((h, i) => ({
      tx: 0, ty: 0, dx: 0, dy: 0, t: 0, home: h, wait: 0, respawn: 0,
      color: GHOST_COLORS[i], chase: CHASE[i], delay: [0.5, 2, 3.5, 5][i],
    }));

    let score = 0;
    let lives = 3;
    let best = loadBest();
    let mode = "ready";
    let modeT = 1.2;
    let fright = 0;
    const PAC_SPEED = mobile ? 6 : 7;

    const resetPositions = () => {
      place(pac, pacStart[0], pacStart[1]);
      ghosts.forEach((g) => { place(g, g.home[0], g.home[1]); g.wait = g.delay; g.respawn = 0; });
      input.current.want = null;
      fright = 0;
      mode = "ready";
      modeT = 1.2;
    };
    resetPositions();

    const td = (a, b, n) => { const d = Math.abs(a - b); return Math.min(d, n - d); };
    const tdl = (a, n) => { const d = ((a % n) + n) % n; return d > n / 2 ? d - n : d; };
    const pos = (e) => ({ x: e.tx + e.dx * e.t, y: e.ty + e.dy * e.t });

    const advance = (e, speed, dt, choose) => {
      let rem = speed * dt;
      while (rem > 0) {
        if (e.dx === 0 && e.dy === 0) {
          choose(e);
          if (e.dx === 0 && e.dy === 0) return;
        }
        const need = 1 - e.t;
        if (rem < need) { e.t += rem; return; }
        rem -= need;
        e.tx = wrapX(e.tx + e.dx);
        e.ty = wrapY(e.ty + e.dy);
        e.t = 0;
        choose(e);
      }
    };

    const choosePac = (e) => {
      const w = input.current.want;
      if (w && open(e.tx + w[0], e.ty + w[1])) { e.dx = w[0]; e.dy = w[1]; }
      else if (!open(e.tx + e.dx, e.ty + e.dy)) { e.dx = 0; e.dy = 0; }
      if (e.dx || e.dy) e.face = Math.atan2(e.dy, e.dx);
    };

    const chooseGhost = (g) => {
      let opts = DIR_LIST.filter(([dx, dy]) => open(g.tx + dx, g.ty + dy) && !(dx === -g.dx && dy === -g.dy));
      if (!opts.length) opts = DIR_LIST.filter(([dx, dy]) => open(g.tx + dx, g.ty + dy));
      if (!opts.length) { g.dx = 0; g.dy = 0; return; }
      const dist = ([dx, dy]) => td(g.tx + dx, pac.tx, cols) ** 2 + td(g.ty + dy, pac.ty, rows) ** 2;
      const progress = 1 - left / total;
      let pick;
      if (fright > 0) {
        pick = Math.random() < 0.7 ? opts.reduce((a, b) => (dist(b) > dist(a) ? b : a)) : opts[Math.floor(Math.random() * opts.length)];
      } else if (Math.random() < Math.min(0.97, g.chase + 0.25 * progress)) {
        pick = opts.reduce((a, b) => (dist(b) < dist(a) ? b : a));
      } else {
        pick = opts[Math.floor(Math.random() * opts.length)];
      }
      g.dx = pick[0];
      g.dy = pick[1];
    };

    const finish = (kind) => {
      mode = kind;
      if (score > best) { best = score; saveBest(best); }
      setOverlay(kind);
    };

    const update = (dt) => {
      if (mode === "ready") { modeT -= dt; if (modeT <= 0) mode = "play"; return; }
      if (mode === "dead") {
        modeT -= dt;
        if (modeT <= 0) { if (lives <= 0) finish("over"); else resetPositions(); }
        return;
      }
      if (mode !== "play") return;

      const w = input.current.want;
      if (w && (pac.dx || pac.dy) && w[0] === -pac.dx && w[1] === -pac.dy) {
        pac.tx = wrapX(pac.tx + pac.dx);
        pac.ty = wrapY(pac.ty + pac.dy);
        pac.dx = w[0];
        pac.dy = w[1];
        pac.t = 1 - pac.t;
        pac.face = Math.atan2(pac.dy, pac.dx);
      }
      advance(pac, PAC_SPEED, dt, choosePac);

      const p = pos(pac);
      const pi = wrapY(Math.round(p.y)) * cols + wrapX(Math.round(p.x));
      if (pellets[pi]) {
        if (pellets[pi] === 2) { score += 50; fright = 6; } else score += 10;
        pellets[pi] = 0;
        left--;
        if (left === 0) { finish("win"); return; }
      }

      if (fright > 0) fright -= dt;
      const progress = 1 - left / total;
      const base = PAC_SPEED * (0.58 + 0.39 * progress);
      for (const g of ghosts) {
        if (g.respawn > 0) {
          g.respawn -= dt;
          if (g.respawn <= 0) { place(g, g.home[0], g.home[1]); g.wait = 0.5; }
          continue;
        }
        if (g.wait > 0) { g.wait -= dt; continue; }
        advance(g, fright > 0 ? base * 0.55 : base, dt, chooseGhost);
        const gp = pos(g);
        const ddx = tdl(gp.x - p.x, cols);
        const ddy = tdl(gp.y - p.y, rows);
        if (Math.hypot(ddx, ddy) < 0.6) {
          if (fright > 0) { score += 200; g.respawn = 3; }
          else { lives--; mode = "dead"; modeT = 1.2; return; }
        }
      }
    };

    const wrapDraw = (cx, cy, fn) => {
      const x = ((cx % W) + W) % W;
      const y = ((cy % H) + H) % H;
      for (const ox of [-W, 0, W]) {
        for (const oy of [-H, 0, H]) {
          const px = x + ox;
          const py = y + oy;
          if (px > -tile && px < W + tile && py > -tile && py < H + tile) fn(px, py);
        }
      }
    };

    const drawGhost = (g, time) => {
      const p = pos(g);
      const r = tile * 0.42;
      const scared = fright > 0;
      const flash = scared && fright < 1.5 && Math.floor(time * 8) % 2 === 0;
      wrapDraw((p.x + 0.5) * tile, (p.y + 0.5) * tile, (x, y) => {
        ctx.fillStyle = scared ? (flash ? "#e6ecff" : "#3b5bdb") : g.color;
        ctx.beginPath();
        ctx.arc(x, y - r * 0.1, r, Math.PI, 0);
        ctx.lineTo(x + r, y + r * 0.9);
        const n = 3;
        const sw = (2 * r) / n;
        for (let i = 0; i < n; i++) {
          ctx.lineTo(x + r - sw * (i + 0.5), y + r * 0.6);
          ctx.lineTo(x + r - sw * (i + 1), y + r * 0.9);
        }
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#fff";
        [-1, 1].forEach((s) => {
          ctx.beginPath();
          ctx.arc(x + s * r * 0.38, y - r * 0.25, r * 0.24, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.fillStyle = "#06101f";
        [-1, 1].forEach((s) => {
          ctx.beginPath();
          ctx.arc(x + s * r * 0.38 + g.dx * r * 0.1, y - r * 0.25 + g.dy * r * 0.1, r * 0.11, 0, Math.PI * 2);
          ctx.fill();
        });
      });
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(walls, 0, 0, W, H);

      const pr = tile / 16;
      const blink = Math.floor(time * 3) % 2 === 0;
      ctx.fillStyle = "#e6ecff";
      for (const i of pelletIdx) {
        const v = pellets[i];
        if (!v) continue;
        const x = ((i % cols) + 0.5) * tile;
        const y = (Math.floor(i / cols) + 0.5) * tile;
        if (v === 1) ctx.fillRect(x - pr, y - pr, pr * 2, pr * 2);
        else if (blink) { ctx.beginPath(); ctx.arc(x, y, tile * 0.2, 0, Math.PI * 2); ctx.fill(); }
      }

      const p = pos(pac);
      const moving = pac.dx || pac.dy;
      const mouth = moving ? 0.08 + 0.3 * Math.abs(Math.sin(time * 14)) : 0.25;
      wrapDraw((p.x + 0.5) * tile, (p.y + 0.5) * tile, (x, y) => {
        ctx.fillStyle = "#ffd23f";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, tile * 0.42, pac.face + mouth, pac.face + Math.PI * 2 - mouth);
        ctx.closePath();
        ctx.fill();
      });

      for (const g of ghosts) if (g.respawn <= 0) drawGhost(g, time);

      if (mode === "ready") {
        ctx.fillStyle = "#4fc3f7";
        ctx.font = `${Math.round(tile * 0.5)}px Silkscreen, monospace`;
        ctx.textAlign = "center";
        ctx.fillText("READY!", (pacStart[0] + 0.5) * tile, (pacStart[1] - 0.6) * tile);
      }
    };

    let lastHud = "";
    const syncHud = () => {
      const key = `${score}|${lives}|${left}|${best}`;
      if (key === lastHud) return;
      lastHud = key;
      setHud({ score, lives, left, best: Math.max(best, score) });
    };

    let raf;
    let last = performance.now();
    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      update(dt);
      draw(now / 1000);
      syncHud();
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [size, run, mobile]);

  const restart = () => { setOverlay(null); setRun((r) => r + 1); };
  const press = (d) => { input.current.want = DIRS[d]; };
  const onPointerDown = (e) => { swipe.current = { x: e.clientX, y: e.clientY }; };
  const onPointerMove = (e) => {
    const s = swipe.current;
    if (!s) return;
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    if (Math.hypot(dx, dy) < 18) return;
    input.current.want = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? DIRS.right : DIRS.left) : (dy > 0 ? DIRS.down : DIRS.up);
    swipe.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = () => { swipe.current = null; };

  const padIcons = { up: ArrowUp, left: ArrowLeft, down: ArrowDown, right: ArrowRight };

  return (
    <div className={`pac-root ${mobile ? "mobile" : ""}`}>
      <div className="pac-hud">
        <span>SCORE {hud.score}</span>
        <span>BEST {hud.best}</span>
        <span>LIVES {"♥".repeat(Math.max(0, hud.lives))}</span>
        <span>LEFT {hud.left}</span>
        {!mobile && <span className="pac-hint">ARROWS / WASD · ESC TO QUIT</span>}
        <button className="pac-quit" onClick={() => onExit()}>QUIT</button>
      </div>
      <div className="pac-area" ref={areaRef}>
        <canvas
          ref={canvasRef}
          className="pac-canvas"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        />
        {overlay && (
          <div className="pac-over">
            <div className="win" style={{ width: 340, maxWidth: "90%" }}>
              <div className="win-title" style={{ cursor: "default" }}>
                <span className="flex-1">{overlay === "win" ? "pacman.exe — cleared" : "pacman.exe — game over"}</span>
              </div>
              <div className="win-body space-y-4 text-center">
                <p className="font-pixel text-lg" style={{ color: overlay === "win" ? "var(--accent-2)" : "var(--danger)" }}>
                  {overlay === "win" ? "CONGRATULATIONS!" : "GAME OVER"}
                </p>
                <p className="text-sm" style={{ color: "var(--text-dim)" }}>
                  {overlay === "win" ? "You cleared every pellet." : "The ghosts got you."} Score: {hud.score}
                </p>
                <div className="flex justify-center gap-3">
                  <button className="btn-accent px-4 py-1.5 text-xs font-pixel" style={{ border: "2px solid var(--text)" }} onClick={restart}>
                    [ PLAY AGAIN ]
                  </button>
                  <button className="px-4 py-1.5 text-xs font-pixel" style={{ border: "2px solid var(--text-faint)", color: "var(--text)" }} onClick={() => onExit()}>
                    [ QUIT ]
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {mobile && (
        <div className="pac-padbar">
          <div className="pad pac-pad">
            {Object.keys(padIcons).map((d) => {
              const Icon = padIcons[d];
              return (
                <button key={d} className="pad-btn" style={{ gridArea: d }} aria-label={d} onPointerDown={() => press(d)}>
                  <Icon size={22} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
