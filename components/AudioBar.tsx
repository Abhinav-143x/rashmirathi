import { Volume2 } from "lucide-react";

type AudioBarProps = {
  src?: string;
  title: string;
};

export function AudioBar({ src, title }: AudioBarProps) {
  if (!src) {
    return null;
  }

  return (
    <div className="sticky bottom-4 z-10 mx-auto mt-12 w-full max-w-[var(--reader-max)] px-4">
      <div className="flex flex-col gap-3 border border-saffron/20 bg-ink/92 px-4 py-4 shadow-glow backdrop-blur-xl sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 font-latin text-[0.68rem] uppercase tracking-[0.2em] text-saffron">
            <Volume2 className="h-3.5 w-3.5" />
            Audio
          </div>
          <p className="truncate text-sm text-ash/78">{title}</p>
        </div>
        <audio src={src} preload="metadata" controls className="h-10 w-full sm:w-72" />
      </div>
    </div>
  );
}
