import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, Database, BarChart3, Code2, Layers, Sparkles, Plus } from "lucide-react";
import { StarField } from "./StarField";
import { GlassCube, SparkleIcon } from "./Cube3D";

const satellites = [
  { label: "AI Agents", icon: Bot, x: -260, y: -190, delay: 0 },
  { label: "Workflow\nAutomation", icon: Zap, x: 270, y: -180, delay: 0.4 },
  { label: "Data\nIntegration", icon: Code2, x: 320, y: 60, delay: 0.8 },
  { label: "Analytics\n& Insights", icon: BarChart3, x: 120, y: 250, delay: 1.2 },
  { label: "Smart\nSystems", icon: Layers, x: -240, y: 180, delay: 1.6 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0f] pt-28">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <StarField count={160} />
      {/* radial purple atmosphere */}
      <div
        className="pointer-events-none absolute right-[-15%] top-[5%] h-[700px] w-[700px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.45), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute left-[-15%] bottom-[10%] h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(82,0,85,0.5), transparent 65%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 lg:grid-cols-2 lg:items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-violet-200 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            AI Automation & Agents
          </div>

          <h1 className="mt-7 font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Intelligent Automation<br />
            That <span className="text-gradient-violet italic">Executes.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-violet-100/70 sm:text-lg">
            Orchobot builds AI agents and automation systems that streamline operations,
            reduce costs, and help your business scale faster than ever.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#services"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                boxShadow: "0 10px 40px -10px rgba(168,85,247,0.7), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-white/[0.02] px-7 py-3.5 text-sm font-medium text-white backdrop-blur hover:border-violet-400/70 hover:bg-violet-500/10 transition-colors"
            >
              Talk to an Expert
              <Plus className="h-4 w-4" />
            </a>
          </div>

          {/* Trust */}
          <div className="mt-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-violet-200/40">
              Trusted by innovative companies
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-4 opacity-60">
              {["logoipsum", "logoipsum", "logoipsum", "logoipsum"].map((l, i) => (
                <span key={i} className="font-display text-lg font-semibold tracking-tight text-violet-100/50">
                  ◐ {l}
                </span>
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-10 grid grid-cols-3 gap-2 rounded-2xl border border-violet-500/15 bg-white/[0.02] p-5 backdrop-blur">
            {[
              { icon: Zap, num: "12.4K+", label: "Tasks Automated" },
              { icon: Bot, num: "240+", label: "Businesses Scaled" },
              { icon: Database, num: "98.6%", label: "Time Saved" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-violet-500/20 text-violet-200">
                  <s.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-display text-xl font-semibold text-white">{s.num}</div>
                  <div className="text-[11px] text-violet-200/50">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — 3D scene */}
        <div className="relative h-[600px]">
          <Hero3DScene />
        </div>
      </div>
    </section>
  );
}

function Hero3DScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="scene-3d relative h-full w-full">
        {/* Orbit rings */}
        {[260, 330, 400].map((r, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-violet-400/20"
            style={{
              width: r * 2, height: r * 2,
              transform: "translate(-50%, -50%) rotateX(72deg)",
              boxShadow: "0 0 30px rgba(168,85,247,0.15)",
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
          >
            {/* traveling dot */}
            <span
              className="absolute h-2 w-2 rounded-full bg-violet-300"
              style={{
                left: "100%", top: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 12px #c084fc, 0 0 24px #a855f7",
              }}
            />
          </motion.div>
        ))}

        {/* Central cube + pedestal */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* pedestal */}
          <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2">
            <div
              className="h-3 w-44 rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.5), transparent 70%)", filter: "blur(2px)" }}
            />
            <div
              className="mx-auto mt-1 h-6 w-36 rounded-md border border-violet-400/30"
              style={{ background: "linear-gradient(180deg, rgba(60,33,102,0.6), rgba(13,1,28,0.8))" }}
            />
            <div
              className="mx-auto mt-1 h-4 w-44 rounded-md border border-violet-400/20"
              style={{ background: "linear-gradient(180deg, rgba(60,33,102,0.4), rgba(10,10,15,0.9))" }}
            />
          </div>
          <GlassCube size={150} spinDuration={14}>
            <SparkleIcon className="h-12 w-12 text-violet-200 drop-shadow-[0_0_18px_rgba(192,132,252,0.9)]" />
          </GlassCube>
        </motion.div>

        {/* Satellites */}
        {satellites.map((s, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(calc(-50% + ${s.x}px), calc(-50% + ${s.y}px))` }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          >
            <div className="flex flex-col items-center gap-2">
              <GlassCube size={70} spinDuration={10 + i * 2}>
                <s.icon className="h-5 w-5 text-violet-100" />
              </GlassCube>
              <div className="whitespace-pre text-center text-[11px] font-medium text-violet-100/80">
                {s.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
