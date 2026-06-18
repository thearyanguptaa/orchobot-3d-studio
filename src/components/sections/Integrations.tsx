import { motion } from "framer-motion";
import { ArrowRight, Orbit, Zap, TrendingUp } from "lucide-react";
import { SparkleIcon } from "../Cube3D";

const tools = [
  { name: "OpenAI", cat: "AI Models", color: "#10a37f", letter: "◉" },
  { name: "Make", cat: "Scenarios", color: "#6d5cff", letter: "M" },
  { name: "Airtable", cat: "Data Management", color: "#fcb400", letter: "▲" },
  { name: "Slack", cat: "Team Collaboration", color: "#e01e5a", letter: "#" },
  { name: "Zapier", cat: "No-code Automation", color: "#ff4a00", letter: "✸" },
  { name: "Notion", cat: "Docs & Knowledge", color: "#ffffff", letter: "N" },
  { name: "Google Sheets", cat: "Data & Insights", color: "#34a853", letter: "▦" },
  { name: "Shopify", cat: "E-commerce", color: "#95bf47", letter: "S" },
];

const left = tools.slice(0, 4);
const right = tools.slice(4);

export function Integrations() {
  return (
    <section id="integrations" className="relative overflow-hidden py-20 sm:py-28" style={{ background: "#0a0a0f" }}>
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
        style={{ background: "radial-gradient(ellipse at right, rgba(192,132,252,0.25), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-violet-200">
            <Zap className="h-3 w-3" /> Powered by Innovation
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Automation Tools That<br />
            Supercharge Your <span className="text-gradient-violet italic">Workflow</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-violet-100/60 sm:text-base">
            We integrate best-in-class platforms and intelligent systems to build seamless, scalable automation for your business.
          </p>
        </div>

        {/* Mobile: simple animated grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
          {tools.map((t, i) => (
            <ToolChip key={i} t={t} side="left" delay={i * 0.05} />
          ))}
        </div>

        {/* Desktop: orbital map */}
        <div className="relative mx-auto mt-16 hidden h-[560px] grid-cols-[1fr_2fr_1fr] items-center lg:grid">

          {/* Left chips */}
          <div className="flex flex-col items-start gap-8 pl-4">
            {left.map((t, i) => (
              <ToolChip key={i} t={t} side="left" delay={i * 0.1} />
            ))}
          </div>

          {/* Center orb + rings */}
          <div className="relative h-[500px] w-full">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* concentric rings */}
              {[180, 240, 310].map((r, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 rounded-full border border-violet-400/20"
                  style={{
                    width: r * 2, height: r,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
                >
                  <span
                    className="absolute h-2 w-2 rounded-full"
                    style={{
                      left: "100%", top: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "#c084fc",
                      boxShadow: "0 0 10px #a855f7, 0 0 20px #7c3aed",
                    }}
                  />
                </motion.div>
              ))}

              {/* core glow */}
              <motion.div
                className="relative grid h-32 w-32 place-items-center rounded-full"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "radial-gradient(circle, rgba(168,85,247,0.6), rgba(60,33,102,0.2) 60%, transparent)",
                  boxShadow: "0 0 80px rgba(168,85,247,0.6), inset 0 0 40px rgba(192,132,252,0.4)",
                }}
              >
                <SparkleIcon className="h-12 w-12 text-violet-100 drop-shadow-[0_0_18px_rgba(192,132,252,1)]" />
              </motion.div>
            </div>
          </div>

          {/* Right chips */}
          <div className="flex flex-col items-end gap-8 pr-4">
            {right.map((t, i) => (
              <ToolChip key={i} t={t} side="right" delay={i * 0.1 + 0.05} />
            ))}
          </div>
        </div>

        {/* pillars */}
        <div className="mt-14 grid grid-cols-1 gap-6 rounded-2xl border border-violet-400/15 bg-white/[0.02] p-6 backdrop-blur md:grid-cols-3">
          {[
            { icon: Orbit, title: "Seamless Integrations", desc: "Connect the tools you already use. We handle the rest." },
            { icon: Zap, title: "Smart Automation", desc: "Eliminate repetitive tasks and focus on what matters." },
            { icon: TrendingUp, title: "Scalable Systems", desc: "Built to grow with your business and adapt to your needs." },
          ].map((p, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violet-500/15 text-violet-200">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-sm font-semibold text-white">{p.title}</div>
                <div className="mt-1 text-xs text-violet-100/55">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-violet-500/20"
            style={{ boxShadow: "0 0 30px rgba(168,85,247,0.3)" }}
          >
            Explore All Integrations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ToolChip({ t, side, delay }: { t: (typeof tools)[number]; side: "left" | "right"; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      animate={{ y: [0, -6, 0] }}
      whileHover={{ scale: 1.05 }}
      style={{ animationDelay: `${delay}s` }}
      className="group flex items-center gap-3 rounded-xl border border-violet-400/20 bg-[#0d001c]/80 px-4 py-3 backdrop-blur transition-colors hover:border-violet-300/60"
    >
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-sm font-bold"
        style={{
          background: `linear-gradient(135deg, ${t.color}33, ${t.color}10)`,
          color: t.color,
          border: `1px solid ${t.color}55`,
          boxShadow: `0 0 18px ${t.color}33`,
        }}
      >
        {t.letter}
      </span>
      <div className="text-left">
        <div className="text-sm font-semibold text-white">{t.name}</div>
        <div className="text-[11px] text-violet-100/55">{t.cat}</div>
      </div>
    </motion.div>
  );
}
