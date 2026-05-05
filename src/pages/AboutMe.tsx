import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Sparkles, Heart, Palette } from "lucide-react";
import meganPortrait from "@/assets/megan-portrait.jpg";
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

const PERSONALITIES = [
  {
    src: picSunset,
    trait: "Romantic",
    note: "Chasing pink skies & golden hours.",
    masthead: "DUSK",
    tagline: "the magazine for incurable romantics",
    coverLines: ["The 6pm sky issue", "Why we still chase sunsets", "Field notes from a window seat", "Pink, peach, persimmon: a study"],
    accent: "burnt",
    align: "left",
    price: "AU $7.50",
  },
  {
    src: picSandwich,
    trait: "Greedy (in the best way)",
    note: "Will plan a whole day around one sandwich.",
    masthead: "APPETITE",
    tagline: "a quarterly for the deeply hungry",
    coverLines: ["The sandwich that ruined me", "12 hours, 4 cities, 9 snacks", "On planning a day around lunch", "Crumbs: a love letter"],
    accent: "red",
    align: "right",
    price: "AU $9.00",
  },
  {
    src: picReading,
    trait: "Slow living",
    note: "Books, breeze, no notifications.",
    masthead: "STILLNESS",
    tagline: "for the quietly obsessed",
    coverLines: ["The pleasure of doing nothing", "A case for paper books", "How to read in public", "On airplane mode as lifestyle"],
    accent: "ochre",
    align: "left",
    price: "AU $6.00",
  },
  {
    src: picDog,
    trait: "Soft for animals",
    note: "Every dog is my new best friend.",
    masthead: "WARMTH",
    tagline: "issued whenever a dog says hi",
    coverLines: ["Every good dog: an index", "On falling in love at the park", "Strangers' pets I have known", "The ethics of asking to pet"],
    accent: "burnt",
    align: "right",
    price: "AU $5.00",
  },
  {
    src: picLatte,
    trait: "Latte art apprentice",
    note: "One day the rosetta will be perfect.",
    masthead: "CRAFT",
    tagline: "for the perpetually practising",
    coverLines: ["The rosetta diaries", "200 pours later", "Milk, micro-foam, mood", "Why we keep trying"],
    accent: "red",
    align: "left",
    price: "AU $8.00",
  },
  {
    src: picForest,
    trait: "Outdoorsy daydreamer",
    note: "Sunlight through gum trees, always.",
    masthead: "WANDER",
    tagline: "trails, treetops & taking the long way",
    coverLines: ["The gum tree issue", "12 walks worth waking up for", "On getting lost on purpose", "Pocket guide: forest light"],
    accent: "ochre",
    align: "right",
    price: "AU $10.00",
  },
  {
    src: picStreet,
    trait: "Iced coffee girlie",
    note: "Sydney terraces, oat latte, no agenda.",
    masthead: "ROUTINE",
    tagline: "small loops we secretly love",
    coverLines: ["Same café, every Sunday", "Oat milk: a manifesto", "On loving a neighbourhood", "Why iced wins, even in winter"],
    accent: "red",
    align: "left",
    price: "AU $6.50",
  },
  {
    src: picOutfit,
    trait: "Quiet vanity",
    note: "An outfit is half the personality.",
    masthead: "STYLE",
    tagline: "a mirror, monthly",
    coverLines: ["Dressing for no one in particular", "The case for one good coat", "An outfit is a sentence", "Mirror selfies, reconsidered"],
    accent: "burnt",
    align: "right",
    price: "AU $12.00",
  },
  {
    src: picBay,
    trait: "Sea-staring type",
    note: "Big water, small thoughts.",
    masthead: "CALM",
    tagline: "for the chronically overstimulated",
    coverLines: ["The reset issue", "On staring at water", "Tide tables for the soul", "How to be small, on purpose"],
    accent: "ochre",
    align: "left",
    price: "AU $7.00",
  },
  {
    src: picFeast,
    trait: "Hosts a mean dinner",
    note: "Slow-cooked lamb, red wine, low light.",
    masthead: "GATHER",
    tagline: "tables, candles, second helpings",
    coverLines: ["The dinner party revival", "8 hours, one lamb shoulder", "On low light & loud laughs", "Wine pairings I made up"],
    accent: "ochre",
    align: "right",
    price: "AU $11.00",
  },
  {
    src: picFlowers,
    trait: "Sentimental",
    note: "Keeps every flower, even the felt ones.",
    masthead: "SOFT",
    tagline: "a journal of small attachments",
    coverLines: ["The felt flower archive", "Why we keep things", "Birthday cards: a taxonomy", "On crying at adverts"],
    accent: "burnt",
    align: "left",
    price: "AU $5.50",
  },
  {
    src: picWindow,
    trait: "Homebody",
    note: "Some days the window is enough.",
    masthead: "QUIET",
    tagline: "for the happily indoors",
    coverLines: ["The window seat issue", "How to stay in well", "On candles as company", "Sunday: a defence"],
    accent: "burnt",
    align: "right",
    price: "AU $6.00",
  },
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
              A designer-marketer who treats brands like characters — give them a voice,
              a wardrobe, a few quirks, and watch people fall a little in love.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] small-caps">
              <span className="border border-ink px-3 py-1.5">Melbourne · AU</span>
              <span className="border border-ink/40 px-3 py-1.5">She / Her</span>
              <span className="border border-ink/40 px-3 py-1.5">Open to projects</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <figure className="relative max-w-sm md:ml-auto">
              <div className="border border-ink bg-paper p-2 shadow-[12px_14px_0_0_hsl(var(--accent-burnt))] -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={meganPortrait} alt="Megan Ho" className="w-full h-auto block" loading="eager" />
                <figcaption className="pt-2 mt-1 border-t border-ink/30 flex items-baseline justify-between gap-3">
                  <p className="font-display italic text-sm">Yours truly</p>
                  <p className="font-mono text-[10px] small-caps text-ink-mute">Polaroid · I</p>
                </figcaption>
              </div>
              <span
                className="absolute -top-3 -right-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1 rotate-[6deg]"
              >
                Hello you ✿
              </span>
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

      {/* The long story */}
      <section className="container py-16 md:py-24 grid grid-cols-12 gap-x-6 gap-y-10 relative">
        <svg aria-hidden className="absolute top-8 right-6 w-32 h-16 text-[hsl(var(--accent-red))] opacity-70 hidden md:block" viewBox="0 0 120 60" fill="none">
          <path d="M4 30 Q 20 4, 36 30 T 68 30 T 100 30 T 132 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
        <aside className="col-span-12 md:col-span-3">
          <p className="font-mono font-bold text-[11px] small-caps text-accent-red mb-2">Chapter 01</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-none">
            The long story, kept short.
          </h2>
          <span className="inline-block mt-6 font-mono text-[10px] small-caps font-bold bg-ink text-paper px-3 py-1.5 rotate-[-4deg]">
            ★ Behind the scenes
          </span>
        </aside>
        <div className="col-span-12 md:col-span-9 md:columns-2 md:gap-8">
          <p className="font-display text-lg md:text-xl text-ink-soft leading-relaxed mb-4 drop-cap">
            I grew up in love with the bits of brands most people scroll past — the
            tiny print on a perfume bottle, the way a coffee shop folds its napkins,
            the colour of a takeaway bag. They&rsquo;re never accidents.
          </p>
          <p className="font-display text-lg md:text-xl text-ink-soft leading-relaxed mb-4">
            That obsession turned into a career somewhere between marketing and
            design. I sit happily in the middle: building the strategy <em>and</em>
            the swatches, the headline <em>and</em> the hand-drawn arrow next to it.
          </p>
          <p className="font-display text-lg md:text-xl text-ink-soft leading-relaxed mb-4">
            Outside of work I&rsquo;m collecting playlists, half-finished sketchbooks,
            and the cheapest available plane tickets. I think the best ideas come
            from being a little bit nosy and a little bit well-rested.
          </p>
        </div>
      </section>

      {/* Personalities — editorial zine */}
      <section className="bg-paper-deep border-y-2 border-ink overflow-hidden relative">
        <div
          aria-hidden
          className="absolute inset-0 -z-0 opacity-70"
          style={{
            background:
              "radial-gradient(45% 55% at 8% 12%, hsl(var(--accent-burnt) / 0.22) 0%, transparent 60%), radial-gradient(45% 55% at 92% 88%, hsl(var(--accent-red) / 0.16) 0%, transparent 65%)",
          }}
        />

        {/* Issue header */}
        <div className="container relative pt-16 md:pt-24 pb-10">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <p className="font-mono text-[11px] small-caps text-ink-mute">Issue №02 · The Personality Index</p>
            <p className="font-mono text-[11px] small-caps text-ink-mute">{PERSONALITIES.length} entries · scroll on</p>
          </div>
          <h2 className="font-display font-light text-[clamp(3rem,11vw,10rem)] leading-[0.82] tracking-tight">
            who
            <span className="italic" style={{ color: "hsl(var(--accent-burnt))" }}> am </span>
            i,
            <br />
            really?
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] small-caps">
            <span className="bg-ink text-paper px-3 py-1.5">A field guide</span>
            <span className="border border-ink px-3 py-1.5">Photographs ✺ confessions</span>
            <span className="border border-ink/40 px-3 py-1.5 italic font-display normal-case text-sm">turn the page →</span>
          </div>
        </div>

        {/* Marquee divider */}
        <div className="relative overflow-hidden border-y-2 border-ink bg-ink text-paper">
          <div className="marquee flex whitespace-nowrap py-2 font-mono text-[12px] small-caps font-bold">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-6 pr-6">
                {PERSONALITIES.map((p, j) => (
                  <span key={j} className="px-2 flex items-center gap-6">
                    <span className="text-[hsl(var(--accent-ochre))]">✺</span>
                    {p.trait}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* The spreads */}
        <div className="container relative py-16 md:py-20 space-y-24 md:space-y-32">
          {PERSONALITIES.map((p, i) => {
            const accentVar =
              p.accent === "red" ? "--accent-red" : p.accent === "ochre" ? "--accent-ochre" : "--accent-burnt";
            const isOdd = i % 2 === 1;
            const num = String(i + 1).padStart(2, "0");

            return (
              <article
                key={i}
                className={`relative grid grid-cols-12 gap-x-6 gap-y-6 items-center ${
                  isOdd ? "md:[&>figure]:order-2" : ""
                }`}
              >
                {/* Photo */}
                <figure
                  className={`group relative col-span-12 md:col-span-7 ${p.tilt} hover:rotate-0 transition-transform duration-700`}
                >
                  <span
                    aria-hidden
                    className={`absolute -top-3 ${
                      p.tape === "left" ? "left-8 -rotate-6" : "right-8 rotate-6"
                    } h-6 w-20 border border-ink/20 z-20 shadow-sm`}
                    style={{ background: `hsl(var(${accentVar}) / 0.6)` }}
                  />
                  <div
                    className="relative border border-ink bg-paper p-3 transition-all duration-500 group-hover:shadow-[14px_16px_0_0_hsl(var(--ink))]"
                    style={{ boxShadow: `8px 10px 0 0 hsl(var(${accentVar}))` }}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
                      <img
                        src={p.src}
                        alt={p.trait}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                      />
                      {/* Floating trait sticker */}
                      <span
                        className="absolute top-4 left-4 bg-paper border border-ink px-3 py-1 font-mono text-[10px] small-caps font-bold shadow-[3px_3px_0_0_hsl(var(--ink))] -rotate-2"
                      >
                        {p.tag}
                      </span>
                    </div>
                    <figcaption className="pt-3 mt-1 border-t border-ink/30 flex items-baseline justify-between gap-3">
                      <p className="font-display italic text-sm">"{p.note}"</p>
                      <p className="font-mono text-[10px] small-caps text-ink-mute shrink-0">Plate {num}</p>
                    </figcaption>
                  </div>
                </figure>

                {/* Text spread */}
                <div className={`col-span-12 md:col-span-5 ${isOdd ? "md:pr-8" : "md:pl-8"} relative`}>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      className="font-display font-light text-[clamp(5rem,12vw,9rem)] leading-none italic"
                      style={{ color: `hsl(var(${accentVar}))` }}
                    >
                      {num}
                    </span>
                    <div className="flex-1 h-px bg-ink/30 mb-4" />
                    <span className="font-mono text-[10px] small-caps text-ink-mute mb-4">trait</span>
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight mb-5">
                    {p.trait}.
                  </h3>
                  <p className="font-display italic text-xl text-ink-soft leading-relaxed mb-6">
                    {p.note}
                  </p>
                  <div className="flex items-center gap-3 font-mono text-[10px] small-caps">
                    <span
                      className="inline-block size-2.5 rounded-full border border-ink"
                      style={{ background: `hsl(var(${accentVar}))` }}
                    />
                    <span className="text-ink-mute">filed under · {p.accent}</span>
                    <span className="text-ink-mute">·</span>
                    <span className="text-ink-mute">{p.tag}</span>
                  </div>

                  {/* Decorative squiggle every few entries */}
                  {i % 3 === 2 && (
                    <svg aria-hidden className="mt-8 w-32 h-8 text-[hsl(var(--accent-red))]" viewBox="0 0 120 30" fill="none">
                      <path d="M2 15 Q 15 2, 28 15 T 54 15 T 80 15 T 106 15 T 132 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>

                {/* Hairline number watermark */}
                <span
                  aria-hidden
                  className="hidden md:block absolute -top-10 right-0 font-mono text-[10px] small-caps text-ink-mute tracking-widest"
                >
                  Entry {num} / {String(PERSONALITIES.length).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>

        {/* Closing stamp */}
        <div className="container relative pb-20 md:pb-28 text-center">
          <div className="inline-flex items-center gap-3 border-2 border-ink px-6 py-3 -rotate-2 bg-paper">
            <span className="font-mono text-[11px] small-caps font-bold">End of index</span>
            <span className="text-[hsl(var(--accent-red))]">✺</span>
            <span className="font-display italic">that&rsquo;s me, more or less</span>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-5 border border-ink">
            {[
              { hex: "#F4F3EE", name: "Paper" },
              { hex: "#C56B3E", name: "Burnt" },
              { hex: "#B33A1F", name: "Vermilion" },
              { hex: "#C49A4A", name: "Ochre" },
              { hex: "#1C1B1A", name: "Ink" },
            ].map((c, i) => (
              <div key={c.hex} className={`aspect-square flex flex-col justify-end p-3 ${i < 4 ? "border-r border-ink" : ""}`} style={{ background: c.hex }}>
                <p className="font-mono text-[10px] small-caps font-bold" style={{ color: i === 0 || i === 3 ? "#1C1B1A" : "#F4F3EE" }}>{c.name}</p>
                <p className="font-mono text-[9px]" style={{ color: i === 0 || i === 3 ? "#1C1B1A" : "#F4F3EE" }}>{c.hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper-deep border-y border-ink/20">
        <div className="container py-16 md:py-24">
          <div className="border-t-4 border-ink pt-4 mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono font-bold text-[11px] small-caps text-accent-red mb-2">Chapter 04</p>
              <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight leading-none">
                The shortest timeline
              </h2>
            </div>
            <span className="font-mono text-xs small-caps text-ink-mute">In reverse</span>
          </div>
          <ol className="relative border-l-2 border-ink ml-2">
            {TIMELINE.map((t, i) => (
              <li key={i} className="pl-6 pb-8 last:pb-0 relative">
                <span
                  aria-hidden
                  className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-[hsl(var(--accent-burnt))] border border-ink"
                />
                <p className="font-mono text-[11px] small-caps text-accent-red mb-1">{t.year} · {t.place}</p>
                <p className="font-display text-2xl md:text-3xl leading-snug">{t.title}</p>
              </li>
            ))}
          </ol>
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
