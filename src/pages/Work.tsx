import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Hand, Shuffle, X } from "lucide-react";
import veramenteBrandBoard from "@/assets/veramente-brand-board.jpg";
import veramenteTinyBites from "@/assets/veramente-tiny-bites.png";
import veramenteBagCharm from "@/assets/veramente-bag-charm.png";
import veramenteCafe from "@/assets/veramente-cafe.png";
import sippyBrandBoard from "@/assets/sippy-brand-board.jpg";
import megsCreamiBrandBoard from "@/assets/megs-creami-brand-board.jpg";

type Plate = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  meta: string;
  tag: "Branding" | "Packaging" | "Identity";
  /** initial layout (% of canvas), tilt + size */
  x: number;
  y: number;
  w: number; // width in px at desktop
  rot: number; // initial rotation
  z: number;
};

const PLATES: Plate[] = [
  {
    id: "veramente-board",
    src: veramenteBrandBoard,
    alt: "Veramente brand identity board",
    caption: "Veramente — Brand Board",
    meta: "Plate II · Identity System",
    tag: "Identity",
    x: 6, y: 8, w: 460, rot: -6, z: 5,
  },
  {
    id: "sippy-board",
    src: sippyBrandBoard,
    alt: "Sippy sparkling blood orange brand board",
    caption: "Sippy — Brand Board",
    meta: "Plate VI · Beverage",
    tag: "Identity",
    x: 56, y: 4, w: 440, rot: 5, z: 4,
  },
  {
    id: "megs-board",
    src: megsCreamiBrandBoard,
    alt: "Meg's Creami ice cream brand board",
    caption: "Meg's Creami — Brand Board",
    meta: "Plate VII · Dessert",
    tag: "Identity",
    x: 30, y: 46, w: 380, rot: -3, z: 6,
  },
  {
    id: "veramente-tiny",
    src: veramenteTinyBites,
    alt: "Veramente Tiny Bites collection",
    caption: "Tiny Bites Collection",
    meta: "Veramente · Packaging",
    tag: "Packaging",
    x: 68, y: 52, w: 280, rot: 8, z: 3,
  },
  {
    id: "veramente-bag",
    src: veramenteBagCharm,
    alt: "Veramente bag charm",
    caption: "Wear It Daily",
    meta: "Veramente · Product",
    tag: "Branding",
    x: 2, y: 60, w: 260, rot: -10, z: 2,
  },
  {
    id: "veramente-cafe",
    src: veramenteCafe,
    alt: "Veramente in the wild",
    caption: "In The Wild",
    meta: "Veramente · Lifestyle",
    tag: "Branding",
    x: 78, y: 14, w: 240, rot: -8, z: 1,
  },
];

const CASE_STUDIES = [
  {
    no: "I",
    name: "Veramente",
    tagline: "Carry Your SPF.",
    blurb: "A wearable SPF concept brand — sunscreen reframed as a daily accessory.",
    cover: veramenteBrandBoard,
    href: "/#work",
  },
  {
    no: "II",
    name: "Sippy",
    tagline: "Keep it cute, keep it sippy.",
    blurb: "A sparkling blood orange can with a character-led identity built for shelf and feed.",
    cover: sippyBrandBoard,
    href: "/#sippy",
  },
  {
    no: "III",
    name: "Meg's Creami",
    tagline: "A spoonful of nostalgia.",
    blurb: "A small-batch ice cream pint — retro script, sprinkle seal, scoop-shop palette.",
    cover: megsCreamiBrandBoard,
    href: "/#megs-creami",
  },
];

const TAGS = ["All", "Identity", "Packaging", "Branding"] as const;
type Tag = (typeof TAGS)[number];

const Playground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState(() =>
    PLATES.map((p) => ({ id: p.id, x: p.x, y: p.y, rot: p.rot, z: p.z }))
  );
  const [topZ, setTopZ] = useState(10);
  const [filter, setFilter] = useState<Tag>("All");
  const [lightbox, setLightbox] = useState<Plate | null>(null);
  const [straighten, setStraighten] = useState(false);
  const dragRef = useRef<{
    id: string;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    rect: DOMRect;
  } | null>(null);

  const bringToFront = (id: string) => {
    setTopZ((z) => z + 1);
    setPositions((prev) =>
      prev.map((p) => (p.id === id ? { ...p, z: topZ + 1 } : p))
    );
  };

  const onPointerDown = (e: React.PointerEvent, id: string) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const cur = positions.find((p) => p.id === id)!;
    dragRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      origX: cur.x,
      origY: cur.y,
      rect,
    };
    bringToFront(id);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const d = dragRef.current;
    const dxPct = ((e.clientX - d.startX) / d.rect.width) * 100;
    const dyPct = ((e.clientY - d.startY) / d.rect.height) * 100;
    setPositions((prev) =>
      prev.map((p) =>
        p.id === d.id
          ? {
              ...p,
              x: Math.max(-10, Math.min(95, d.origX + dxPct)),
              y: Math.max(-5, Math.min(90, d.origY + dyPct)),
            }
          : p
      )
    );
  };

  const onPointerUp = () => {
    dragRef.current = null;
  };

  const shuffle = () => {
    setStraighten(false);
    setPositions((prev) =>
      prev.map((p, i) => ({
        ...p,
        x: 5 + Math.random() * 75,
        y: 4 + Math.random() * 75,
        rot: -12 + Math.random() * 24,
        z: 1 + i,
      }))
    );
    setTopZ(20);
  };

  const reset = () => {
    setStraighten(false);
    setPositions(
      PLATES.map((p) => ({ id: p.id, x: p.x, y: p.y, rot: p.rot, z: p.z }))
    );
    setTopZ(10);
  };

  const visible = (id: string) => {
    if (filter === "All") return true;
    return PLATES.find((p) => p.id === id)?.tag === filter;
  };

  // Close lightbox on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative">
      {/* Toolbar */}
      <div className="container pt-6 pb-4 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`font-mono text-[11px] small-caps px-3 py-1.5 border transition-colors ${
                filter === t
                  ? "bg-ink text-paper border-ink"
                  : "bg-paper text-ink border-ink/30 hover:border-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setStraighten((s) => !s)}
            className="font-mono text-[11px] small-caps px-3 py-1.5 border border-ink/30 hover:border-ink hover:bg-paper-deep transition-colors flex items-center gap-2"
          >
            <Hand className="size-3.5" />
            {straighten ? "Untilt: On" : "Untilt: Off"}
          </button>
          <button
            onClick={shuffle}
            className="font-mono text-[11px] small-caps px-3 py-1.5 border border-ink bg-[hsl(var(--accent-burnt))] text-paper hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Shuffle className="size-3.5" />
            Shuffle
          </button>
          <button
            onClick={reset}
            className="font-mono text-[11px] small-caps px-3 py-1.5 border border-ink/30 hover:border-ink transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="container">
        <div
          ref={canvasRef}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="relative w-full h-[78vh] min-h-[640px] border-2 border-ink overflow-hidden select-none touch-none"
          style={{
            background:
              "radial-gradient(60% 60% at 18% 22%, hsl(var(--accent-burnt) / 0.22) 0%, transparent 60%), radial-gradient(50% 50% at 82% 78%, hsl(var(--accent-red) / 0.18) 0%, transparent 65%), repeating-linear-gradient(0deg, hsl(var(--ink) / 0.05) 0 1px, transparent 1px 32px), repeating-linear-gradient(90deg, hsl(var(--ink) / 0.05) 0 1px, transparent 1px 32px), hsl(var(--paper))",
          }}
        >
          {/* Caption corner */}
          <div className="absolute top-3 left-4 z-0 pointer-events-none">
            <p className="font-mono text-[10px] small-caps text-ink-mute">
              Figma · Mood Board · Drag to rearrange
            </p>
          </div>
          <div className="absolute bottom-3 right-4 z-0 pointer-events-none">
            <p className="font-mono text-[10px] small-caps text-ink-mute">
              {PLATES.filter((p) => visible(p.id)).length} of {PLATES.length} plates
            </p>
          </div>

          {PLATES.map((plate) => {
            const pos = positions.find((p) => p.id === plate.id)!;
            const show = visible(plate.id);
            const rot = straighten ? 0 : pos.rot;
            return (
              <figure
                key={plate.id}
                onPointerDown={(e) => onPointerDown(e, plate.id)}
                onDoubleClick={() => setLightbox(plate)}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  width: `min(${plate.w}px, 70vw)`,
                  zIndex: pos.z,
                  transform: `rotate(${rot}deg)`,
                  transition: dragRef.current?.id === plate.id
                    ? "none"
                    : "transform 400ms cubic-bezier(.2,.8,.2,1), opacity 250ms, filter 250ms",
                  opacity: show ? 1 : 0,
                  filter: show ? "none" : "grayscale(100%)",
                  pointerEvents: show ? "auto" : "none",
                }}
                className="absolute cursor-grab active:cursor-grabbing group"
              >
                <div
                  className="bg-paper border border-ink shadow-[6px_8px_0_0_hsl(var(--ink))] group-hover:shadow-[10px_12px_0_0_hsl(var(--accent-burnt))] transition-shadow p-2"
                >
                  <img
                    src={plate.src}
                    alt={plate.alt}
                    draggable={false}
                    className="w-full h-auto block pointer-events-none"
                    loading="lazy"
                  />
                  <figcaption className="pt-2 mt-1 border-t border-ink/30 flex items-baseline justify-between gap-3">
                    <p className="font-display italic text-sm">{plate.caption}</p>
                    <p className="font-mono text-[9px] small-caps text-ink-mute">
                      {plate.meta}
                    </p>
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>
        <p className="font-mono text-[10px] small-caps text-ink-mute mt-3">
          Tip · Drag any plate to move it · Double-click to open · Shuffle for chaos
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 size-10 border border-paper/40 text-paper hover:bg-paper hover:text-ink transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
          <figure
            className="max-w-5xl w-full bg-paper p-3 border-2 border-paper animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto" />
            <figcaption className="pt-3 mt-2 border-t border-ink/30 flex items-baseline justify-between gap-4">
              <p className="font-display italic text-lg">{lightbox.caption}</p>
              <p className="font-mono text-[11px] small-caps text-ink-mute">
                {lightbox.meta}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

const Work = () => {
  return (
    <div className="paper-grain min-h-screen text-ink">
      {/* Top bar */}
      <header className="border-b-2 border-ink">
        <div className="container py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-mono text-[11px] small-caps flex items-center gap-2 hover:text-[hsl(var(--accent-burnt))] transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            Back to Folio
          </Link>
          <p className="font-mono text-[11px] small-caps text-ink-mute">
            Megan Ho · Selected Figma Work
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div
          aria-hidden
          className="absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(60% 70% at 20% 30%, hsl(var(--accent-burnt) / 0.18) 0%, transparent 60%), radial-gradient(50% 60% at 80% 70%, hsl(var(--accent-red) / 0.12) 0%, transparent 65%)",
          }}
        />
        <div className="container py-16 md:py-24 relative">
          <p className="font-mono text-[11px] small-caps text-[hsl(var(--accent-burnt))] mb-4">
            Section · Figma Work · Interactive
          </p>
          <h1 className="font-display font-light leading-[0.88] tracking-tight text-[clamp(3rem,9vw,8rem)]">
            The Figma
            <span className="italic" style={{ color: "hsl(var(--accent-burnt))" }}>
              {" "}
              Studio.
            </span>
          </h1>
          <p className="font-display text-xl md:text-2xl text-ink-soft mt-6 max-w-2xl leading-relaxed">
            A working preview of selected brand systems — three full case studies and a
            playable mood board of every plate, mock-up, and lifestyle frame.
          </p>
        </div>
      </section>

      {/* Case study index */}
      <section className="container py-16 md:py-20">
        <div className="flex items-baseline justify-between mb-10 gap-6 flex-wrap">
          <div>
            <p className="font-mono text-[11px] small-caps text-[hsl(var(--accent-burnt))]">
              No. 01
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-1">
              Case Study Index
            </h2>
          </div>
          <p className="font-mono text-[11px] small-caps text-ink-mute">
            Three concept brands · Built in Figma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <a
              key={cs.no}
              href={cs.href}
              className="group block border border-ink bg-paper hover:bg-paper-deep transition-colors"
            >
              <div className="relative overflow-hidden aspect-video border-b border-ink bg-paper-deep">
                <img
                  src={cs.cover}
                  alt={`${cs.name} brand board cover`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"
                  style={{ background: "hsl(var(--accent-burnt) / 0.22)" }}
                />
                <span className="absolute top-3 left-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1">
                  Case · {cs.no}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-display text-2xl tracking-tight">{cs.name}</h3>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[hsl(var(--accent-burnt))]" />
                </div>
                <p className="font-display italic text-sm text-ink-soft mb-3">
                  {cs.tagline}
                </p>
                <p className="font-mono text-xs text-ink-mute leading-relaxed">
                  {cs.blurb}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Playground */}
      <section className="border-t-2 border-ink bg-paper-deep">
        <div className="container pt-16 md:pt-20">
          <div className="flex items-baseline justify-between mb-2 gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[11px] small-caps text-[hsl(var(--accent-burnt))]">
                No. 02
              </p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight mt-1">
                Mood-Board Playground
              </h2>
            </div>
            <p className="font-mono text-[11px] small-caps text-ink-mute max-w-sm md:text-right">
              Drag plates around. Filter by tag. Double-click to open. Shuffle for a fresh layout.
            </p>
          </div>
        </div>
        <Playground />
        <div className="h-16" />
      </section>

      <footer className="border-t-2 border-ink">
        <div className="container py-6 flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/"
            className="font-mono text-[11px] small-caps flex items-center gap-2 hover:text-[hsl(var(--accent-burnt))] transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            Back to Folio
          </Link>
          <p className="font-mono text-[11px] small-caps text-ink-mute">
            End of preview · ◼
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Work;
