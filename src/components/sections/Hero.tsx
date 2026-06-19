import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, Database, BarChart3, Code2, Layers, Sparkles, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { StarField } from "../StarField";
import { GlassCube, SparkleIcon } from "../Cube3D";

const satellites = [
  { label: "AI Agents", icon: Bot },
  { label: "Workflow", icon: Zap },
  { label: "Data", icon: Code2 },
  { label: "Analytics", icon: BarChart3 },
  { label: "Systems", icon: Layers },
  { label: "Automation", icon: Sparkles },
];

function useSceneSize() {
  const [size, setSize] = useState(420);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setSize(300);
      else if (w < 768) setSize(360);
      else if (w < 1024) setSize(440);
      else setSize(500);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0f] pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <StarField count={120} />
      <div
        className="pointer-events-none absolute right-[-20%] top-[5%] h-[500px] w-[500px] rounded-full opacity-60 blur-3xl sm:h-[700px] sm:w-[700px]"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.45), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute left-[-20%] bottom-[10%] h-[400px] w-[400px] rounded-full opacity-40 blur-3xl sm:h-[500px] sm:w-[500px]"
        style={{ background: "radial-gradient(circle, rgba(82,0,85,0.5), transparent 65%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-violet-200 backdrop-blur sm:px-4 sm:py-2 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            AI Automation & Agents
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-white sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">
            Intelligent Automation<br />
            That <span className="text-gradient-violet italic">Executes.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm text-violet-100/70 sm:mt-6 sm:text-base lg:text-lg">
            Orchobot builds AI agents and automation systems that streamline operations,
            reduce costs, and help your business scale faster than ever.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
            <a
              href="#services"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-medium text-white sm:px-7 sm:py-3.5"
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
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-white/[0.02] px-5 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:border-violet-400/70 hover:bg-violet-500/10 sm:px-7 sm:py-3.5"
            >
              Talk to an Expert
              <Plus className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 sm:mt-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-violet-200/40">
              Trusted by innovative companies
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 opacity-60 sm:mt-5 sm:gap-x-10 sm:gap-y-4">
              {["logoipsum", "logoipsum", "logoipsum", "logoipsum"].map((l, i) => (
                <span key={i} className="font-display text-base font-semibold tracking-tight text-violet-100/50 sm:text-lg">
                  ◐ {l}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl border border-violet-500/15 bg-white/[0.02] p-4 backdrop-blur sm:mt-10 sm:grid-cols-3 sm:gap-2 sm:p-5">
            {[
              { icon: Zap, num: "12.4K+", label: "Tasks Automated" },
              { icon: Bot, num: "240+", label: "Businesses Scaled" },
              { icon: Database, num: "98.6%", label: "Time Saved" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-500/20 text-violet-200">
                  <s.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="font-display text-lg font-semibold text-white sm:text-xl">{s.num}</div>
                  <div className="text-[11px] text-violet-200/50">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative order-1 flex items-center justify-center lg:order-2">
          <Hero3DScene />
        </div>
      </div>
    </section>
  );
}

function Hero3DScene() {
  const size = useSceneSize();
  const radius = size * 0.42;
  const cubeSize = Math.max(48, size * 0.13);

  return (
    <div
      className="relative"
      style={{ width: size, height: size, perspective: 1400 }}
    >
      {/* Tilted orbit ring */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: radius * 2,
          height: radius * 2,
          transform: "translate(-50%, -50%) rotateX(65deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 rounded-full border border-violet-400/20"
          style={{ boxShadow: "0 0 40px rgba(168,85,247,0.15) inset" }}
        />
        <div
          className="absolute inset-[18%] rounded-full border border-violet-400/15"
        />
      </div>

      {/* Single rotating group — all satellites at fixed symmetric angles on the same tilted plane */}
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 0,
          height: 0,
          transformStyle: "preserve-3d",
          transform: "translate(-50%, -50%) rotateX(65deg)",
        }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {satellites.map((s, i) => {
          const angle = (i / satellites.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: 0,
                top: 0,
                transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
              }}
            >
              {/* counter-tilt + counter-rotate so chip faces camera & stays upright */}
              <motion.div
                style={{ transform: "rotateX(-65deg)" }}
                animate={{ rotateZ: -360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              >
                <ChipCube label={s.label} Icon={s.icon} cubeSize={cubeSize} />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Central cube — perfectly centered, gentle float */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2">
          <div
            className="h-3 rounded-full"
            style={{
              width: size * 0.32,
              background: "radial-gradient(ellipse, rgba(168,85,247,0.5), transparent 70%)",
              filter: "blur(2px)",
            }}
          />
        </div>
        <GlassCube size={size * 0.28} spinDuration={18}>
          <SparkleIcon className="h-10 w-10 text-violet-200 drop-shadow-[0_0_18px_rgba(192,132,252,0.9)]" />
        </GlassCube>
      </motion.div>
    </div>
  );
}

function ChipCube({
  label,
  Icon,
  cubeSize,
}: {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  cubeSize: number;
}) {
  return (
    <motion.div
      className="flex items-center gap-2 rounded-2xl border border-violet-400/30 bg-violet-950/50 px-3 py-2 backdrop-blur-md"
      style={{ boxShadow: "0 8px 24px -8px rgba(124,58,237,0.6)" }}
      whileHover={{ scale: 1.08 }}
    >
      <div style={{ width: cubeSize * 0.55, height: cubeSize * 0.55 }}>
        <GlassCube size={cubeSize * 0.55} spinDuration={10}>
          <Icon className="h-3.5 w-3.5 text-violet-100" />
        </GlassCube>
      </div>
      <span className="whitespace-nowrap text-[11px] font-medium text-violet-100/90 sm:text-xs">
        {label}
      </span>
    </motion.div>
  );
}
