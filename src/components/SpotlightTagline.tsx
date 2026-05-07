import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";

interface SpotlightTaglineProps {
  children: ReactNode;
  className?: string;
  /** Spotlight radius in px */
  radius?: number;
  /** Dimmed-state ink opacity (0-1) */
  dimOpacity?: number;
  /** Spotlight tint — defaults to warm butter yellow */
  tint?: string;
  /** Accessible label describing the interaction */
  ariaLabel?: string;
}

/**
 * Magnetic cursor spotlight. Hidden by default; a warm butter-yellow glow
 * follows the cursor and reveals the words underneath. Accessibility:
 *  - Focusable (tabIndex=0). On focus or Enter/Space, the full tagline is
 *    revealed statically, no cursor required.
 *  - Honors prefers-reduced-motion: text shows fully, no spotlight motion.
 *  - Screen readers always read the underlying text.
 */
const SpotlightTagline = ({
  children,
  className = "",
  radius = 180,
  dimOpacity = 0,
  tint = "rgba(255, 226, 130, 0.55)",
  ariaLabel = "Reveal tagline",
}: SpotlightTaglineProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setKeyboardRevealed((v) => !v);
    } else if (e.key === "Escape") {
      setKeyboardRevealed(false);
    }
  };

  // Force-reveal mode: fully visible static text, no spotlight needed.
  const fullReveal = keyboardRevealed || reduceMotion;
  const active = pos !== null;
  const x = pos?.x ?? 0;
  const y = pos?.y ?? 0;

  const maskStyle: CSSProperties = {
    WebkitMaskImage: `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 0%, black 55%, transparent 95%)`,
    maskImage: `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 0%, black 55%, transparent 95%)`,
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos(null)}
      onFocus={() => setKeyboardRevealed(true)}
      onBlur={() => setKeyboardRevealed(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel}
      aria-pressed={fullReveal}
      className={`relative inline-block ${fullReveal ? "" : "cursor-none"} rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Base layer — invisible at rest, fully visible in keyboard / reduced-motion mode.
          Always present in the DOM so screen readers can read it. */}
      <span
        className="block transition-opacity duration-300"
        style={{ opacity: fullReveal ? 1 : dimOpacity }}
      >
        {children}
      </span>

      {/* Crisp revealed layer, masked to spotlight (skipped when fully revealed) */}
      {!fullReveal && (
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
      )}

      {/* Warm glow halo */}
      {!fullReveal && (
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
      )}

      {/* Custom dot cursor */}
      {!fullReveal && (
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
      )}
    </span>
  );
};

export default SpotlightTagline;
