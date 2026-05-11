import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight, Sparkles, Phone, Lightbulb, Eye, Package, Tag, Gift, Share2, TrendingUp, Repeat, Users, Droplets, Palette, Citrus, Heart, IceCream, Snowflake, Camera } from "lucide-react";
import meganPortrait from "@/assets/megan-portrait.jpg";
import veramenteBrandBoard from "@/assets/veramente-brand-board.jpg";
import veramenteLogo from "@/assets/veramente-preview.png";
import veramentePreviewBg from "@/assets/veramente-preview-bg.png";
import veramenteTinyBites from "@/assets/veramente-tiny-bites.png";
import veramenteBagCharm from "@/assets/veramente-bag-charm.png";
import veramenteCafe from "@/assets/veramente-cafe.png";
import sippyBrandBoard from "@/assets/sippy-brand-board.jpg";
import sippyLogo from "@/assets/sippy-logo.jpg";
import megsCreamiBrandBoard from "@/assets/megs-creami-brand-board.jpg";
import megsCreamiLogo from "@/assets/megs-creami-logo.png";

const NAV = [
  { id: "about", label: "Selected Work" },
];



const TODAY = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const Hero = () => (
  <header id="top" className="relative overflow-hidden border-b-2 border-ink">
    <div
      aria-hidden
      className="absolute inset-0 -z-0"
      style={{
        background:
          "radial-gradient(55% 65% at 18% 35%, hsl(var(--accent-burnt) / 0.16) 0%, transparent 60%), radial-gradient(45% 55% at 85% 75%, hsl(var(--accent-red) / 0.10) 0%, transparent 65%)",
      }}
    />

    {/* Top meta bar */}
    <div className="relative border-b border-ink/30">
      <div className="container flex items-center justify-between py-2 text-[11px] small-caps text-ink-soft font-mono">
        <span>Melbourne · Edition</span>
      </div>
    </div>

    {/* Nav */}
    <nav className="relative border-b border-ink/40 bg-paper/60 backdrop-blur sticky top-0 z-30">
      <div className="container relative flex items-center justify-between gap-6 overflow-x-auto scrollbar-hide py-3">
        <a href="#top" className="font-display text-lg shrink-0">
          M.H.
        </a>
        <ul className="flex items-center gap-6 md:gap-8 mx-auto">
          <li>
            <Link
              to="/about-me"
              className="inline-flex items-center gap-1.5 font-mono text-sm small-caps text-paper bg-[hsl(var(--accent-burnt))] px-5 py-2.5 hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              About Me <ArrowUpRight className="size-4" />
            </Link>
          </li>
          {NAV.map((n) => {
            const isHighlight = n.id === "about";
            return (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={
                    isHighlight
                      ? "inline-flex items-center font-mono text-sm small-caps text-paper bg-[hsl(var(--accent-burnt))] px-5 py-2.5 hover:opacity-90 transition-opacity whitespace-nowrap"
                      : "font-mono text-sm small-caps text-ink-soft hover:text-accent-red transition-colors whitespace-nowrap"
                  }
                >
                  {n.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-mono text-sm small-caps text-paper bg-[hsl(var(--accent-burnt))] px-5 py-2.5 hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Hire <ArrowUpRight className="size-4" />
            </a>
          </li>
        </ul>
        <span aria-hidden className="font-display text-lg shrink-0 invisible">M.H.</span>
      </div>
    </nav>

    {/* Hero content */}
    <div className="container relative pt-6 pb-10 md:pt-8 md:pb-14 grid grid-cols-12 gap-x-6 gap-y-6 items-center">
      <div className="col-span-12 md:col-span-8">
        <p className="font-display text-2xl md:text-3xl text-ink-soft mb-3 md:mb-4 text-center py-[13px]">
          Hello, I&rsquo;m
        </p>
        <h2
          className="font-display leading-[0.85] tracking-[-0.03em] text-[clamp(3.5rem,12vw,10rem)] uppercase text-center"
          style={{ fontWeight: 500 }}
        >
          <span className="block text-ink">MEGAN</span>
          <span
            className="block italic"
            style={{ color: "hsl(var(--accent-burnt))" }}
          >
            Ho.
          </span>
        </h2>
        <div className="mx-auto mt-6 mb-4 h-px w-24 bg-ink/30" />
        <p className="font-display text-xl md:text-2xl leading-snug text-ink-soft md:whitespace-nowrap text-center rounded-sm font-light px-px py-[12px] mx-0 my-[5px]">
          I&rsquo;m passionate about marketing that turns heads and leaves an impression.
        </p>
      </div>
      <div className="col-span-12 md:col-span-4">
        <figure className="relative mt-10 md:mt-14">
          <div className="border border-ink bg-paper p-2 shadow-[10px_12px_0_0_hsl(var(--ink))] rotate-[2deg] hover:rotate-0 transition-transform duration-500">
            <img
              src={meganPortrait}
              alt="Megan Ho"
              className="w-full h-auto block"
              loading="eager"
            />
            <figcaption className="pt-2 mt-1 border-t border-ink/30 flex items-baseline justify-between gap-3">
              <p className="font-display italic text-sm">M.H</p>
              <p className="font-mono text-[10px] small-caps text-ink-mute">Plate I</p>
            </figcaption>
          </div>
          <span
            className="absolute -top-3 -left-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1 rotate-[-4deg]"
          >
            Est. 2026
          </span>
          {/* Hand-drawn "that's me" arrow — sits outside the portrait (upper-left), points down-right */}
          <div className="hidden sm:flex absolute -top-6 md:-top-8 right-full mr-2 md:mr-4 lg:mr-6 z-10 flex-col items-end rotate-[8deg] pointer-events-none select-none">
            <span
              className="font-display italic text-2xl md:text-3xl whitespace-nowrap"
              style={{ color: "hsl(var(--accent-burnt))" }}
            >
              that&rsquo;s me!
            </span>
            <svg
              width="60"
              height="50"
              viewBox="0 0 60 50"
              fill="none"
              className="-mt-1 self-end mr-2"
              style={{ color: "hsl(var(--accent-burnt))" }}
              aria-hidden="true"
            >
              <path
                d="M10 4 C 16 18, 28 32, 40 44"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M40 44 L 30 42 M40 44 L 38 34"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </figure>
      </div>
    </div>
  </header>
);

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

const SelectedWork = () => {
  const studies = [
    {
      no: "I",
      name: "Veramente",
      subtitle: "Carry Your SPF — wearable sunscreen as accessory.",
      cover: veramenteLogo,
      tint: "hsl(28 60% 92%)",
      href: "/case/veramente",
      tags: ["Beauty", "Concept", "Identity"],
      stamp: "SPF · 50",
      tilt: "-rotate-2",
      shadow: "hsl(var(--accent-ochre))",
    },
    {
      no: "II",
      name: "Sippy",
      subtitle: "Sparkling blood orange — keep it cute, keep it sippy.",
      cover: sippyLogo,
      tint: "hsl(10 90% 55%)",
      href: "/case/sippy",
      tags: ["Beverage", "Packaging", "Campaign"],
      stamp: "Pop · Fizz",
      tilt: "rotate-1",
      shadow: "hsl(var(--accent-red))",
    },
    {
      no: "III",
      name: "Meg's Creami",
      subtitle: "Small-batch ice cream — a spoonful of nostalgia.",
      cover: megsCreamiLogo,
      tint: "hsl(350 70% 92%)",
      href: "/case/megs-creami",
      tags: ["Dessert", "Brand", "World"],
      stamp: "Scoop · 02",
      tilt: "-rotate-1",
      shadow: "hsl(var(--accent-burnt))",
    },
  ];
  return (
    <section id="about" className="container py-16 md:py-24 relative">
      <SectionHeader kicker="Some of my work" title="Selected Case Studies" no="II" />

      {/* Marquee ribbon */}
      <div className="relative overflow-hidden border-y border-ink bg-ink text-paper mb-10">
        <div className="marquee flex whitespace-nowrap py-2 font-mono text-[11px] small-caps">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-6 pr-6">
              {["Big ideas, small batches", "✺", "Brands with bite", "✺", "Strategy meets craft", "✺", "Concepts in colour", "✺", "Made to be remembered", "✺", "Now showing ↓", "✺"].map((t, j) => (
                <span key={j} className="px-2">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pt-4">
        {studies.map((s, i) => (
          <Link
            key={s.no}
            to={s.href}
            className={`group relative block border border-ink bg-paper transition-all duration-300 hover:-translate-y-2 hover:rotate-0 ${s.tilt}`}
            style={{ boxShadow: `8px 10px 0 0 ${s.shadow}` }}
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
              style={{ background: s.tint }}
            >
              <img
                src={s.name === "Veramente" ? veramentePreviewBg : s.cover}
                alt={`${s.name} logo`}
                className={`transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[-2deg] ${s.name === "Veramente" ? "absolute inset-0 w-full h-full object-cover scale-[1.2]" : "max-h-full max-w-full object-contain"}`}
                loading="lazy"
              />
              <span className="absolute top-3 left-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1">
                Case · {s.no}
              </span>
              {/* circular stamp */}
              <span
                className="absolute bottom-3 right-3 size-16 rounded-full border-2 border-ink/70 flex items-center justify-center text-center font-mono text-[9px] small-caps leading-tight rotate-[-12deg] bg-paper/80 backdrop-blur-sm"
              >
                {s.stamp}
              </span>
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"
                style={{ background: "hsl(var(--accent-burnt) / 0.22)" }}
              />
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-display text-2xl tracking-tight">{s.name}</h3>
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[hsl(var(--accent-burnt))]" />
              </div>
              <p className="font-display italic text-sm text-ink-soft mb-4">
                {s.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] small-caps border border-ink/40 px-2 py-0.5 group-hover:bg-ink group-hover:text-paper transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-ink/30" />
        <p className="font-display italic text-ink-soft text-sm">
          psst — hover the cards
        </p>
        <div className="h-px flex-1 bg-ink/30" />
      </div>
    </section>
  );
};

const Approach = () => {
  const principles = [
    {
      no: "01",
      title: "Strategy & Design, fused",
      body: "I create ideas where the product itself becomes the marketing channel driving organic visibility, engagement, and repeat behaviour.",
    },
    {
      no: "02",
      title: "End-to-end concepting",
      body: "From brand identity and product design to campaign execution every idea is creatively strong and commercially grounded.",
    },
    {
      no: "03",
      title: "Design as language",
      body: "I use design as a tool to communicate marketing ideas, transforming concepts into tangible brand experiences through visual storytelling.",
    },
  ];
  const rotations = ["-rotate-2", "rotate-1", "-rotate-1"];
  const stamps = ["Strategy", "Craft", "Story"];
  return (
    <section id="approach" className="relative bg-paper overflow-hidden border-y-2 border-ink">
      {/* Soft tinted backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, hsl(var(--accent-burnt) / 0.10) 0%, transparent 65%), radial-gradient(45% 45% at 10% 85%, hsl(var(--accent-red) / 0.08) 0%, transparent 65%)",
        }}
      />

      <div className="container py-20 md:py-28 relative">
        {/* Header — small kicker, big handwritten-feel headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="font-mono font-bold text-xs small-caps text-accent-red mb-4 tracking-[0.2em]">
            ✦ The Method ✦
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Three things I&rsquo;m
            <br />
            <span className="italic" style={{ color: "hsl(var(--accent-burnt))" }}>
              quietly obsessed
            </span>{" "}
            with.
          </h2>
        </div>

        {/* Pinned-card layout */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 max-w-6xl mx-auto">
          {principles.map((p, i) => (
            <article
              key={p.no}
              className={`group relative bg-paper border border-ink p-7 md:p-8 ${rotations[i]} hover:rotate-0 transition-transform duration-500 shadow-[6px_8px_0_0_hsl(var(--ink))] hover:shadow-[10px_12px_0_0_hsl(var(--accent-burnt))]`}
            >
              {/* Pin */}
              <span
                aria-hidden
                className="absolute -top-2 left-1/2 -translate-x-1/2 size-4 rounded-full border border-ink"
                style={{ background: "hsl(var(--accent-burnt))" }}
              />

              {/* Stamp tag */}
              <span
                className="absolute -top-3 -right-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1 rotate-3"
              >
                {stamps[i]}
              </span>

              {/* Big numeral */}
              <div className="flex items-baseline gap-3 mb-5 border-b border-ink/30 pb-4">
                <span
                  className="font-display italic text-5xl leading-none"
                  style={{ color: "hsl(var(--accent-burnt))" }}
                >
                  {p.no}
                </span>
                <span className="font-mono text-[10px] small-caps text-ink-mute">
                  Principle
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-[1.65rem] leading-tight mb-4">
                {p.title}
              </h3>
              <p className="font-display italic text-base md:text-lg leading-relaxed text-ink-soft">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        {/* Footer rule */}
        <div className="mt-16 md:mt-20 flex items-center gap-4 max-w-6xl mx-auto">
          <span className="h-px flex-1 bg-ink/30" />
          <span className="font-mono text-[10px] small-caps text-ink-mute">
            Section III
          </span>
          <span className="h-px flex-1 bg-ink/30" />
        </div>
      </div>
    </section>
  );
};

const Veramante = () => (
  <section id="work" className="relative overflow-hidden">
    {/* Decorative wash — soft sun + skin tones, hints at SPF brand world */}
    <div
      aria-hidden
      className="absolute inset-0 -z-0 opacity-[0.06]"
      style={{
        background:
          "radial-gradient(55% 55% at 12% 18%, hsl(var(--accent-ochre)) 0%, transparent 60%), radial-gradient(45% 45% at 88% 82%, hsl(var(--accent-red)) 0%, transparent 60%)",
      }}
    />
    <div className="w-full px-4 md:px-8 py-12 md:py-16 relative">
      <div className="container">
        <SectionHeader kicker="Selected Work" title="Case Study I" no="IV" />
      </div>

      {/* 16:9 frame — capped so it fits a laptop screen without overflow */}
      <article className="relative mx-auto aspect-video w-full max-h-[88vh] border border-ink/30 bg-paper-deep/40 overflow-hidden" style={{ maxWidth: "calc(88vh * 16 / 9)" }}>
        <div className="absolute inset-0 grid grid-cols-12 gap-5 md:gap-7 p-6 md:p-8">
          {/* LEFT — copy + at-a-glance + brand voice */}
          <div className="col-span-12 md:col-span-4 flex flex-col min-h-0 gap-2.5 overflow-hidden">
            <div>
              <p className="font-mono text-[11px] small-caps text-accent-red mb-1.5">
                Case Study 01 · Beauty · Concept Brand
              </p>
              <h3 className="font-display font-light text-3xl md:text-[2.5rem] leading-[0.9] tracking-tight">
                VERAMENTE
                <span className="font-display italic text-accent-red">.</span>
                <span className="block font-display italic text-lg md:text-xl text-ink-soft mt-1.5">
                  Carry Your SPF.
                </span>
              </h3>
              <p className="font-display text-[12px] md:text-[13px] text-ink-soft mt-2 leading-snug">
                A <strong className="font-semibold text-ink">wearable SPF concept brand</strong> — a Figma-built identity exploring how product, packaging, and a sun-bleached palette turn sunscreen into a <em className="not-italic font-semibold text-accent-red">daily accessory people want to show off</em>.
              </p>
            </div>

            <div>
              <p className="font-mono text-[11px] small-caps text-ink-mute mb-1.5">At a glance</p>
              <dl className="space-y-0.5">
                {[
                  ["Format", "SPF50+ stick with charm loop"],
                  ["Category", "Skincare · Accessory"],
                  ["Tools", "Figma · Canva · AI Mockups"],
                  ["Deliverables", "Logo, packaging, campaign"],
                  ["Role", "Brand, product, art direction"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 border-b border-rule pb-0.5">
                    <dt className="font-mono text-[10px] small-caps text-ink-mute pt-0.5">{k}</dt>
                    <dd className="font-display text-[13px] font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <p className="font-mono text-[11px] small-caps text-accent-red mb-1.5">Brand Voice</p>
              <ol className="space-y-0.5">
                {[
                  { t: "Soft confidence", r: " — skincare that whispers." },
                  { t: "Tactile, sun-washed packaging", r: " as a personal object." },
                  { t: "SPF as self-care", r: ", not a chore." },
                  { t: "A charm system", r: " that turns product into ritual." },
                ].map(({ t, r }, i) => (
                  <li key={i} className="flex gap-2 border-b border-rule pb-0.5">
                    <span className="font-display text-lg text-accent-red leading-none w-6 shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-[12px] leading-snug">
                      <strong className="font-semibold text-ink">{t}</strong>
                      <span className="text-ink-soft">{r}</span>
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="font-mono text-[11px] small-caps text-accent-red mb-1.5">Product Story</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { Icon: Lightbulb, label: "Concept", em: "Wearable accessory", body: ", not skincare.", pull: "Wear it, don't hide it." },
                  { Icon: Eye, label: "Insight", em: "People skip SPF", body: " when it's hidden.", pull: "Aesthetic = adherence." },
                  { Icon: Package, label: "Solution", em: "SPF50+ stick", body: " + blind-box charms.", pull: "Product as touchpoint." },
                ].map(({ Icon, label, em, body, pull }) => (
                  <div key={label} className="flex flex-col">
                    <div className="flex items-center gap-1 mb-0.5">
                      <Icon className="size-3 text-accent-red" />
                      <p className="font-mono text-[10px] small-caps text-ink-mute">{label}</p>
                    </div>
                    <p className="font-display text-[11px] leading-snug mb-1">
                      <strong className="font-semibold text-ink">{em}</strong>
                      <span className="text-ink-soft">{body}</span>
                    </p>
                    <p className="mt-auto font-display italic text-[10px] text-accent-red leading-snug border-l-2 border-accent-red pl-1.5">
                      {pull}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MIDDLE — brand identity board */}
          <figure className="col-span-12 md:col-span-5 flex flex-col min-h-0">
            <div className="flex-1 min-h-0 flex items-center justify-center">
              <img
                src={veramenteBrandBoard}
                alt="Veramente brand identity board featuring primary logo, secondary logo, brand mark, color palette, and packaging mockups"
                className="max-w-full max-h-full w-auto h-auto object-contain"
                loading="lazy"
              />
            </div>
            <figcaption className="pt-1.5 mt-1.5 border-t border-ink/20 flex items-baseline justify-between gap-3 flex-wrap">
              <p className="font-mono text-[9px] small-caps text-ink-mute">
                Plate II — Brand Identity Board
              </p>
              <p className="font-display italic text-[10px] text-ink-mute">
                Logo · Mark · Palette · Packaging
              </p>
            </figcaption>
          </figure>

          {/* RIGHT — 3 product/lifestyle plates stacked */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-2 md:gap-3 min-h-0">
            {[
              { src: veramenteTinyBites, alt: "Veramente Tiny Bites blind box keychain collection", cap: "Plate III — Tiny Bites" },
              { src: veramenteBagCharm, alt: "Veramente SPF stick clipped to a cream shoulder bag", cap: "Plate IV — Wear It Daily" },
              { src: veramenteCafe, alt: "Model carrying the Veramente SPF charm at an outdoor café", cap: "Plate V — In The Wild" },
            ].map((p) => (
              <figure key={p.cap} className="relative border border-ink/20 bg-paper-deep overflow-hidden flex flex-col flex-1 min-h-0">
                <div className="flex-1 min-h-0 overflow-hidden">
                  <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <figcaption className="px-2 py-1 border-t border-ink/30 bg-paper/85">
                  <p className="font-mono text-[9px] small-caps text-ink-mute">{p.cap}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </article>
    </div>
  </section>
);

const Sippy = () => (
  <section id="sippy" className="border-y-4 border-ink relative overflow-hidden">
    {/* Decorative wash background — keeps editorial frame, hints at brand color */}
    <div
      aria-hidden
      className="absolute inset-0 -z-0 opacity-[0.07]"
      style={{
        background:
          "radial-gradient(60% 60% at 15% 20%, hsl(var(--accent-red)) 0%, transparent 60%), radial-gradient(50% 50% at 85% 80%, hsl(var(--accent-ochre)) 0%, transparent 60%)",
      }}
    />
    <div className="container py-16 md:py-24 relative">
      <SectionHeader kicker="Selected Work" title="Case Study II" no="IV·B" />

      <article className="grid grid-cols-12 gap-x-6 gap-y-8 items-stretch">
        {/* Intro */}
        <div className="col-span-12 md:col-span-7">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">
            Case Study 02 · Beverage · Concept Brand
          </p>
          <h3 className="font-display font-light text-5xl md:text-7xl leading-[0.9] tracking-tight">
            sippy
            <span className="font-display italic text-accent-red">.</span>
            <span className="block font-display italic text-2xl md:text-3xl text-ink-soft mt-3">
              Keep it cute, keep it sippy.
            </span>
          </h3>
          <p className="font-display text-xl text-ink-soft mt-6 max-w-2xl leading-relaxed">
            A sparkling blood orange drink in a 440ml can — a Figma-built brand identity exploring how playful character design and a pastel-meets-vermilion palette can carve out a space in the crowded low-calorie sparkling beverage category.
          </p>
        </div>

        {/* Quick stats panel */}
        <aside className="col-span-12 md:col-span-5 md:border-l md:border-ink/30 md:pl-6">
          <p className="font-mono text-[11px] small-caps text-ink-mute mb-4">At a glance</p>
          <dl className="space-y-3">
            {[
              ["Format", "440ml slim sparkling can"],
              ["Flavour", "Sparkling Blood Orange"],
              ["Calories", "80 kcal per serving"],
              ["Tools", "Figma · Canva · AI Mockups"],
              ["Role", "Brand identity, packaging, copy"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-rule pb-2">
                <dt className="font-mono text-[11px] small-caps text-ink-mute pt-1">{k}</dt>
                <dd className="font-display text-lg text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>

        {/* Brand board — full width hero plate */}
        <figure className="col-span-12 mt-4">
          <div className="border border-ink/20 bg-paper-deep p-2 md:p-3">
            <img
              src={sippyBrandBoard}
              alt="Sippy brand identity board featuring primary logo, brand mark of a smiling orange, the Sippy color palette, and packaging mockups of the sparkling blood orange can"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
          <figcaption className="pt-3 mt-3 border-t border-ink/20 flex items-baseline justify-between gap-4 flex-wrap">
            <p className="font-mono text-[10px] small-caps text-ink-mute">
              Plate VI — Sippy Brand Identity Board
            </p>
            <p className="font-display italic text-sm text-ink-mute">
              Logo · Mark · Palette · Packaging
            </p>
          </figcaption>
        </figure>
      </article>

      <div className="editorial-rule my-12" />

      {/* Concept / Insight / Solution */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        {[
          {
            icon: Lightbulb,
            label: "Concept",
            body: "Sippy is a small-batch sparkling blood orange drink positioned as a cute, expressive everyday refreshment — the can itself is the campaign, designed to look as good in your hand as it tastes.",
            pull: "A drink that's almost too cute to crack open.",
          },
          {
            icon: Eye,
            label: "Insight",
            body: "Today's drinkers want low-cal, low-sugar sparkling alternatives, but reach for whichever can looks most shareable. Function alone is not enough — the can has to perform on the shelf and on camera.",
            pull: "If it doesn't photograph, it doesn't sell.",
          },
          {
            icon: Citrus,
            label: "Solution",
            body: "A tactile pink can paired with a smiling orange brand mark and confident vermillion wordmark — distinctive on shelf, native to social, and built around an instantly memorable character system.",
            pull: "Character-led packaging that becomes the marketing.",
          },
        ].map(({ icon: Icon, label, body, pull }) => (
          <div key={label} className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <Icon className="size-4 text-accent-red" />
              <p className="font-mono text-[11px] small-caps text-ink-mute">{label}</p>
            </div>
            <p className="font-display text-lg leading-relaxed mb-4">{body}</p>
            <p className="font-display italic text-base text-accent-red leading-snug border-l-2 border-accent-red pl-3">
              {pull}
            </p>
          </div>
        ))}
      </div>

      <div className="editorial-rule my-12" />

      {/* Palette swatches — extracted from the brand board */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 md:col-span-4">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">Palette</p>
          <h4 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
            A juicy, almost-edible palette.
          </h4>
          <p className="font-display italic text-lg text-ink-soft mt-4 leading-relaxed">
            Built around a vermilion red, a citrus orange, and two soft pinks — with a single pop of lime green for the leaf and accents.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { name: "Sippy Red", hex: "#F4360F", ink: "text-paper" },
            { name: "Just Orange", hex: "#F39A1F", ink: "text-ink" },
            { name: "Guava Pink", hex: "#F4B5C0", ink: "text-ink" },
            { name: "Bloomi Pink", hex: "#F8DAE0", ink: "text-ink" },
            { name: "Lime Green", hex: "#1FB54A", ink: "text-paper" },
          ].map((c) => (
            <div key={c.name} className="border border-ink/30">
              <div
                className={`aspect-video flex items-end p-3 ${c.ink}`}
                style={{ background: c.hex }}
              >
                <span className="font-mono text-[10px] small-caps">{c.hex}</span>
              </div>
              <p className="font-display text-sm px-3 py-2 border-t border-ink/30">
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="editorial-rule my-12" />

      {/* Brand voice + product story */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 md:col-span-7">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-4">Brand Voice</p>
          <ol className="space-y-5">
            {[
              "Playful but premium — character-led, never childish.",
              "Confident typography paired with a smiling fruit mascot.",
              "Tactile pastel cans that feel collectible, not disposable.",
              "Copy that sounds like a friend, not a beverage company.",
            ].map((s, i) => (
              <li key={i} className="flex gap-5 border-b border-rule pb-5">
                <span className="font-display text-4xl text-accent-red leading-none w-12 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl leading-snug">{s}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="col-span-12 md:col-span-5 md:border-l md:border-ink/30 md:pl-6">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-4">
            Product Story
          </p>
          <div className="space-y-6">
            {[
              { Icon: Droplets, v: "Crafted in small batches with real blood orange and crisp bubbles." },
              { Icon: Heart, v: "Just 80 calories — a sparkling pick-me-up without the sugar crash." },
              { Icon: Palette, v: "Pastel can, vermilion wordmark, smiling orange mark — instantly recognisable." },
              { Icon: Sparkles, v: "Designed to live on shelf, in hand, and across a feed equally well." },
            ].map(({ Icon, v }) => (
              <div key={v} className="flex gap-4 items-start">
                <Icon className="size-5 text-ink/70 mt-1 shrink-0" />
                <p className="font-display text-lg italic text-ink-soft leading-snug">
                  {v}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 border border-ink/30 bg-paper-deep">
            <p className="font-mono text-[10px] small-caps text-ink-mute mb-2">
              Key Takeaway
            </p>
            <p className="font-display italic text-sm text-ink-soft leading-relaxed">
              "Sippy treats the can as the hero asset — when packaging, palette, and personality move as one system, the product becomes its own ad."
            </p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 -mx-6 overflow-hidden border-y-2 border-ink py-4 bg-ink text-paper">
        <div className="marquee whitespace-nowrap font-display italic text-3xl md:text-5xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="mx-8">
              sippy. · keep it cute, keep it sippy · sparkling blood orange · 80 kcal · sippy. ·{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const MegsCreami = () => (
  <section id="megs-creami" className="border-t-4 border-ink relative overflow-hidden">
    <div
      aria-hidden
      className="absolute inset-0 -z-0 opacity-[0.08]"
      style={{
        background:
          "radial-gradient(55% 55% at 18% 22%, #EBC4C2 0%, transparent 60%), radial-gradient(50% 50% at 82% 78%, #CA2200 0%, transparent 65%)",
      }}
    />
    <div className="container py-16 md:py-24 relative">
      <SectionHeader kicker="Selected Work" title="Case Study III" no="IV·C" />

      <article className="grid grid-cols-12 gap-x-6 gap-y-8 items-stretch">
        <div className="col-span-12 md:col-span-7">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">
            Case Study 03 · Dessert · Concept Brand
          </p>
          <h3 className="font-display font-light text-5xl md:text-7xl leading-[0.9] tracking-tight">
            Meg's Creami
            <span className="font-display italic text-accent-red">.</span>
            <span className="block font-display italic text-2xl md:text-3xl text-ink-soft mt-3">
              A spoonful of nostalgia.
            </span>
          </h3>
          <p className="font-display text-xl text-ink-soft mt-6 max-w-2xl leading-relaxed">
            A small-batch ice cream concept built in Figma — a retro script wordmark, a sprinkle-dusted seal, and a soft pink pint designed to feel like a homemade scoop you'd photograph before opening.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-5 md:border-l md:border-ink/30 md:pl-6">
          <p className="font-mono text-[11px] small-caps text-ink-mute mb-4">At a glance</p>
          <dl className="space-y-3">
            {[
              ["Format", "473 ml (1 Pint) tub"],
              ["Category", "Small-batch artisan ice cream"],
              ["Tools", "Figma · Canva · AI Mockups"],
              ["Type", "Vintage King · Baloo Bhai"],
              ["Role", "Brand identity, packaging, art direction"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-rule pb-2">
                <dt className="font-mono text-[11px] small-caps text-ink-mute pt-1">{k}</dt>
                <dd className="font-display text-lg text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <figure className="col-span-12 mt-4">
          <div className="border border-ink/20 bg-paper-deep p-2 md:p-3">
            <img
              src={megsCreamiBrandBoard}
              alt="Meg's Creami brand identity board featuring the primary scalloped logo seal, the Meg's script wordmark, the burnt red and dusty pink color palette, Vintage King and Baloo Bhai typography, and pint packaging mockups"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
          <figcaption className="pt-3 mt-3 border-t border-ink/20 flex items-baseline justify-between gap-4 flex-wrap">
            <p className="font-mono text-[10px] small-caps text-ink-mute">
              Plate VII — Meg's Creami Brand Identity Board
            </p>
            <p className="font-display italic text-sm text-ink-mute">
              Logo · Wordmark · Palette · Typography · Packaging
            </p>
          </figcaption>
        </figure>
      </article>

      <div className="editorial-rule my-12" />

      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        {[
          {
            icon: Lightbulb,
            label: "Concept",
            body: "Meg's Creami treats ice cream as a small ritual — a soft, scallop-edged seal and a hand-drawn script wordmark that hint at a family-run scoop shop rather than a freezer-aisle SKU.",
            pull: "Packaging that feels like it was scooped, not manufactured.",
          },
          {
            icon: Eye,
            label: "Insight",
            body: "Premium pints fight for shelf attention with shouty graphics. The opportunity is the opposite — quiet warmth, retro typography, and a pastel tub that signals craft, intimacy, and indulgence at a glance.",
            pull: "Soft beats loud when the category is comfort.",
          },
          {
            icon: IceCream,
            label: "Solution",
            body: "A burnt-red script lockup sitting inside a creamy, sprinkle-dotted seal, wrapped onto a pastel pink pint with a matching red lid — a tactile, photo-ready system designed to live in hand, on shelf, and on a feed.",
            pull: "Character-led packaging that becomes the marketing.",
          },
        ].map(({ icon: Icon, label, body, pull }) => (
          <div key={label} className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <Icon className="size-4 text-accent-red" />
              <p className="font-mono text-[11px] small-caps text-ink-mute">{label}</p>
            </div>
            <p className="font-display text-lg leading-relaxed mb-4">{body}</p>
            <p className="font-display italic text-base text-accent-red leading-snug border-l-2 border-accent-red pl-3">
              {pull}
            </p>
          </div>
        ))}
      </div>

      <div className="editorial-rule my-12" />

      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 md:col-span-4">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">Palette</p>
          <h4 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
            A scoop-shop palette in four tones.
          </h4>
          <p className="font-display italic text-lg text-ink-soft mt-4 leading-relaxed">
            One confident burnt red anchors three soft pinks and a creamy nude — the colour of strawberry ribboned through vanilla.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { name: "Burnt Red", hex: "#CA2200", ink: "text-paper" },
            { name: "Dusty Peach", hex: "#EFA99B", ink: "text-ink" },
            { name: "Creamy Nude", hex: "#F7E0D1", ink: "text-ink" },
            { name: "Muted Blush Pink", hex: "#EBC4C2", ink: "text-ink" },
          ].map((c) => (
            <div key={c.name} className="border border-ink/30">
              <div
                className={`aspect-video flex items-end p-3 ${c.ink}`}
                style={{ background: c.hex }}
              >
                <span className="font-mono text-[10px] small-caps">{c.hex}</span>
              </div>
              <p className="font-display text-sm px-3 py-2 border-t border-ink/30">
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="editorial-rule my-12" />

      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 md:col-span-4">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">Typography</p>
          <h4 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
            Retro script meets a friendly sans.
          </h4>
          <p className="font-display italic text-lg text-ink-soft mt-4 leading-relaxed">
            Vintage King carries the personality and nostalgia, while Baloo Bhai keeps everything else round, readable, and warm.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-ink/30 p-6 bg-paper-deep">
            <p className="font-mono text-[10px] small-caps text-ink-mute mb-3">Display · Vintage King</p>
            <p
              className="text-7xl leading-none mb-2"
              style={{ fontFamily: "'Pacifico', 'Brush Script MT', cursive", color: "#CA2200" }}
            >
              Aa
            </p>
            <p className="font-mono text-xs text-ink-mute">Headlines · Logo · Flavour names</p>
          </div>
          <div className="border border-ink/30 p-6 bg-paper-deep">
            <p className="font-mono text-[10px] small-caps text-ink-mute mb-3">Body · Baloo Bhai</p>
            <p className="text-7xl leading-none mb-2 font-bold" style={{ color: "#CA2200" }}>
              Aa
            </p>
            <p className="font-mono text-xs text-ink-mute">Pack copy · Web · Supporting text</p>
          </div>
        </div>
      </div>

      <div className="editorial-rule my-12" />

      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 md:col-span-7">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-4">Brand Voice</p>
          <ol className="space-y-5">
            {[
              "Warm and homemade — like a recipe scribbled on a card.",
              "Nostalgic without being kitsch — vintage script, modern grid.",
              "Soft, tactile pinks that read as comfort, not candy.",
              "Copy that talks about scoops and afternoons, not 'product'.",
            ].map((s, i) => (
              <li key={i} className="flex gap-5 border-b border-rule pb-5">
                <span className="font-display text-4xl text-accent-red leading-none w-12 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl leading-snug">{s}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="col-span-12 md:col-span-5 md:border-l md:border-ink/30 md:pl-6">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-4">Product Story</p>
          <div className="space-y-6">
            {[
              { Icon: IceCream, v: "Small-batch pints churned slow, finished by hand." },
              { Icon: Snowflake, v: "Ribbons of fruit and crumb visible through every scoop." },
              { Icon: Palette, v: "Pastel pint, burnt-red lid, sprinkle-dusted seal — instantly recognisable." },
              { Icon: Camera, v: "Designed to look as good on the spoon as it does on the shelf." },
            ].map(({ Icon, v }) => (
              <div key={v} className="flex gap-4 items-start">
                <Icon className="size-5 text-ink/70 mt-1 shrink-0" />
                <p className="font-display text-lg italic text-ink-soft leading-snug">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 border border-ink/30 bg-paper-deep">
            <p className="font-mono text-[10px] small-caps text-ink-mute mb-2">Key Takeaway</p>
            <p className="font-display italic text-sm text-ink-soft leading-relaxed">
              "Meg's Creami leads with feeling — a script, a seal, and a pastel pint that turn a freezer staple into a small daily ritual worth photographing."
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-20 -mx-6 overflow-hidden border-y-2 border-ink py-4"
        style={{ background: "#CA2200", color: "#F7E0D1" }}
      >
        <div className="marquee whitespace-nowrap font-display italic text-3xl md:text-5xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="mx-8">
              Meg's Creami · a spoonful of nostalgia · small-batch · 473ml · Meg's Creami ·{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const groups = [
    {
      title: "Marketing & Strategy",
      items: [
        "Consumer Insight Development",
        "Brand Positioning",
        "Campaign Strategy",
        "Product-Led Marketing",
      ],
    },
    {
      title: "Design & Tools",
      items: [
        "Figma branding, layout, product mockups",
        "Canva campaign visuals & social content",
        "Visual Identity Development",
      ],
    },
    {
      title: "Digital & Content",
      items: [
        "Social Media Strategy TikTok & Instagram",
        "Content Ideation & Creative Direction",
        "User-Generated Content Strategy",
      ],
    },
    {
      title: "Research & Analysis",
      items: [
        "Market Research",
        "Consumer Behaviour Analysis",
        "Competitor Analysis",
      ],
    },
    {
      title: "Languages",
      items: [
        "English Professional",
        "Chinese (Mandarin) Professional",
        "Cantonese Professional",
        "Malay Professional",
      ],
    },
  ];
  return (
    <section id="skills" className="bg-paper-deep border-y border-ink/20">
      <div className="container py-16 md:py-24">
        <SectionHeader kicker="Index" title="Skills & Instruments" no="V" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-ink/20 border border-ink/20">
          {groups.map((g) => (
            <div key={g.title} className="bg-paper-deep p-7">
              <p className="font-mono text-[11px] small-caps text-accent-red mb-4">
                {g.title}
              </p>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="font-display text-lg leading-snug border-b border-rule pb-3 last:border-0"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Statement = () => (
  <section className="bg-ink text-paper">
    <div className="container py-20 md:py-28">
      <p className="font-mono text-[11px] small-caps text-paper/60 mb-6">
        Personal Statement
      </p>
      <p className="font-display italic font-light text-3xl md:text-5xl leading-[1.15] tracking-tight max-w-5xl">
        "I make marketing that doesn't just talk — it shows up.
        Turning everyday habits and good taste into ideas
        that feel sharp, fun, and actually work."
      </p>
      <p className="font-mono text-xs small-caps text-paper/60 mt-8">
        Megan Ho, Melbourne
      </p>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="container py-16 md:py-24">
    <SectionHeader kicker="Correspondence" title="Get In Touch" no="VII" />
    <div className="grid grid-cols-12 gap-x-6 gap-y-10">
      <div className="col-span-12 md:col-span-7">
        <h3 className="font-display font-light text-4xl md:text-6xl leading-[0.95] tracking-tight">
          Open to graduate
          <br />
          <em className="italic">marketing & brand</em>
          <br />
          opportunities.
        </h3>
        <p className="font-display text-xl text-ink-soft mt-6 max-w-xl leading-relaxed">
          Open to opportunities across digital, social, and brand marketing 
          including full-time roles, internships, and collaborative projects,
          particularly within design-led and experience-focused industries.
        </p>
      </div>
      <div className="col-span-12 md:col-span-5 md:border-l md:border-ink/30 md:pl-6 space-y-6">
        <a
          href="mailto:megan123ho@icloud.com"
          className="block group border border-ink p-6 hover:bg-ink hover:text-paper transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <Mail className="size-5" />
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <p className="font-mono text-[11px] small-caps mb-1 opacity-70">Email</p>
          <p className="font-display text-2xl break-all">megan123ho@icloud.com</p>
        </a>
        <a
          href="tel:+61412176909"
          className="block group border border-ink p-6 hover:bg-ink hover:text-paper transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <Phone className="size-5" />
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <p className="font-mono text-[11px] small-caps mb-1 opacity-70">Phone</p>
          <p className="font-display text-2xl">0412 176 909</p>
        </a>
        <div className="border border-ink/30 p-6">
          <div className="flex items-center justify-between mb-3">
            <MapPin className="size-5 text-ink-soft" />
          </div>
          <p className="font-mono text-[11px] small-caps mb-1 text-ink-mute">
            Based in
          </p>
          <p className="font-display text-2xl">Melbourne, Australia</p>
        </div>
      </div>
    </div>
  </section>
);

const Colophon = () => (
  <footer className="border-t-4 border-ink bg-paper-deep">
    <div className="container py-10 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6">
        <p className="font-display italic text-2xl">Megan Ho · Folio MMXXVI</p>
        <p className="font-mono text-[11px] small-caps text-ink-mute mt-2">
          Set in Newsreader & Inter · Printed in Melbourne
        </p>
      </div>
      <div className="col-span-12 md:col-span-6 md:text-right">
        <p className="font-mono text-[11px] small-caps text-ink-mute">
          © {new Date().getFullYear()} · All work and concepts by Megan Ho
        </p>
        <p className="font-mono text-[11px] small-caps text-ink-mute mt-1">
          End of edition · ◼
        </p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <div id="top" className="paper-grain min-h-screen text-ink">
      <div
        className="fixed top-0 left-0 h-[2px] bg-accent-red z-50 transition-[width]"
        style={{ width: `${progress}%` }}
      />
      <Hero />
      <main>
        <SelectedWork />
        <Approach />
        <Skills />
        <Statement />
        <Contact />
      </main>
      <Colophon />
    </div>
  );
};

export default Index;
