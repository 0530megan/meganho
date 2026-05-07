import { useRef, useState, type CSSProperties, type ReactNode } from "react";

interface SpotlightTaglineProps {
  children: ReactNode;
  className?: string;
  /** Spotlight radius in px */
  radius?: number;
  /** Dimmed-state ink opacity (0-1) */
  dimOpacity?: number;
  /** Spotlight tint — defaults to warm butter yellow */
  tint?: string;
}

/**
 * Magnetic cursor spotlight. The text sits dimmed by default; a warm
 * butter-yellow glow follows the cursor and reveals the words underneath
 * in higher contrast. Falls back to fully readable text on touch / no-hover.
 */
const SpotlightTagline = ({
  children,
  className = "",
  radius = 180,
  dimOpacity = 0.28,
  tint = "rgba(255, 226, 130, 0.55)",
}: SpotlightTaglineProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const active = pos !== null;
  const x = pos?.x ?? 0;
  const y = pos?.y ?? 0;

  const maskStyle: CSSProperties = {
    WebkitMaskImage: `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 0%, black 35%, transparent 78%)`,
    maskImage: `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 0%, black 35%, transparent 78%)`,
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos(null)}
      className={`relative inline-block cursor-none ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Dimmed base layer */}
      <span
        aria-hidden={active}
        className="block transition-opacity duration-300"
        style={{ opacity: active ? dimOpacity : 1 }}
      >
        {children}
      </span>

      {/* Crisp revealed layer, masked to spotlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-200"
        style={{
          ...maskStyle,
          opacity: active ? 1 : 0,
          color: "hsl(var(--ink))",
          textShadow: "0 1px 0 rgba(255,248,224,0.6)",
        }}
      >
        {children}
      </span>

      {/* Warm glow halo */}
      <span
        aria-hidden
        className="pointer-events-none absolute rounded-full transition-opacity duration-200"
        style={{
          left: x - radius,
          top: y - radius,
          width: radius * 2,
          height: radius * 2,
          opacity: active ? 1 : 0,
          background: `radial-gradient(circle, ${tint} 0%, rgba(255,226,130,0) 65%)`,
          mixBlendMode: "multiply",
          filter: "blur(2px)",
          zIndex: -1,
        }}
      />

      {/* Custom dot cursor */}
      <span
        aria-hidden
        className="pointer-events-none absolute rounded-full transition-opacity duration-150"
        style={{
          left: x - 5,
          top: y - 5,
          width: 10,
          height: 10,
          opacity: active ? 1 : 0,
          background: "hsl(var(--ink))",
          boxShadow: "0 0 0 2px rgba(255,248,224,0.85), 0 0 14px rgba(255,200,80,0.6)",
        }}
      />
    </span>
  );
};

export default SpotlightTagline;
