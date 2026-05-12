import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Megaphone, Sparkles, Zap, Target, Palette, Rocket } from "lucide-react";

const TODAY = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const SectionHeader = ({
  kicker,
  title,
  no,
}: {
  kicker: string;
  title: string;
  no: string;
}) => (
  <div className="border-t-4 border-ink pt-4 mb-10 flex items-end justify-between gap-6 flex-wrap">
    <div>
      <p className="font-mono font-bold text-sm small-caps text-accent-red mb-2">{kicker}</p>
      <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight leading-none">
        {title}
      </h2>
    </div>
    <span className="font-mono text-xs small-caps text-ink-mute">Section {no}</span>
  </div>
);

const campaigns = [
  {
    no: "I",
    kind: "Campaign",
    title: "Loud & Clear",
    blurb: "Launch campaigns built to interrupt the scroll and stick in the memory.",
    tags: ["Concept", "Art Direction", "Rollout"],
    stamp: "Vol · 01",
    tilt: "-rotate-2",
    shadow: "hsl(var(--ink))",
  },
  {
    no: "II",
    kind: "Rebrand",
    title: "From Whisper to Wow",
    blurb: "Full identity overhauls — logo, voice, world. The kind that gets re-pinned.",
    tags: ["Identity", "Strategy", "Worldbuilding"],
    stamp: "New · Skin",
    tilt: "rotate-1",
    shadow: "hsl(var(--accent-red))",
  },
  {
    no: "III",
    kind: "Refresh",
    title: "Same Soul, Sharper Suit",
    blurb: "Modernise without losing the magic. A glow-up for brands with history.",
    tags: ["Refinement", "System", "Polish"],
    stamp: "Glow · Up",
    tilt: "-rotate-1",
    shadow: "hsl(var(--accent-ochre))",
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
    <div
      className="min-h-screen text-ink overflow-hidden"
      style={{
        backgroundColor: "hsl(18 45% 86%)",
        backgroundImage:
          "radial-gradient(hsl(var(--ink) / 0.04) 1px, transparent 1px), radial-gradient(hsl(var(--ink) / 0.03) 1px, transparent 1px)",
        backgroundSize: "3px 3px, 7px 7px",
        backgroundPosition: "0 0, 1px 2px",
      }}
    >
      {/* Top meta bar */}
      <div className="border-b border-ink/30">
        <div className="container flex items-center justify-between py-2 text-[11px] small-caps text-ink-soft font-mono">
          <Link to="/" className="inline-flex items-center gap-1.5 hover:text-accent-red transition-colors">
            <ArrowLeft className="size-3" /> Back to Edition
          </Link>
          <span className="hidden sm:inline">{TODAY}</span>
          <span>Campaigns · Vol. I</span>
        </div>
      </div>

      {/* HERO — editorial broadsheet header */}
      <header className="relative border-b-2 border-ink overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(55% 65% at 18% 35%, hsl(var(--accent-burnt) / 0.22) 0%, transparent 60%), radial-gradient(45% 55% at 85% 75%, hsl(var(--accent-red) / 0.16) 0%, transparent 65%)",
          }}
        />

        <div className="container relative pt-10 md:pt-14 pb-12 md:pb-16">
          <p className="font-mono font-bold text-xs small-caps text-accent-red mb-4 tracking-[0.25em] text-center">
            ✦ Section IV — The Loud Pages ✦
          </p>

          <h1
            className="font-display leading-[0.85] tracking-[-0.03em] text-[clamp(3rem,11vw,9rem)] uppercase text-center"
            style={{ fontWeight: 500 }}
          >
            <span className="block text-ink">Brand</span>
            <span
              className="block italic"
              style={{ color: "hsl(var(--accent-burnt))" }}
            >
              Campaigns.
            </span>
          </h1>

          <div className="mx-auto mt-6 mb-4 h-px w-24 bg-ink/30" />
          <p className="font-display text-xl md:text-2xl leading-snug text-ink-soft text-center max-w-3xl mx-auto font-light px-4 py-3">
            The work that turns brands into conversations — campaigns &amp; rebrands made to be remembered.
          </p>
        </div>

        {/* Marquee ribbon */}
        <div className="relative overflow-hidden border-t border-ink bg-ink text-paper">
          <div className="marquee flex whitespace-nowrap py-2 font-mono text-[11px] small-caps">
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

      {/* CAMPAIGN TYPES — mirrors SelectedWork card grid */}
      <section className="container py-16 md:py-24 relative">
        <SectionHeader kicker="What I do" title="Three Flavours of Loud" no="I" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pt-4">
          {campaigns.map((c) => (
            <article
              key={c.no}
              className={`group relative block border border-ink bg-paper transition-all duration-300 hover:-translate-y-2 hover:rotate-0 ${c.tilt}`}
              style={{ boxShadow: `8px 10px 0 0 ${c.shadow}` }}
            >
              {/* washi tape */}
              <span
                aria-hidden
                className="absolute -top-3 left-6 h-5 w-16 rotate-[-6deg] border border-ink/30 opacity-80 z-10"
                style={{ background: "hsl(var(--accent-ochre) / 0.55)" }}
              />
              <span
                aria-hidden
                className="absolute -top-2 right-8 h-4 w-12 rotate-[8deg] border border-ink/30 opacity-80 z-10"
                style={{ background: "hsl(var(--accent-red) / 0.45)" }}
              />

              <div
                className="relative overflow-hidden aspect-video border-b border-ink flex items-center justify-center p-6"
                style={{ background: "hsl(18 45% 92%)" }}
              >
                <span
                  className="font-display italic text-7xl md:text-8xl leading-none"
                  style={{ color: "hsl(var(--accent-burnt))" }}
                >
                  {c.no}
                </span>
                <span className="absolute top-3 left-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1">
                  {c.kind}
                </span>
                <span
                  className="absolute bottom-3 right-3 size-16 rounded-full border-2 border-ink/70 flex items-center justify-center text-center font-mono text-[9px] small-caps leading-tight rotate-[-12deg] bg-paper/80 backdrop-blur-sm"
                >
                  {c.stamp}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-display text-2xl tracking-tight">{c.title}</h3>
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[hsl(var(--accent-burnt))]" />
                </div>
                <p className="font-display italic text-sm text-ink-soft mb-4">
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
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES STRIP — mirrors Approach pinned-card layout */}
      <section className="relative overflow-hidden border-y-2 border-ink">
        <div
          aria-hidden
          className="absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 20%, hsl(var(--accent-burnt) / 0.18) 0%, transparent 65%), radial-gradient(45% 45% at 10% 85%, hsl(var(--accent-red) / 0.12) 0%, transparent 65%)",
          }}
        />

        <div className="container py-20 md:py-28 relative">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <p className="font-mono font-bold text-xs small-caps text-accent-red mb-4 tracking-[0.2em]">
              ✦ The Toolkit ✦
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              From{" "}
              <span className="italic" style={{ color: "hsl(var(--accent-burnt))" }}>
                first spark
              </span>{" "}
              to full brand world.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-6 max-w-6xl mx-auto">
            {services.map((s, i) => {
              const Icon = s.icon;
              const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1", "rotate-1"];
              return (
                <article
                  key={s.label}
                  className={`group relative bg-paper border border-ink p-6 md:p-7 ${tilts[i % tilts.length]} hover:rotate-0 transition-transform duration-500 shadow-[6px_8px_0_0_hsl(var(--ink))] hover:shadow-[10px_12px_0_0_hsl(var(--accent-burnt))]`}
                >
                  <span
                    aria-hidden
                    className="absolute -top-2 left-1/2 -translate-x-1/2 size-4 rounded-full border border-ink"
                    style={{ background: "hsl(var(--accent-burnt))" }}
                  />
                  <div className="flex items-center gap-4">
                    <Icon className="size-6 shrink-0 text-[hsl(var(--accent-burnt))] transition-transform group-hover:rotate-12" />
                    <span className="font-display text-xl md:text-2xl leading-tight">
                      {s.label}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MANIFESTO + CTA */}
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
            className="group inline-flex items-center gap-3 font-mono text-sm small-caps text-paper bg-[hsl(var(--accent-burnt))] px-7 py-4 hover:opacity-90 transition-opacity shadow-[6px_8px_0_0_hsl(var(--ink))]"
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
