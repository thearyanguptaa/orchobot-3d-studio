import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Pencil, Wrench, Rocket } from "lucide-react";

const steps = [
  { n: "01", icon: Search, title: "Discover", desc: "We audit your workflows and identify the highest-leverage automation opportunities." },
  { n: "02", icon: Pencil, title: "Design", desc: "We architect your AI agent system — flows, triggers, integrations, and guardrails." },
  { n: "03", icon: Wrench, title: "Build", desc: "We deploy agents, connect your tools, and run full end-to-end testing." },
  { n: "04", icon: Rocket, title: "Scale", desc: "Agents run 24/7. You get time and money back. We iterate as you grow." },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="how" ref={ref} className="relative overflow-hidden py-28" style={{ background: "#12052a" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.35), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-violet-200">
            The Process
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl text-white sm:text-6xl">
            From Conversation to <span className="text-gradient-violet italic">Running Agent</span> in Minutes.
          </h2>
        </div>

        <div className="relative mt-20">
          {/* progress rail */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-violet-400/15 lg:block">
            <motion.div className="absolute left-0 top-0 w-px bg-gradient-to-b from-violet-300 via-fuchsia-400 to-violet-600" style={{ height: progress }} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-24">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`relative ${i % 2 === 1 ? "lg:mt-32" : ""}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-6 -top-10 select-none font-serif text-[12rem] leading-none text-white/[0.04]"
                >
                  {s.n}
                </span>
                <div className="card-glow relative p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-violet-500/20 text-violet-200">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="font-display text-xs text-violet-300/70">{s.n}</span>
                    <h3 className="font-display text-2xl font-semibold text-white">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-violet-100/60">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
