import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Sparkles, Heart, Palette } from "lucide-react";
import { AdjustableImage } from "@/components/AdjustableImage";
import meganPortrait from "@/assets/megan-portrait-about.jpg";
import picSunset from "@/assets/about/sunset.jpg";
import picSandwich from "@/assets/about/sandwich.jpg";
import picForest from "@/assets/about/forest.jpg";
import picDog from "@/assets/about/dog.jpg";
import picStreet from "@/assets/about/street.jpg";
import picReading from "@/assets/about/reading.jpg";
import picOutfit from "@/assets/about/outfit.jpg";
import picFeast from "@/assets/about/feast.jpg";
import picWindow from "@/assets/about/window.jpg";

import picLatte from "@/assets/about/latte.jpg";
import picBay from "@/assets/about/bay.jpg";
import picFlowers from "@/assets/about/flowers.jpg";
import picColoring from "@/assets/about/coloring.jpg";

const PERSONALITIES = [
  { src: picSunset, trait: "Sentimental", note: "For the sky, always.", tag: "01 · dusk", tilt: "rotate-[-3deg]", span: "md:col-span-5 md:row-span-2", tape: "left", accent: "burnt", pos: "center 65%" },
  { src: picSandwich, trait: "Greedy (in a good way)", note: "Built around one perfect bite.", tag: "02 · appetite", tilt: "rotate-[2deg]", span: "md:col-span-4", tape: "right", accent: "red" },
  { src: picReading, trait: "Slow living", note: "Pages, air, offline.", tag: "03 · stillness", tilt: "rotate-[-2deg]", span: "md:col-span-3 md:row-span-2", tape: "left", accent: "ochre" },
  { src: picDog, trait: "Soft for animals", note: "Stops for every dog.", tag: "04 · warmth", tilt: "rotate-[3deg]", span: "md:col-span-4", tape: "right", accent: "burnt" },
  { src: picLatte, trait: "Foam Art?", note: "Yes, rosetta.", tag: "05 · craft", tilt: "rotate-[-2deg]", span: "md:col-span-4", tape: "left", accent: "red" },
  { src: picForest, trait: "Outdoorsy daydreamer", note: "Light through gum trees.", tag: "06 · wander", tilt: "rotate-[-4deg]", span: "md:col-span-5", tape: "left", accent: "ochre" },
  { src: picStreet, trait: "Always coffee", note: "Iced long black, wandering.", tag: "07 · routine", tilt: "rotate-[2deg]", span: "md:col-span-4", tape: "right", accent: "red" },
  { src: picOutfit, trait: "Quiet vanity", note: "Dressed like it matters.", tag: "08 · style", tilt: "rotate-[-2deg]", span: "md:col-span-3", tape: "left", accent: "burnt" },
  { src: picBay, trait: "Sea-staring type", note: "Water, then reset.", tag: "09 · calm", tilt: "rotate-[3deg]", span: "md:col-span-5", tape: "right", accent: "ochre" },
  { src: picFeast, trait: "Good host", note: "Slow dinners, good wine.", tag: "10 · gather", tilt: "rotate-[3deg]", span: "md:col-span-4", tape: "right", accent: "ochre" },
  { src: picFlowers, trait: "Keeper", note: "Flowers, kept forever.", tag: "11 · soft", tilt: "rotate-[-3deg]", span: "md:col-span-3", tape: "left", accent: "burnt" },
  
  { src: picColoring, trait: "Hands-on creative", note: "Colour finds its way.", tag: "12 · play", tilt: "rotate-[-2deg]", span: "md:col-span-4", tape: "right", accent: "ochre" },
  { src: picWindow, trait: "Homebody", note: "Stays in, stays soft.", tag: "13 · quiet", tilt: "rotate-[2deg]", span: "md:col-span-5", tape: "right", accent: "burnt" },
];

const TODAY = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const FAVOURITES = [
  { label: "Coffee order", value: "Oat flat white, extra hot" },
  { label: "Listening to", value: "Clairo, Mk.gee, Ravyn Lenae" },
  { label: "Reading", value: "Anything by Joan Didion" },
  { label: "Watching", value: "Studio Ghibli on repeat" },
  { label: "Designing in", value: "Figma, always Figma" },
  { label: "Recharging at", value: "A noisy ramen bar" },
];

const VALUES = [
  {
    icon: Sparkles,
    title: "Curious by default",
    body: "I chase the weird, half-formed ideas first — that's usually where the good ones live.",
  },
  {
    icon: Heart,
    title: "Care is the craft",
    body: "Tiny details people barely notice are the ones that make a brand feel alive.",
  },
  {
    icon: Palette,
    title: "Play, then polish",
    body: "I sketch like a kid, then sharpen like an editor. Both moods are non-negotiable.",
  },
];

const TIMELINE = [
  { year: "Now", title: "Building brands that feel like characters", place: "Melbourne" },
  { year: "2025", title: "Concept brand sprints — Veramente, Sippy, Meg's Creami", place: "Studio" },
  { year: "2024", title: "Marketing × design, fused", place: "Freelance" },
  { year: "2023", title: "Started chasing the messy middle", place: "Began" },
];

const AboutMe = () => {
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
          <p className="font-mono text-[11px] small-caps text-ink-mute hidden md:block">
            {TODAY}
          </p>
          <Link
            to="/#contact"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-1 hover:text-[hsl(var(--accent-burnt))] transition-colors"
          >
            Say hi <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div
          aria-hidden
          className="absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(60% 70% at 18% 28%, hsl(var(--accent-burnt) / 0.18) 0%, transparent 60%), radial-gradient(50% 60% at 82% 72%, hsl(var(--accent-red) / 0.14) 0%, transparent 65%)",
          }}
        />
        <div className="container py-16 md:py-24 relative grid grid-cols-12 gap-x-6 gap-y-10 items-center">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono font-bold text-[11px] small-caps text-accent-red mb-4">
              A short autobiography
            </p>
            <h1 className="font-display font-light leading-[0.88] tracking-tight text-[clamp(3rem,9vw,8rem)]">
              Hi, I&rsquo;m
              <span className="italic" style={{ color: "hsl(var(--accent-burnt))" }}>
                {" "}
                Megan.
              </span>
            </h1>
            <p className="font-display text-xl md:text-2xl text-ink-soft mt-6 max-w-2xl leading-relaxed">
              A curious mind learning at the crossroads of marketing and design,
              quietly building things with care, taste, and a little bit of mischief.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <figure className="relative max-w-sm md:ml-auto">
              <div className="border border-ink bg-paper p-2 shadow-[12px_14px_0_0_hsl(var(--accent-burnt))] -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={meganPortrait} alt="Megan Ho" className="w-full h-auto block" loading="eager" />
                <figcaption className="pt-2 mt-1 border-t border-ink/30 flex items-baseline justify-between gap-3">
                  
                  <p className="font-mono text-[10px] small-caps text-ink-mute">Polaroid · I</p>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="relative overflow-hidden border-y-2 border-ink bg-[hsl(var(--accent-burnt))] text-paper">
        <div className="marquee flex whitespace-nowrap py-2.5 font-mono text-[12px] small-caps font-bold">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-6 pr-6">
              {["Designer ✺ Marketer ✺ Snack enthusiast", "✿", "Currently in Melbourne", "✿", "Open to fun briefs", "✿", "Probably drinking coffee", "✿", "Loves a good colour palette", "✿"].map((t, j) => (
                <span key={j} className="px-2">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Personalities — pick a layout */}
      <PersonalitiesSection />

      {/* Values */}
      <section className="bg-paper-deep border-y border-ink/20">
        <div className="container py-16 md:py-24">
          <div className="border-t-4 border-ink pt-4 mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono font-bold text-[11px] small-caps text-accent-red mb-2">Chapter 02</p>
              <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight leading-none">
                What I believe
              </h2>
            </div>
            <span className="font-mono text-xs small-caps text-ink-mute">Three principles</span>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-ink/30 border border-ink/30">
            {VALUES.map((v, i) => (
              <article key={i} className="bg-paper-deep p-8 md:p-10">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-xs small-caps text-accent-red">
                    No. 0{i + 1}
                  </span>
                  <v.icon className="size-4 text-ink-mute" />
                </div>
                <h3 className="font-display text-3xl leading-tight mb-4">{v.title}</h3>
                <p className="font-display text-lg italic text-ink-soft leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Currently into */}
      <section className="container py-16 md:py-24">
        <div className="border-t-4 border-ink pt-4 mb-10 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-mono font-bold text-[11px] small-caps text-accent-red mb-2">Chapter 03</p>
            <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight leading-none">
              Currently into
            </h2>
          </div>
          <span className="font-mono text-xs small-caps text-ink-mute">Updated often</span>
        </div>
        <dl className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {FAVOURITES.map((f) => (
            <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-ink/20 pb-3">
              <dt className="font-mono text-[11px] small-caps text-ink-mute shrink-0">{f.label}</dt>
              <dd className="font-display italic text-lg text-right">{f.value}</dd>
            </div>
          ))}
        </dl>

        {/* Personal palette */}
        <div className="mt-16">
          <p className="font-mono font-bold text-[11px] small-caps text-accent-red mb-3">My personal palette</p>
          <div className="grid grid-cols-7 border border-ink">
            {[
              { hex: "#1C1B1A", name: "Black", light: false },
              { hex: "#F4F3EE", name: "White", light: true },
              { hex: "#C9A98A", name: "Nude brown", light: true },
              { hex: "#1E2A4A", name: "Navy blue", light: false },
              { hex: "#C56B3E", name: "Burnt orange", light: false },
              { hex: "#C8202A", name: "Feisty red", light: false },
              { hex: "#F5E1A4", name: "Butter yellow", light: true },
            ].map((c, i, arr) => (
              <div key={c.hex} className={`aspect-square flex flex-col justify-end p-3 ${i < arr.length - 1 ? "border-r border-ink" : ""}`} style={{ background: c.hex }}>
                <p className="font-mono text-[10px] small-caps font-bold" style={{ color: c.light ? "#1C1B1A" : "#F4F3EE" }}>{c.name}</p>
                <p className="font-mono text-[9px]" style={{ color: c.light ? "#1C1B1A" : "#F4F3EE" }}>{c.hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact CTA */}
      <section className="container py-20 md:py-28 text-center">
        <p className="font-mono font-bold text-[11px] small-caps text-accent-red mb-6">P.S.</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
          If any of this sounds like
          <span className="italic" style={{ color: "hsl(var(--accent-burnt))" }}> your kind of person</span>
          , let&rsquo;s talk.
        </h2>
        <Link
          to="/#contact"
          className="inline-flex items-center gap-2 mt-10 bg-ink text-paper font-mono text-xs small-caps px-6 py-3 hover:bg-[hsl(var(--accent-burnt))] transition-colors"
        >
          Send me a note <ArrowUpRight className="size-4" />
        </Link>
      </section>
    </div>
  );
};

export default AboutMe;

/* ============================================================
   PERSONALITIES — Card stack
   ============================================================ */

const PersonalitiesSection = () => {
  return (
    <section
      className="border-y-2 border-ink overflow-hidden relative"
      style={{ background: "hsl(8 65% 48%)" }}
    >
      <div className="container relative pt-16 md:pt-20 pb-4">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
          <div>
            <p className="font-mono text-[11px] small-caps text-ink-soft mb-2">Issue №02 · The Personality Index</p>
            <h2 className="font-display font-light text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] tracking-tight">
              who<span className="italic" style={{ color: "hsl(46 85% 78%)" }}> am </span>i,
              <br />really?
            </h2>
          </div>
          <p className="font-mono text-[11px] small-caps text-ink-soft">{PERSONALITIES.length} entries · tap a card</p>
        </div>
      </div>

      <LayoutStack />
    </section>
  );
};

/* ---------- CARD STACK ---------- */
const LayoutStack = () => {
  const [order, setOrder] = useState(() => PERSONALITIES.map((_, i) => i));
  const next = () => setOrder((o) => [...o.slice(1), o[0]]);
  const prev = () => setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
  const top = order[0];
  const p = PERSONALITIES[top];
  const cream = "hsl(46 60% 92%)";
  const ochre = "hsl(46 85% 72%)";

  return (
    <div className="container py-12 md:py-20 grid grid-cols-12 gap-10 items-center">
      <div className="col-span-12 md:col-span-7 relative h-[460px] md:h-[560px]">
        {order.slice(0, 4).map((idx, stackPos) => {
          const item = PERSONALITIES[idx];
          const isTop = stackPos === 0;
          return (
            <button
              key={idx}
              onClick={isTop ? next : undefined}
              className="absolute inset-0 transition-all duration-500 ease-out"
              style={{
                transform: `translate(${stackPos * 14}px, ${stackPos * 12}px) rotate(${(stackPos % 2 === 0 ? -1 : 1) * stackPos * 1.5}deg)`,
                zIndex: 10 - stackPos,
                opacity: stackPos === 3 ? 0.3 : 1 - stackPos * 0.12,
                pointerEvents: isTop ? "auto" : "none",
              }}
            >
              <div
                className="h-full w-full border border-ink p-3"
                style={{ background: cream, boxShadow: `10px 12px 0 0 ${ochre}` }}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <img src={item.src} alt={item.trait} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: (item as any).pos ?? "center" }} />
                  <span className="absolute top-3 left-3 font-mono text-[10px] small-caps border border-ink px-2 py-1" style={{ background: cream }}>{item.tag}</span>
                  {isTop && (
                    <span className="absolute bottom-3 right-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1">tap for next →</span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="col-span-12 md:col-span-5">
        <p className="font-mono text-[11px] small-caps text-ink-soft mb-3">Card {String(top+1).padStart(2,"0")} of {String(PERSONALITIES.length).padStart(2,"0")}</p>
        <h3 key={top} className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight animate-fade-in" style={{ color: ochre }}>
          {p.trait}.
        </h3>
        <p className="font-display italic text-xl text-ink-soft leading-relaxed mt-5">"{p.note}"</p>
        <div className="mt-8 flex gap-2">
          <button onClick={prev} className="font-mono text-[11px] small-caps border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors">← prev</button>
          <button onClick={next} className="font-mono text-[11px] small-caps border border-ink bg-ink text-paper px-4 py-2 transition-colors" style={{}}>next card →</button>
        </div>
      </div>
    </div>
  );
};

