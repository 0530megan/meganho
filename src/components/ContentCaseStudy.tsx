import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CaseStudyReel from "@/components/CaseStudyReel";

export interface ContentProject {
  slug: string;
  no: string;
  name: string;
  kicker: string;
  tagline: string;
  category: string;
  role: string;
  format: string;
  year: string;
  location?: string;
  accent: string; // hsl(var(--...)) or hex
  blurb: string[];
  videos: { src: string; caption: string }[];
  next: { href: string; name: string };
}

export const CONTENT_PROJECTS: Record<string, ContentProject> = {
  "five-senses": {
    slug: "five-senses",
    no: "01",
    name: "Five Senses Coffee",
    kicker: "Content Series · No. 01",
    tagline: "A coffee, told in five senses.",
    category: "Specialty Coffee · Social",
    role: "Concept · Shoot · Edit",
    format: "9:16 Reels",
    year: "2025",
    location: "Melbourne",
    accent: "hsl(var(--accent-burnt))",
    blurb: [
      "A short-form content series for Five Senses Coffee, built around the ritual of a single cup — the pour, the first sip, the pause.",
      "Each reel leans into texture, warmth and sound, with a behind-the-scenes cut showing the styling that set the frame. Shot vertical, cut for the feed.",
    ],
    videos: [
      { src: "/videos/five-senses-pour.mp4", caption: "The pour" },
      { src: "/videos/five-senses-drinking.mp4", caption: "What are you drinking?" },
      { src: "/videos/five-senses-pov.mp4", caption: "POV: you're a coffee cup" },
      { src: "/videos/five-senses-bts.mp4", caption: "Behind the shoot" },
    ],
    next: { href: "/case/yovie", name: "yovie" },
  },
  yovie: {
    slug: "yovie",
    no: "02",
    name: "yovie",
    kicker: "Content Series · No. 02",
    tagline: "Swipe for more yums.",
    category: "Dessert Café · Social",
    role: "Content · Shoot · Edit",
    format: "9:16 Reels",
    year: "2025",
    location: "Glen Waverley",
    accent: "hsl(var(--accent-ochre))",
    blurb: [
      "Social content for yovie, a dessert café at Century City Walk, Glen Waverley.",
      "Playful, swipe-first and appetite-led — styled to make the dessert the main character and nudge people through the door.",
    ],
    videos: [
      { src: "/videos/yovie-cups.mp4", caption: "Come find us" },
      { src: "/videos/yovie-redflag.mp4", caption: "Might be a red flag" },
    ],
    next: { href: "/case/gotcha", name: "Gotcha" },
  },
  gotcha: {
    slug: "gotcha",
    no: "03",
    name: "Gotcha",
    kicker: "Content Series · No. 03",
    tagline: "Popping pink, impossible to scroll past.",
    category: "Bubble Tea · Social",
    role: "Content · Shoot · Edit",
    format: "9:16 Reel",
    year: "2025",
    location: "Melbourne",
    accent: "hsl(var(--accent-red))",
    blurb: [
      "A short, punchy product reel for Gotcha bubble tea.",
      "Strawberry and popping pearls shot close and bright, cut to stop the scroll in the first second.",
    ],
    videos: [{ src: "/videos/gotcha-boba.mp4", caption: "Strawberry pop" }],
    next: { href: "/", name: "Folio" },
  },
};

const ContentCaseStudy = ({ project }: { project: ContentProject }) => {
  const meta: [string, string][] = [
    ["Category", project.category],
    ["Role", project.role],
    ["Format", project.format],
    ["Year", project.location ? `${project.year} · ${project.location}` : project.year],
  ];

  return (
    <div className="paper-grain min-h-screen text-ink">
      {/* Top bar */}
      <header className="border-b-2 border-ink sticky top-0 z-30 bg-paper/80 backdrop-blur">
        <div className="container py-3 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 hover:text-accent-red transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Folio
          </Link>
          <p className="font-mono text-[11px] small-caps text-ink-mute">Content · {project.name}</p>
          <Link
            to={project.next.href}
            className="font-mono text-[11px] small-caps inline-flex items-center gap-1 hover:text-accent-red transition-colors"
          >
            Next <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative border-b-2 border-ink overflow-hidden bg-paper">
        {/* accent wash */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            background: `linear-gradient(180deg, ${project.accent} 0%, transparent 65%)`,
          }}
        />
        <div className="container relative py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] small-caps tracking-[0.25em] mb-4" style={{ color: project.accent }}>
              ✦ {project.kicker} ✦
            </p>
            <h1 className="font-display font-light leading-[0.9] tracking-tight text-[clamp(2.75rem,8vw,6rem)]">
              {project.name}
            </h1>
            <p className="font-display italic text-xl md:text-2xl text-ink-soft mt-5 max-w-xl">
              {project.tagline}
            </p>
          </div>
          <div className="md:col-span-4 grid grid-cols-1 gap-4">
            {meta.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-3 border-b border-ink/20 pb-2">
                <span className="font-mono text-[10px] small-caps text-ink-mute tracking-[0.2em]">{k}</span>
                <span className="font-display text-sm text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="container py-16 md:py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] small-caps text-accent-red mb-3">01 · The Work</p>
          <h2 className="font-display text-3xl md:text-4xl leading-[0.95] tracking-tight">
            Content made
            <span className="italic" style={{ color: project.accent }}>
              {" "}
              for the feed.
            </span>
          </h2>
        </div>
        <div className="md:col-span-8 md:pt-2">
          {project.blurb.map((p, i) => (
            <p
              key={i}
              className={`font-display text-lg md:text-xl text-ink-soft leading-relaxed ${i === 0 ? "" : "mt-5"}`}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Reels */}
      <section className="container pb-20 md:pb-28">
        <CaseStudyReel
          videos={project.videos}
          plateNo="01"
          accentColor={project.accent}
          shadowColor={project.accent}
        />
      </section>

      {/* CTA / Next */}
      <section className="container py-16 md:py-20 text-center border-t-2 border-ink">
        <p className="font-mono text-[11px] small-caps text-accent-red mb-4 tracking-[0.2em]">
          ✦ End of {project.name} ✦
        </p>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight mb-8">
          Want the rest of the
          <span className="italic" style={{ color: project.accent }}>
            {" "}
            folio?
          </span>
        </h2>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            to={project.next.href}
            className="group font-mono text-[11px] small-caps inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 hover:opacity-90 transition-opacity"
          >
            Next: {project.next.name} <ArrowUpRight className="size-3.5" />
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
          <p className="font-mono text-[11px] small-caps text-ink-mute">Megan Ho · {project.name} Content</p>
          <p className="font-mono text-[11px] small-caps text-ink-mute">◼</p>
        </div>
      </footer>
    </div>
  );
};

export default ContentCaseStudy;
