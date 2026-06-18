import { useMemo } from "react";

export function StarField({ count = 120 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
        purple: Math.random() > 0.75,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: s.purple ? "#c084fc" : "#ffffff",
            boxShadow: s.purple ? "0 0 6px #a855f7" : "0 0 3px #ffffff",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
