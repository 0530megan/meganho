import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight, Sparkles, Phone, Lightbulb, Eye, Package, Tag, Gift, Share2, TrendingUp, Repeat, Users, Droplets, Palette, Citrus, Heart, IceCream, Snowflake, Camera } from "lucide-react";
import meganPortrait from "@/assets/megan-portrait.jpg";
import veramenteBrandBoard from "@/assets/veramente-brand-board.jpg";
import veramenteLogo from "@/assets/veramente-logo.jpg";
import veramenteTinyBites from "@/assets/veramente-tiny-bites.png";
import veramenteBagCharm from "@/assets/veramente-bag-charm.png";
import veramenteCafe from "@/assets/veramente-cafe.png";
import sippyBrandBoard from "@/assets/sippy-brand-board.jpg";
import sippyLogo from "@/assets/sippy-logo.jpg";
import megsCreamiBrandBoard from "@/assets/megs-creami-brand-board.jpg";
import megsCreamiLogo from "@/assets/megs-creami-logo.jpg";

const NAV = [
  { id: "about", label: "About" },
  { id: "approach", label: "Approach" },
  { id: "work", label: "Selected Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
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
        <span>Vol. I No. 01</span>
        <span className="hidden md:inline">{TODAY}</span>
        <span>Melbourne · Edition</span>
      </div>
    </div>

    {/* Nav */}
    <nav className="relative border-b border-ink/40 bg-paper/60 backdrop-blur sticky top-0 z-30">
      <div className="container flex items-center justify-between gap-6 overflow-x-auto">
        <a href="#top" className="font-display text-lg py-3 shrink-0">
          M.H.
        </a>
        <ul className="flex items-center gap-6 md:gap-8 py-3">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="font-mono text-[11px] small-caps text-ink-soft hover:text-accent-red transition-colors whitespace-nowrap"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-1 font-mono text-[11px] small-caps text-paper bg-[hsl(var(--accent-burnt))] px-3 py-1.5 hover:opacity-90 transition-opacity"
          >
            Figma Studio <ArrowUpRight className="size-3" />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-mono text-[11px] small-caps text-ink hover:text-accent-red"
          >
            Hire <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
    </nav>

    {/* Hero content */}
    <div className="container relative py-16 md:py-24 grid grid-cols-12 gap-x-6 gap-y-10 items-center">
      <div className="col-span-12 md:col-span-8">
        <p className="font-display text-2xl md:text-3xl text-ink-soft mb-2">
          Hello, I&rsquo;m
        </p>
        <h2 className="font-display font-medium leading-[0.82] tracking-[-0.03em] text-[clamp(4rem,16vw,13rem)]">
          Megan <span className="italic" style={{ color: "hsl(var(--accent-burnt))" }}>Ho.</span>
        </h2>
        <div className="mt-10 flex items-end gap-6 flex-wrap">
          <div className="h-px flex-1 min-w-[80px] bg-ink/40" />
          <p className="font-mono text-[11px] small-caps text-ink-mute">
            Lead Essay · 01
          </p>
        </div>
        <p className="font-display text-xl md:text-2xl leading-snug text-ink-soft mt-6 max-w-xl">
          I&rsquo;m passionate about marketing that turns heads and leaves an impression.
        </p>
      </div>
      <div className="col-span-12 md:col-span-4">
        <figure className="relative">
          <div className="border border-ink bg-paper p-2 shadow-[10px_12px_0_0_hsl(var(--ink))] rotate-[2deg] hover:rotate-0 transition-transform duration-500">
            <img
              src={meganPortrait}
              alt="Megan Ho"
              className="w-full h-auto block"
              loading="eager"
            />
            <figcaption className="pt-2 mt-1 border-t border-ink/30 flex items-baseline justify-between gap-3">
              <p className="font-display italic text-sm">The author</p>
              <p className="font-mono text-[10px] small-caps text-ink-mute">Plate I</p>
            </figcaption>
          </div>
          <span
            className="absolute -top-3 -left-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1 rotate-[-4deg]"
          >
            Est. 2026
          </span>
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
      <p className="font-mono text-[11px] small-caps text-accent-red mb-2">{kicker}</p>
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
      href: "#work",
    },
    {
      no: "II",
      name: "Sippy",
      subtitle: "Sparkling blood orange — keep it cute, keep it sippy.",
      cover: sippyLogo,
      tint: "hsl(10 90% 55%)",
      href: "#sippy",
    },
    {
      no: "III",
      name: "Meg's Creami",
      subtitle: "Small-batch ice cream — a spoonful of nostalgia.",
      cover: megsCreamiLogo,
      tint: "hsl(350 70% 92%)",
      href: "#megs-creami",
    },
  ];
  return (
    <section id="about" className="container py-16 md:py-24">
      <SectionHeader kicker="Some of my work" title="Selected Case Studies" no="II" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studies.map((s) => (
          <a
            key={s.no}
            href={s.href}
            className="group block border border-ink bg-paper hover:bg-paper-deep transition-colors"
          >
            <div
              className="relative overflow-hidden aspect-video border-b border-ink flex items-center justify-center p-6"
              style={{ background: s.tint }}
            >
              <img
                src={s.cover}
                alt={`${s.name} logo`}
                className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 font-mono text-[10px] small-caps bg-ink text-paper px-2 py-1">
                Case · {s.no}
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
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[hsl(var(--accent-burnt))]" />
              </div>
              <p className="font-display italic text-sm text-ink-soft">
                {s.subtitle}
              </p>
            </div>
          </a>
        ))}
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
  return (
    <section id="approach" className="bg-paper-deep border-y border-ink/20">
      <div className="container py-16 md:py-24">
        <SectionHeader kicker="Method" title="My Approach" no="III" />
        <div className="grid md:grid-cols-3 gap-px bg-ink/30 border border-ink/30">
          {principles.map((p) => (
            <article key={p.no} className="bg-paper-deep p-8 md:p-10">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-xs small-caps text-accent-red">
                  Principle {p.no}
                </span>
                <Sparkles className="size-4 text-ink-mute" />
              </div>
              <h3 className="font-display text-3xl leading-tight mb-4">{p.title}</h3>
              <p className="font-display text-lg italic text-ink-soft leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
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
    <div className="container py-16 md:py-24 relative">
      <SectionHeader kicker="Selected Work" title="Case Study I" no="IV" />

      <article className="grid grid-cols-12 gap-x-6 gap-y-8 items-stretch">
        {/* Intro copy */}
        <div className="col-span-12 md:col-span-7">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">
            Case Study 01 · Beauty · Concept Brand
          </p>
          <h3 className="font-display font-light text-5xl md:text-7xl leading-[0.9] tracking-tight">
            VERAMENTE
            <span className="font-display italic text-accent-red">.</span>
            <span className="block font-display italic text-2xl md:text-3xl text-ink-soft mt-3">
              Carry Your SPF.
            </span>
          </h3>
          <p className="font-display text-xl text-ink-soft mt-6 max-w-2xl leading-relaxed">
            A wearable SPF concept brand — a Figma-built identity exploring how product design, packaging, and a soft sun-bleached palette can turn sunscreen from a forgotten routine into a daily accessory people actually want to show off.
          </p>
        </div>

        {/* Quick stats panel — mirrors Sippy */}
        <aside className="col-span-12 md:col-span-5 md:border-l md:border-ink/30 md:pl-6">
          <p className="font-mono text-[11px] small-caps text-ink-mute mb-4">At a glance</p>
          <dl className="space-y-3">
            {[
              ["Format", "SPF50+ stick with charm loop"],
              ["Category", "Skincare · Lifestyle Accessory"],
              ["Tools", "Figma · Canva · AI Mockups"],
              ["Deliverables", "Logo, packaging, product, campaign"],
              ["Role", "Brand identity, product, art direction"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-rule pb-2">
                <dt className="font-mono text-[11px] small-caps text-ink-mute pt-1">{k}</dt>
                <dd className="font-display text-lg text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>

        {/* Brand board — large left plate, no frame, image centred with caption below */}
        <figure className="col-span-12 md:col-span-7 flex flex-col">
          <div className="flex-1 min-h-0 flex items-center justify-center">
            <img
              src={veramenteBrandBoard}
              alt="Veramente brand identity board featuring primary logo, secondary logo, brand mark, color palette, and packaging mockups"
              className="max-w-full max-h-full w-auto h-auto object-contain"
              loading="lazy"
            />
          </div>
          <figcaption className="pt-3 mt-3 border-t border-ink/20 flex items-baseline justify-between gap-4 flex-wrap">
            <p className="font-mono text-[10px] small-caps text-ink-mute">
              Plate II — Brand Identity Board
            </p>
            <p className="font-display italic text-sm text-ink-mute">
              Logo · Mark · Palette · Packaging
            </p>
          </figcaption>
        </figure>

        {/* Right column — 3 product photos stretch to match left height with no gaps */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-6">
          <figure className="relative border border-ink/20 bg-paper-deep overflow-hidden flex flex-col flex-1 min-h-0">
            <div className="flex-1 min-h-0 overflow-hidden">
              <img
                src={veramenteTinyBites}
                alt="Veramente Tiny Bites blind box keychain collection display with affirmation cards"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="px-4 py-2 border-t border-ink/30 bg-paper/85">
              <p className="font-mono text-[10px] small-caps text-ink-mute">
                Plate III — Tiny Bites Collection
              </p>
            </figcaption>
          </figure>
          <figure className="relative border border-ink/20 bg-paper-deep overflow-hidden flex flex-col flex-1 min-h-0">
            <div className="flex-1 min-h-0 overflow-hidden">
              <img
                src={veramenteBagCharm}
                alt="Veramente SPF stick clipped to a cream shoulder bag as a wearable charm"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <figcaption className="px-4 py-2 border-t border-ink/30 bg-paper/85">
              <p className="font-mono text-[10px] small-caps text-ink-mute">
                Plate IV — Wear It Daily
              </p>
            </figcaption>
          </figure>
          <figure className="relative border border-ink/20 bg-paper-deep overflow-hidden flex flex-col flex-1 min-h-0">
            <div className="flex-1 min-h-0 overflow-hidden">
              <img
                src={veramenteCafe}
                alt="Model carrying the Veramente SPF charm at an outdoor café in sunlight"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <figcaption className="px-4 py-2 border-t border-ink/30 bg-paper/85">
              <p className="font-mono text-[10px] small-caps text-ink-mute">
                Plate V — In The Wild
              </p>
            </figcaption>
          </figure>
        </div>
      </article>

      <div className="editorial-rule my-12" />

      {/* Concept / Insight / Solution */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        {[
          {
            icon: Lightbulb,
            label: "Concept",
            body: "VERAMENTE reimagines sunscreen as a wearable lifestyle accessory, transforming it from a routine necessity into a visible, aesthetic object integrated into everyday styling.",
            pull: "Sunscreen you don't forget — because you want to show it.",
          },
          {
            icon: Eye,
            label: "Insight",
            body: "Most consumers neglect SPF reapplication due to inconvenience, but actively engage with products that are aesthetic, portable, and expressive enough to leave the bathroom shelf.",
            pull: "When skincare becomes an accessory, it shifts from obligation to identity.",
          },
          {
            icon: Package,
            label: "Solution",
            body: "A portable SPF50+ sunscreen stick designed with a built-in keychain loop, paired with a collectible charm system that lets users carry and display it as part of their daily outfit.",
            pull: "The product functions as both skincare and a mobile brand touchpoint.",
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

      {/* Palette — sun-bleached, warm cream + terracotta */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 md:col-span-4">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">Palette</p>
          <h4 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
            A sun-warmed, second-skin palette.
          </h4>
          <p className="font-display italic text-lg text-ink-soft mt-4 leading-relaxed">
            Cream and butter neutrals grounded by a confident terracotta — chosen so the product reads as skincare, not packaging.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { name: "Terracotta", hex: "#C24A2C", ink: "text-paper" },
            { name: "Sun Ochre", hex: "#E8A95B", ink: "text-ink" },
            { name: "Butter", hex: "#F4D9A4", ink: "text-ink" },
            { name: "Cream Paper", hex: "#F6EFE2", ink: "text-ink" },
            { name: "Ink", hex: "#2A2520", ink: "text-paper" },
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

      {/* Campaign */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 md:col-span-5">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">Campaign</p>
          <h4 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
            Clip. Protect. Collect.
          </h4>
          <p className="font-display italic text-lg text-ink-soft mt-4 leading-relaxed">
            Sunscreen repositioned as part of a collectible accessory culture — every clip is a chance to restate the brand.
          </p>
        </div>
        <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Tag, t: "Selectable Charm", d: "Choose your base charm with each purchase." },
            { icon: Gift, t: "Blind Box +$10", d: "Optional mystery upgrade for the collector." },
            { icon: Share2, t: "Buy 3, Get 1", d: "Bundle incentive that rewards repeat buys." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="border border-ink/30 p-5 bg-paper-deep">
              <Icon className="size-5 text-accent-red mb-3" />
              <p className="font-display text-xl mb-2 leading-tight">{t}</p>
              <p className="font-mono text-xs text-ink-mute leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="editorial-rule my-12" />

      {/* Brand Voice + Impact (mirrors Sippy structure) */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 md:col-span-7">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-4">Brand Voice</p>
          <ol className="space-y-5">
            {[
              "Soft confidence — skincare that whispers, never lectures.",
              "Tactile, sun-washed packaging that feels like a personal object.",
              "Copy that treats SPF as self-care, not a chore.",
              "A collectible charm system that turns the product into a ritual.",
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
            Impact · Projected
          </p>
          <div className="space-y-6">
            {[
              { Icon: TrendingUp, v: "Increased brand visibility through everyday wear." },
              { Icon: Repeat, v: "Higher repeat purchase via charm collectability." },
              { Icon: Sparkles, v: "Strong UGC potential — unboxing, styling, restocks." },
              { Icon: Users, v: "A community of collectors, not just consumers." },
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
              "Product design acts as marketing — turning a functional item into a shareable, identity-driven experience that naturally drives visibility and engagement."
            </p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 -mx-6 overflow-hidden border-y-2 border-ink py-4">
        <div className="marquee whitespace-nowrap font-display italic text-3xl md:text-5xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="mx-8">
              VERAMENTE · Carry Your SPF · A wearable ritual · VERAMENTE · Carry Your SPF · A wearable ritual ·{" "}
            </span>
          ))}
        </div>
      </div>
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

const Experience = () => {
  const items = [
    {
      year: "Current",
      org: "RMIT University · Australia",
      role: "Master of Marketing",
      body: "Graduate study in marketing strategy, consumer behaviour, and brand systems.",
    },
    {
      year: "Prior",
      org: "University · Malaysia",
      role: "Bachelor of Entrepreneurship",
      body: "Foundation in venture-building, commercial thinking, and business strategy.",
    },
    {
      year: "Recent",
      org: "Moonlight Industries",
      role: "Part-Time Junior Marketing Executive",
      body: "Conducted market research and competitor analysis, managed company social platforms, and supported campaign planning and execution.",
    },
    {
      year: "Earlier",
      org: "Inter Island Manpower",
      role: "Recruitment Consultant Intern",
      body: "Worked in a team-driven corporate environment managing candidate sourcing and communication, developing strong coordination and professional communication skills.",
    },
  ];
  return (
    <section id="experience" className="container py-16 md:py-24">
      <SectionHeader kicker="Record" title="Education & Experience" no="VI" />
      <div className="space-y-0">
        {items.map((it, i) => (
          <article
            key={i}
            className="grid grid-cols-12 gap-x-6 gap-y-3 py-8 border-b border-ink/30 first:border-t first:border-ink/30 group"
          >
            <div className="col-span-12 md:col-span-2">
              <span className="font-mono text-xs small-caps text-accent-red">
                {it.year}
              </span>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h3 className="font-display text-2xl md:text-3xl leading-tight">
                {it.org}
              </h3>
            </div>
            <div className="col-span-12 md:col-span-3">
              <p className="font-display italic text-lg text-ink-soft">{it.role}</p>
            </div>
            <div className="col-span-12 md:col-span-3">
              <p className="font-body text-sm text-ink-soft leading-relaxed">
                {it.body}
              </p>
            </div>
          </article>
        ))}
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
        "I am interested in creating marketing that goes beyond communication 
        where products themselves become platforms for engagement. I focus on
        understanding how consumer behaviour, aesthetics, and everyday habits
        can be translated into ideas that are both creatively compelling and
        commercially viable."
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
        <Veramante />
        <Sippy />
        <MegsCreami />
        <Skills />
        <Experience />
        <Statement />
        <Contact />
      </main>
      <Colophon />
    </div>
  );
};

export default Index;
