import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  User,
  Building2,
  Mail,
  LayoutGrid,
  Pencil,
  Zap,
  ShieldCheck,
  Users,
  Lock,
  ChevronDown,
} from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background:
          "radial-gradient(120% 80% at 85% 50%, #6b3fb8 0%, #3b1d72 35%, #1a0a3d 65%, #fbeee0 100%)",
      }}
    >
      {/* Soft cream glow on the left */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full opacity-90 blur-3xl"
        style={{ background: "radial-gradient(circle, #fde9d2, transparent 65%)" }}
      />
      {/* Violet aura right */}
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3b1d72]/15 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3b1d72] shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Let's Talk
          </div>

          <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-[#1a0a3d] sm:text-5xl md:text-6xl">
            Book Your <span className="italic text-[#7c3aed]">Free</span>
            <br />
            Strategy Call
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-[#3b1d72]/75">
            In just 30 minutes, we'll map your highest-leverage automation,
            walk through the agent stack, and tell you honestly
            whether we're the right fit.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { icon: Zap, label: "Response within 24 hours" },
              { icon: ShieldCheck, label: "No sales pressure, ever" },
              { icon: Users, label: "Built for teams of 2–200+" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-4">
                <span
                  className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#7c3aed] shadow-[0_8px_24px_-8px_rgba(124,58,237,0.4)]"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-base font-medium text-[#1a0a3d]">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT — Form card (glass) */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="relative rounded-[28px] border border-white/40 bg-white/15 p-6 backdrop-blur-2xl sm:p-8"
          style={{
            boxShadow:
              "0 30px 80px -20px rgba(26,10,61,0.45), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          {/* Header */}
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/80 text-[#7c3aed] shadow-sm">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-serif text-xl text-white sm:text-2xl">
                Let's Build Something Intelligent
              </h3>
              <p className="mt-1 text-sm text-white/75">
                Tell us a bit about your business and goals.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <IconField icon={User} label="Your Full Name" name="name" placeholder="e.g. John Doe" />
              <IconField icon={Building2} label="Company Name" name="company" placeholder="e.g. Acme Inc." />
            </div>
            <IconField icon={Mail} label="Work Email" name="email" type="email" placeholder="e.g. you@company.com" />

            {/* Select */}
            <div className="relative rounded-2xl border border-white/30 bg-white/20 px-4 py-3 backdrop-blur-md transition focus-within:border-white/60">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-white/90">
                  <LayoutGrid className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <label className="block text-[11px] font-medium text-white/85">
                    What do you want to automate?
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="mt-0.5 w-full appearance-none bg-transparent text-sm text-white outline-none [&>option]:bg-[#1a0a3d] [&>option]:text-white"
                  >
                    <option value="" disabled>Select an option</option>
                    <option>Customer support agent</option>
                    <option>Sales / lead workflows</option>
                    <option>Internal operations</option>
                    <option>Data & reporting</option>
                    <option>Other</option>
                  </select>
                </div>
                <ChevronDown className="h-4 w-4 text-white/70" />
              </div>
            </div>

            {/* Textarea */}
            <div className="rounded-2xl border border-white/30 bg-white/20 px-4 py-3 backdrop-blur-md transition focus-within:border-white/60">
              <div className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-white/90">
                  <Pencil className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <label className="block text-[11px] font-medium text-white/85">
                    Tell us a bit about your workflow…
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="A few sentences about your current process or goals…"
                    className="mt-0.5 w-full resize-y bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sent}
              className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-4 text-sm font-semibold text-white transition disabled:opacity-90"
              style={{
                background: sent
                  ? "linear-gradient(135deg, #16a34a, #22c55e)"
                  : "linear-gradient(135deg, #2a0f5c 0%, #6b3fb8 55%, #a855f7 100%)",
                boxShadow:
                  "0 18px 40px -12px rgba(124,58,237,0.7), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Got it — we'll be in touch.
                </>
              ) : (
                <>
                  Book My Strategy Call
                  <span className="absolute right-4 grid h-8 w-8 place-items-center rounded-full bg-white/15">
                    <Sparkles className="h-4 w-4" />
                  </span>
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-2 pt-1 text-[12px] text-white/70">
              <Lock className="h-3.5 w-3.5" />
              Your information is secure and will never be shared.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function IconField({
  icon: Icon,
  label,
  name,
  placeholder,
  type = "text",
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/30 bg-white/20 px-4 py-3 backdrop-blur-md transition focus-within:border-white/60">
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-white/90">
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex-1">
          <label htmlFor={name} className="block text-[11px] font-medium text-white/85">
            {label}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            required
            placeholder={placeholder}
            className="mt-0.5 w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
