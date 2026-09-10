import { useRef, useState, useEffect, useCallback } from "react";
import { Volume2, VolumeX, X } from "lucide-react";

interface ReelVideo {
  src: string;
  caption: string;
}

interface CaseStudyReelProps {
  videos: ReelVideo[];
  plateNo: string;
  accentColor: string;
  shadowColor: string;
}

const PhoneVideo = ({
  video,
  accentColor,
}: {
  video: ReelVideo;
  accentColor: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const openFullscreen = () => {
    setShowFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = useCallback(() => {
    setShowFullscreen(false);
    setIsMuted(true);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!showFullscreen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFullscreen();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showFullscreen, closeFullscreen]);

  useEffect(() => {
    if (showFullscreen && fullscreenVideoRef.current) {
      fullscreenVideoRef.current.play().catch(() => {});
    }
  }, [showFullscreen]);

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <div
          className="relative border-2 border-ink bg-ink overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          style={{
            width: "clamp(200px, 28vw, 280px)",
            aspectRatio: "9 / 16",
            borderRadius: "24px",
            boxShadow: `8px 10px 0 0 ${accentColor}`,
          }}
          onClick={openFullscreen}
        >
          {/* Notch */}
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-ink rounded-full"
            style={{ width: "40%", height: 6 }}
          />

          <video
            ref={videoRef}
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <p className="font-display italic text-base font-semibold text-ink text-center max-w-[240px]">
          {video.caption}
        </p>
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
            <button
              onClick={closeFullscreen}
              className="absolute -top-10 right-0 text-paper/70 hover:text-paper transition-colors z-10"
              aria-label="Close video"
            >
              <X className="size-6" />
            </button>

            <video
              ref={fullscreenVideoRef}
              src={video.src}
              muted={isMuted}
              loop
              playsInline
              controls={false}
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Dark gradient for text legibility */}
            <div
              className="absolute inset-x-0 bottom-0 rounded-b-2xl pointer-events-none"
              style={{
                height: "40%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
              }}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="absolute bottom-4 right-4 size-10 rounded-full bg-ink/60 backdrop-blur-sm border border-paper/20 flex items-center justify-center text-paper/80 hover:text-paper transition-colors z-10"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="size-4" />
              ) : (
                <Volume2 className="size-4" />
              )}
            </button>

            <div className="absolute bottom-4 left-4 right-16 z-10">
              <p
                className="font-display italic text-lg"
                style={{
                  color: "#fff",
                  textShadow:
                    "0 1px 6px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.4)",
                }}
              >
                {video.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CaseStudyReel = ({
  videos,
  plateNo,
  accentColor,
  shadowColor,
}: CaseStudyReelProps) => {
  return (
    <div className="mt-16 md:mt-20">
      <div className="flex items-end justify-between gap-4 border-b-2 border-ink pb-3 mb-8">
        <div>
          <p className="font-mono text-[10px] small-caps tracking-[0.25em] text-ink-mute mb-1">
            Plate {plateNo}
          </p>
          <h3 className="font-display text-3xl md:text-4xl leading-tight">
            Brand {videos.length > 1 ? "Reels" : "Reel"}
          </h3>
        </div>
        <p className="font-mono text-[10px] small-caps text-ink-mute hidden sm:block">
          Click to watch · Sound on
        </p>
      </div>

      <div
        className="border-2 border-ink bg-paper overflow-hidden"
        style={{ boxShadow: `8px 10px 0 0 ${shadowColor}` }}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2 border-b-2 border-ink bg-paper-deep/50">
          <p className="font-mono text-[10px] small-caps tracking-[0.25em]">
            Plate {plateNo} · Brand {videos.length > 1 ? "Reels" : "Reel"}
          </p>
          <span className="font-mono text-[10px] small-caps text-ink-mute">
            TikTok / Reels
          </span>
        </div>

        <div
          className={`flex ${videos.length === 1 ? "justify-center" : "justify-center gap-6 md:gap-10"} py-8 px-6 flex-wrap`}
        >
          {videos.map((video, i) => (
            <PhoneVideo key={i} video={video} accentColor={accentColor} />
          ))}
        </div>

        <figcaption className="px-4 py-3 border-t-2 border-ink flex items-baseline justify-between gap-3 flex-wrap">
          <p className="font-display italic text-sm">
            Short-form content made for the feed — tap to watch with sound.
          </p>
          <span className="font-mono text-[10px] small-caps text-ink-mute">
            Fig. {plateNo}
          </span>
        </figcaption>
      </div>
    </div>
  );
};

export default CaseStudyReel;
