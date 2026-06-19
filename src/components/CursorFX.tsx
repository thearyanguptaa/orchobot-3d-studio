import { useEffect, useRef } from "react";

export function CursorFX() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    const ring = ringRef.current!;
    const dot = dotRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    let mx = w / 2, my = h / 2;
    let rx = mx, ry = my;
    let lastX = mx, lastY = my;

    type P = { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number };
    const particles: P[] = [];

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      // Snap the ring instantly to the cursor for a quick, responsive feel
      rx = mx; ry = my;

      const speed = Math.min(40, Math.hypot(mx - lastX, my - lastY));
      const count = Math.floor(speed / 8) + 1;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: mx, y: my,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 0.5,
          life: 1,
          color: Math.random() > 0.5 ? "#a855f7" : "#c084fc",
          size: 2 + Math.random() * 4,
        });
      }
      lastX = mx; lastY = my;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[role=button],input,textarea,select,label")) {
        ring.style.width = "52px"; ring.style.height = "52px";
        ring.style.background = "rgba(168,85,247,0.18)";
        ring.style.borderColor = "rgba(192,132,252,0.9)";
      } else {
        ring.style.width = "36px"; ring.style.height = "36px";
        ring.style.background = "transparent";
        ring.style.borderColor = "rgba(168,85,247,0.6)";
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    let raf = 0;
    const tick = () => {
      // Heavy lerp = snappy follow (was 0.18 → felt laggy)
      rx += (mx - rx) * 0.6;
      ry += (my - ry) * 0.6;
      ring.style.transform = `translate3d(${rx - ring.offsetWidth / 2}px, ${ry - ring.offsetHeight / 2}px, 0)`;

      ctx.clearRect(0, 0, w, h);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vy += 0.04;
        p.vx *= 0.98; p.vy *= 0.98;
        p.x += p.vx; p.y += p.vy;
        p.life -= 0.018;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(Math.PI / 4);
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10; ctx.shadowColor = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998] hidden md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 rounded-full border-2 transition-[width,height,background-color,border-color] duration-150 will-change-transform md:block"
        style={{ borderColor: "rgba(168,85,247,0.6)" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full bg-violet-400 md:block"
      />
    </>
  );
}
