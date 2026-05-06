import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Lightbulb,
  Eye,
  Package,
  Sparkles,
  TrendingUp,
  Heart,
} from "lucide-react";

import veramenteLogos from "@/assets/veramente-logos.jpg";
import veramentePalette from "@/assets/veramente-palette.jpg";
import veramentePackaging from "@/assets/veramente-packaging.jpg";
import veramentePackDieline from "@/assets/veramente-pack-dieline.png";
import veramentePackCarton from "@/assets/veramente-pack-carton.png";
import veramentePackCharms from "@/assets/veramente-pack-charms.jpg";
import veramenteLogo from "@/assets/veramente-logo.jpg";
import veramenteTinyBites from "@/assets/veramente-tiny-bites.png";
import veramenteBagCharm from "@/assets/veramente-bag-charm.png";
import veramenteCafe from "@/assets/veramente-cafe.png";
import sippyLogo from "@/assets/sippy-logo.jpg";
import megsCreamiLogo from "@/assets/megs-creami-logo.png";

const Veramente = () => (
  <div className="paper-grain min-h-screen text-ink">
    {/* Top bar */}
    <header className="border-b-2 border-ink sticky top-0 z-30 bg-paper/80 backdrop-blur">
      <div className="container py-3 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="font-mono text-[11px] small-caps inline-flex items-center gap-2 hover:text-[hsl(48_90%_70%)] transition-colors"
        >
          <ArrowLeft className="size-3.5" /> Back to Folio
        </Link>
        <p className="font-mono text-[11px] small-caps text-ink-mute">
          Case · I · Veramente
        </p>
        <Link
          to="/case/sippy"
          className="font-mono text-[11px] small-caps inline-flex items-center gap-1 hover:text-[hsl(48_90%_70%)] transition-colors"
        >
          Next Case <ArrowUpRight className="size-3" />
        </Link>
      </div>
    </header>

    {/* HERO */}
    <section className="relative overflow-hidden border-b-2 border-ink">
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(60% 70% at 18% 30%, hsl(var(--accent-ochre) / 0.28) 0%, transparent 60%), radial-gradient(45% 55% at 85% 75%, hsl(var(--accent-red) / 0.14) 0%, transparent 65%)",
        }}
      />
      <div className="container py-16 md:py-24 relative grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-5 tracking-[0.2em]">
            ✦ Case Study No. I · Beauty · Concept Brand ✦
          </p>
          <h1
            className="font-display font-light leading-[0.85] tracking-[-0.03em] uppercase text-[clamp(3.5rem,12vw,9rem)]"
            style={{ fontWeight: 500 }}
          >
            <span className="block text-ink">Veramente</span>
            <span
              className="block italic"
              style={{ color: "hsl(48 90% 70%)" }}
            >
              Carry your SPF.
            </span>
          </h1>
          <p className="font-display text-xl md:text-2xl text-ink-soft mt-8 max-w-2xl leading-relaxed">
            A wearable SPF concept brand that reframes sunscreen as a{" "}
            <em
              className="not-italic font-semibold"
              style={{ color: "hsl(var(--accent-red))" }}
            >
              daily accessory people want to show off.
            </em>{" "}
            Built end-to-end in Figma — strategy, identity, packaging, and campaign.
          </p>
        </div>
        <div className="md:col-span-4">
          <figure
            className="relative border border-ink p-6 shadow-[10px_12px_0_0_hsl(var(--ink))] rotate-[2deg] hover:rotate-0 transition-transform duration-500"
            style={{ background: "hsl(28 60% 92%)" }}
          >
            <img
              src={veramenteLogo}
              alt="Veramente logo"
              className="w-full h-auto block aspect-square object-contain"
            />
            <span className="absolute -top-3 -left-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1 rotate-[-4deg]">
              SPF · 50
            </span>
            <figcaption className="pt-3 mt-2 border-t border-ink/30 flex items-baseline justify-between gap-3">
              <p className="font-display italic text-sm">Veramente</p>
              <p className="font-mono text-[10px] small-caps text-ink-mute">
                Plate I
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    {/* AT A GLANCE */}
    <section className="border-b-2 border-ink bg-paper-deep/40">
      <div className="container py-10 grid md:grid-cols-5 gap-6">
        {[
          ["Role", "Brand · Product · Art Direction"],
          ["Category", "Skincare · Accessory"],
          ["Format", "SPF50+ stick + charm loop"],
          ["Tools", "Figma · Canva · AI Mockups"],
          ["Year", "2025 — Concept"],
        ].map(([k, v]) => (
          <div key={k} className="border-l-2 border-ink/30 pl-4">
            <p className="font-mono text-[10px] small-caps text-ink-mute mb-1">
              {k}
            </p>
            <p className="font-display text-base leading-snug">{v}</p>
          </div>
        ))}
      </div>
    </section>

    {/* THE BRIEF */}
    <section className="container py-20 md:py-28 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <p className="font-mono text-[11px] small-caps text-accent-red mb-3">
          01 · The Brief
        </p>
        <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
          People skip SPF when it&rsquo;s
          <span
            className="italic"
            style={{ color: "hsl(48 90% 70%)" }}
          >
            {" "}
            hidden.
          </span>
        </h2>
      </div>
      <div className="md:col-span-8 md:pt-3">
        <p className="font-display text-lg md:text-xl text-ink-soft leading-relaxed mb-6">
          Sunscreen is the most-skipped step in skincare — not because it
          doesn&rsquo;t work, but because it lives at the bottom of a bag. The
          opportunity wasn&rsquo;t a better formula. It was a{" "}
          <strong className="text-ink font-semibold">better behaviour</strong>.
        </p>
        <p className="font-display italic text-lg md:text-xl text-ink-soft leading-relaxed">
          Veramente turns SPF into something you{" "}
          <em className="not-italic text-ink font-semibold">wear</em> — a charm
          on your bag, a small ritual on the go, a brand cue people see before
          they ever read the label.
        </p>
      </div>
    </section>

    {/* BIG PULL QUOTE */}
    <section className="border-y-2 border-ink bg-ink text-paper">
      <div className="container py-16 md:py-24 text-center">
        <p className="font-mono text-[11px] small-caps text-paper/60 mb-6 tracking-[0.3em]">
          ✦ Brand Promise ✦
        </p>
        <blockquote className="font-display italic font-light text-4xl md:text-7xl leading-[1.05] tracking-tight max-w-5xl mx-auto">
          &ldquo;Wear it, don&rsquo;t hide it.&rdquo;
        </blockquote>
        <p className="font-mono text-[11px] small-caps text-paper/60 mt-8">
          — Aesthetic = Adherence
        </p>
      </div>
    </section>

    {/* IDENTITY BOARD — Split spread (B) + Numbered notes (C) */}
    <section className="container py-20 md:py-28">
      {/* Spread: Branding column (left) + Identity board (right) */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
        {/* LEFT — Branding column */}
        <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-20">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-4 tracking-[0.2em]">
            02 · Branding
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight mb-6">
            A sun-bleached
            <span className="italic" style={{ color: "hsl(48 90% 70%)" }}>
              {" "}language.
            </span>
          </h2>
          <p className="font-display text-base text-ink-soft leading-relaxed mb-8">
            Soft confidence — skincare that whispers. A warm palette borrowed
            from late-afternoon light, paired with a tactile wordmark and a
            charm-loop mark that doubles as the product silhouette.
          </p>

          {/* At-a-glance table */}
          <dl className="border-t border-ink/30">
            {[
              ["Format", "SPF50+ stick · 30g"],
              ["Palette", "Peach · Olive · Taupe"],
              ["Type", "Script + clean serif"],
              ["Tools", "Figma · Canva · AI"],
              ["Deliverables", "Identity, packaging, copy"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-5 gap-3 py-2.5 border-b border-ink/30"
              >
                <dt className="col-span-2 font-mono text-[10px] small-caps text-ink-mute pt-0.5">
                  {k}
                </dt>
                <dd className="col-span-3 font-display text-sm text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="font-display italic text-base text-ink-soft mt-6 leading-relaxed">
            &ldquo;Soft confidence — skincare that{" "}
            <span style={{ color: "hsl(48 90% 70%)" }}>whispers.</span>&rdquo;
          </p>
        </div>

        {/* RIGHT — Stacked identity board (Sippy-faithful) */}
        <div className="md:col-span-7 lg:col-span-8">
          <div className="border-2 border-ink bg-paper shadow-[12px_14px_0_0_hsl(var(--accent-ochre))] overflow-hidden">
            {/* Plate header */}
            <div className="flex items-center justify-between gap-4 px-4 py-2 border-b-2 border-ink bg-paper-deep/50">
              <p className="font-mono text-[10px] small-caps tracking-[0.25em]">
                Plate II · Identity Board
              </p>
              <p className="font-mono text-[10px] small-caps text-ink-mute">
                Logo system + palette
              </p>
            </div>

            {/* Logos image */}
            <img
              src={veramenteLogos}
              alt="Veramente logo system: primary sun mark, script wordmark, Ve monogram"
              className="block w-full h-auto border-b-2 border-ink"
              style={{ background: "hsl(82 25% 28%)" }}
            />

            {/* Palette image */}
            <img
              src={veramentePalette}
              alt="Veramente palette: Soft Peach Beige, Deep Olive Moss, Dusty Rose Taupe"
              className="block w-full h-auto"
            />

            {/* Footer caption */}
            <figcaption className="px-4 py-3 border-t-2 border-ink flex items-baseline justify-between gap-3 flex-wrap">
              <p className="font-display italic text-sm">
                A sun, a signature, a single letter — three ways to say the same thing.
              </p>
              <span className="font-mono text-[10px] small-caps text-ink-mute">
                Fig. 01–02
              </span>
            </figcaption>
          </div>
        </div>
      </div>

      {/* Design Notes — 2x2 card grid, larger body, clearer hierarchy */}
      <div className="mt-16 md:mt-20 border-t-2 border-ink pt-10">
        <div className="grid md:grid-cols-12 gap-6 items-end mb-8">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] small-caps text-accent-red tracking-[0.2em] mb-3">
              Design Notes
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-[0.95] tracking-tight">
              Four ideas behind
              <span className="italic" style={{ color: "hsl(48 90% 70%)" }}>
                {" "}the marks.
              </span>
            </h3>
          </div>
          <p className="md:col-span-5 font-display italic text-base text-ink-soft leading-relaxed md:text-right">
            The thinking that shaped every curve, color, and clip.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {[
            {
              no: "01",
              title: "Sun-bleached, never loud",
              body: "Soft confidence over shout. The brand reads as calm and considered — not clinical, not shouting from a shelf.",
              tag: "Tone",
            },
            {
              no: "02",
              title: "A signature, not a logo",
              body: "The wordmark is handwritten by hand. A human touch in a category that usually feels sterile and pharmaceutical.",
              tag: "Identity",
            },
            {
              no: "03",
              title: "Wear it, don't hide it",
              body: "The brand mark doubles as the product silhouette — a charm-loop you clip onto a bag, in plain sight.",
              tag: "Form",
            },
            {
              no: "04",
              title: "Aesthetic = adherence",
              body: "If it's pretty enough to display, you'll reach for it more often. Beauty isn't decoration — it's the marketing channel.",
              tag: "Strategy",
            },
          ].map(({ no, title, body, tag }) => (
            <li
              key={no}
              className="relative bg-paper border-2 border-ink p-6 md:p-7 shadow-[6px_8px_0_0_hsl(var(--ink))] hover:shadow-[10px_12px_0_0_hsl(var(--accent-burnt))] transition-shadow"
            >
              <div className="flex items-baseline justify-between gap-4 mb-4 pb-3 border-b border-ink/20">
                <span
                  className="font-display text-5xl leading-none"
                  style={{ color: "hsl(48 90% 70%)" }}
                >
                  {no}
                </span>
                <span className="font-mono text-[10px] small-caps text-ink-mute tracking-[0.2em]">
                  · {tag} ·
                </span>
              </div>
              <h4 className="font-display text-2xl leading-tight mb-3 text-ink">
                {title}
              </h4>
              <p className="font-body text-[15px] text-ink-soft leading-relaxed">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Packaging plate — three image + caption rows */}
      <div className="mt-16 md:mt-20">
        <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-3 mb-8">
          <div>
            <p className="font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute mb-1">
              Plate III
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight">
              Packaging & Charms
            </h3>
          </div>
          <p className="font-mono text-[10px] small-caps text-ink-mute hidden sm:block">
            Dieline · Carton · Collectibles
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              n: "01",
              label: "Dieline",
              img: veramentePackDieline,
              ratio: "16 / 10",
              title: "Flat-pack, fully designed.",
              body: "The carton is laid flat and printed end-to-end — exterior, interior flaps, and dust-cover. Pretty inside and out, even before it's folded.",
              meta: ["Print-ready", "Single-sheet", "Cream + olive"],
            },
            {
              n: "02",
              label: "Carton",
              img: veramentePackCarton,
              ratio: "5 / 4",
              title: "Cream + olive, sun on top.",
              body: "The folded box leads with the sun mark and wordmark — story and SPF specs run down the side panel. Stands tall on a shelf without shouting.",
              meta: ["SPF50+ · 30g", "Folded carton", "Shelf-ready"],
            },
            {
              n: "03",
              label: "Charms",
              img: veramentePackCharms,
              ratio: "5 / 4",
              title: "Blind-box collectibles.",
              body: "Each stick clips onto a bag with a mini food charm — apple pie, cookie, watermelon. SPF you actually want to show off, not stash in a drawer.",
              meta: ["Blind-box", "Bag-clip", "Collectible"],
            },
          ].map((c, i) => (
            <article
              key={c.n}
              className={`grid md:grid-cols-12 gap-0 border-2 border-ink bg-paper shadow-[8px_10px_0_0_hsl(var(--accent-red))] overflow-hidden ${
                i % 2 === 1 ? "md:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="md:col-span-7 bg-paper-deep border-b-2 md:border-b-0 md:border-r-2 border-ink">
                <div className="relative w-full" style={{ aspectRatio: c.ratio }}>
                  <img
                    src={c.img}
                    alt={`Veramente ${c.label.toLowerCase()}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </figure>
              <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-rule">
                  <span className="font-display text-5xl leading-none text-[hsl(48_90%_70%)]">
                    {c.n}
                  </span>
                  <span className="font-mono text-[11px] small-caps tracking-[0.25em] text-ink">
                    · {c.label} ·
                  </span>
                </div>
                <h4 className="font-display text-2xl md:text-[26px] leading-tight mb-3 text-ink">
                  {c.title}
                </h4>
                <p className="font-body text-[15px] text-ink-soft leading-relaxed mb-5">
                  {c.body}
                </p>
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {c.meta.map((m) => (
                    <li
                      key={m}
                      className="font-mono text-[10px] small-caps tracking-[0.2em] border border-ink px-2 py-1 bg-paper-deep/60"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="font-mono text-[10px] small-caps text-ink-mute mt-4 text-right">
        Plate III — Packaging System · Built in Figma
      </p>

    </section>

    {/* STRATEGY 3-UP */}
    <section className="border-y-2 border-ink bg-paper-deep/40">
      <div className="container py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3 tracking-[0.2em]">
            03 · Marketing Strategy
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
            From insight to
            <span
              className="italic"
              style={{ color: "hsl(48 90% 70%)" }}
            >
              {" "}
              object.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              Icon: Lightbulb,
              no: "Concept",
              title: "Wearable accessory, not skincare.",
              body: "Reposition SPF away from the bathroom shelf and onto the bag — where it gets seen, gets reached for, and gets reapplied.",
              tilt: "-rotate-1",
            },
            {
              Icon: Eye,
              no: "Insight",
              title: "Aesthetic = adherence.",
              body: "If a product is beautiful enough to display, people use it more. Visibility is the marketing channel.",
              tilt: "rotate-1",
            },
            {
              Icon: Package,
              no: "Solution",
              title: "SPF50+ stick + blind-box charms.",
              body: "A clip-on stick paired with collectible charms — turning reapplication into a ritual and the product into a touchpoint.",
              tilt: "-rotate-1",
            },
          ].map(({ Icon, no, title, body, tilt }) => (
            <article
              key={no}
              className={`relative bg-paper border border-ink p-7 ${tilt} hover:rotate-0 transition-transform duration-500 shadow-[6px_8px_0_0_hsl(var(--ink))] hover:shadow-[10px_12px_0_0_hsl(var(--accent-burnt))]`}
            >
              <span
                aria-hidden
                className="absolute -top-2 left-1/2 -translate-x-1/2 size-4 rounded-full border border-ink"
                style={{ background: "hsl(var(--accent-burnt))" }}
              />
              <Icon
                className="size-6 mb-4"
                style={{ color: "hsl(var(--accent-red))" }}
              />
              <p className="font-mono text-[10px] small-caps text-ink-mute mb-2">
                {no}
              </p>
              <h3 className="font-display text-2xl leading-tight mb-3">
                {title}
              </h3>
              <p className="font-display italic text-base text-ink-soft leading-relaxed">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* PRODUCT WORLD — image grid */}
    <section className="container py-20 md:py-28">
      <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
        <div>
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">
            04 · The Product World
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight max-w-2xl">
            The product
            <span
              className="italic"
              style={{ color: "hsl(48 90% 70%)" }}
            >
              {" "}
              is the campaign.
            </span>
          </h2>
        </div>
        <p className="font-mono text-[11px] small-caps text-ink-mute max-w-xs md:text-right">
          Mockups built in Figma · styled with AI-generated lifestyle frames
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5 md:gap-6">
        {/* Big lifestyle */}
        <figure className="col-span-12 md:col-span-8 border border-ink bg-paper-deep overflow-hidden group">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={veramenteCafe}
              alt="Model carrying the Veramente SPF charm at an outdoor café"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <figcaption className="px-4 py-3 border-t border-ink/30 flex items-baseline justify-between gap-3 bg-paper">
            <p className="font-display italic text-base">In The Wild</p>
            <p className="font-mono text-[10px] small-caps text-ink-mute">
              Plate V — Lifestyle
            </p>
          </figcaption>
        </figure>

        {/* Bag charm */}
        <figure className="col-span-12 md:col-span-4 border border-ink bg-paper-deep overflow-hidden group">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={veramenteBagCharm}
              alt="Veramente SPF stick clipped to a cream shoulder bag"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <figcaption className="px-4 py-3 border-t border-ink/30 flex items-baseline justify-between gap-3 bg-paper">
            <p className="font-display italic text-base">Wear It Daily</p>
            <p className="font-mono text-[10px] small-caps text-ink-mute">
              Plate IV
            </p>
          </figcaption>
        </figure>

        {/* Tiny bites — full width */}
        <figure className="col-span-12 border border-ink bg-paper-deep overflow-hidden group">
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={veramenteTinyBites}
              alt="Veramente Tiny Bites blind box keychain collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <figcaption className="px-4 py-3 border-t border-ink/30 flex items-baseline justify-between gap-3 bg-paper">
            <p className="font-display italic text-base">
              Tiny Bites — Blind-Box Charms
            </p>
            <p className="font-mono text-[10px] small-caps text-ink-mute">
              Plate III — Collectible System
            </p>
          </figcaption>
        </figure>
      </div>
    </section>

    {/* OUTCOMES */}
    <section className="border-y-2 border-ink bg-ink text-paper">
      <div className="container py-20 md:py-24">
        <p className="font-mono text-[11px] small-caps text-paper/60 mb-3 tracking-[0.2em]">
          05 · Why It Works
        </p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl mb-14">
          A brand built to be
          <span
            className="italic"
            style={{ color: "hsl(var(--accent-ochre))" }}
          >
            {" "}
            seen, shared, repeated.
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              Icon: Sparkles,
              k: "Visibility",
              v: "Product worn on the outside of the bag — every customer becomes a billboard.",
            },
            {
              Icon: Heart,
              k: "Ritual",
              v: "Charm-collecting drives reapplication & emotional attachment to the object.",
            },
            {
              Icon: TrendingUp,
              k: "Repeatability",
              v: "Blind-box drops create ongoing reasons to return — without new formulas.",
            },
          ].map(({ Icon, k, v }) => (
            <div key={k} className="border-t border-paper/30 pt-6">
              <Icon
                className="size-6 mb-4"
                style={{ color: "hsl(var(--accent-ochre))" }}
              />
              <p className="font-mono text-[10px] small-caps text-paper/60 mb-2">
                {k}
              </p>
              <p className="font-display text-lg leading-relaxed text-paper/90">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA / NEXT */}
    <section className="container py-20 md:py-24 text-center">
      <p className="font-mono text-[11px] small-caps text-accent-red mb-4 tracking-[0.2em]">
        ✦ End of Case I ✦
      </p>
      <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight mb-8">
        Want the rest of the
        <span
          className="italic"
          style={{ color: "hsl(48 90% 70%)" }}
        >
          {" "}
          folio?
        </span>
      </h2>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <Link
          to="/case/sippy"
          className="font-mono text-[11px] small-caps inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 hover:opacity-90 transition-opacity"
        >
          Next: Sippy <ArrowUpRight className="size-3.5" />
        </Link>
        <Link
          to="/"
          className="font-mono text-[11px] small-caps inline-flex items-center gap-2 border border-ink px-5 py-3 hover:bg-paper-deep transition-colors"
        >
          <ArrowLeft className="size-3.5" /> Back to Folio
        </Link>
      </div>
    </section>

    <footer className="border-t-2 border-ink">
      <div className="container py-6 flex items-center justify-between gap-4 flex-wrap">
        <p className="font-mono text-[11px] small-caps text-ink-mute">
          Megan Ho · Veramente Case Study
        </p>
        <p className="font-mono text-[11px] small-caps text-ink-mute">◼</p>
      </div>
    </footer>
  </div>
);

const PLACEHOLDERS: Record<
  string,
  { no: string; name: string; tagline: string; cover: string; tint: string }
> = {
  sippy: {
    no: "II",
    name: "Sippy",
    tagline: "Sparkling blood orange — keep it cute, keep it sippy.",
    cover: sippyLogo,
    tint: "hsl(10 90% 95%)",
  },
  "megs-creami": {
    no: "III",
    name: "Meg's Creami",
    tagline: "Small-batch ice cream — a spoonful of nostalgia.",
    cover: megsCreamiLogo,
    tint: "hsl(350 70% 92%)",
  },
};

const Placeholder = ({ slug }: { slug: string }) => {
  const cs = PLACEHOLDERS[slug];
  if (!cs) {
    return (
      <div className="paper-grain min-h-screen text-ink">
        <div className="container py-24 text-center">
          <p className="font-mono text-[11px] small-caps text-ink-mute mb-4">
            Case not found
          </p>
          <h1 className="font-display text-5xl mb-6">No case study here.</h1>
          <Link
            to="/"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 hover:text-[hsl(48_90%_70%)]"
          >
            <ArrowLeft className="size-3.5" /> Back to Folio
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="paper-grain min-h-screen text-ink">
      <header className="border-b-2 border-ink">
        <div className="container py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 hover:text-[hsl(48_90%_70%)] transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Folio
          </Link>
          <p className="font-mono text-[11px] small-caps text-ink-mute">
            Case · {cs.no} · {cs.name}
          </p>
        </div>
      </header>
      <section className="container py-24 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <p className="font-mono text-[11px] small-caps text-[hsl(48_90%_70%)] mb-4">
            Case Study · No. {cs.no}
          </p>
          <h1 className="font-display font-light leading-[0.9] tracking-tight text-[clamp(3rem,8vw,7rem)]">
            {cs.name}
          </h1>
          <p className="font-display italic text-xl md:text-2xl text-ink-soft mt-6 max-w-xl">
            {cs.tagline}
          </p>
          <p className="font-mono text-[11px] small-caps text-ink-mute mt-10">
            Layout in progress — coming soon.
          </p>
        </div>
        <div className="md:col-span-5">
          <div
            className="aspect-square border border-ink p-6 flex items-center justify-center shadow-[10px_12px_0_0_hsl(var(--ink))]"
            style={{ background: cs.tint }}
          >
            <img
              src={cs.cover}
              alt={`${cs.name} logo`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const CaseStudy = () => {
  const { slug = "" } = useParams();
  if (slug === "veramente") return <Veramente />;
  return <Placeholder slug={slug} />;
};

export default CaseStudy;
