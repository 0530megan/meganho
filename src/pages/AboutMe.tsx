import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Coffee, Music, Sparkles, Heart, Camera, Palette } from "lucide-react";
import meganPortrait from "@/assets/megan-portrait.jpg";

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

      {/* Polaroid scrapbook */}
      <section className="bg-paper-deep border-y border-ink/20 overflow-hidden">
        <div className="container py-16 md:py-24">
          <div className="border-t-4 border-ink pt-4 mb-12 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono font-bold text-[11px] small-caps text-accent-red mb-2">A peek</p>
              <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight leading-none">
                The scrapbook
              </h2>
            </div>
            <span className="font-mono text-xs small-caps text-ink-mute">Photos · Bits · Pieces</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Studio days", caption: "Workspace · I", tilt: "rotate-[-5deg]", tape: "left", bg: "hsl(28 60% 88%)" },
              { label: "Coffee #2", caption: "Fuel · II", tilt: "rotate-[3deg]", tape: "right", bg: "hsl(18 78% 80%)" },
              { label: "Out & about", caption: "Melbourne · III", tilt: "rotate-[-2deg]", tape: "left", bg: "hsl(350 60% 88%)" },
              { label: "Sketchbook", caption: "Process · IV", tilt: "rotate-[4deg]", tape: "right", bg: "hsl(45 50% 85%)" },
            ].map((p, i) => (
              <figure key={i} className={`relative ${p.tilt} hover:rotate-0 transition-transform duration-500`}>
                <span
                  aria-hidden
                  className={`absolute -top-3 ${p.tape === "left" ? "left-4 rotate-[-6deg]" : "right-4 rotate-[6deg]"} h-5 w-14 border border-ink/30 opacity-80 z-10`}
                  style={{ background: i % 2 === 0 ? "hsl(var(--accent-ochre) / 0.6)" : "hsl(var(--accent-red) / 0.5)" }}
                />
                <div className="border border-ink bg-paper p-2 shadow-[6px_8px_0_0_hsl(var(--ink))]">
                  <div className="aspect-square w-full flex items-center justify-center text-center" style={{ background: p.bg }}>
                    <div className="px-3">
                      <Camera className="size-8 mx-auto mb-2 text-ink/60" />
                      <p className="font-display italic text-base text-ink-soft">{p.label}</p>
                      <p className="font-mono text-[9px] small-caps text-ink-mute mt-1">photo slot</p>
                    </div>
                  </div>
                  <figcaption className="pt-2 mt-1 border-t border-ink/30 flex items-baseline justify-between gap-2">
                    <p className="font-display italic text-xs">{p.label}</p>
                    <p className="font-mono text-[9px] small-caps text-ink-mute">{p.caption}</p>
                  </figcaption>
                </div>
              </figure>
            ))}
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
