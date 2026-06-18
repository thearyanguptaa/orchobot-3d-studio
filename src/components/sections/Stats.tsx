import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 90, suffix: "%", label: "Reduction in manual tasks" },
  { value: 40, suffix: " hrs", label: "Saved per week, per team" },
  { value: 10, suffix: "×", label: "Faster response times" },
  { value: 4, suffix: " wks", label: "Average deployment time" },
];

function Count({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(135deg, #7c3aed 0%, #520055 60%, #3c2166 100%)" }}
    >
      {/* floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 8px white",
            }}
            animate={{ y: [-20, 20, -20], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center text-white">
          <h2 className="font-serif text-4xl sm:text-5xl">Numbers that move the business.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Real outcomes our partners measure within the first quarter.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-xl"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 30px 60px -20px rgba(0,0,0,0.5)" }}
            >
              <div className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                <Count to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-white/75">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
