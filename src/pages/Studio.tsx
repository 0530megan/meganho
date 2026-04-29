import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Loader2, Sparkles, Shuffle, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type PaletteSwatch = { name: string; hex: string; role: string };
type Brand = {
  name: string;
  tagline: string;
  description: string;
  category_label: string;
  palette: PaletteSwatch[];
  type_pairing: { display: string; body: string };
  voice: string[];
  manifesto: string;
  product_idea: string;
};

const MOODS = ["Bold", "Soft", "Retro", "Editorial", "Playful"] as const;
const CATEGORIES = ["Beverage", "Beauty", "Food", "Wellness", "Tech", "Fashion"] as const;
const VIBES = [
  "sun-soaked",
  "after-hours",
  "honey",
  "static",
  "linen",
  "garden",
  "neon-lit",
  "matcha",
  "midnight",
  "stone-fruit",
];

const Chip = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`font-mono text-[11px] small-caps px-3 py-1.5 border transition-colors ${
      selected
        ? "bg-ink text-paper border-ink"
        : "bg-paper text-ink border-ink/30 hover:border-ink"
    }`}
  >
    {label}
  </button>
);

const Studio = () => {
  const [mood, setMood] = useState<string>("Bold");
  const [category, setCategory] = useState<string>("Beverage");
  const [vibe, setVibe] = useState<string>("sun-soaked");
  const [loading, setLoading] = useState(false);
  const [brand, setBrand] = useState<Brand | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const surprise = () => {
    setMood(MOODS[Math.floor(Math.random() * MOODS.length)]);
    setCategory(CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]);
    setVibe(VIBES[Math.floor(Math.random() * VIBES.length)]);
  };

  const generate = async () => {
    setLoading(true);
    setBrand(null);
    setLogoUrl(null);
    try {
      const { data, error } = await supabase.functions.invoke("generate-brand", {
        body: { mood, category, vibe },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setBrand(data.brand);
      setLogoUrl(data.logoUrl ?? null);
    } catch (e: any) {
      console.error(e);
      toast({
        title: "Couldn't generate that one",
        description: e?.message ?? "Try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
            Megan Ho · Build-a-Brand · Live Demo
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
              "radial-gradient(60% 70% at 18% 30%, hsl(var(--accent-burnt) / 0.20) 0%, transparent 60%), radial-gradient(50% 60% at 82% 70%, hsl(var(--accent-red) / 0.14) 0%, transparent 65%)",
          }}
        />
        <div className="container py-14 md:py-20 relative">
          <p className="font-mono text-[11px] small-caps text-[hsl(var(--accent-burnt))] mb-4">
            Section · Build-a-Brand · Powered by AI
          </p>
          <h1 className="font-display font-light leading-[0.88] tracking-tight text-[clamp(2.75rem,8vw,7rem)]">
            Pick a mood.
            <span className="italic" style={{ color: "hsl(var(--accent-burnt))" }}>
              {" "}
              Get a brand.
            </span>
          </h1>
          <p className="font-display text-lg md:text-xl text-ink-soft mt-5 max-w-2xl leading-relaxed">
            A live demonstration of brand-systems thinking. Choose a few inputs, and the
            studio composes a name, palette, type pairing, voice, and a generated logo —
            in real time.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-8">
            <div>
              <p className="font-mono text-[11px] small-caps text-[hsl(var(--accent-burnt))] mb-1">
                Step 01
              </p>
              <h2 className="font-display text-2xl tracking-tight mb-3">Mood</h2>
              <div className="flex flex-wrap gap-2">
                {MOODS.map((m) => (
                  <Chip key={m} label={m} selected={mood === m} onClick={() => setMood(m)} />
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] small-caps text-[hsl(var(--accent-burnt))] mb-1">
                Step 02
              </p>
              <h2 className="font-display text-2xl tracking-tight mb-3">Category</h2>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <Chip
                    key={c}
                    label={c}
                    selected={category === c}
                    onClick={() => setCategory(c)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] small-caps text-[hsl(var(--accent-burnt))] mb-1">
                Step 03
              </p>
              <h2 className="font-display text-2xl tracking-tight mb-3">Vibe word</h2>
              <div className="flex items-stretch gap-2 mb-3">
                <input
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value.slice(0, 28))}
                  placeholder="one word"
                  className="flex-1 bg-paper border border-ink/40 px-3 py-2 font-display italic text-lg focus:outline-none focus:border-ink"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {VIBES.slice(0, 6).map((v) => (
                  <Chip key={v} label={v} selected={vibe === v} onClick={() => setVibe(v)} />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={generate}
                disabled={loading}
                className="inline-flex items-center gap-2 font-mono text-[11px] small-caps px-5 py-3 border border-ink bg-[hsl(var(--accent-burnt))] text-paper hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Composing
                  </>
                ) : (
                  <>
                    <Sparkles className="size-4" />
                    Generate Brand
                  </>
                )}
              </button>
              <button
                onClick={surprise}
                disabled={loading}
                className="inline-flex items-center gap-2 font-mono text-[11px] small-caps px-4 py-3 border border-ink hover:bg-paper-deep transition-colors disabled:opacity-60"
              >
                <Shuffle className="size-3.5" />
                Surprise Me
              </button>
            </div>

            <p className="font-mono text-[10px] small-caps text-ink-mute pt-2">
              Tip · Each generation is unique. Keep clicking until one clicks.
            </p>
          </div>

          {/* Output plate */}
          <div className="md:col-span-7">
            <div className="relative border-2 border-ink bg-paper min-h-[640px]">
              {/* Plate header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-ink bg-paper-deep">
                <p className="font-mono text-[10px] small-caps text-ink-mute">
                  Plate · Generated Brand System
                </p>
                <p className="font-mono text-[10px] small-caps text-ink-mute">
                  {brand ? brand.category_label : "—"}
                </p>
              </div>

              {!brand && !loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <Sparkles className="size-8 text-[hsl(var(--accent-burnt))] mb-4" />
                  <p className="font-display italic text-2xl text-ink-soft max-w-sm leading-snug">
                    Your brand board will compose itself here.
                  </p>
                  <p className="font-mono text-[10px] small-caps text-ink-mute mt-3">
                    Pick inputs · Hit generate
                  </p>
                </div>
              )}

              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                  <Loader2 className="size-8 animate-spin text-[hsl(var(--accent-burnt))] mb-4" />
                  <p className="font-display italic text-xl text-ink-soft">
                    Mixing palette, drafting voice, drawing logo…
                  </p>
                  <p className="font-mono text-[10px] small-caps text-ink-mute mt-3">
                    ~10 seconds
                  </p>
                </div>
              )}

              {brand && (
                <div className="p-6 md:p-8 animate-fade-in">
                  {/* Name + tagline */}
                  <div className="mb-6">
                    <p className="font-mono text-[10px] small-caps text-[hsl(var(--accent-burnt))] mb-2">
                      No. 01 · Identity
                    </p>
                    <h3
                      className="font-display font-light leading-[0.9] tracking-tight text-[clamp(2.5rem,7vw,4.5rem)]"
                      style={{ fontFamily: brand.type_pairing.display }}
                    >
                      {brand.name}
                      <span
                        className="italic"
                        style={{ color: "hsl(var(--accent-burnt))" }}
                      >
                        .
                      </span>
                    </h3>
                    <p className="font-display italic text-xl text-ink-soft mt-2">
                      {brand.tagline}
                    </p>
                    <p className="font-mono text-xs text-ink-mute mt-3 leading-relaxed max-w-md">
                      {brand.description}
                    </p>
                  </div>

                  {/* Logo + palette */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <figure className="border border-ink bg-paper-deep aspect-square overflow-hidden flex items-center justify-center">
                      {logoUrl ? (
                        <img
                          src={logoUrl}
                          alt={`${brand.name} logo mark`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-6">
                          <p
                            className="font-display text-5xl"
                            style={{ fontFamily: brand.type_pairing.display }}
                          >
                            {brand.name}
                          </p>
                          <p className="font-mono text-[10px] small-caps text-ink-mute mt-3">
                            (logo image unavailable)
                          </p>
                        </div>
                      )}
                    </figure>

                    <div>
                      <p className="font-mono text-[10px] small-caps text-[hsl(var(--accent-burnt))] mb-2">
                        No. 02 · Palette
                      </p>
                      <div className="grid grid-cols-5 gap-1 border border-ink">
                        {brand.palette.map((c, i) => (
                          <div key={i} className="aspect-[2/3] relative" style={{ background: c.hex }}>
                            <span className="absolute bottom-1 left-1 font-mono text-[8px] small-caps text-paper mix-blend-difference">
                              {c.hex.replace("#", "")}
                            </span>
                          </div>
                        ))}
                      </div>
                      <ul className="mt-3 space-y-1">
                        {brand.palette.map((c, i) => (
                          <li
                            key={i}
                            className="flex items-baseline justify-between gap-2 font-mono text-[10px] small-caps text-ink-mute border-b border-ink/20 pb-1"
                          >
                            <span className="text-ink">{c.name}</span>
                            <span>{c.hex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Type */}
                  <div className="mb-6 border-t border-ink/30 pt-5">
                    <p className="font-mono text-[10px] small-caps text-[hsl(var(--accent-burnt))] mb-2">
                      No. 03 · Type
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-mono text-[10px] small-caps text-ink-mute mb-1">
                          Display · {brand.type_pairing.display}
                        </p>
                        <p
                          className="text-3xl leading-tight"
                          style={{ fontFamily: brand.type_pairing.display }}
                        >
                          Aa Bb Cc
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] small-caps text-ink-mute mb-1">
                          Body · {brand.type_pairing.body}
                        </p>
                        <p
                          className="text-base leading-snug"
                          style={{ fontFamily: brand.type_pairing.body }}
                        >
                          The quick brown fox jumps over the lazy dog.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Voice */}
                  <div className="mb-6 border-t border-ink/30 pt-5">
                    <p className="font-mono text-[10px] small-caps text-[hsl(var(--accent-burnt))] mb-2">
                      No. 04 · Voice
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {brand.voice.map((v, i) => (
                        <span
                          key={i}
                          className="font-mono text-[11px] small-caps px-3 py-1.5 border border-ink"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                    <blockquote className="flex gap-3 border-l-2 border-[hsl(var(--accent-burnt))] pl-4">
                      <Quote className="size-4 text-[hsl(var(--accent-burnt))] shrink-0 mt-1" />
                      <p className="font-display italic text-lg text-ink-soft leading-relaxed">
                        {brand.manifesto}
                      </p>
                    </blockquote>
                  </div>

                  {/* Hero product */}
                  <div className="border-t border-ink/30 pt-5 flex items-baseline justify-between gap-4 flex-wrap">
                    <div>
                      <p className="font-mono text-[10px] small-caps text-[hsl(var(--accent-burnt))] mb-1">
                        No. 05 · Hero Product
                      </p>
                      <p className="font-display text-xl">{brand.product_idea}</p>
                    </div>
                    <button
                      onClick={generate}
                      className="inline-flex items-center gap-2 font-mono text-[11px] small-caps px-4 py-2 border border-ink hover:bg-paper-deep transition-colors"
                    >
                      Regenerate <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <p className="font-mono text-[10px] small-caps text-ink-mute mt-3">
              Each plate is generated live · Outputs are illustrative, not for production
            </p>
          </div>
        </div>
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
          <Link
            to="/work"
            className="font-mono text-[11px] small-caps hover:text-[hsl(var(--accent-burnt))] transition-colors"
          >
            See Figma Studio →
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Studio;
