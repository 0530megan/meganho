import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import veramenteLogo from "@/assets/veramente-logo.jpg";
import sippyLogo from "@/assets/sippy-logo.jpg";
import megsCreamiLogo from "@/assets/megs-creami-logo.png";

const CASES: Record<
  string,
  { no: string; name: string; tagline: string; cover: string; tint: string }
> = {
  veramente: {
    no: "I",
    name: "Veramente",
    tagline: "Carry Your SPF — wearable sunscreen as accessory.",
    cover: veramenteLogo,
    tint: "hsl(28 60% 92%)",
  },
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

const CaseStudy = () => {
  const { slug = "" } = useParams();
  const cs = CASES[slug];

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
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 hover:text-[hsl(var(--accent-burnt))]"
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
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 hover:text-[hsl(var(--accent-burnt))] transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Folio
          </Link>
          <p className="font-mono text-[11px] small-caps text-ink-mute">
            Case · {cs.no} · {cs.name}
          </p>
        </div>
      </header>

      <section className="border-b-2 border-ink">
        <div className="container py-16 md:py-24 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] small-caps text-[hsl(var(--accent-burnt))] mb-4">
              Case Study · No. {cs.no}
            </p>
            <h1 className="font-display font-light leading-[0.9] tracking-tight text-[clamp(3rem,8vw,7rem)]">
              {cs.name}
            </h1>
            <p className="font-display italic text-xl md:text-2xl text-ink-soft mt-6 max-w-xl">
              {cs.tagline}
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
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-3xl mx-auto text-center border border-dashed border-ink/40 p-12">
          <p className="font-mono text-[11px] small-caps text-ink-mute mb-3">
            Layout in progress
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Case study coming together here.
          </h2>
          <p className="font-display italic text-ink-soft">
            Build out the {cs.name} story — concept, process, and outcomes — in
            this space.
          </p>
        </div>
      </section>

      <footer className="border-t-2 border-ink">
        <div className="container py-6 flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/"
            className="font-mono text-[11px] small-caps inline-flex items-center gap-2 hover:text-[hsl(var(--accent-burnt))] transition-colors"
          >
            <ArrowLeft className="size-3.5" /> Back to Folio
          </Link>
          <p className="font-mono text-[11px] small-caps text-ink-mute">
            End · ◼
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;
