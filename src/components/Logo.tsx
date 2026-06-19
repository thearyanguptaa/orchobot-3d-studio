import logoAsset from "@/assets/orchobot-logo.png.asset.json";

export function StarMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Orchobot logo"
      className={`${className} object-contain drop-shadow-[0_0_14px_rgba(168,85,247,0.55)]`}
    />
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logoAsset.url}
        alt="Orchobot"
        className="h-9 w-9 object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.55)]"
      />
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight text-white">
          orchobot
        </span>
        <span className="text-[9px] uppercase tracking-[0.22em] text-violet-300/70">
          AI Agent & Automation
        </span>
      </div>
    </div>
  );
}
