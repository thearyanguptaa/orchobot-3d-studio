import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Integrations } from "@/components/sections/Integrations";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { CursorFX } from "@/components/CursorFX";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orchobot — Intelligent AI Automation & Agents" },
      { name: "description", content: "AI agents and automation systems that execute. Reduce costs, save time, scale faster with Orchobot." },
      { property: "og:title", content: "Orchobot — Intelligent AI Automation & Agents" },
      { property: "og:description", content: "AI agents and automation systems that execute. Reduce costs, save time, scale faster." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main id="home" className="relative bg-[#0a0a0f] text-white">
      <CursorFX />
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <Integrations />
      <Stats />
      <Testimonials />
      <ROICalculator />
      <Contact />
      <Footer />
    </main>
  );
}
