import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-violet-400/10 bg-[#0a0a0f] py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm text-violet-100/55">
            Orchobot designs and ships AI agents that actually execute — not chatbots that hand off to humans.
          </p>
        </div>
        {[
          { title: "Product", links: ["Services", "How it works", "Integrations", "ROI Calculator"] },
          { title: "Company", links: ["About", "Case Studies", "Contact", "Careers"] },
        ].map((c) => (
          <div key={c.title}>
            <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/70">{c.title}</div>
            <ul className="mt-4 space-y-2 text-sm text-violet-100/65">
              {c.links.map((l) => <li key={l}><a href="#" className="transition-colors hover:text-white">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-violet-400/10 px-6 pt-6 text-xs text-violet-100/40 md:flex-row">
        <span>© {new Date().getFullYear()} Orchobot. Built for teams that ship.</span>
        <span>orchobot.ai</span>
      </div>
    </footer>
  );
}
