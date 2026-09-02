import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SpotlightTagline from "@/components/SpotlightTagline";
import { ArrowLeft, ArrowUpRight, Lightbulb, Eye, Package, Sparkles, TrendingUp, Heart } from "lucide-react";

import veramenteHeroBg from "@/assets/veramente-hero-bg.jpg";
import veramenteWordmarkScript from "@/assets/veramente-wordmark-script.png";
import veramenteCarrySpf from "@/assets/veramente-carry-spf.png";
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
import veramenteLightTheme from "@/assets/veramente-light_theme.jpg";
import veramenteDarkTheme from "@/assets/veramente-dark_theme.jpg";
import veramenteStories from "@/assets/veramente-insta_stories.jpg";
import veramenteEdm from "@/assets/veramente-edm.jpg";
import sippyLogo from "@/assets/sippy-logo.jpg";
import sippyBrandBoard from "@/assets/sippy-brand-board.jpg";
import sippyHeroBg from "@/assets/sippy-hero-bg.jpg";
import sippyCans from "@/assets/sippy-cans.png";
import sippyCanDesk from "@/assets/sippy-can-desk.png";
import sippyShelf from "@/assets/sippy-shelf.png";
import sippyLight from "@/assets/sippy-light_theme.jpg";
import sippyDark from "@/assets/sippy-dark_theme.jpg";
import sippyStories from "@/assets/sippy-sippy_insta_stories.jpg";
import sippyEdm from "@/assets/sippy-sippy_edm_1.jpg";
import megsCreamiLogo from "@/assets/megs-creami-logo.png";
import megsCreamiHeroBg from "@/assets/megs-creami-hero-bg.png";
import megsCreamiPints from "@/assets/megs-creami-pints.png";
import megsCreamiBrandBoard from "@/assets/megs-creami-brand-board.png";
import megsCreamiLifestyle from "@/assets/megs-creami-lifestyle.png";
import megsCreamiShelf from "@/assets/megs-creami-shelf.png";
import megsCreamiWordmarkCard from "@/assets/megs-creami-wordmark-card.jpg";

type HintPos = "top" | "bottom" | "left" | "right" | "center";

const hintPosClasses: Record<HintPos, string> = {
  top: "absolute left-1/2 -translate-x-1/2 -top-12 md:-top-16",
  bottom: "absolute left-1/2 -translate-x-1/2 -bottom-12 md:-bottom-16",
  left: "absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 -rotate-90 origin-center",
  right: "absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 rotate-90 origin-center",
  center: "block mt-10 md:mt-14 mb-2 md:mb-3 mx-auto translate-y-[20%]",
};

const Veramente = () => {
  const [heroLayout, setHeroLayout] = useState<"A" | "B" | "C">("A");
  const [hintPos, setHintPos] = useState<HintPos>("center");
  const [feedMode, setFeedMode] = useState<"light" | "dark">("light");

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
          <p className="font-mono text-[11px] small-caps text-ink-mute">Case · I · Veramente</p>
          <Link
            to="/case/sippy"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-1 hover:text-[hsl(48_90%_70%)] transition-colors"
          >
            Next Case <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </header>

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
          <section className="relative">
            <div className="container min-h-[88vh] grid grid-rows-[auto_1fr_auto] py-8 md:py-10">
              <div className="text-center">
                <p className="font-mono text-[11px] small-caps tracking-[0.25em]" style={{ color: '#ffffff85' }}>
                  ✦ Case Study No. I · Beauty · Concept Brand ✦
                </p>
                <img
                  src={veramenteWordmarkScript}
                  alt="Veramente"
                  className="block mx-auto mt-10 md:mt-14 w-[clamp(280px,42vw,640px)] h-auto animate-fade-in [animation-duration:900ms] [animation-delay:120ms] [animation-fill-mode:both]"
                  style={{ filter: "invert(1) brightness(1.05)" }}
                />
              </div>
              <div />
              <div className="text-center max-w-4xl mx-auto pb-2 mt-40 md:mt-52">
                <img
                  src={veramenteCarrySpf}
                  alt="Carry your SPF."
                  className="block mx-auto w-[clamp(180px,22vw,340px)] h-auto"
                />
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
              <h1
                className="font-display italic uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2.5rem,6vw,4.5rem)]"
                style={{ color: "hsl(48 90% 60%)", fontWeight: 500 }}
              >
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
                <h1
                  className="font-display italic uppercase tracking-[-0.03em] leading-[0.9] text-[clamp(2.5rem,7vw,5.5rem)]"
                  style={{ color: "hsl(48 90% 60%)", fontWeight: 500 }}
                >
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
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">01 · The Brief</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
            People skip SPF when it&rsquo;s
            <span className="italic" style={{ color: "hsl(48 90% 70%)" }}>
              {" "}
              hidden.
            </span>
          </h2>
        </div>
        <div className="md:col-span-8 md:pt-3">
          <p className="font-display text-lg md:text-xl text-ink-soft leading-relaxed mb-6">
            Sunscreen is the most-skipped step in skincare — not because it doesn&rsquo;t work, but because it lives at
            the bottom of a bag. The opportunity wasn&rsquo;t a better formula. It was a{" "}
            <strong className="text-ink font-semibold">better behaviour</strong>.
          </p>
          <p className="font-display italic text-lg md:text-xl text-ink-soft leading-relaxed">
            Veramente turns SPF into something you <em className="not-italic text-ink font-semibold">wear</em> — a charm
            on your bag, a small ritual on the go, a brand cue people see before they ever read the label.
          </p>
        </div>
      </section>

      {/* BIG PULL QUOTE */}
      <section className="border-y-2 border-ink text-paper" style={{ background: "#55573F" }}>
        <div className="container py-16 md:py-24 text-center">
          <p className="font-mono text-[11px] small-caps text-paper/60 mb-6 tracking-[0.3em]">✦ Brand Promise ✦</p>
          <blockquote className="font-display italic font-light text-4xl md:text-7xl leading-[1.05] tracking-tight max-w-5xl mx-auto">
            &ldquo;Wear it, don&rsquo;t hide it.&rdquo;
          </blockquote>
          <p className="font-mono text-[11px] small-caps text-paper/60 mt-8">— Aesthetic = Adherence</p>
        </div>
      </section>

      {/* IDENTITY BOARD — Split spread (B) + Numbered notes (C) */}
      <section className="container py-20 md:py-28">
        {/* Spread: Branding column (left) + Identity board (right) */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* LEFT — Branding column */}
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-20">
            <p className="font-mono text-[11px] small-caps text-accent-red mb-4 tracking-[0.2em]">02 · Branding</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight mb-6">
              A sun-bleached
              <span className="italic" style={{ color: "hsl(48 90% 70%)" }}>
                {" "}
                language.
              </span>
            </h2>
            <p className="font-display text-base text-ink-soft leading-relaxed mb-8">
              Soft confidence — skincare that whispers. A warm palette borrowed from late-afternoon light, paired with a
              tactile wordmark and a charm-loop mark that doubles as the product silhouette.
            </p>

            {/* At-a-glance table */}
            <dl className="border-t border-ink/30">
              {[
                ["Palette", "Peach · Olive · Taupe"],
                ["Type", "Script + clean serif"],
                ["Tools", "Figma · Canva · AI"],
                ["Deliverables", "Identity, packaging, copy"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-5 gap-3 py-2.5 border-b border-ink/30">
                  <dt className="col-span-2 font-mono text-[10px] small-caps text-ink-mute pt-0.5">{k}</dt>
                  <dd className="col-span-3 font-display text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="font-display italic text-base text-ink-soft mt-6 leading-relaxed">
              &ldquo;Soft confidence — skincare that <span style={{ color: "hsl(48 90% 70%)" }}>whispers.</span>&rdquo;
            </p>
          </div>

          {/* RIGHT — Stacked identity board (Sippy-faithful) */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="border-2 border-ink bg-paper shadow-[12px_14px_0_0_hsl(var(--accent-ochre))] overflow-hidden">
              {/* Plate header */}
              <div className="flex items-center justify-between gap-4 px-4 py-2 border-b-2 border-ink bg-paper-deep/50">
                <p className="font-mono text-[10px] small-caps tracking-[0.25em]">Plate II · Identity Board</p>
                <p className="font-mono text-[10px] small-caps text-ink-mute">Logo system + palette</p>
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
                <span className="font-mono text-[10px] small-caps text-ink-mute">Fig. 01–02</span>
              </figcaption>
            </div>
          </div>
        </div>

        {/* Design Notes — 2x2 card grid, larger body, clearer hierarchy */}
        <div className="mt-16 md:mt-20 border-t-2 border-ink pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-end mb-8">
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] small-caps text-accent-red tracking-[0.2em] mb-3">Design Notes</p>
              <h3 className="font-display text-3xl md:text-4xl leading-[0.95] tracking-tight">
                Four ideas behind
                <span className="italic" style={{ color: "hsl(48 90% 70%)" }}>
                  {" "}
                  the marks.
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
                  <span className="font-display text-5xl leading-none" style={{ color: "hsl(48 90% 70%)" }}>
                    {no}
                  </span>
                  <span className="font-mono text-[10px] small-caps text-ink-mute tracking-[0.2em]">· {tag} ·</span>
                </div>
                <h4 className="font-display text-2xl leading-tight mb-3 text-ink">{title}</h4>
                <p className="font-body text-[15px] text-ink-soft leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Packaging plate — three image + caption rows */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-3 mb-8">
            <div>
              <p className="font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute mb-1">Plate III</p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">Packaging & Charms</h3>
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
                    <span className="font-display text-5xl leading-none text-[hsl(48_90%_70%)]">{c.n}</span>
                    <span className="font-mono text-[11px] small-caps tracking-[0.25em] text-ink">· {c.label} ·</span>
                  </div>
                  <h4 className="font-display text-2xl md:text-[26px] leading-tight mb-3 text-ink">{c.title}</h4>
                  <p className="font-body text-[15px] text-ink-soft leading-relaxed mb-5">{c.body}</p>
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

        {/* SOCIAL & EDM — Plate IV */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-3 mb-8">
            <div>
              <p className="font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute mb-1">Plate IV</p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">Social &amp; EDM</h3>
            </div>
            <p className="font-mono text-[10px] small-caps text-ink-mute hidden sm:block">
              Feed · Stories · Email
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                n: "01",
                label: "Feed",
                img: feedMode === "light" ? veramenteLightTheme : veramenteDarkTheme,
                alt:
                  feedMode === "light"
                    ? "Veramente Instagram profile, gallery and post views in light theme"
                    : "Veramente Instagram profile, gallery and post views in dark theme",
                caption: "Profile, grid and post — tap the button to flip between light and dark.",
                span: true,
                toggle: true,
              },
              {
                n: "02",
                label: "Stories",
                img: veramenteStories,
                alt: "Veramente Instagram story frame",
                caption: "A full-bleed story frame — your SPF habits, on the go.",
                span: false,
              },
              {
                n: "03",
                label: "EDM",
                img: veramenteEdm,
                alt: "Veramente launch email newsletter",
                caption: "Launch email — wear it, don't hide it.",
                span: false,
              },
            ].map((s) => (
              <figure
                key={s.n}
                className={`border-2 border-ink bg-paper shadow-[8px_10px_0_0_hsl(var(--accent-ochre))] overflow-hidden flex flex-col ${
                  s.span ? "md:col-span-2" : ""
                }`}
              >
                <figcaption className="flex items-center justify-between gap-4 px-4 py-2 border-b-2 border-ink bg-paper-deep/50">
                  <p className="font-mono text-[10px] small-caps tracking-[0.25em]">
                    Fig. {s.n} · {s.label}
                  </p>
                  <span className="font-mono text-[10px] small-caps text-ink-mute">Veramente</span>
                </figcaption>
                <div className="relative bg-paper-deep/40 p-4 flex-1 flex items-center justify-center">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className={`block w-full h-auto object-contain ${s.span ? "" : "max-h-[620px] w-auto mx-auto"}`}
                  />
                  {s.toggle && (
                    <button
                      type="button"
                      onClick={() => setFeedMode((m) => (m === "light" ? "dark" : "light"))}
                      className="absolute bottom-5 right-5 z-10 font-mono text-[10px] small-caps tracking-[0.2em] border-2 border-ink bg-paper px-4 py-2 shadow-[4px_4px_0_0_hsl(var(--accent-ochre))] hover:shadow-[6px_6px_0_0_hsl(var(--accent-ochre))] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                      aria-label={`Switch to ${feedMode === "light" ? "dark" : "light"} mode`}
                    >
                      {feedMode === "light" ? "◐ Switch to Dark" : "◑ Switch to Light"}
                    </button>
                  )}
                </div>
                <p className="font-display italic text-sm px-4 py-3 border-t-2 border-ink">{s.caption}</p>
              </figure>
            ))}
          </div>
        </div>
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
              <span className="italic" style={{ color: "hsl(48 90% 70%)" }}>
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
                <Icon className="size-6 mb-4" style={{ color: "hsl(var(--accent-red))" }} />
                <p className="font-mono text-[10px] small-caps text-ink-mute mb-2">{no}</p>
                <h3 className="font-display text-2xl leading-tight mb-3">{title}</h3>
                <p className="font-display italic text-base text-ink-soft leading-relaxed">{body}</p>
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
              No paid media. The charm{" "}
              <em className="not-italic font-semibold" style={{ color: "hsl(var(--accent-red))" }}>
                is
              </em>{" "}
              the ad — worn on bags, photographed in cafés, traded in blind boxes.
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
                <span className="col-span-3 font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute">
                  Plate
                </span>
                <span className="col-span-4 font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute">
                  Concept
                </span>
                <span className="col-span-4 font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute">
                  Tags
                </span>
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
                      <span className="font-mono text-[11px] small-caps tracking-[0.25em]">· {p.label} ·</span>
                    </div>
                    <h4 className="font-display text-xl leading-tight mb-2">{p.title}</h4>
                    <p className="font-body text-[14px] text-ink-soft leading-relaxed mb-4">{p.body}</p>
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
      <section className="border-y-2 border-ink text-paper" style={{ backgroundColor: "#55573F" }}>
        <div className="container py-20 md:py-24">
          <p className="font-mono text-[11px] small-caps text-paper/60 mb-3 tracking-[0.2em]">05 · Why It Works</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl mb-14">
            A brand built to be
            <span className="italic" style={{ color: "#F3E5A0" }}>
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
                <Icon className="size-6 mb-4" style={{ color: "hsl(var(--accent-ochre))" }} />
                <p className="font-mono text-[10px] small-caps text-paper/60 mb-2">{k}</p>
                <p className="font-display text-lg leading-relaxed text-paper/90">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / NEXT */}
      <section className="container py-20 md:py-24 text-center">
        <p className="font-mono text-[11px] small-caps text-accent-red mb-4 tracking-[0.2em]">✦ End of Case I ✦</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight mb-8">
          Want the rest of the
          <span className="italic" style={{ color: "hsl(48 90% 70%)" }}>
            {" "}
            folio?
          </span>
        </h2>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/case/sippy"
            className="group font-mono text-[11px] small-caps inline-flex items-center gap-2 bg-ink text-paper pl-2 pr-5 py-2 hover:opacity-90 transition-opacity"
          >
            <img
              src={sippyLogo}
              alt=""
              aria-hidden
              className="size-7 rounded-full object-cover ring-2 ring-paper/80 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
            />
            Next: Sippy <ArrowUpRight className="size-3.5" />
          </Link>
          <Link
            to="/"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 border border-ink px-5 py-3 hover:bg-paper-deep transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Folio
          </Link>
          <Link
            to="/#contact"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
          >
            Contact <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </section>

      <footer className="border-t-2 border-ink">
        <div className="container py-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="font-mono text-[11px] small-caps text-ink-mute">Megan Ho · Veramente Case Study</p>
          <p className="font-mono text-[11px] small-caps text-ink-mute">◼</p>
        </div>
      </footer>
    </div>
  );
};

const SIPPY_BG_STORAGE_KEY = "sippy:hero-bg-pos";

const Sippy = () => {
  const [hintPos] = useState<HintPos>("center");
  const [preview169, setPreview169] = useState(false);
  const [bgPosX, setBgPosX] = useState(50);
  const [bgPosY, setBgPosY] = useState(70);
  const [savedToast, setSavedToast] = useState<string | null>(null);
  const [feedMode, setFeedMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SIPPY_BG_STORAGE_KEY);
      if (raw) {
        const { x, y } = JSON.parse(raw);
        if (typeof x === "number") setBgPosX(x);
        if (typeof y === "number") setBgPosY(y);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const handleSave = () => {
    try {
      localStorage.setItem(SIPPY_BG_STORAGE_KEY, JSON.stringify({ x: bgPosX, y: bgPosY }));
      setSavedToast("Saved");
    } catch {
      setSavedToast("Save failed");
    }
    setTimeout(() => setSavedToast(null), 1500);
  };

  const handleLoad = () => {
    try {
      const raw = localStorage.getItem(SIPPY_BG_STORAGE_KEY);
      if (raw) {
        const { x, y } = JSON.parse(raw);
        if (typeof x === "number") setBgPosX(x);
        if (typeof y === "number") setBgPosY(y);
        setSavedToast("Loaded");
      } else {
        setSavedToast("Nothing saved");
      }
    } catch {
      setSavedToast("Load failed");
    }
    setTimeout(() => setSavedToast(null), 1500);
  };

  const headlineClass =
    "font-display italic uppercase tracking-[-0.03em] leading-[0.9] inline-block mx-0 mt-6 md:mt-8 mb-4 animate-fade-in [animation-duration:900ms] [animation-delay:120ms] [animation-fill-mode:both] text-6xl";

  return (
    <div className="paper-grain min-h-screen text-ink">
      <header className="border-b-2 border-ink sticky top-0 z-30 bg-paper/80 backdrop-blur">
        <div className="container py-3 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 hover:text-[hsl(10_80%_60%)] transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Folio
          </Link>
          <p className="font-mono text-[11px] small-caps text-ink-mute">Case · II · Sippy</p>
          <Link
            to="/case/megs-creami"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-1 hover:text-[hsl(10_80%_60%)] transition-colors"
          >
            Next Case <ArrowUpRight className="size-3" />
          </Link>
        </div>
        {savedToast && (
          <p
            className="absolute right-4 top-full mt-2 font-mono text-[10px] small-caps bg-ink text-paper px-3 py-1 shadow-[4px_4px_0_0_hsl(var(--accent-red))]"
            aria-live="polite"
          >
            {savedToast}
          </p>
        )}
      </header>

      <div
        className="relative border-b-2 border-ink"
        style={{
          backgroundImage: `url(${sippyHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: `${bgPosX}% ${bgPosY}%`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#F4B8B8",
          ...(preview169 ? { aspectRatio: "16 / 9" as const, overflow: "hidden" as const } : {}),
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsl(var(--paper) / 0.05) 0%, hsl(var(--paper) / 0.08) 100%)",
          }}
        />
        <section className="relative">
          <div className="container min-h-[88vh] grid grid-rows-[auto_1fr_auto] py-8 md:py-10">
            <div className="text-center">
              <p className="font-mono text-[11px] small-caps tracking-[0.25em]" style={{ color: '#595959' }}>
                ✦ Case Study No. II · Beverage · Concept Brand ✦
              </p>
              <h1
                className="uppercase tracking-[-0.01em] leading-[0.95] text-[clamp(2.5rem,7vw,5.25rem)] inline-block mx-0 mt-6 md:mt-8 mb-4 animate-fade-in [animation-duration:900ms] [animation-delay:120ms] [animation-fill-mode:both]"
                style={{
                  color: "#FE2E08",
                  fontFamily: "'Caprasimo', serif",
                  fontWeight: 400,
                }}
              ></h1>
            </div>
            <div />
            <div className="text-center max-w-4xl mx-auto pb-2 mt-40 md:mt-52">
              <div className="relative inline-block w-full">
                <p
                  className="text-base md:text-xl text-ink leading-relaxed md:whitespace-nowrap"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 500,
                    fontVariationSettings: "'SOFT' 100, 'WONK' 1",
                  }}
                >
                  <SpotlightTagline radius={260} dimOpacity={0}>
                    Tastes like a treat, drinks like a habit —{" "}
                    <em className="not-italic font-semibold" style={{ color: "hsl(10 80% 50%)" }}>
                      just 80 kcal of sparkling, feel-good fizz.
                    </em>
                  </SpotlightTagline>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-ink/30 bg-paper/70 backdrop-blur-sm">
          <div className="container py-8 grid md:grid-cols-3 gap-6">
            {[
              ["Category", "Beverage · Lifestyle"],
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

      <section className="container py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">01 · The Brief</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
            Functional drinks feel
            <span className="italic" style={{ color: "hsl(10 80% 60%)" }}>
              {" "}
              clinical.
            </span>
          </h2>
        </div>
        <div className="md:col-span-8 md:pt-3">
          <p className="font-display text-lg md:text-xl text-ink-soft leading-relaxed mb-6">
            The wellness aisle is full of beige cans shouting electrolytes, adaptogens, and acronyms. The opportunity
            wasn&rsquo;t a new formula. It was a <strong className="text-ink font-semibold">softer feeling</strong>.
          </p>
          <p className="font-display italic text-lg md:text-xl text-ink-soft leading-relaxed">
            Sippy turns a sparkling blood orange drink into{" "}
            <em className="not-italic text-ink font-semibold">a little treat</em> — a cute can you want on your desk, in
            your tote, on your feed.
          </p>
        </div>
      </section>

      <section className="border-y-2 border-ink text-paper" style={{ background: "#E89B7A" }}>
        <div className="container py-16 md:py-24 text-center">
          <p className="font-mono text-[11px] small-caps text-paper/70 mb-6 tracking-[0.3em]">✦ Brand Promise ✦</p>
          <blockquote className="font-display italic font-light text-4xl md:text-7xl leading-[1.05] tracking-tight max-w-5xl mx-auto">
            &ldquo;Keep it cute, keep it sippy.&rdquo;
          </blockquote>
          <p className="font-mono text-[11px] small-caps text-paper/70 mt-8">— Hydration as a happy little habit</p>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-20">
            <p className="font-mono text-[11px] small-caps text-accent-red mb-4 tracking-[0.2em]">02 · Branding</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight mb-6">
              A pink-citrus
              <span className="italic" style={{ color: "hsl(10 80% 60%)" }}>
                {" "}
                world.
              </span>
            </h2>
            <p className="font-display text-base text-ink-soft leading-relaxed mb-8">
              Playful, fizzy, a little flirty. A blush-and-blood-orange palette, squiggly hand-drawn marks, and a
              wordmark that bounces — the opposite of a sterile wellness label.
            </p>
            <dl className="border-t border-ink/30">
              {[
                ["Palette", "Blush · Blood orange · Cream"],
                ["Type", "Bouncy display + clean sans"],
                ["Tools", "Figma · Canva · AI"],
                ["Deliverables", "Identity, can, campaign"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-5 gap-3 py-2.5 border-b border-ink/30">
                  <dt className="col-span-2 font-mono text-[10px] small-caps text-ink-mute pt-0.5">{k}</dt>
                  <dd className="col-span-3 font-display text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="font-display italic text-base text-ink-soft mt-6 leading-relaxed">
              &ldquo;A drink that <span style={{ color: "hsl(10 80% 60%)" }}>giggles</span> on the shelf.&rdquo;
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <div className="border-2 border-ink bg-paper shadow-[12px_14px_0_0_hsl(10_70%_75%)] overflow-hidden">
              <div className="flex items-center justify-between gap-4 px-4 py-2 border-b-2 border-ink bg-paper-deep/50">
                <p className="font-mono text-[10px] small-caps tracking-[0.25em]">Plate II · Identity Board</p>
                <p className="font-mono text-[10px] small-caps text-ink-mute">Logo system + palette</p>
              </div>
              <img src={sippyBrandBoard} alt="Sippy brand board" className="block w-full h-auto" />
              <figcaption className="px-4 py-3 border-t-2 border-ink flex items-baseline justify-between gap-3 flex-wrap">
                <p className="font-display italic text-sm">
                  A wordmark, a wiggle, a wink — three ways to say the same thing.
                </p>
                <span className="font-mono text-[10px] small-caps text-ink-mute">Fig. 01–03</span>
              </figcaption>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 border-t-2 border-ink pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-end mb-8">
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] small-caps text-accent-red tracking-[0.2em] mb-3">Design Notes</p>
              <h3 className="font-display text-3xl md:text-4xl leading-[0.95] tracking-tight">
                Four ideas behind
                <span className="italic" style={{ color: "hsl(10 80% 60%)" }}>
                  {" "}
                  the can.
                </span>
              </h3>
            </div>
            <p className="md:col-span-5 font-display italic text-base text-ink-soft leading-relaxed md:text-right">
              The thinking that shaped every squiggle, color, and curve.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                no: "01",
                title: "Cute over clinical",
                body: "The opposite of beige wellness. Soft pinks, juicy oranges, hand-drawn squiggles — a drink that feels like a treat, not a supplement.",
                tag: "Tone",
              },
              {
                no: "02",
                title: "A wordmark that bounces",
                body: "The Sippy logo wobbles a little — letterforms feel hand-drawn and joyful, like the drink itself is winking at you.",
                tag: "Identity",
              },
              {
                no: "03",
                title: "Designed for the desk",
                body: "The can is built to be displayed — pretty enough to leave on a desk, photogenic enough to share without a filter.",
                tag: "Form",
              },
              {
                no: "04",
                title: "Hydration as a happy habit",
                body: "Reframing a daily drink as a tiny treat. The aesthetic is the reason you reach for one — and the next.",
                tag: "Strategy",
              },
            ].map(({ no, title, body, tag }) => (
              <li
                key={no}
                className="relative bg-paper border-2 border-ink p-6 md:p-7 shadow-[6px_8px_0_0_hsl(var(--ink))] hover:shadow-[10px_12px_0_0_hsl(10_70%_75%)] transition-shadow"
              >
                <div className="flex items-baseline justify-between gap-4 mb-4 pb-3 border-b border-ink/20">
                  <span className="font-display text-5xl leading-none" style={{ color: "hsl(10 80% 60%)" }}>
                    {no}
                  </span>
                  <span className="font-mono text-[10px] small-caps text-ink-mute tracking-[0.2em]">· {tag} ·</span>
                </div>
                <h4 className="font-display text-2xl leading-tight mb-3 text-ink">{title}</h4>
                <p className="font-body text-[15px] text-ink-soft leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-3 mb-8">
            <div>
              <p className="font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute mb-1">Plate III</p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">Can &amp; World</h3>
            </div>
            <p className="font-mono text-[10px] small-caps text-ink-mute hidden sm:block">Wordmark · Can · Lifestyle</p>
          </div>

          <div className="space-y-6">
            {[
              {
                n: "01",
                label: "Wordmark",
                img: sippyLogo,
                ratio: "16 / 10",
                title: "Bouncy, blushy, never serious.",
                body: "A bespoke wordmark with a wobble — letters that feel like they were squeezed by hand, paired with a soft pink-and-orange palette.",
                meta: ["Hand-drawn", "Pink + orange", "Display"],
              },
              {
                n: "02",
                label: "Can",
                img: sippyCanDesk,
                ratio: "16 / 10",
                title: "At home on a pink-tiled shelf.",
                body: "Styled against terrazzo and soft pink tile, the can holds its own next to mushroom lamps and monstera leaves — a little object of desire that quietly belongs in the scene.",
                meta: ["440ml · Sparkling", "Blood orange", "Still-life"],
              },
              {
                n: "03",
                label: "Cans In Hand",
                img: sippyCans,
                ratio: "16 / 10",
                title: "Only 80 kcal of pure joy.",
                body: "440ml of sparkling blood orange at just 80 calories a can — light, refreshing, and built to slot into a healthy lifestyle without feeling like a compromise. A treat you can reach for daily, guilt-free, between workouts, work calls, and slow Sunday mornings.",
                meta: ["80 kcal", "440ml", "Better-for-you"],
              },
              {
                n: "04",
                label: "Retail",
                img: sippyShelf,
                ratio: "16 / 10",
                title: "Standing out in the cooler aisle.",
                body: "Lined up on the shop shelf, the blush pink cans and juicy orange wordmark cut clean through a sea of beige wellness — instantly recognizable, impossible to scroll past, priced to be picked up.",
                meta: ["Shelf", "Retail"],
              },
            ].map((c, i) => (
              <article
                key={c.n}
                className={`grid md:grid-cols-12 gap-0 border-2 border-ink bg-paper shadow-[8px_10px_0_0_hsl(10_80%_60%)] overflow-hidden ${i % 2 === 1 ? "md:[&>figure]:order-2" : ""}`}
              >
                <figure className="md:col-span-7 bg-paper-deep border-b-2 md:border-b-0 md:border-r-2 border-ink">
                  <div className="relative w-full" style={{ aspectRatio: c.ratio }}>
                    <img
                      src={c.img}
                      alt={`Sippy ${c.label.toLowerCase()}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                </figure>
                <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-rule">
                    <span className="font-display text-5xl leading-none" style={{ color: "hsl(10 80% 60%)" }}>
                      {c.n}
                    </span>
                    <span className="font-mono text-[11px] small-caps tracking-[0.25em] text-ink">· {c.label} ·</span>
                  </div>
                  <h4 className="font-display text-2xl md:text-[26px] leading-tight mb-3 text-ink">{c.title}</h4>
                  <p className="font-body text-[15px] text-ink-soft leading-relaxed mb-5">{c.body}</p>
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

        <div className="mt-16 md:mt-20">
          <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-3 mb-8">
            <div>
              <p className="font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute mb-1">Plate IV</p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">Social &amp; EDM</h3>
            </div>
            <p className="font-mono text-[10px] small-caps text-ink-mute hidden sm:block">
              Feed · Stories · Email
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                n: "01",
                label: "Feed",
                img: feedMode === "light" ? sippyLight : sippyDark,
                alt:
                  feedMode === "light"
                    ? "Sippy Instagram profile, gallery and post views in light theme"
                    : "Sippy Instagram profile, gallery and post views in dark theme",
                caption: "Profile, grid and post — tap the button to flip between light and dark.",
                span: true,
                toggle: true,
              },
              {
                n: "02",
                label: "Stories",
                img: sippyStories,
                alt: "Sippy Instagram story frame",
                caption: "A full-bleed story frame — squeeze, pour, sip.",
                span: false,
              },
              {
                n: "03",
                label: "EDM",
                img: sippyEdm,
                alt: "Sippy launch email newsletter",
                caption: "Launch email — meet your new main squeeze.",
                span: false,
              },
            ].map((s) => (
              <figure
                key={s.n}
                className={`border-2 border-ink bg-paper shadow-[8px_10px_0_0_hsl(10_80%_60%)] overflow-hidden flex flex-col ${
                  s.span ? "md:col-span-2" : ""
                }`}
              >
                <figcaption className="flex items-center justify-between gap-4 px-4 py-2 border-b-2 border-ink bg-paper-deep/50">
                  <p className="font-mono text-[10px] small-caps tracking-[0.25em]">
                    Fig. {s.n} · {s.label}
                  </p>
                  <span className="font-mono text-[10px] small-caps text-ink-mute">Sippy</span>
                </figcaption>
                <div className="relative bg-paper-deep/40 p-4 flex-1 flex items-center justify-center">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className={`block w-full h-auto object-contain ${s.span ? "" : "max-h-[620px] w-auto mx-auto"}`}
                  />
                  {s.toggle && (
                    <button
                      type="button"
                      onClick={() => setFeedMode((m) => (m === "light" ? "dark" : "light"))}
                      className="absolute bottom-5 right-5 z-10 font-mono text-[10px] small-caps tracking-[0.2em] border-2 border-ink bg-paper px-4 py-2 shadow-[4px_4px_0_0_hsl(10_80%_60%)] hover:shadow-[6px_6px_0_0_hsl(10_80%_60%)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                      aria-label={`Switch to ${feedMode === "light" ? "dark" : "light"} mode`}
                    >
                      {feedMode === "light" ? "◐ Switch to Dark" : "◑ Switch to Light"}
                    </button>
                  )}
                </div>
                <p className="font-display italic text-sm px-4 py-3 border-t-2 border-ink">{s.caption}</p>
              </figure>
            ))}
          </div>
        </div>


        <p className="font-mono text-[10px] small-caps text-ink-mute mt-4 text-right">
          Plate III — Brand World · Built in Figma
        </p>
      </section>

      <section className="border-y-2 border-ink bg-paper-deep/40">
        <div className="container py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-[11px] small-caps text-accent-red mb-3 tracking-[0.2em]">
              03 · Marketing Strategy
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              From insight to
              <span className="italic" style={{ color: "hsl(10 80% 60%)" }}>
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
                title: "Tastes like a treat, only 80 kcal.",
                body: "Reposition functional beverages away from the gym bag and onto the desk — a tiny daily indulgence that feels indulgent but sips light, guilt-free, and good for you.",
                tilt: "-rotate-1",
              },
              {
                Icon: Eye,
                no: "Insight",
                title: "Cute is a category.",
                body: "Gen Z buys aesthetics first, ingredients second. The can is the marketing — every desk shot is a free billboard.",
                tilt: "rotate-1",
              },
              {
                Icon: Package,
                no: "Solution",
                title: "Sparkling blood orange, in a hug-able can.",
                body: "A bouncy wordmark, a squiggly world, and a flavor that tastes as bright as it looks. Built to be photographed, shared, and re-bought.",
                tilt: "-rotate-1",
              },
            ].map(({ Icon, no, title, body, tilt }) => (
              <article
                key={no}
                className={`relative bg-paper border border-ink p-7 ${tilt} hover:rotate-0 transition-transform duration-500 shadow-[6px_8px_0_0_hsl(var(--ink))] hover:shadow-[10px_12px_0_0_hsl(10_80%_60%)]`}
              >
                <span
                  aria-hidden
                  className="absolute -top-2 left-1/2 -translate-x-1/2 size-4 rounded-full border border-ink"
                  style={{ background: "hsl(10 80% 60%)" }}
                />
                <Icon className="size-6 mb-4" style={{ color: "hsl(10 80% 50%)" }} />
                <p className="font-mono text-[10px] small-caps text-ink-mute mb-2">{no}</p>
                <h3 className="font-display text-2xl leading-tight mb-3">{title}</h3>
                <p className="font-display italic text-base text-ink-soft leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-ink text-paper" style={{ backgroundColor: "#B85C45" }}>
        <div className="container py-20 md:py-24">
          <p className="font-mono text-[11px] small-caps text-paper/70 mb-3 tracking-[0.2em]">04 · Why It Works</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl mb-14">
            A drink built to be
            <span className="italic" style={{ color: "#FFD7B5" }}>
              {" "}
              seen, sipped, repeated.
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                Icon: Sparkles,
                k: "Aesthetic",
                v: "A can that earns a spot on the desk — and a spot on the feed without trying.",
              },
              {
                Icon: Heart,
                k: "Ritual",
                v: "Hydration reframed as a tiny treat — a soft moment in the middle of the day.",
              },
              {
                Icon: TrendingUp,
                k: "Repeatability",
                v: "Future flavor drops & limited cans give existing fans a reason to keep coming back.",
              },
            ].map(({ Icon, k, v }) => (
              <div key={k} className="border-t border-paper/30 pt-6">
                <Icon className="size-6 mb-4" style={{ color: "#FFD7B5" }} />
                <p className="font-mono text-[10px] small-caps text-paper/70 mb-2">{k}</p>
                <p className="font-display text-lg leading-relaxed text-paper/90">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-24 text-center">
        <p className="font-mono text-[11px] small-caps text-accent-red mb-4 tracking-[0.2em]">✦ End of Case II ✦</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight mb-8">
          Want the rest of the
          <span className="italic" style={{ color: "hsl(10 80% 60%)" }}>
            {" "}
            folio?
          </span>
        </h2>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/case/megs-creami"
            className="group font-mono text-[11px] small-caps inline-flex items-center gap-2 bg-ink text-paper pl-2 pr-5 py-2 hover:opacity-90 transition-opacity"
          >
            <img
              src={megsCreamiLogo}
              alt=""
              aria-hidden
              className="size-7 rounded-full object-cover ring-2 ring-paper/80 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
            />
            Next: Meg&rsquo;s Creami <ArrowUpRight className="size-3.5" />
          </Link>
          <Link
            to="/"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 border border-ink px-5 py-3 hover:bg-paper-deep transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Folio
          </Link>
          <Link
            to="/#contact"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
          >
            Contact <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </section>

      <footer className="border-t-2 border-ink">
        <div className="container py-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="font-mono text-[11px] small-caps text-ink-mute">Megan Ho · Sippy Case Study</p>
          <p className="font-mono text-[11px] small-caps text-ink-mute">◼</p>
        </div>
      </footer>
    </div>
  );
};
const MegsCreami = () => {
  const [hintPos] = useState<HintPos>("center");
  const [bgPosX] = useState(50);
  const [bgPosY] = useState(50);

  return (
    <div className="paper-grain min-h-screen text-ink">
      <header className="border-b-2 border-ink sticky top-0 z-30 bg-paper/80 backdrop-blur">
        <div className="container py-3 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 hover:text-[hsl(10_80%_60%)] transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Folio
          </Link>
          <p className="font-mono text-[11px] small-caps text-ink-mute">Case · III · Meg&rsquo;s Creami</p>
          <Link
            to="/"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-1 hover:text-[hsl(10_80%_60%)] transition-colors"
          >
            Back to Folio <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </header>

      <div
        className="relative border-b-2 border-ink"
        style={{
          backgroundImage: `url(${megsCreamiHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: `${bgPosX}% ${bgPosY}%`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#EFA99B",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsl(var(--paper) / 0.05) 0%, hsl(var(--paper) / 0.08) 100%)",
          }}
        />
        <section className="relative">
          <div className="container min-h-[88vh] grid grid-rows-[auto_1fr_auto] py-8 md:py-10">
            <div className="text-center">
              <p className="font-mono text-[11px] small-caps tracking-[0.25em]" style={{ color: '#595959' }}>
                ✦ Case Study No. III · Frozen Dessert · Concept Brand ✦
              </p>
              <h1
                className="uppercase tracking-[-0.01em] leading-[0.95] text-[clamp(2.5rem,7vw,5.25rem)] inline-block mx-0 mt-6 md:mt-8 mb-4 animate-fade-in [animation-duration:900ms] [animation-delay:120ms] [animation-fill-mode:both]"
                style={{
                  color: "#CA2200",
                  fontFamily: "'Caprasimo', serif",
                  fontWeight: 400,
                }}
              ></h1>
            </div>
            <div />
            <div className="text-center max-w-4xl mx-auto pb-2 mt-40 md:mt-52">
              <div className="relative inline-block w-full">
                <p
                  className="text-base md:text-xl text-ink leading-relaxed md:whitespace-nowrap"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 500,
                    fontVariationSettings: "'SOFT' 100, 'WONK' 1",
                  }}
                >
                  <SpotlightTagline radius={260} dimOpacity={0}>
                    A spoonful of nostalgia —{" "}
                    <em className="not-italic font-semibold" style={{ color: "#CA2200" }}>
                      small-batch ice cream made for slow afternoons.
                    </em>
                  </SpotlightTagline>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-ink/30 bg-paper/70 backdrop-blur-sm">
          <div className="container py-8 grid md:grid-cols-3 gap-6">
            {[
              ["Category", "Frozen Dessert · Lifestyle"],
              ["Tools", "Figma · Canva · AI Mockups"],
              ["Year", "2026 — Concept"],
            ].map(([k, v]) => (
              <div key={k} className="border-l-2 border-ink/40 pl-4">
                <p className="font-mono text-[10px] small-caps text-ink-mute mb-1">{k}</p>
                <p className="font-display text-base leading-snug">{v}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="container py-20 md:py-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">01 · The Brief</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
            Premium pints feel
            <span className="italic" style={{ color: "#CA2200" }}>
              {" "}
              cold.
            </span>
          </h2>
        </div>
        <div className="md:col-span-8 md:pt-3">
          <p className="font-display text-lg md:text-xl text-ink-soft leading-relaxed mb-6">
            The freezer aisle is full of minimalist pints whispering &ldquo;artisan&rdquo; in monochrome serifs. The
            opportunity wasn&rsquo;t a new flavor. It was <strong className="text-ink font-semibold">a warmer feeling</strong>.
          </p>
          <p className="font-display italic text-lg md:text-xl text-ink-soft leading-relaxed">
            Meg&rsquo;s Creami turns small-batch ice cream into{" "}
            <em className="not-italic text-ink font-semibold">a hug in a pint</em> — a pretty tub you keep on the counter,
            pass around the couch, photograph by candlelight.
          </p>
        </div>
      </section>

      <section className="border-y-2 border-ink text-paper" style={{ background: "#CA2200" }}>
        <div className="container py-16 md:py-24 text-center">
          <p className="font-mono text-[11px] small-caps text-paper/70 mb-6 tracking-[0.3em]">✦ Brand Promise ✦</p>
          <blockquote className="font-display italic font-light text-4xl md:text-7xl leading-[1.05] tracking-tight max-w-5xl mx-auto">
            &ldquo;So creami. So dreami.&rdquo;
          </blockquote>
          <p className="font-mono text-[11px] small-caps text-paper/70 mt-8">— Happiness in every scoop</p>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-20">
            <p className="font-mono text-[11px] small-caps text-accent-red mb-4 tracking-[0.2em]">02 · Branding</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight mb-6">
              A blush-and-cherry
              <span className="italic" style={{ color: "#CA2200" }}>
                {" "}
                world.
              </span>
            </h2>
            <p className="font-display text-base text-ink-soft leading-relaxed mb-8">
              Retro, sweet, a little vintage. A creamy nude base with burnt-red script, sprinkle confetti, and a
              wavy badge that feels like it was hand-painted on the side of a 1960s soda fountain.
            </p>
            <dl className="border-t border-ink/30">
              {[
                ["Palette", "Burnt red · Dusty peach · Creamy nude"],
                ["Type", "Retro script + soft sans"],
                ["Tools", "Figma · Canva · AI"],
                ["Deliverables", "Identity, pint, campaign"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-5 gap-3 py-2.5 border-b border-ink/30">
                  <dt className="col-span-2 font-mono text-[10px] small-caps text-ink-mute pt-0.5">{k}</dt>
                  <dd className="col-span-3 font-display text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="font-display italic text-base text-ink-soft mt-6 leading-relaxed">
              &ldquo;A pint that <span style={{ color: "#CA2200" }}>smiles</span> from the freezer.&rdquo;
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <div className="border-2 border-ink bg-paper shadow-[12px_14px_0_0_hsl(10_70%_75%)] overflow-hidden">
              <div className="flex items-center justify-between gap-4 px-4 py-2 border-b-2 border-ink bg-paper-deep/50">
                <p className="font-mono text-[10px] small-caps tracking-[0.25em]">Plate III · Identity Board</p>
                <p className="font-mono text-[10px] small-caps text-ink-mute">Logo system + palette</p>
              </div>
              <img src={megsCreamiBrandBoard} alt="Meg's Creami brand board" className="block w-full h-auto" />
              <figcaption className="px-4 py-3 border-t-2 border-ink flex items-baseline justify-between gap-3 flex-wrap">
                <p className="font-display italic text-sm">
                  A wordmark, a wavy badge, a palette — three ways to say the same thing.
                </p>
                <span className="font-mono text-[10px] small-caps text-ink-mute">Fig. 01–03</span>
              </figcaption>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 border-t-2 border-ink pt-10">
          <div className="grid md:grid-cols-12 gap-6 items-end mb-8">
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] small-caps text-accent-red tracking-[0.2em] mb-3">Design Notes</p>
              <h3 className="font-display text-3xl md:text-4xl leading-[0.95] tracking-tight">
                Four ideas behind
                <span className="italic" style={{ color: "#CA2200" }}>
                  {" "}
                  the pint.
                </span>
              </h3>
            </div>
            <p className="md:col-span-5 font-display italic text-base text-ink-soft leading-relaxed md:text-right">
              The thinking that shaped every swirl, sprinkle, and scoop.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                no: "01",
                title: "Warm over precious",
                body: "The opposite of cold-storage minimalism. Burnt reds, dusty peach, hand-drawn sprinkles — a pint that feels like a hug, not a hospital.",
                tag: "Tone",
              },
              {
                no: "02",
                title: "A wordmark with a wink",
                body: "The Meg's script bounces and curls — letterforms feel hand-lettered and lived-in, like a sign painted by someone who loves their craft.",
                tag: "Identity",
              },
              {
                no: "03",
                title: "Designed for the counter",
                body: "The pint is built to be left out — pretty enough to display next to flowers and candles, photogenic enough for a Sunday flat-lay.",
                tag: "Form",
              },
              {
                no: "04",
                title: "Ice cream as a ritual",
                body: "Reframing dessert as a slow moment. The aesthetic is the reason you pass it around — and the reason you go back for one more spoon.",
                tag: "Strategy",
              },
            ].map(({ no, title, body, tag }) => (
              <li
                key={no}
                className="relative bg-paper border-2 border-ink p-6 md:p-7 shadow-[6px_8px_0_0_hsl(var(--ink))] hover:shadow-[10px_12px_0_0_hsl(10_70%_75%)] transition-shadow"
              >
                <div className="flex items-baseline justify-between gap-4 mb-4 pb-3 border-b border-ink/20">
                  <span className="font-display text-5xl leading-none" style={{ color: "#CA2200" }}>
                    {no}
                  </span>
                  <span className="font-mono text-[10px] small-caps text-ink-mute tracking-[0.2em]">· {tag} ·</span>
                </div>
                <h4 className="font-display text-2xl leading-tight mb-3 text-ink">{title}</h4>
                <p className="font-body text-[15px] text-ink-soft leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-3 mb-8">
            <div>
              <p className="font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute mb-1">Plate IV</p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">Pint &amp; World</h3>
            </div>
            <p className="font-mono text-[10px] small-caps text-ink-mute hidden sm:block">Wordmark · Pint · Lifestyle</p>
          </div>

          <div className="space-y-6">
            {[
              {
                n: "01",
                label: "Wordmark",
                img: megsCreamiWordmarkCard,
                ratio: "16 / 10",
                title: "Hand-lettered, sweet, sincere.",
                body: "A bespoke retro script with a wavy badge — letters that feel painted by hand, framed in burnt red and confetti sprinkles.",
                meta: ["Hand-lettered", "Burnt red + cream", "Retro"],
              },
              {
                n: "02",
                label: "Pint",
                img: megsCreamiPints,
                ratio: "16 / 10",
                title: "Stacked, scooped, irresistible.",
                body: "473 ml pints in cream and burnt red, tumbled together like a candy-store haul. A wavy badge does the heavy lifting — sprinkles do the rest.",
                meta: ["473 ml · Pint", "Small-batch", "Still-life"],
              },
              {
                n: "03",
                label: "Lifestyle",
                img: megsCreamiLifestyle,
                ratio: "16 / 10",
                title: "Good friends, sweet treats, great talks.",
                body: "Passed around a candle-lit couch with chunky knit cardigans, popcorn, and string lights — Meg's belongs in the moments you want to remember, not the ones you scroll past.",
                meta: ["Cozy", "Shareable", "Ritual"],
              },
              {
                n: "04",
                label: "Retail",
                img: megsCreamiShelf,
                ratio: "16 / 10",
                title: "Cool & creami in the freezer aisle.",
                body: "Lined up behind glass with retro signage and checkerboard floors, the cream-and-red pints cut clean through frosty white space — a candy-shop moment in the middle of the grocery run.",
                meta: ["Shelf", "Retail"],
              },
            ].map((c, i) => (
              <article
                key={c.n}
                className={`grid md:grid-cols-12 gap-0 border-2 border-ink bg-paper shadow-[8px_10px_0_0_#CA2200] overflow-hidden ${i % 2 === 1 ? "md:[&>figure]:order-2" : ""}`}
              >
                <figure className="md:col-span-7 bg-paper-deep border-b-2 md:border-b-0 md:border-r-2 border-ink">
                  <div className="relative w-full" style={{ aspectRatio: c.ratio }}>
                    <img
                      src={c.img}
                      alt={`Meg's Creami ${c.label.toLowerCase()}`}
                      loading="lazy"
                      className={`absolute inset-0 w-full h-full object-center ${c.n === "01" ? "object-contain" : "object-cover"}`}
                      style={c.n === "01" ? { background: "#5C0E0A" } : undefined}
                    />
                  </div>
                </figure>
                <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-rule">
                    <span className="font-display text-5xl leading-none" style={{ color: "#CA2200" }}>
                      {c.n}
                    </span>
                    <span className="font-mono text-[11px] small-caps tracking-[0.25em] text-ink">· {c.label} ·</span>
                  </div>
                  <h4 className="font-display text-2xl md:text-[26px] leading-tight mb-3 text-ink">{c.title}</h4>
                  <p className="font-body text-[15px] text-ink-soft leading-relaxed mb-5">{c.body}</p>
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
          Plate IV — Brand World · Built in Figma
        </p>
      </section>

      <section className="border-y-2 border-ink bg-paper-deep/40">
        <div className="container py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-[11px] small-caps text-accent-red mb-3 tracking-[0.2em]">
              03 · Marketing Strategy
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
              From insight to
              <span className="italic" style={{ color: "#CA2200" }}>
                {" "}
                ritual.
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                Icon: Lightbulb,
                no: "Concept",
                title: "Tastes like home, looks like a love letter.",
                body: "Reposition premium ice cream away from minimalist aloofness and onto the kitchen counter — a small-batch treat that feels like grandma's recipe with a designer's eye.",
                tilt: "-rotate-1",
              },
              {
                Icon: Eye,
                no: "Insight",
                title: "Nostalgia is a category.",
                body: "Younger buyers crave warmth and memory over clinical luxury. The pint is the message — every cozy couch shot is a free postcard.",
                tilt: "rotate-1",
              },
              {
                Icon: Package,
                no: "Solution",
                title: "Small-batch pints, in a hug-able tub.",
                body: "A retro wordmark, a sprinkle world, and flavors that taste as warm as they look. Built to be passed around, photographed, and re-stocked.",
                tilt: "-rotate-1",
              },
            ].map(({ Icon, no, title, body, tilt }) => (
              <article
                key={no}
                className={`relative bg-paper border border-ink p-7 ${tilt} hover:rotate-0 transition-transform duration-500 shadow-[6px_8px_0_0_hsl(var(--ink))] hover:shadow-[10px_12px_0_0_#CA2200]`}
              >
                <span
                  aria-hidden
                  className="absolute -top-2 left-1/2 -translate-x-1/2 size-4 rounded-full border border-ink"
                  style={{ background: "#CA2200" }}
                />
                <Icon className="size-6 mb-4" style={{ color: "#CA2200" }} />
                <p className="font-mono text-[10px] small-caps text-ink-mute mb-2">{no}</p>
                <h3 className="font-display text-2xl leading-tight mb-3">{title}</h3>
                <p className="font-display italic text-base text-ink-soft leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-ink text-paper" style={{ backgroundColor: "#CA2200" }}>
        <div className="container py-20 md:py-24">
          <p className="font-mono text-[11px] small-caps text-paper/70 mb-3 tracking-[0.2em]">04 · Why It Works</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl mb-14">
            A pint built to be
            <span className="italic" style={{ color: "#F7E0D1" }}>
              {" "}
              shared, scooped, remembered.
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                Icon: Sparkles,
                k: "Aesthetic",
                v: "A pint that earns a spot on the counter — and a spot in the photo without trying.",
              },
              {
                Icon: Heart,
                k: "Ritual",
                v: "Dessert reframed as a slow moment — passed around the couch, candles lit.",
              },
              {
                Icon: TrendingUp,
                k: "Repeatability",
                v: "Seasonal flavor drops & limited pints give existing fans a reason to keep coming back.",
              },
            ].map(({ Icon, k, v }) => (
              <div key={k} className="border-t border-paper/30 pt-6">
                <Icon className="size-6 mb-4" style={{ color: "#F7E0D1" }} />
                <p className="font-mono text-[10px] small-caps text-paper/70 mb-2">{k}</p>
                <p className="font-display text-lg leading-relaxed text-paper/90">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-24 text-center">
        <p className="font-mono text-[11px] small-caps text-accent-red mb-4 tracking-[0.2em]">✦ End of Case III ✦</p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight mb-8">
          Want the rest of the
          <span className="italic" style={{ color: "#CA2200" }}>
            {" "}
            folio?
          </span>
        </h2>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 border border-ink px-5 py-3 hover:bg-paper-deep transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Folio
          </Link>
          <Link
            to="/#contact"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
          >
            Contact <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </section>

      <footer className="border-t-2 border-ink">
        <div className="container py-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="font-mono text-[11px] small-caps text-ink-mute">Megan Ho · Meg&rsquo;s Creami Case Study</p>
          <p className="font-mono text-[11px] small-caps text-ink-mute">◼</p>
        </div>
      </footer>
    </div>
  );
};

const PLACEHOLDERS: Record<string, { no: string; name: string; tagline: string; cover: string; tint: string }> = {
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
          <p className="font-mono text-[11px] small-caps text-ink-mute mb-4">Case not found</p>
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
          <p className="font-mono text-[11px] small-caps text-[hsl(48_90%_70%)] mb-4">Case Study · No. {cs.no}</p>
          <h1 className="font-display font-light leading-[0.9] tracking-tight text-[clamp(3rem,8vw,7rem)]">
            {cs.name}
          </h1>
          <p className="font-display italic text-xl md:text-2xl text-ink-soft mt-6 max-w-xl">{cs.tagline}</p>
          <p className="font-mono text-[11px] small-caps text-ink-mute mt-10">Layout in progress — coming soon.</p>
        </div>
        <div className="md:col-span-5">
          <div
            className="aspect-square border border-ink p-6 flex items-center justify-center shadow-[10px_12px_0_0_hsl(var(--ink))]"
            style={{ background: cs.tint }}
          >
            <img src={cs.cover} alt={`${cs.name} logo`} className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
};

const CaseStudy = () => {
  const { slug = "" } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (slug === "veramente") return <Veramente />;
  if (slug === "sippy") return <Sippy />;
  if (slug === "megs-creami") return <MegsCreami />;
  return <Placeholder slug={slug} />;
};

export default CaseStudy;
