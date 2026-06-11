import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

/**
 * Looping muted background video with poster fallback.
 * - autoplays muted (mobile-safe), loops, playsInline
 * - lazy: only loads when in viewport (uses IntersectionObserver)
 * - reveals after first frame is ready (avoids "loading" flash)
 */
export const VideoLoop = ({
  src,
  poster,
  className = "",
  overlay = null,
  controls = false,
  testId,
}) => {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);
  const [armed, setArmed] = useState(false);

  // Lazy-mount: only set src after element comes near viewport
  useEffect(() => {
    if (!ref.current || armed) return;
    const node = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setArmed(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [armed]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      data-testid={testId}
    >
      {/* Poster shown until video can play */}
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {armed && (
        <video
          src={src}
          poster={poster}
          muted={muted}
          loop
          autoPlay
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
          className={`relative w-full h-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {overlay}

      {controls && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setMuted((m) => !m);
          }}
          className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 px-3 py-2 font-body text-[10px] tracking-[0.22em] uppercase bg-[#1A1814]/85 text-[#F2E2A4] backdrop-blur-sm border border-[#F2E2A4]/30 hover:bg-[#1A1814] transition-colors"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX size={13} strokeWidth={1.7} /> : <Volume2 size={13} strokeWidth={1.7} />}
          {muted ? "Sound on" : "Sound off"}
        </button>
      )}
    </div>
  );
};

/** Small "play" sigil for showreel card hover */
export const PlayBadge = ({ size = 60 }) => (
  <span
    aria-hidden
    className="inline-flex items-center justify-center rounded-full bg-[#F2E2A4] text-[#1A1814] shadow-[0_8px_30px_-8px_rgba(0,0,0,0.4)]"
    style={{ width: size, height: size }}
  >
    <Play size={size * 0.35} strokeWidth={1.4} fill="currentColor" />
  </span>
);
