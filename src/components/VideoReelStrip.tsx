import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Volume2, VolumeX, X } from "lucide-react";

interface Reel {
  src: string;
  caption: string;
  case: string;
  caseNo: string;
}

const reels: Reel[] = [
  {
    src: "/videos/veramente-essentials.mp4",
    caption: "Everyday essentials",
    case: "Veramente",
    caseNo: "I",
  },
  {
    src: "/videos/sippy-sip-it-cute.mp4",
    caption: "Sip it cute with Sippy",
    case: "Sippy",
    caseNo: "II",
  },
  {
    src: "/videos/sippy-awake.mp4",
    caption: "Rise and sippy.",
    case: "Sippy",
    caseNo: "II",
  },
  {
    src: "/videos/creami-n-dreami.mp4",
    caption: "A spoonful of nostalgia.",
    case: "Meg's Creami",
    caseNo: "III",
  },
];

const PhoneFrame = ({
  reel,
  index,
}: {
  reel: Reel;
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  const tilts = ["-2deg", "1.5deg", "-1deg", "2deg"];
  const tilt = tilts[index % tilts.length];

  // Autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openFullscreen = () => {
    setShowFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = useCallback(() => {
    setShowFullscreen(false);
    setIsMuted(true);
    document.body.style.overflow = "";
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!showFullscreen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFullscreen();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showFullscreen, closeFullscreen]);

  // Auto-play fullscreen video
  useEffect(() => {
    if (showFullscreen && fullscreenVideoRef.current) {
      fullscreenVideoRef.current.play().catch(() => {});
    }
  }, [showFullscreen]);

  return (
    <>
      <div
        className="group shrink-0 cursor-pointer transition-transform duration-500 hover:scale-[1.04] hover:rotate-0"
        style={{
          transform: `rotate(${tilt})`,
          width: "clamp(180px, 22vw, 240px)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={openFullscreen}
      >
        {/* Phone frame */}
        <div
          className="relative border border-ink bg-ink overflow-hidden"
          style={{
            aspectRatio: "9 / 16",
            borderRadius: "20px",
            boxShadow: `6px 8px 0 0 hsl(var(--ink))`,
          }}
        >
          {/* Notch */}
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-ink rounded-full"
            style={{ width: "40%", height: 6 }}
          />

          {/* Video */}
          <video
            ref={videoRef}
            src={reel.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Hover overlay — subtle dim on hover to hint clickability */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100 bg-ink/20" : "opacity-0"}`}
          >
            <div className="size-12 rounded-full border-2 border-paper/60 flex items-center justify-center backdrop-blur-sm bg-ink/30">
              <Play className="size-5 text-paper/80 ml-0.5" fill="currentColor" />
            </div>
          </div>

          {/* Case tag */}
          <span className="absolute top-4 left-3 font-mono text-[9px] small-caps bg-ink text-paper px-2 py-0.5 z-10">
            Case · {reel.caseNo}
          </span>
        </div>

        {/* Caption — polaroid style */}
        <div className="mt-3 flex items-baseline justify-between gap-2">
          <p className="font-display italic text-base font-semibold text-ink leading-tight">
            {reel.caption}
          </p>
          <span className="font-mono text-[10px] font-bold small-caps text-ink-soft shrink-0">
            {reel.case}
          </span>
        </div>
      </div>

      {/* Fullscreen modal */}
      {showFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeFullscreen();
          }}
        >
          <div
            className="relative"
            style={{
              width: "min(85vw, 400px)",
              maxHeight: "90vh",
              aspectRatio: "9 / 16",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeFullscreen}
              className="absolute -top-10 right-0 text-paper/70 hover:text-paper transition-colors z-10"
              aria-label="Close video"
            >
              <X className="size-6" />
            </button>

            {/* Video */}
            <video
              ref={fullscreenVideoRef}
              src={reel.src}
              muted={isMuted}
              loop
              playsInline
              controls={false}
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Mute/unmute */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="absolute bottom-4 right-4 size-10 rounded-full bg-ink/60 backdrop-blur-sm border border-paper/20 flex items-center justify-center text-paper/80 hover:text-paper transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="size-4" />
              ) : (
                <Volume2 className="size-4" />
              )}
            </button>

            {/* Dark gradient for text legibility */}
            <div
              className="absolute inset-x-0 bottom-0 rounded-b-2xl pointer-events-none"
              style={{
                height: "40%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
              }}
            />

            {/* Caption overlay */}
            <div className="absolute bottom-4 left-4 right-16 z-10">
              <span
                className="font-mono text-[10px] small-caps"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                }}
              >
                Case · {reel.caseNo} · {reel.case}
              </span>
              <p
                className="font-display italic text-lg mt-0.5"
                style={{
                  color: "#fff",
                  textShadow: "0 1px 6px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.4)",
                }}
              >
                {reel.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const VideoReelStrip = () => {
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative border-b-2 border-ink overflow-hidden">
      {/* Subtle gradient wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(55% 65% at 20% 40%, hsl(var(--accent-burnt) / 0.08) 0%, transparent 60%), radial-gradient(45% 55% at 80% 60%, hsl(var(--accent-red) / 0.06) 0%, transparent 65%)",
        }}
      />

      <div className="container py-10 md:py-14 relative">
        {/* Header */}
        <div className="border-t-4 border-ink pt-4 mb-8 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-mono font-bold text-sm small-caps text-accent-red mb-2">
              Now playing
            </p>
            <h2 className="font-display font-light text-3xl md:text-5xl tracking-tight leading-none">
              The Reel
            </h2>
          </div>
          <span className="font-mono text-xs small-caps text-ink-mute">
            Hover to preview · Click to watch
          </span>
        </div>

        {/* Marquee ribbon */}
        <div className="relative overflow-hidden border-y border-ink bg-ink text-paper mb-8">
          <div className="marquee flex whitespace-nowrap py-1.5 font-mono text-[10px] small-caps">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-6 pr-6">
                {[
                  "Now showing",
                  "✺",
                  "Brand reels",
                  "✺",
                  "Made for the feed",
                  "✺",
                  "Scroll to preview",
                  "✺",
                  "Click to play",
                  "✺",
                  "Sound on ↗",
                  "✺",
                ].map((t, j) => (
                  <span key={j} className="px-2">
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable reel strip */}
        <div
          ref={stripRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 px-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {reels.map((reel, i) => (
            <div key={i} style={{ scrollSnapAlign: "center" }}>
              <PhoneFrame reel={reel} index={i} />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-ink/30" />
          <p className="font-display italic text-ink-soft text-sm">
            swipe or hover to preview
          </p>
          <div className="h-px flex-1 bg-ink/30" />
        </div>
      </div>
    </section>
  );
};

export default VideoReelStrip;
