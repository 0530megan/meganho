import { useEffect, useState } from "react";

interface Props {
  src: string;
  alt: string;
  storageKey?: string;
  aspectRatio?: string; // e.g., "4 / 5"
}

interface Transform {
  scale: number;
  x: number; // %
  y: number; // %
}

const DEFAULT: Transform = { scale: 1, x: 50, y: 50 };

export const AdjustableImage = ({
  src,
  alt,
  storageKey = "image-adjust",
  aspectRatio = "4 / 5",
}: Props) => {
  const [t, setT] = useState<Transform>(() => {
    if (typeof window === "undefined") return DEFAULT;
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? { ...DEFAULT, ...JSON.parse(saved) } : DEFAULT;
    } catch {
      return DEFAULT;
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(t));
  }, [t, storageKey]);

  // Drag to reposition
  const onMouseDown = (e: React.MouseEvent) => {
    if (!open) return;
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const start = { ...t };
    const target = e.currentTarget as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const move = (ev: MouseEvent) => {
      const dx = ((ev.clientX - startX) / rect.width) * 100;
      const dy = ((ev.clientY - startY) / rect.height) * 100;
      setT({
        ...start,
        x: Math.max(0, Math.min(100, start.x - dx)),
        y: Math.max(0, Math.min(100, start.y - dy)),
      });
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  return (
    <div className="relative">
      <div
        onMouseDown={onMouseDown}
        className={`relative w-full overflow-hidden bg-ink/5 ${
          open ? "cursor-grab active:cursor-grabbing ring-2 ring-[hsl(var(--accent-burnt))]" : ""
        }`}
        style={{ aspectRatio }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="absolute inset-0 w-full h-full select-none"
          style={{
            objectFit: "cover",
            objectPosition: `${t.x}% ${t.y}%`,
            transform: `scale(${t.scale})`,
            transformOrigin: `${t.x}% ${t.y}%`,
          }}
        />
      </div>

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="absolute top-2 right-2 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1 hover:bg-[hsl(var(--accent-burnt))] transition-colors"
      >
        {open ? "Done" : "Adjust"}
      </button>

      {/* Controls */}
      {open && (
        <div className="absolute left-2 right-2 bottom-2 bg-paper/95 border border-ink p-3 space-y-2 backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] small-caps w-12">Zoom</span>
            <input
              type="range"
              min={1}
              max={3}
              step={0.01}
              value={t.scale}
              onChange={(e) => setT({ ...t, scale: parseFloat(e.target.value) })}
              className="flex-1 accent-[hsl(var(--accent-burnt))]"
            />
            <span className="font-mono text-[10px] tabular-nums w-10 text-right">
              {t.scale.toFixed(2)}x
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] small-caps w-12">X</span>
            <input
              type="range"
              min={0}
              max={100}
              step={0.5}
              value={t.x}
              onChange={(e) => setT({ ...t, x: parseFloat(e.target.value) })}
              className="flex-1 accent-[hsl(var(--accent-burnt))]"
            />
            <span className="font-mono text-[10px] tabular-nums w-10 text-right">
              {t.x.toFixed(0)}%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] small-caps w-12">Y</span>
            <input
              type="range"
              min={0}
              max={100}
              step={0.5}
              value={t.y}
              onChange={(e) => setT({ ...t, y: parseFloat(e.target.value) })}
              className="flex-1 accent-[hsl(var(--accent-burnt))]"
            />
            <span className="font-mono text-[10px] tabular-nums w-10 text-right">
              {t.y.toFixed(0)}%
            </span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="font-mono text-[9px] text-ink-mute">Drag the image to pan</span>
            <button
              type="button"
              onClick={() => setT(DEFAULT)}
              className="font-mono text-[10px] small-caps underline hover:text-[hsl(var(--accent-burnt))]"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
