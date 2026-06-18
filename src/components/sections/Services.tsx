import { motion } from "framer-motion";
import { Bot, Zap, MessageCircle, Mic, TrendingUp, Database, Shield, Puzzle, Clock, BarChart3 } from "lucide-react";
import { StarMark } from "../Logo";
import { useCardGlow } from "../../hooks/useCardGlow";

const services = [
  { n: "01", icon: Bot, title: "AI Agents", desc: "Autonomous agents that understand, decide, and act on your behalf.", tone: "violet" },
  { n: "02", icon: Zap, title: "Workflow Automation", desc: "Streamline operations and eliminate repetitive tasks with intelligent workflows.", tone: "violet" },
  { n: "03", icon: MessageCircle, title: "AI Chatbots", desc: "Smart, context-aware chatbots that engage, support and convert 24/7.", tone: "violet" },
  { n: "04", icon: Mic, title: "Voice AI", desc: "Human-like voice agents for support, outreach and real-time conversations.", tone: "rose" },
  { n: "05", icon: TrendingUp, title: "Lead Generation", desc: "AI-powered systems that attract, qualify and convert high-intent leads.", tone: "rose" },
  { n: "06", icon: Database, title: "CRM Automation", desc: "Automate follow-ups, updates and client journeys across your CRM.", tone: "rose" },
];

const pillars = [
  { icon: Shield, title: "Reliable & Secure", desc: "Enterprise-grade security with 99.9% uptime." },
  { icon: Puzzle, title: "Seamless Integration", desc: "Works with your favorite tools and platforms." },
  { icon: Clock, title: "Save Time & Cost", desc: "Automate more, reduce costs and scale faster." },
  { icon: BarChart3, title: "Data-Driven Results", desc: "Make smarter decisions with real-time insights." },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-28" style={{ background: "#0d0118" }}>
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(244,208,184,0.12), transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-violet-200">
            <span className="h-2 w-2 rounded-full bg-rose-300" />
            Our Services
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl text-white sm:text-5xl md:text-6xl">
            Solutions That <span className="text-gradient-violet italic">Work</span> for You
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-violet-100/60 sm:text-base">
            Smart automation and AI solutions designed to streamline, optimize, and scale every part of your business.
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-violet-300/40">
            <span className="h-px w-12 bg-violet-300/30" />
            <StarMark className="h-3 w-3" />
            <span className="h-px w-12 bg-violet-300/30" />
          </div>
        </div>

        {/* Grid w/ center hub overlay */}
        <div className="relative mt-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={i} service={s} index={i} />
            ))}
          </div>

          {/* center hub badge */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative grid h-20 w-20 place-items-center rounded-full border border-violet-400/50 bg-[#1a0830]/80 backdrop-blur"
                 style={{ boxShadow: "0 0 60px rgba(168,85,247,0.55)" }}>
              <StarMark className="h-9 w-9" />
              <span className="absolute -inset-3 rounded-full border border-violet-400/20" />
              <span className="absolute -inset-6 rounded-full border border-violet-400/10" />
            </div>
          </motion.div>
        </div>

        {/* Bottom pillars */}
        <div className="mt-16 rounded-2xl border border-rose-300/15 bg-gradient-to-r from-[#1a0830]/70 via-[#2a1230]/60 to-[#1a0830]/70 p-6 backdrop-blur">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-violet-400/30 bg-violet-500/15 text-violet-200">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-sm font-semibold text-white">{p.title}</div>
                  <div className="mt-1 text-xs text-violet-100/55">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useCardGlow();
  const isRose = s.tone === "rose";
  return (
    <motion.article
      ref={ref}
      className="card-glow p-7"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className="grid h-14 w-14 place-items-center rounded-full"
          style={{
            background: isRose
              ? "linear-gradient(135deg, rgba(244,208,184,0.25), rgba(130,64,80,0.4))"
              : "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(82,0,85,0.5))",
            border: `1px solid ${isRose ? "rgba(244,208,184,0.4)" : "rgba(168,85,247,0.4)"}`,
            boxShadow: isRose
              ? "0 0 22px rgba(244,208,184,0.25)"
              : "0 0 22px rgba(168,85,247,0.35)",
          }}
        >
          <s.icon className={`h-6 w-6 ${isRose ? "text-rose-100" : "text-violet-100"}`} />
        </span>
        <span className={`font-display text-xs ${isRose ? "text-rose-300/70" : "text-violet-300/70"}`}>{s.n}</span>
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-white">{s.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-violet-100/60">{s.desc}</p>
      <div
        className="mt-7 h-px w-16"
        style={{
          background: isRose
            ? "linear-gradient(90deg, #f4d0b8, transparent)"
            : "linear-gradient(90deg, #a855f7, transparent)",
        }}
      />
    </motion.article>
  );
}
