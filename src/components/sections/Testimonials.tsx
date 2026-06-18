import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { quote: "Orchobot automated our entire lead pipeline. We jumped from 30% to 78% qualified-lead conversion in 60 days. The team treated this like their own product.", name: "Priya Mehra", role: "Head of Sales, Atlas Tech", avatar: "PM" },
  { quote: "Their AI voice agents handle 200+ support calls every day. My team finally focuses on value work instead of repeating the same answers.", name: "Daniel Okafor", role: "Operations Manager, NorthPay", avatar: "DO" },
  { quote: "We saved €43,000 in Q1 alone after Orchobot rebuilt our CRM workflows. The ROI is undeniable and we've doubled the scope since.", name: "Sofía Marín", role: "Founder, Lúmen Cosmetics", avatar: "SM" },
  { quote: "From discovery call to a live agent in production was three weeks. They actually ship — that's rarer than it should be in this space.", name: "Marcus Reid", role: "CTO, FieldOps Co.", avatar: "MR" },
  { quote: "The integrations layer is the magic. Notion, Slack, HubSpot, Stripe — all moving in sync without anyone touching a thing.", name: "Yuki Tanaka", role: "Head of RevOps, Polar Labs", avatar: "YT" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);
  const visible = [items[i % items.length], items[(i + 1) % items.length], items[(i + 2) % items.length]];

  return (
    <section id="testimonials" className="relative overflow-hidden py-28" style={{ background: "#fdf4ec" }}>
      {/* soft warm decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, rgba(244,208,184,0.7), transparent 70%)" }} />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(201,160,144,0.5), transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#824050]/20 bg-white px-4 py-1.5 text-xs font-medium text-[#824050]">
            Testimonials
          </div>
          <h2 className="mt-6 font-serif text-5xl text-[#1a0a2e] sm:text-6xl">What our clients say</h2>
          <p className="mx-auto mt-4 max-w-xl text-[#5a3d5c]">
            Operators and founders building leaner businesses with Orchobot agents.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((t, idx) => (
                <motion.article
                  key={`${i}-${idx}`}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative flex flex-col rounded-2xl border border-[#c9a090]/30 bg-white p-7 shadow-[0_20px_60px_-30px_rgba(82,0,85,0.3)]"
                >
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <motion.span key={k} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 + k * 0.08 }}>
                        <Star className="h-4 w-4 fill-amber-500" />
                      </motion.span>
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-[15px] leading-relaxed text-[#3a2540]">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[#c9a090]/30 pt-5">
                    <div className="grid h-11 w-11 place-items-center rounded-full text-sm font-semibold text-white"
                         style={{ background: "linear-gradient(135deg, #824050, #520055)" }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1a0a2e]">{t.name}</div>
                      <div className="text-xs text-[#824050]">{t.role}</div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#824050]/30 bg-white text-[#824050] transition hover:bg-[#824050] hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: k === i ? 28 : 8,
                    background: k === i ? "#824050" : "rgba(130,64,80,0.3)",
                  }}
                  aria-label={`Go to slide ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % items.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#824050]/30 bg-white text-[#824050] transition hover:bg-[#824050] hover:text-white"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
