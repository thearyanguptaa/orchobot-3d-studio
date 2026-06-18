export function StarMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="lgStar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="60%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="2" /></filter>
      </defs>
      <path
        d="M32 2 C34 22 42 30 62 32 C42 34 34 42 32 62 C30 42 22 34 2 32 C22 30 30 22 32 2 Z"
        fill="url(#lgStar)"
        filter="url(#glow)"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <StarMark className="h-9 w-9 drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight text-white">
          Orchobot
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-violet-300/70">
          AI Automation
        </span>
      </div>
    </div>
  );
}
