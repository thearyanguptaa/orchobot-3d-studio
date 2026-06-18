import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function GlassCube({
  size = 80,
  children,
  spinDuration = 12,
  className = "",
}: {
  size?: number;
  children?: ReactNode;
  spinDuration?: number;
  className?: string;
}) {
  const half = size / 2;
  const faces: Array<React.CSSProperties> = [
    { transform: `translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];
  return (
    <div className={`scene-3d ${className}`} style={{ width: size, height: size }}>
      <motion.div
        className="preserve-3d relative h-full w-full"
        animate={{ rotateX: [10, 20, 10], rotateY: [0, 360] }}
        transition={{
          rotateY: { duration: spinDuration, repeat: Infinity, ease: "linear" },
          rotateX: { duration: spinDuration * 0.7, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {faces.map((s, i) => (
          <div key={i} className="cube-face rounded-md" style={s}>
            {i === 0 && children && (
              <div className="flex h-full w-full items-center justify-center text-violet-200">
                {children}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function SparkleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z" />
    </svg>
  );
}
