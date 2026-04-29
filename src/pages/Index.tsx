import { useEffect, useState } from "react";
import { Mail, MapPin, ArrowUpRight, Sparkles, Phone } from "lucide-react";
import meganPortrait from "@/assets/megan-portrait.jpg";

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
        <span>Vol. I — No. 01</span>
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
          A Master of Marketing folio exploring how consumer insight, design, and storytelling collapse into a single object — where the product itself becomes the primary driver of engagement and visibility.
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
          "VERAMANTE — Carry Your SPF",
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
          I am particularly interested in the intersection of beauty, lifestyle, and luxury branding — developing concepts that align functionality with identity and everyday behaviour.
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
      body: "I create ideas where the product itself becomes the marketing channel — driving organic visibility, engagement, and repeat behaviour.",
    },
    {
      no: "02",
      title: "End-to-end concepting",
      body: "From brand identity and product design to campaign execution — every idea is creatively strong and commercially grounded.",
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

    <article className="grid grid-cols-12 gap-x-6 gap-y-8">
      <div className="col-span-12 md:col-span-7">
        <p className="font-mono text-[11px] small-caps text-accent-red mb-3">
          Case Study 01 · Beauty · Concept
        </p>
        <h3 className="font-display font-light text-5xl md:text-7xl leading-[0.9] tracking-tight">
          VERAMANTE
          <span className="block font-display italic text-2xl md:text-3xl text-ink-soft mt-3">
            Carry Your SPF.
          </span>
        </h3>
        <p className="font-display text-xl text-ink-soft mt-6 max-w-xl leading-relaxed">
          Sunscreen reimagined as a lifestyle accessory — addressing low reapplication behaviour and increasing brand visibility among Gen Z consumers.
        </p>
      </div>
      <div className="col-span-12 md:col-span-5">
        <div className="aspect-[4/5] relative bg-gradient-to-br from-paper-deep to-paper border border-ink/20 overflow-hidden">
          {/* Stylised SPF stick illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-8 rounded-full bg-ink/80" />
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-ink/80" />
              <div className="w-24 h-56 bg-accent-red rounded-lg shadow-[8px_8px_0_hsl(var(--ink))] flex flex-col items-center justify-between py-6 text-paper">
                <span className="font-display italic text-xs">veramante</span>
                <span className="font-mono text-[9px] small-caps">SPF 50+</span>
                <span className="w-12 h-12 rounded-full bg-paper/95" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 border-t border-ink/30 bg-paper/80 backdrop-blur">
            <p className="font-mono text-[10px] small-caps text-ink-mute">
              Plate II — Product mockup
            </p>
          </div>
        </div>
      </div>
    </article>

    <div className="editorial-rule my-12" />

    <div className="grid grid-cols-12 gap-x-6 gap-y-12">
      <div className="col-span-12 md:col-span-4">
        <p className="font-mono text-[11px] small-caps text-ink-mute mb-3">Brief</p>
        <p className="font-display text-lg leading-relaxed">
          Reimagine sunscreen as a lifestyle accessory to address low reapplication behaviour and increase brand visibility among Gen Z consumers.
        </p>
      </div>
      <div className="col-span-12 md:col-span-4">
        <p className="font-mono text-[11px] small-caps text-ink-mute mb-3">Concept</p>
        <p className="font-display text-lg leading-relaxed">
          A portable sunscreen stick designed with a keychain attachment — carried and displayed as part of the daily outfit. The product transforms SPF from a hidden routine into a visible, aesthetic object integrated into everyday life.
        </p>
      </div>
      <div className="col-span-12 md:col-span-4">
        <p className="font-mono text-[11px] small-caps text-ink-mute mb-3">Execution</p>
        <p className="font-display text-lg leading-relaxed">
          Designed in Figma — brand identity, product visuals, and campaign layouts. The case demonstrates branding a product from concept to execution, combining visual design with marketing strategy.
        </p>
      </div>
    </div>

    <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10">
      <div className="col-span-12 md:col-span-7">
        <p className="font-mono text-[11px] small-caps text-accent-red mb-4">Strategy</p>
        <ol className="space-y-5">
          {[
            "Positioned the product itself as a marketing channel through visible, wearable design.",
            "Introduced a collectible charm system to drive repeat purchase behaviour.",
            "Built a social-first campaign centred on lifestyle integration and user-generated content.",
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
          Results · Projected
        </p>
        <div className="space-y-6">
          {[
            { k: "↑", v: "Increased product visibility through everyday use" },
            { k: "↻", v: "Higher repeat purchase driven by collectability" },
            { k: "✦", v: "Strong potential for organic reach & UGC" },
          ].map((r) => (
            <div key={r.v} className="flex gap-5 items-start">
              <span className="font-display text-5xl leading-none text-ink/80 w-10">
                {r.k}
              </span>
              <p className="font-display text-lg italic text-ink-soft leading-snug pt-2">
                {r.v}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 p-5 border border-ink/30 bg-paper-deep">
          <p className="font-mono text-[10px] small-caps text-ink-mute mb-2">
            Editor's note
          </p>
          <p className="font-display italic text-sm text-ink-soft leading-relaxed">
            "The keychain charm system turns each unit into a wearable advertisement — the wearer becomes media."
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
        "Figma — branding, layout, product mockups",
        "Canva — campaign visuals & social content",
        "Visual Identity Development",
      ],
    },
    {
      title: "Digital & Content",
      items: [
        "Social Media Strategy — TikTok & Instagram",
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
        "English — Professional",
        "Chinese (Mandarin) — Professional",
        "Cantonese — Professional",
        "Malay — Professional",
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
        "I am interested in creating marketing that goes beyond communication —
        where products themselves become platforms for engagement. I focus on
        understanding how consumer behaviour, aesthetics, and everyday habits
        can be translated into ideas that are both creatively compelling and
        commercially viable."
      </p>
      <p className="font-mono text-xs small-caps text-paper/60 mt-8">
        — Megan Ho, Melbourne
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
          Open to opportunities across digital, social, and brand marketing —
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
