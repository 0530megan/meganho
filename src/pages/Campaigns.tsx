import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Megaphone, Sparkles, Zap, Target, Palette, Rocket } from "lucide-react";

const TODAY = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const campaigns = [
  {
    no: "01",
    kind: "Campaign",
    title: "Loud & Clear",
    blurb: "Launch campaigns built to interrupt the scroll and stick in the memory.",
    tags: ["Concept", "Art Direction", "Rollout"],
    tint: "hsl(var(--accent-burnt))",
    tilt: "-rotate-2",
  },
  {
    no: "02",
    kind: "Rebrand",
    title: "From Whisper to Wow",
    blurb: "Full identity overhauls — logo, voice, world. The kind that gets re-pinned.",
    tags: ["Identity", "Strategy", "Worldbuilding"],
    tint: "hsl(var(--accent-red))",
    tilt: "rotate-1",
  },
  {
    no: "03",
    kind: "Refresh",
    title: "Same Soul, Sharper Suit",
    blurb: "Modernise without losing the magic. A glow-up for brands with history.",
    tags: ["Refinement", "System", "Polish"],
    tint: "hsl(var(--accent-ochre))",
    tilt: "-rotate-1",
  },
];

const services = [
  { icon: Megaphone, label: "Campaign Strategy" },
  { icon: Palette, label: "Visual Identity" },
  { icon: Target, label: "Positioning" },
  { icon: Sparkles, label: "Brand Worlds" },
  { icon: Rocket, label: "Go-To-Market" },
  { icon: Zap, label: "Activation" },
];

const Campaigns = () => {
  return (
    <div className="paper-grain min-h-screen text-ink overflow-hidden">
      {/* Top bar */}
      <div className="border-b border-ink/30">
        <div className="container flex items-center justify-between py-2 text-[11px] small-caps text-ink-soft font-mono">
          <Link to="/" className="inline-flex items-center gap-1.5 hover:text-accent-red transition-colors">
            <ArrowLeft className="size-3" /> Back to Edition
          </Link>
          <span className="hidden sm:inline">{TODAY}</span>
          <span>Campaigns · Vol. I</span>
        </div>
      </div>

      {/* HERO — bold, slightly chaotic, full-bleed */}
      <header className="relative border-b-2 border-ink overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 30%, hsl(var(--accent-burnt) / 0.22) 0%, transparent 60%), radial-gradient(50% 60% at 85% 80%, hsl(var(--accent-red) / 0.20) 0%, transparent 65%)",
          }}
        />

        {/* Floating stamps */}
        <span
          aria-hidden
          className="hidden md:block absolute top-16 right-16 font-mono text-[11px] small-caps bg-ink text-paper px-3 py-1.5 rotate-[8deg] z-10"
        >
          Brand · Loud
        </span>
        <span
          aria-hidden
          className="hidden md:flex absolute bottom-20 left-10 size-24 rounded-full border-2 border-ink/70 items-center justify-center text-center font-mono text-[10px] small-caps leading-tight rotate-[-14deg] bg-paper/80 backdrop-blur-sm z-10"
        >
          New<br/>Edition<br/>2026
        </span>

        <div className="container relative pt-12 md:pt-20 pb-16 md:pb-28">
          <p className="font-mono font-bold text-xs small-caps text-accent-red mb-6 tracking-[0.25em]">
            ✦ Section IV — The Loud Pages ✦
          </p>
          <h1
            className="font-display leading-[0.82] tracking-[-0.035em] text-[clamp(3.25rem,13vw,11rem)] uppercase"
            style={{ fontWeight: 500 }}
          >
            <span className="block text-ink">Brand</span>
            <span
              className="block italic pl-[8vw]"
              style={{ color: "hsl(var(--accent-burnt))" }}
            >
              campaigns
            </span>
            <span className="block text-ink">&amp; rebrands.</span>
          </h1>

          <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 items-end">
            <p className="col-span-12 md:col-span-7 font-display italic text-xl md:text-3xl leading-snug text-ink-soft">
              The work that turns brands into <span className="not-italic font-medium" style={{ color: "hsl(var(--accent-burnt))" }}>conversations</span> — campaigns that make people stop, look, and tell a friend.
            </p>
            <div className="col-span-12 md:col-span-5 flex md:justify-end">
              <Link
                to="/#contact"
                className="group inline-flex items-center gap-3 font-mono text-sm small-caps text-paper bg-[hsl(var(--accent-burnt))] px-7 py-4 hover:opacity-90 transition-opacity shadow-[6px_8px_0_0_hsl(var(--ink))] hover:shadow-[8px_10px_0_0_hsl(var(--ink))]"
              >
                Start a project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-t border-ink bg-ink text-paper">
          <div className="marquee flex whitespace-nowrap py-2.5 font-mono text-[11px] small-caps">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-6 pr-6">
                {["Make it loud", "✺", "Make it land", "✺", "Make it last", "✺", "Rebrand · Refresh · Reignite", "✺", "Strategy with a swagger", "✺", "Now booking", "✺"].map((t, j) => (
                  <span key={j} className="px-2">{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* CAMPAIGN TYPES */}
      <section className="container py-16 md:py-24">
        <div className="border-t-4 border-ink pt-4 mb-12 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-mono font-bold text-sm small-caps text-accent-red mb-2">What I do</p>
            <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight leading-none">
              Three flavours of loud.
            </h2>
          </div>
          <span className="font-mono text-xs small-caps text-ink-mute">No. 01 — 03</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {campaigns.map((c) => (
            <article
              key={c.no}
              className={`group relative bg-paper border border-ink p-7 md:p-8 ${c.tilt} hover:rotate-0 transition-transform duration-500 shadow-[8px_10px_0_0_hsl(var(--ink))] hover:shadow-[12px_14px_0_0_${c.tint}]`}
              style={{ ["--hover-shadow" as never]: c.tint }}
            >
              {/* washi tape */}
              <span
                aria-hidden
                className="absolute -top-3 left-6 h-5 w-16 rotate-[-6deg] border border-ink/30 opacity-80"
                style={{ background: c.tint, opacity: 0.55 }}
              />
              <span
                className="absolute -top-3 -right-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1 rotate-3"
              >
                {c.kind}
              </span>

              <div className="flex items-baseline gap-3 mb-5 border-b border-ink/30 pb-4">
                <span
                  className="font-display italic text-5xl leading-none"
                  style={{ color: c.tint }}
                >
                  {c.no}
                </span>
                <span className="font-mono text-[10px] small-caps text-ink-mute">Type</span>
              </div>

              <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight mb-4">
                {c.title}
              </h3>
              <p className="font-display italic text-base md:text-lg leading-relaxed text-ink-soft mb-6">
                {c.blurb}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] small-caps border border-ink/40 px-2 py-0.5 group-hover:bg-ink group-hover:text-paper transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section
        className="relative border-y-2 border-ink"
        style={{ background: "hsl(var(--accent-burnt))" }}
      >
        <div className="container py-14 md:py-20 text-paper">
          <p className="font-mono font-bold text-xs small-caps mb-6 tracking-[0.25em] opacity-80">
            ✦ The Toolkit ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight mb-10 max-w-4xl">
            From <span className="italic">first spark</span> to full-blown brand world.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-paper/30 border border-paper/30">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="group flex items-center gap-4 px-5 py-6 md:px-7 md:py-8 transition-colors"
                  style={{ background: "hsl(var(--accent-burnt))" }}
                >
                  <Icon className="size-6 shrink-0 transition-transform group-hover:rotate-12" />
                  <span className="font-display italic text-lg md:text-2xl leading-tight">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="container py-20 md:py-28 max-w-4xl text-center">
        <p className="font-mono font-bold text-xs small-caps text-accent-red mb-6 tracking-[0.25em]">
          ✦ The Promise ✦
        </p>
        <p className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
          I don&rsquo;t do <span className="italic line-through opacity-50">safe</span>.<br />
          I do{" "}
          <span className="italic" style={{ color: "hsl(var(--accent-burnt))" }}>
            unforgettable
          </span>
          .
        </p>
        <div className="mx-auto my-10 h-px w-24 bg-ink/30" />
        <p className="font-display italic text-lg md:text-xl text-ink-soft leading-relaxed">
          Every campaign starts with a question: how do we make people <em>feel</em> something? Then we build the brand world to back it up — strategy, identity, copy, art direction, the whole opera.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/#contact"
            className="group inline-flex items-center gap-3 font-mono text-sm small-caps text-paper bg-ink px-7 py-4 hover:bg-[hsl(var(--accent-burnt))] transition-colors shadow-[6px_8px_0_0_hsl(var(--accent-burnt))]"
          >
            Let&rsquo;s make noise
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/work"
            className="font-mono text-sm small-caps underline underline-offset-4 hover:text-accent-red transition-colors"
          >
            See more work →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-ink">
        <div className="container py-8 flex items-center justify-between text-[11px] small-caps font-mono text-ink-mute">
          <span>© Megan Ho · Melbourne</span>
          <Link to="/" className="hover:text-accent-red transition-colors">
            ← Return to Edition
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Campaigns;
