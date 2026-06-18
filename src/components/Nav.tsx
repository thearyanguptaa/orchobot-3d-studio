import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Nav() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#how", label: "How It Works" },
    { href: "#integrations", label: "Integrations" },
    { href: "#testimonials", label: "Stories" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-violet-400/15 bg-[#0a0a0f]/70 px-4 py-2.5 backdrop-blur-xl sm:px-5 sm:py-3 mx-3 sm:mx-auto">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-violet-100/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-violet-400/50 bg-violet-500/10 px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-violet-500/20 sm:gap-2 sm:px-5 sm:py-2 sm:text-sm"
          style={{ boxShadow: "0 0 20px rgba(168,85,247,0.25)" }}
        >
          Book a Call
          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
      </div>
    </header>
  );
}
