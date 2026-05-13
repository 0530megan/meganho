import lineup from "@/assets/laneige-jellycat-lineup.png";
import dino from "@/assets/laneige-jellycat-dino.png";

const SAND = "hsl(46 76% 78%)"; // #F1DE9A
const INK = "hsl(30 6% 11%)";
const BLUSH = "#D2807B";

const flavours = [
  { name: "Berry", char: "Lamb", note: "Lollipop in paw" },
  { name: "Strawberry Shortcake", char: "Dino", note: "Cake in paw" },
  { name: "Taro Bubble Tea", char: "Elephant", note: "Boba in trunk" },
  { name: "Gummy Bear", char: "Star", note: "Bear in lap" },
  { name: "Sweet Candy / Grape", char: "Puppy", note: "Grapes in paw" },
];

const whyPoints = [
  { k: "Brand drift", v: "Currently safe, overly product-focused, weaker lifestyle identity." },
  { k: "Gen Z gap", v: "Less emotionally and culturally relevant to a collectible-driven audience." },
  { k: "Strategic shift", v: "Functional skincare → collectible lifestyle brand." },
  { k: "Emotional pull", v: "Stronger emotional branding, social visibility, displayable object." },
  { k: "Cultural fit", v: "Taps Gen Z accessory culture and ‘cute luxury’ aesthetics." },
];

const LaneigeJellycat = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: SAND,
        color: INK,
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "3px 3px, 7px 7px",
        backgroundPosition: "0 0, 1px 2px",
      }}
    >
      {/* HERO */}
      <header className="container pt-12 md:pt-20 pb-10 md:pb-16">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[11px] small-caps tracking-[0.3em] mb-6" style={{ color: BLUSH }}>
              ✦ Concept Campaign · Collectible Collab
            </p>
            <h1
              className="font-display uppercase leading-[0.82] tracking-[-0.04em]"
              style={{ fontWeight: 500, fontSize: "clamp(3rem,11vw,9rem)", color: BLUSH }}
            >
              Laneige
              <span className="block italic pl-[6vw]" style={{ color: INK }}>×</span>
              <span className="block">Jellycat.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:pb-4">
            <p className="font-display italic text-lg md:text-xl leading-snug">
              A collectible mini-pouch series turning Laneige Lip Glowy Balm flavours into wearable, plush bag charms — built for Gen Z to display, swap, and post.
            </p>
          </div>
        </div>

        <div className="mt-12 border-2 overflow-hidden" style={{ borderColor: INK }}>
          <img src={lineup} alt="Laneige x Jellycat collectible plush charms — lamb, dino, star, elephant, puppy" className="w-full block" />
        </div>
      </header>

      {/* THE IDEA */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] small-caps tracking-[0.3em] mb-3" style={{ color: BLUSH }}>✦ The Idea</p>
            <h2 className="font-display italic leading-[0.9]" style={{ fontSize: "clamp(2.25rem,5vw,4rem)" }}>
              From balm to bag-charm.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 font-display text-lg md:text-xl leading-relaxed">
            <p className="drop-cap">
              Laneige collaborates with Jellycat on a collectible series of mini plush pouches, each one inspired by a Lip Glowy Balm flavour. Every pouch holds the balm inside, clips onto a bag, and quietly carries a co-branded gold tag.
            </p>
            <p>
              Berry the lamb. Strawberry Shortcake the dino. Taro Bubble Tea the elephant. Gummy Bear the star. Sweet Candy the puppy. A flavour system that becomes a character system — engineered for repeat purchase and the “collect them all” instinct.
            </p>
          </div>
        </div>
      </section>

      {/* FLAVOUR INDEX */}
      <section className="border-y-2" style={{ borderColor: INK, background: "rgba(0,0,0,0.04)" }}>
        <div className="container py-16 md:py-20">
          <p className="font-mono text-[11px] small-caps tracking-[0.3em] mb-8" style={{ color: BLUSH }}>✦ The Flavour Index</p>
          <ol className="border-t" style={{ borderColor: "rgba(0,0,0,0.3)" }}>
            {flavours.map((f, i) => (
              <li
                key={f.name}
                className="grid grid-cols-12 gap-4 items-baseline py-5 md:py-6 border-b"
                style={{ borderColor: "rgba(0,0,0,0.3)" }}
              >
                <span className="col-span-2 md:col-span-1 font-mono text-sm small-caps opacity-70">
                  0{i + 1}
                </span>
                <span className="col-span-10 md:col-span-4 font-display tracking-tight" style={{ fontSize: "clamp(1.5rem,2.6vw,2.25rem)", fontWeight: 500 }}>
                  {f.name}
                </span>
                <span className="col-span-6 md:col-span-3 font-mono text-[11px] small-caps tracking-[0.2em]" style={{ color: BLUSH }}>
                  {f.char}
                </span>
                <span className="col-span-6 md:col-span-4 font-display italic text-sm md:text-base opacity-80">
                  {f.note}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRODUCT DEEP DIVE */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-7 border-2 overflow-hidden" style={{ borderColor: INK }}>
            <img src={dino} alt="Strawberry Shortcake dino pouch — front, side, and unzipped showing Laneige Lip Glowy Balm" className="w-full block" />
          </div>
          <div className="col-span-12 md:col-span-5 space-y-5">
            <p className="font-mono text-[11px] small-caps tracking-[0.3em]" style={{ color: BLUSH }}>✦ Product Anatomy</p>
            <h2 className="font-display italic leading-[0.95]" style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}>
              Plush outside. <br/>Lip Glowy inside.
            </h2>
            <ul className="font-display text-base md:text-lg space-y-3 border-t pt-5" style={{ borderColor: INK }}>
              <li>— Gold-stamped “Laneige × Jellycat” charm tag</li>
              <li>— Hidden zip pouch sized to the Lip Glowy Balm</li>
              <li>— Heavy-duty lobster clip for bag, belt loop, or strap</li>
              <li>— Each character paired to one signature flavour</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY LANEIGE */}
      <section className="border-y-2" style={{ borderColor: INK, background: INK, color: SAND }}>
        <div className="container py-20 md:py-28">
          <p className="font-mono text-[11px] small-caps tracking-[0.3em] mb-6" style={{ color: BLUSH }}>✦ Why Laneige · Why Now</p>
          <h2 className="font-display leading-[1] tracking-tight mb-12" style={{ fontSize: "clamp(2.25rem,5.5vw,4.5rem)", fontWeight: 500 }}>
            The brand feels{" "}
            <span className="italic line-through opacity-50">safe</span>.{" "}
            <span className="italic" style={{ color: BLUSH }}>This makes it loved.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {whyPoints.map((p) => (
              <div key={p.k} className="border-t pt-4" style={{ borderColor: "rgba(241,222,154,0.4)" }}>
                <p className="font-mono text-[11px] small-caps tracking-[0.25em] mb-2" style={{ color: BLUSH }}>
                  {p.k}
                </p>
                <p className="font-display text-lg md:text-xl leading-snug">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PR PLACEHOLDER */}
      <section className="container py-20 md:py-28">
        <div className="grid grid-cols-12 gap-6 mb-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[11px] small-caps tracking-[0.3em] mb-3" style={{ color: BLUSH }}>✦ PR & Activation</p>
            <h2 className="font-display italic leading-[0.95]" style={{ fontSize: "clamp(2.25rem,5vw,4rem)" }}>
              Coming soon — the rollout.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <p className="font-mono text-[11px] small-caps tracking-[0.2em] opacity-70">
              Reserved for press, launch & social
            </p>
          </div>
        </div>

        <div
          className="relative border-2 border-dashed grid place-items-center text-center px-6"
          style={{
            borderColor: INK,
            minHeight: "clamp(280px, 38vw, 460px)",
            background:
              "repeating-linear-gradient(135deg, rgba(0,0,0,0.04) 0 12px, transparent 12px 24px)",
          }}
        >
          <div className="max-w-xl space-y-4">
            <p className="font-mono text-[11px] small-caps tracking-[0.3em]" style={{ color: BLUSH }}>
              ✦ Section Reserved
            </p>
            <p className="font-display italic text-2xl md:text-3xl leading-snug">
              Drop your PR assets here — launch film, press kit covers, influencer unboxings, pop-up imagery, and social cuts.
            </p>
            <p className="font-mono text-[11px] small-caps tracking-[0.2em] opacity-70">
              Add images, video, or quotes to populate this block.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LaneigeJellycat;
