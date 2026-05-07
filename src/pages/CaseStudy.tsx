import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SpotlightTagline from "@/components/SpotlightTagline";
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

import veramenteHeroBg from "@/assets/veramente-hero-bg.png";
import veramenteLogos from "@/assets/veramente-logos.jpg";
import veramentePalette from "@/assets/veramente-palette.jpg";
import veramentePackaging from "@/assets/veramente-packaging.jpg";
import veramentePackDieline from "@/assets/veramente-pack-dieline.png";
import veramentePackCarton from "@/assets/veramente-pack-carton.png";
import veramentePackCharms from "@/assets/veramente-pack-charms.jpg";
import veramenteLogo from "@/assets/veramente-logo.jpg";
import veramenteWordmark from "@/assets/veramente-wordmark.png";
import veramenteTinyBites from "@/assets/veramente-tiny-bites.png";
import veramenteBagCharm from "@/assets/veramente-bag-charm.png";
import veramenteCafe from "@/assets/veramente-cafe.png";
import sippyLogo from "@/assets/sippy-logo.jpg";
import megsCreamiLogo from "@/assets/megs-creami-logo.png";

const Veramente = () => {
  const [heroLayout, setHeroLayout] = useState<"A" | "B" | "C">("A");

  const headlineClass =
    "font-display italic uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2.5rem,7vw,5.25rem)] inline-block mx-0 mt-6 md:mt-8 mb-4 animate-fade-in [animation-duration:900ms] [animation-delay:120ms] [animation-fill-mode:both]";

  const renderHeadline = () => (
    <h1
      className={headlineClass}
      style={{
        color: "#FFF8E0",
        fontWeight: 500,
        textShadow:
          "1px 1px 0 rgba(255,255,255,0.85), 2px 2px 0 rgba(245,225,150,0.55), -1px -1px 1px rgba(160,120,40,0.35), 0 2px 4px rgba(120,85,20,0.22)",
      }}
    >
      Carry your SPF.
    </h1>
  );
  return (
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

    {/* Hero layout switcher */}
    <div className="border-b border-ink/30 bg-paper/80 backdrop-blur sticky top-[49px] z-20">
      <div className="container py-2 flex items-center gap-2 flex-wrap">
        <span className="font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute mr-1">
          Hero ·
        </span>
        {([
          { k: "A", label: "Minimal" },
          { k: "B", label: "Side rail" },
          { k: "C", label: "Bottom band" },
        ] as const).map((opt) => (
          <button
            key={opt.k}
            onClick={() => setHeroLayout(opt.k)}
            className={`font-mono text-[10px] small-caps tracking-[0.2em] px-2.5 py-1 border border-ink transition-colors ${
              heroLayout === opt.k
                ? "bg-ink text-paper"
                : "bg-paper text-ink hover:bg-paper-deep"
            }`}
          >
            {opt.k} · {opt.label}
          </button>
        ))}
      </div>
    </div>

    {/* HERO + AT A GLANCE — shared image background */}
    {heroLayout === "A" && (
      <div
        className="relative border-b-2 border-ink"
        style={{
          backgroundImage: `url(${veramenteHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--paper) / 0.15) 0%, hsl(var(--paper) / 0.35) 70%, hsl(var(--paper) / 0.85) 100%)",
          }}
        />
        <section className="relative">
          <div className="container min-h-[88vh] grid grid-rows-[auto_1fr_auto] py-8 md:py-10">
            <div className="text-center">
              <p className="font-mono text-[11px] small-caps text-accent-red tracking-[0.25em]">
                ✦ Case Study No. I · Beauty · Concept Brand ✦
              </p>
              {renderHeadline()}
            </div>
            <div />
            <div className="text-center max-w-4xl mx-auto pb-2 mt-40 md:mt-52">
              <p className="font-display text-base md:text-xl text-ink leading-relaxed whitespace-nowrap">
                <SpotlightTagline radius={200}>
                  A wearable SPF concept brand that reframes sunscreen as a{" "}
                  <em className="not-italic font-semibold" style={{ color: "hsl(var(--accent-red))" }}>
                    daily accessory people want to show off.
                  </em>
                </SpotlightTagline>
              </p>
              <p className="font-mono text-[10px] small-caps text-ink-mute tracking-[0.25em] mt-5">
                Plate I · Veramente
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-t border-ink/30 bg-paper/70 backdrop-blur-sm">
          <div className="container py-8 grid md:grid-cols-3 gap-6">
            {[
              ["Category", "Skincare · Accessory"],
              ["Tools", "Figma · Canva · AI Mockups"],
              ["Year", "2025 — Concept"],
            ].map(([k, v]) => (
              <div key={k} className="border-l-2 border-ink/40 pl-4">
                <p className="font-mono text-[10px] small-caps text-ink-mute mb-1">{k}</p>
                <p className="font-display text-base leading-snug">{v}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    )}

    {heroLayout === "B" && (
      <div className="relative border-b-2 border-ink grid md:grid-cols-12">
        {/* Left rail — paper column */}
        <div className="md:col-span-5 lg:col-span-4 bg-paper border-r-2 border-ink relative z-10">
          <div className="px-8 md:px-10 py-12 md:py-16 flex flex-col h-full">
            <p className="font-mono text-[11px] small-caps text-accent-red mb-8 tracking-[0.25em]">
              ✦ Case · No. I ✦
            </p>
            <h1 className="font-display italic uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2.5rem,6vw,4.5rem)]"
              style={{ color: "hsl(48 90% 60%)", fontWeight: 500 }}>
              Carry your SPF.
            </h1>
            <p className="font-display text-lg md:text-xl text-ink-soft mt-6 leading-relaxed">
              A wearable SPF concept brand that reframes sunscreen as a{" "}
              <em className="not-italic font-semibold" style={{ color: "hsl(var(--accent-red))" }}>
                daily accessory people want to show off.
              </em>
            </p>
            <div className="mt-10 pt-8 border-t border-ink/30 grid grid-cols-1 gap-5">
              {[
                ["Category", "Skincare · Accessory"],
                ["Tools", "Figma · Canva · AI Mockups"],
                ["Year", "2025 — Concept"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-3 border-b border-ink/15 pb-2">
                  <p className="font-mono text-[10px] small-caps text-ink-mute tracking-[0.25em]">{k}</p>
                  <p className="font-display text-sm">{v}</p>
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] small-caps text-ink-mute tracking-[0.25em] mt-auto pt-10">
              Beauty · Concept Brand
            </p>
          </div>
        </div>
        {/* Right — full background */}
        <div
          className="md:col-span-7 lg:col-span-8 min-h-[60vh] md:min-h-[88vh] relative"
          style={{
            backgroundImage: `url(${veramenteHeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="absolute top-6 right-6 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1 tracking-[0.2em]">
            Plate I · SPF 50
          </span>
        </div>
      </div>
    )}

    {heroLayout === "C" && (
      <div className="border-b-2 border-ink">
        {/* Top — image */}
        <div
          className="relative w-full"
          style={{
            backgroundImage: `url(${veramenteHeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "clamp(320px, 58vh, 640px)",
          }}
        >
          <div className="container h-full">
            <div className="pt-6 flex items-start justify-between">
              <p className="font-mono text-[11px] small-caps text-ink tracking-[0.25em] bg-paper/80 backdrop-blur px-3 py-1.5">
                ✦ Case Study No. I · Veramente ✦
              </p>
              <p className="font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1 tracking-[0.2em]">
                SPF · 50
              </p>
            </div>
          </div>
        </div>
        {/* Bottom — paper band */}
        <section className="bg-paper border-t-2 border-ink">
          <div className="container py-12 md:py-16 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="font-display italic uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2.5rem,7vw,5.5rem)]"
                style={{ color: "hsl(48 90% 60%)", fontWeight: 500 }}>
                Carry your SPF.
              </h1>
              <p className="font-display text-lg md:text-xl text-ink-soft mt-6 max-w-2xl leading-relaxed">
                A wearable SPF concept brand that reframes sunscreen as a{" "}
                <em className="not-italic font-semibold" style={{ color: "hsl(var(--accent-red))" }}>
                  daily accessory people want to show off.
                </em>
              </p>
            </div>
            <div className="md:col-span-4 grid grid-cols-1 gap-4">
              {[
                ["Category", "Skincare · Accessory"],
                ["Tools", "Figma · Canva · AI Mockups"],
                ["Year", "2025 — Concept"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-3 border-b border-ink/20 pb-2">
                  <p className="font-mono text-[10px] small-caps text-ink-mute tracking-[0.25em]">{k}</p>
                  <p className="font-display text-sm">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )}


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
    <section className="border-y-2 border-ink text-paper" style={{ background: "#55573F" }}>
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

    {/* PRODUCT WORLD — campaign as product */}
    <section className="container py-20 md:py-28">
      {/* Section header */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end mb-10 md:mb-12">
        <div className="md:col-span-7">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-4 tracking-[0.2em]">
            ✦ 04 · The Product World ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
            The product
            <span className="italic block" style={{ color: "hsl(48 90% 70%)" }}>
              is the campaign.
            </span>
          </h2>
        </div>
        <div className="md:col-span-5 md:pl-8 md:border-l-2 md:border-ink/20">
          <p className="font-display text-lg md:text-xl text-ink-soft leading-relaxed">
            No paid media. The charm <em className="not-italic font-semibold" style={{ color: "hsl(var(--accent-red))" }}>is</em> the ad — worn on bags, photographed in cafés, traded in blind boxes.
          </p>
          <p className="font-mono text-[10px] small-caps text-ink-mute tracking-[0.25em] mt-5">
            Mockups · Figma + AI lifestyle frames
          </p>
        </div>
      </div>

      {(() => {
        const products = [
          {
            n: "01",
            label: "In The Wild",
            img: veramenteCafe,
            title: "Café tables, sun-soaked moments.",
            body: "Lifestyle frames stage the charm in everyday rituals — coffee runs, market mornings, weekend wandering. The product photographs itself.",
            meta: ["Lifestyle", "Outdoor", "UGC-ready"],
            accent: "hsl(var(--accent-red))",
          },
          {
            n: "02",
            label: "Wear It Daily",
            img: veramenteBagCharm,
            title: "Bag-clipped, never buried.",
            body: "Worn on the outside of the bag, the SPF stick becomes a styling object. Every customer turns into a quiet billboard for the brand.",
            meta: ["Bag-clip", "Visibility", "Daily wear"],
            accent: "hsl(var(--accent-ochre))",
          },
          {
            n: "03",
            label: "Tiny Bites",
            img: veramenteTinyBites,
            title: "Blind-box collectible drops.",
            body: "A growing system of mini food charms — apple pie, cookie, watermelon, cake — turns reapplication into a collecting ritual.",
            meta: ["Blind-box", "Collectible", "Drop-based"],
            accent: "hsl(48 90% 70%)",
          },
        ];

        return (
          <div className="border-2 border-ink bg-paper">
            <div className="grid grid-cols-12 border-b border-ink px-5 py-3 bg-paper-deep">
              <span className="col-span-1 font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute">No.</span>
              <span className="col-span-3 font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute">Plate</span>
              <span className="col-span-4 font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute">Concept</span>
              <span className="col-span-4 font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute">Tags</span>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-ink">
              {products.map((p) => (
                <article key={p.n} className="p-6 flex flex-col">
                  <div
                    className="relative aspect-square border-2 border-ink bg-paper-deep overflow-hidden mb-5"
                    style={{ boxShadow: `5px 6px 0 0 ${p.accent}` }}
                  >
                    <img
                      src={p.img}
                      alt={`Veramente ${p.label.toLowerCase()}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-baseline gap-3 mb-2 pb-2 border-b border-rule">
                    <span className="font-display text-4xl leading-none" style={{ color: p.accent }}>
                      {p.n}
                    </span>
                    <span className="font-mono text-[11px] small-caps tracking-[0.25em]">
                      · {p.label} ·
                    </span>
                  </div>
                  <h4 className="font-display text-xl leading-tight mb-2">
                    {p.title}
                  </h4>
                  <p className="font-body text-[14px] text-ink-soft leading-relaxed mb-4">
                    {p.body}
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {p.meta.map((m) => (
                      <li
                        key={m}
                        className="font-mono text-[10px] small-caps tracking-[0.2em] border border-ink px-2 py-1"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        );
      })()}
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
};

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
