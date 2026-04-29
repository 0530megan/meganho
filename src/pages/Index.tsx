import { useEffect, useState } from "react";
import { Mail, MapPin, ArrowUpRight, Sparkles, Phone, Lightbulb, Eye, Package, Tag, Gift, Share2, TrendingUp, Repeat, Users, Droplets, Palette, Citrus, Heart } from "lucide-react";
import meganPortrait from "@/assets/megan-portrait.jpg";
import veramenteBrandBoard from "@/assets/veramente-brand-board.jpg";
import veramenteTinyBites from "@/assets/veramente-tiny-bites.png";
import veramenteBagCharm from "@/assets/veramente-bag-charm.png";
import veramenteCafe from "@/assets/veramente-cafe.png";
import sippyBrandBoard from "@/assets/sippy-brand-board.jpg";

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

const Masthead = () => (
  <header className="border-b-4 border-ink">
    <div className="border-b border-ink/30">
      <div className="container flex items-center justify-between py-2 text-[11px] small-caps text-ink-soft font-mono">
        <span>Vol. I No. 01</span>
        <span className="hidden md:inline">{TODAY}</span>
        <span>Melbourne · Edition</span>
      </div>
    </div>
    <div className="container py-8 md:py-12">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <p className="font-mono text-[11px] small-caps text-ink-mute">
          The Marketing Quarterly
        </p>
        <p className="font-mono text-[11px] small-caps text-ink-mute hidden md:block">
          Issue · Graduate Folio 2026
        </p>
      </div>
      <h1 className="font-display font-medium tracking-tight leading-[0.85] mt-3 text-[clamp(3.5rem,12vw,11rem)]">
        Megan Ho
      </h1>
      <div className="mt-6 flex items-end justify-between gap-6 flex-wrap">
        <p className="font-display italic text-xl md:text-2xl text-ink-soft max-w-2xl leading-snug">
          Product-Led Marketing · Brand Strategy · Consumer Experience Design
        </p>
        <p className="font-mono text-[11px] small-caps text-ink-mute">
          A folio in one volume
        </p>
      </div>
    </div>
    <nav className="border-t border-ink/40 border-b border-ink/40 bg-paper/60 backdrop-blur sticky top-0 z-30">
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
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1 font-mono text-[11px] small-caps text-ink hover:text-accent-red"
        >
          Hire <ArrowUpRight className="size-3" />
        </a>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="container py-14 md:py-20 grid grid-cols-12 gap-x-6 gap-y-10">
    <div className="col-span-12 md:col-span-8">
      <p className="font-mono text-[11px] small-caps text-accent-red mb-6">
        Lead Essay · 01
      </p>
      <h2 className="font-display font-light leading-[0.95] tracking-tight text-[clamp(2.5rem,6vw,5.5rem)]">
        Designing products that <em className="font-display italic">function</em> as marketing.
      </h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-3xl">
        <p className="font-display text-lg leading-relaxed text-ink-soft drop-cap">
          A Master of Marketing folio exploring how consumer insight, design, and storytelling collapse into a single object where the product itself becomes the primary driver of engagement and visibility.
        </p>
        <p className="font-display italic text-base leading-relaxed text-ink-mute">
          Brand identities, product mockups, and campaign architecture for a generation that no longer separates what they buy from what they wear, post, and signal.
        </p>
      </div>
    </div>
    <aside className="col-span-12 md:col-span-4 md:border-l md:border-ink/30 md:pl-6">
      <p className="font-mono text-[11px] small-caps text-ink-mute mb-3">In this issue</p>
      <ol className="space-y-3 font-display text-lg">
        {[
          "About the author",
          "Method & approach",
          "VERAMANTE Carry Your SPF",
          "SIPPY Sparkling Blood Orange",
          "Skills & instruments",
          "Education & experience",
          "Correspondence",
        ].map((item, i) => (
          <li key={item} className="flex gap-4 border-b border-rule pb-2">
            <span className="font-mono text-xs text-ink-mute pt-1 w-6">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1">{item}</span>
            <span className="font-mono text-xs text-ink-mute pt-1">P.{i + 1}</span>
          </li>
        ))}
      </ol>
    </aside>
  </section>
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

const About = () => (
  <section id="about" className="container py-16 md:py-24">
    <SectionHeader kicker="Profile" title="Who I Am & What I Bring" no="II" />
    <div className="grid grid-cols-12 gap-x-6 gap-y-10">
      <div className="col-span-12 md:col-span-4">
        <div className="aspect-[3/4] bg-paper-deep border border-ink/20 relative overflow-hidden">
          <img
            src={meganPortrait}
            alt="Portrait of Megan Ho"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-ink/30 bg-paper/85 backdrop-blur">
            <p className="font-mono text-[10px] small-caps text-ink-mute">Plate I</p>
            <p className="font-display italic text-sm">Megan Ho, the author</p>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 md:columns-2 md:gap-8 font-display text-lg leading-relaxed text-ink-soft">
        <p className="drop-cap mb-5 break-inside-avoid">
          I am a Master of Marketing student at RMIT University with a strong focus on product-led marketing and brand strategy. My work explores how consumer insight, design, and storytelling can be integrated to create marketing systems where the product itself becomes the primary driver of engagement and visibility.
        </p>
        <p className="mb-5 break-inside-avoid">
          I have developed multiple brand concepts using tools such as Figma and Canva, where I translate ideas into visual identities, product designs, and campaign assets. Through these projects, I focus on creating work that is not only visually compelling, but also grounded in strategic thinking and consumer behaviour.
        </p>
        <p className="break-inside-avoid italic text-ink">
          I am particularly interested in the intersection of beauty, lifestyle, and luxury branding developing concepts that align functionality with identity and everyday behaviour.
        </p>
      </div>
    </div>
  </section>
);

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
  <section id="work" className="container py-16 md:py-24">
    <SectionHeader kicker="Selected Work" title="Case Studies" no="IV" />

    <article className="grid grid-cols-12 gap-x-6 gap-y-8 items-stretch">
      {/* Intro copy */}
      <div className="col-span-12">
        <p className="font-mono text-[11px] small-caps text-accent-red mb-3">
          Case Study 01 · Beauty · Concept
        </p>
        <h3 className="font-display font-light text-5xl md:text-7xl leading-[0.9] tracking-tight">
          VERAMANTE
          <span className="block font-display italic text-2xl md:text-3xl text-ink-soft mt-3">
            Carry Your SPF.
          </span>
        </h3>
        <p className="font-display text-xl text-ink-soft mt-6 max-w-2xl leading-relaxed">
          Sunscreen reimagined as a lifestyle accessory addressing low reapplication behaviour and increasing brand visibility among Gen Z consumers.
        </p>
      </div>

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
        <figcaption className="pt-3 mt-3 border-t border-ink/20">
          <p className="font-mono text-[10px] small-caps text-ink-mute">
            Plate II — Brand Identity Board
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

    <div className="grid grid-cols-12 gap-x-6 gap-y-12">
      {[
        {
          icon: Lightbulb,
          label: "Concept",
          body: "VERAMANTE reimagines sunscreen as a wearable lifestyle accessory, transforming it from a routine necessity into a visible, aesthetic object integrated into everyday styling.",
          pull: "Sunscreen you don't forget because you want to show it.",
        },
        {
          icon: Eye,
          label: "Insight",
          body: "Gen Z consumers often neglect sunscreen reapplication due to inconvenience, but actively engage with products that are aesthetic, portable, and expressive.",
          pull: "When skincare becomes an accessory, it shifts from obligation to identity.",
        },
        {
          icon: Package,
          label: "Solution",
          body: "A portable SPF50+ sunscreen stick designed with a built-in keychain loop, allowing users to carry and display it as part of their daily outfit.",
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

    {/* Campaign */}
    <div className="grid grid-cols-12 gap-x-6 gap-y-8">
      <div className="col-span-12 md:col-span-5">
        <p className="font-mono text-[11px] small-caps text-accent-red mb-3">Campaign</p>
        <h4 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight">
          Clip. Protect. Collect.
        </h4>
        <p className="font-display italic text-lg text-ink-soft mt-4 leading-relaxed">
          Sunscreen repositioned as part of a collectible accessory culture.
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

    <div className="mt-4 grid grid-cols-12 gap-x-6 gap-y-10">
      <div className="col-span-12 md:col-span-7">
        <p className="font-mono text-[11px] small-caps text-accent-red mb-4">Strategy · Why It Works</p>
        <ol className="space-y-5">
          {[
            "Product-led marketing visibility drives awareness through everyday wear.",
            "Collectability and gamification encourage repeat purchase and retention.",
            "Social-first content on TikTok & Instagram fuels UGC, unboxing, and styling.",
            "Community shifts users from consumers to collectors, building organic reach.",
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
            { Icon: TrendingUp, v: "Increased brand visibility through everyday use" },
            { Icon: Repeat, v: "Higher repeat purchase behaviour" },
            { Icon: Sparkles, v: "Strong user-generated content potential" },
            { Icon: Users, v: "Community of collectors, not just consumers" },
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
            "Product design acts as marketing turning a functional item into a shareable, identity-driven experience that naturally drives visibility and engagement."
          </p>
        </div>
      </div>
    </div>

    {/* Marquee */}
    <div className="mt-20 -mx-6 overflow-hidden border-y-2 border-ink py-4">
      <div className="marquee whitespace-nowrap font-display italic text-3xl md:text-5xl">
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} className="mx-8">
            VERAMANTE · Carry Your SPF · A wearable ritual · VERAMANTE · Carry Your SPF · A wearable ritual ·{" "}
          </span>
        ))}
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
      <SectionHeader kicker="Selected Work" title="Case Studies (cont.)" no="IV·B" />

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
            A sparkling blood orange drink in a 440ml can — a Figma-built brand identity exploring how playful character design and a pastel-meets-vermilion palette can carve out a space for low-calorie sparkling beverages aimed at Gen Z.
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
            body: "Gen Z drinkers want low-cal, low-sugar sparkling alternatives, but reach for whichever can looks most shareable. Function alone is not enough — the can has to perform on camera.",
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
                className={`aspect-square flex items-end p-3 ${c.ink}`}
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
      <Masthead />
      <main>
        <Hero />
        <About />
        <Approach />
        <Veramante />
        <Sippy />
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
