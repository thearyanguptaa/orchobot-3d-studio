import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Clock, Euro } from "lucide-react";

export function ROICalculator() {
  const [team, setTeam] = useState(8);
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(45);

  const { monthly, yearly } = useMemo(() => {
    const monthly = team * hours * 4 * rate * 0.75;
    return { monthly, yearly: monthly * 12 };
  }, [team, hours, rate]);

  const fmt = (n: number) => "€" + Math.round(n).toLocaleString();

  return (
    <section className="relative overflow-hidden py-28" style={{ background: "#0d0118" }}>
      <div
        className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 60%)" }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-violet-200">
            ROI Calculator
          </div>
          <h2 className="mt-6 font-serif text-4xl text-white sm:text-5xl">
            See what you'd save with <span className="text-gradient-violet italic">Orchobot</span>.
          </h2>
          <p className="mt-4 max-w-md text-violet-100/60">
            Quick estimate based on your team size, hours spent on manual work, and average hourly cost. Most clients hit these numbers in the first quarter.
          </p>

          <div className="mt-10 space-y-7">
            <Slider icon={Users} label="Team size" value={team} setValue={setTeam} min={1} max={50} unit="people" />
            <Slider icon={Clock} label="Hours / week on manual tasks" value={hours} setValue={setHours} min={1} max={60} unit="hrs" />
            <Slider icon={Euro} label="Average hourly cost" value={rate} setValue={setRate} min={10} max={200} unit="€" prefix />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-violet-400/30 p-8 backdrop-blur-xl"
          style={{
            background: "linear-gradient(160deg, rgba(124,58,237,0.25), rgba(60,33,102,0.4))",
            boxShadow: "0 30px 80px -20px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-violet-200/70">Estimated savings</div>
          <div className="mt-4">
            <div className="text-sm text-violet-100/60">per month</div>
            <motion.div
              key={monthly}
              initial={{ scale: 0.96, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-display text-6xl font-semibold text-white sm:text-7xl"
            >
              {fmt(monthly)}
            </motion.div>
          </div>
          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="text-sm text-violet-100/60">per year</div>
            <div className="font-display text-3xl font-semibold text-violet-100">{fmt(yearly)}</div>
          </div>
          <a
            href="#contact"
            className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #a855f7)",
              boxShadow: "0 10px 40px -10px rgba(168,85,247,0.7)",
            }}
          >
            Book your free strategy call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Slider({
  icon: Icon, label, value, setValue, min, max, unit, prefix,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string; value: number; setValue: (n: number) => void;
  min: number; max: number; unit: string; prefix?: boolean;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-violet-100/80">
          <Icon className="h-4 w-4 text-violet-300" />
          {label}
        </span>
        <span className="font-display font-semibold text-white">
          {prefix ? `${unit}${value}` : `${value} ${unit}`}
        </span>
      </div>
      <div className="relative mt-3 h-2 rounded-full bg-white/10">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #7c3aed, #c084fc)",
            boxShadow: "0 0 12px rgba(168,85,247,0.7)",
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="absolute inset-0 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-violet-500 [&::-webkit-slider-thumb]:shadow-[0_0_18px_rgba(168,85,247,0.9)]"
        />
      </div>
    </div>
  );
}
