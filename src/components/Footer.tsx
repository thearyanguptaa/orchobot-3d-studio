import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/orchobot-logo.png.asset.json";

export function Footer() {
  const productLinks = ["Services", "How it works", "Integrations", "Case Studies"];
  const companyLinks = ["About", "Careers", "Blog", "Contact"];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer className="relative border-t border-violet-400/10 bg-[#08080d]">
      {/* Top accent glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(900px 320px at 50% 0%, rgba(139,92,246,0.18), transparent 70%)",
        }}
      />

      {/* CTA strip */}
      <div className="relative mx-auto max-w-7xl px-6 pt-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-violet-500/5 to-transparent p-7 backdrop-blur-xl sm:p-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Ready to automate the boring stuff?
            </h3>
            <p className="mt-2 max-w-xl text-sm text-violet-100/65">
              Let's design an AI agent that reclaims hours every week — and pays for itself in the first month.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.45)] transition-transform hover:scale-[1.02]"
          >
            Book a Free Call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12">
        {/* Brand + contact */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Orchobot" className="h-12 w-12 object-contain drop-shadow-[0_0_14px_rgba(168,85,247,0.55)]" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-semibold text-white">orchobot</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-violet-300/70">
                AI Agent & Automation
              </span>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-violet-100/60">
            Orchobot designs and ships AI agents that actually execute — not chatbots that hand off to humans. Automate workflows, scale operations, ship faster.
          </p>

          <ul className="mt-7 space-y-3 text-sm">
            <li className="flex items-center gap-3 text-violet-100/75">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <Mail className="h-4 w-4" />
              </span>
              <a href="mailto:hello@orchobot.ai" className="transition-colors hover:text-white">
                hello@orchobot.ai
              </a>
            </li>
            <li className="flex items-center gap-3 text-violet-100/75">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <Phone className="h-4 w-4" />
              </span>
              <a href="tel:+919876543210" className="transition-colors hover:text-white">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-3 text-violet-100/75">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <MapPin className="h-4 w-4" />
              </span>
              <span>Remote-first · Building globally</span>
            </li>
          </ul>

          <div className="mt-7 flex items-center gap-3">
            {[
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Github, label: "GitHub" },
              { Icon: Instagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-violet-400/20 bg-white/[0.03] text-violet-200/70 transition-all hover:border-violet-400/60 hover:bg-violet-500/15 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="md:col-span-2">
          <div className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/80">Product</div>
          <ul className="mt-4 space-y-3 text-sm text-violet-100/65">
            {productLinks.map((l) => (
              <li key={l}><a href="#" className="transition-colors hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/80">Company</div>
          <ul className="mt-4 space-y-3 text-sm text-violet-100/65">
            {companyLinks.map((l) => (
              <li key={l}><a href="#" className="transition-colors hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-3">
          <div className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/80">Stay in the loop</div>
          <p className="mt-4 text-sm text-violet-100/60">
            Monthly drops on AI agents, automation playbooks, and case studies.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/[0.03] p-1.5 focus-within:border-violet-400/60"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-violet-100/35 focus:outline-none"
            />
            <button
              type="submit"
              className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white transition-transform hover:scale-105"
              aria-label="Subscribe"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-violet-400/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-violet-100/45 md:flex-row">
          <span>© {new Date().getFullYear()} Orchobot. Built for teams that ship.</span>
          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-violet-100/80">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
