import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28" style={{ background: "#12052a" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-violet-200">
            <Sparkles className="h-3 w-3" /> Let's talk
          </div>
          <h2 className="mt-6 font-serif text-4xl text-white sm:text-5xl md:text-6xl">
            Book a free <span className="text-gradient-violet italic">strategy call</span>.
          </h2>
          <p className="mt-5 max-w-md text-sm text-violet-100/65 sm:text-base">
            30 minutes. We map your highest-leverage automation, walk through the agent stack, and tell you honestly whether we're the right fit.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-violet-100/80">
            {["Response within 24 hours", "No sales pressure, ever", "Built for teams of 2–200+"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-violet-500/20 text-violet-200">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="card-glow space-y-4 p-6 sm:p-8"
        >
          <Field label="Name" name="name" placeholder="Your full name" />
          <Field label="Company" name="company" placeholder="Where you work" />
          <Field label="Work email" name="email" type="email" placeholder="you@company.com" />
          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-violet-200/70">What do you want to automate?</label>
            <textarea
              rows={4}
              required
              placeholder="A few sentences about the workflow…"
              className="mt-2 w-full rounded-xl border border-violet-400/20 bg-[#0a0a0f]/60 px-4 py-3 text-sm text-white placeholder:text-violet-200/30 outline-none focus:border-violet-400/70"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition disabled:opacity-80"
            style={{
              background: sent ? "linear-gradient(135deg, #16a34a, #22c55e)" : "linear-gradient(135deg, #7c3aed, #a855f7)",
              boxShadow: "0 10px 40px -10px rgba(168,85,247,0.7)",
            }}
          >
            {sent ? (<><Check className="h-4 w-4" /> Got it — we'll be in touch.</>) : (
              <>Book a Free Strategy Call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-violet-200/70" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-violet-400/20 bg-[#0a0a0f]/60 px-4 py-3 text-sm text-white placeholder:text-violet-200/30 outline-none focus:border-violet-400/70"
      />
    </div>
  );
}
