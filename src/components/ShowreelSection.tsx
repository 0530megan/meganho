import { useRef, useState } from "react";
import { Play } from "lucide-react";

/**
 * Showreel — a full-width, cinematic 16:9 editing showcase.
 * Placed right after "The Reel" so a hirer sees editing craft early.
 * Light paper band to match the rest of the site; the video is the focal point.
 * Lazy-loaded (preload="none" + poster) so the 27MB file only downloads on play.
 */
const ShowreelSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
    setPlaying(true);
  };

  return (
    <section
      id="showreel"
      className="relative border-b-2 border-ink text-ink overflow-hidden"
      style={{ background: "#E4D5C1" }}
    >
      <div className="container py-12 md:py-16 relative">
        {/* Header */}
        <div className="border-t-4 border-ink pt-4 mb-8 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-mono font-bold text-sm small-caps text-accent-red mb-2">Motion · Editing</p>
            <h2 className="font-display font-light text-3xl md:text-5xl tracking-tight leading-none">
              The Showreel
            </h2>
          </div>
          <span className="font-mono text-xs small-caps text-ink-mute">
            Edited in Adobe Premiere Pro · Shot in 4K
          </span>
        </div>

        {/* Player */}
        <div
          className="relative border-2 border-ink shadow-[10px_12px_0_0_hsl(var(--accent-burnt))] overflow-hidden bg-black"
          style={{ aspectRatio: "16 / 9" }}
        >
          <video
            ref={videoRef}
            src="/videos/showreel.mp4"
            poster="/videos/showreel-poster.jpg"
            controls={playing}
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Play showreel with sound"
              className="group absolute inset-0 flex flex-col items-center justify-center gap-4"
            >
              <span className="absolute inset-0 bg-ink/25 group-hover:bg-ink/10 transition-colors" />
              <span className="relative flex size-20 items-center justify-center rounded-full border-2 border-paper/80 bg-ink/40 backdrop-blur-sm transition-transform group-hover:scale-105">
                <Play className="size-8 text-paper ml-1" fill="currentColor" />
              </span>
              <span className="relative font-mono text-xs small-caps text-paper/90 bg-ink/50 px-3 py-1 rounded-full">
                Play with sound ↗
              </span>
            </button>
          )}
        </div>

        {/* Caption */}
        <div className="mt-5 flex items-baseline justify-between gap-4 flex-wrap">
          <p className="font-display italic text-ink-soft text-base md:text-lg">
            Moments, recorded — a cinematic lifestyle edit.
          </p>
          <span className="font-mono text-[10px] small-caps text-ink-mute">Showreel · 00:55</span>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;
