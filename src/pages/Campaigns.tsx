import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";

const TODAY = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const items = [
  {
    no: "01",
    kind: "Campaign",
    title: "Laneige × Jellycat",
    blurb:
      "Collectible Lip Glowy Balm pouches turning a skincare staple into a Gen Z bag-charm obsession.",
    deliverables: ["Concept", "Collab Strategy", "Product", "Social"],
    year: "2026",
    href: "/campaigns/laneige-jellycat",
  },
  {
    no: "02",
    kind: "Rebrand",
    title: "From Whisper to Wow",
    blurb:
      "Full identity overhauls — logo, voice, world. The kind people screenshot and re-pin.",
    deliverables: ["Identity", "Strategy", "Verbal", "Worldbuilding"],
    year: "2026",
  },
  {
    no: "03",
    kind: "Refresh",
    title: "Same Soul, Sharper Suit",
    blurb:
      "Modernise without losing the magic. A glow-up for brands that already have history.",
    deliverables: ["System", "Refinement", "Polish"],
    year: "2025",
  },
  {
    no: "04",
    kind: "Activation",
    title: "Made to be Met",
    blurb:
      "Pop-ups, product moments, IRL surprises — turning a brand into a place people want to be.",
    deliverables: ["Concept", "Spatial", "Press"],
    year: "2025",
  },
];

const RUST = "hsl(46 76% 78%)"; // #F1DE9A warm sand
const CREAM = "hsl(30 6% 11%)"; // ink for contrast on light bg

const Campaigns = () => {
  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: RUST,
        color: CREAM,
        backgroundImage:
          "radial-gradient(rgba(255,248,224,0.05) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "3px 3px, 7px 7px",
        backgroundPosition: "0 0, 1px 2px",
      }}
    >
      {/* Top meta bar */}
      <div className="border-b" style={{ borderColor: "rgba(244,243,238,0.25)" }}>
        <div className="container flex items-center justify-between py-3 text-[11px] small-caps font-mono opacity-80">
          <Link to="/" className="inline-flex items-center gap-1.5 hover:opacity-100 transition-opacity">
            <ArrowLeft className="size-3" /> Back to Edition
          </Link>
          <span className="hidden sm:inline">{TODAY}</span>
          <span>Vol. I — Campaigns</span>
        </div>
      </div>

      {/* HERO — asymmetric magazine spread */}
      <header className="relative">
        <div className="container relative pt-12 md:pt-20 pb-10 md:pb-16">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
            {/* left: vertical kicker + huge headline */}
            <div className="col-span-12 md:col-span-9">
              <div className="flex items-center gap-4 mb-6 md:mb-10">
                <span
                  className="font-mono text-[11px] small-caps tracking-[0.3em]"
                  style={{ color: CREAM }}
                >
                  ✦ Issue No. 04
                </span>
                <span
                  className="h-px flex-1"
                  style={{ background: "rgba(244,243,238,0.4)" }}
                />
                <span className="font-mono text-[11px] small-caps tracking-[0.3em] opacity-70">
                  {items.length} entries
                </span>
              </div>

              <h1
                className="font-display uppercase leading-[0.78] tracking-[-0.04em]"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(4rem,18vw,16rem)",
                  color: CREAM,
                }}
              >
                Loud
                <span
                  className="block italic pl-[8vw] md:pl-[12vw]"
                  style={{ color: "hsl(35 80% 70%)" }}
                >
                  by
                </span>
                <span className="block">design.</span>
              </h1>
            </div>

            {/* right: blurb stacked */}
            <div className="col-span-12 md:col-span-3 md:pb-6">
              <p
                className="font-display italic text-lg md:text-xl leading-snug"
                style={{ color: "rgba(244,243,238,0.85)" }}
              >
                Brand campaigns &amp; rebrands made to turn heads, change minds, and stay in the group chat.
              </p>
              <Link
                to="/#contact"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-xs small-caps tracking-[0.2em] border-b pb-1 transition-colors"
                style={{ borderColor: CREAM, color: CREAM }}
              >
                Commission a project
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div
          className="relative overflow-hidden border-y"
          style={{
            borderColor: "rgba(244,243,238,0.3)",
            background: "rgba(0,0,0,0.18)",
            color: CREAM,
          }}
        >
          <div className="marquee flex whitespace-nowrap py-2.5 font-mono text-[11px] small-caps">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-6 pr-6">
                {[
                  "Campaigns that print themselves",
                  "✺",
                  "Rebrands with a backbone",
                  "✺",
                  "Concepts in colour",
                  "✺",
                  "Strategy with swagger",
                  "✺",
                  "Now booking",
                  "✺",
                ].map((t, j) => (
                  <span key={j} className="px-2">
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* INDEX — table-of-contents style list */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-8">
            <p
              className="font-mono text-[11px] small-caps tracking-[0.3em] mb-3 opacity-80"
            >
              ✦ The Index
            </p>
            <h2
              className="font-display italic leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem,6vw,5rem)", color: CREAM }}
            >
              What lives inside.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <p className="font-mono text-[11px] small-caps tracking-[0.2em] opacity-70">
              Hover a row →
            </p>
          </div>
        </div>

        <ol className="border-t" style={{ borderColor: "rgba(244,243,238,0.35)" }}>
          {items.map((it) => (
            <li
              key={it.no}
              className="group relative border-b transition-colors"
              style={{ borderColor: "rgba(244,243,238,0.35)" }}
            >
              <Link
                to={(it as any).href ?? "/#contact"}
                className="grid grid-cols-12 gap-4 items-center py-6 md:py-8 px-2 md:px-4 transition-colors hover:bg-[rgba(0,0,0,0.18)]"
              >
                <span
                  className="col-span-2 md:col-span-1 font-mono text-sm small-caps opacity-70"
                >
                  {it.no}
                </span>

                <span
                  className="col-span-10 md:col-span-2 font-mono text-[10px] small-caps tracking-[0.25em]"
                  style={{ color: "hsl(35 80% 75%)" }}
                >
                  {it.kind}
                </span>

                <h3
                  className="col-span-12 md:col-span-5 font-display tracking-tight leading-[0.95] transition-transform duration-300 group-hover:translate-x-2"
                  style={{
                    fontSize: "clamp(2rem,4vw,3.25rem)",
                    fontWeight: 500,
                    color: CREAM,
                  }}
                >
                  {it.title}
                </h3>

                <p
                  className="col-span-12 md:col-span-3 font-display italic text-sm md:text-base leading-snug"
                  style={{ color: "rgba(244,243,238,0.75)" }}
                >
                  {it.blurb}
                </p>

                <span className="col-span-12 md:col-span-1 flex md:justify-end">
                  <Plus
                    className="size-6 transition-transform duration-500 group-hover:rotate-90"
                    style={{ color: CREAM }}
                  />
                </span>

                {/* expanded deliverables row */}
                <div className="col-span-12 md:col-start-4 md:col-span-9 flex flex-wrap gap-1.5 max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500">
                  {it.deliverables.map((d) => (
                    <span
                      key={d}
                      className="font-mono text-[10px] small-caps px-2 py-0.5 border"
                      style={{ borderColor: "rgba(244,243,238,0.5)", color: CREAM }}
                    >
                      {d}
                    </span>
                  ))}
                  <span
                    className="ml-auto font-mono text-[10px] small-caps opacity-70"
                    style={{ color: CREAM }}
                  >
                    {it.year}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* PULL QUOTE — full-bleed cream block */}
      <section
        className="relative border-y-2"
        style={{
          background: CREAM,
          color: "hsl(var(--ink))",
          borderColor: "hsl(var(--ink))",
        }}
      >
        <div className="container py-20 md:py-28 max-w-5xl">
          <p
            className="font-mono font-bold text-xs small-caps tracking-[0.3em] mb-6"
            style={{ color: RUST }}
          >
            ✦ The Promise
          </p>
          <p
            className="font-display leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem,5.5vw,4.5rem)", fontWeight: 500 }}
          >
            I don&rsquo;t do{" "}
            <span className="italic line-through opacity-50">safe</span>. I do{" "}
            <span className="italic" style={{ color: RUST }}>
              unforgettable
            </span>
            — campaigns and rebrands engineered to be talked about, screenshot, and remembered.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-3 font-mono text-sm small-caps text-paper px-7 py-4 transition-opacity hover:opacity-90 shadow-[6px_8px_0_0_hsl(var(--ink))]"
              style={{ background: RUST }}
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/work"
              className="font-mono text-sm small-caps underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Browse case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t"
        style={{ borderColor: "rgba(244,243,238,0.3)" }}
      >
        <div className="container py-8 flex items-center justify-between text-[11px] small-caps font-mono opacity-80">
          <span>© Megan Ho · Melbourne</span>
          <Link to="/" className="hover:opacity-100 transition-opacity">
            ← Return to Edition
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Campaigns;
