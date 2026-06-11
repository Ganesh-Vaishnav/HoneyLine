/**
 * Honeyline · Pinterest Collage primitives.
 *
 * Drop-in editorial / zine elements: tilted polaroids, washi tape, sticker
 * badges, thumbtacks, paper clips, hand-drawn underlines, wobbly arrows.
 * All composable, all use the Honeyline palette.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ----------------------------- WashiTape ----------------------------- */

export const WashiTape = ({
  className = "",
  rotate = -6,
  width = 110,
  height = 22,
  tone = "cream", // cream | gold | ink
  style = {},
}) => {
  const palette = {
    cream: "rgba(242,226,164,0.78)",
    gold: "rgba(200,153,50,0.75)",
    ink: "rgba(26,24,20,0.55)",
  };
  return (
    <span
      className={`absolute z-30 pointer-events-none ${className}`}
      style={{
        width,
        height,
        background: palette[tone] || palette.cream,
        transform: `rotate(${rotate}deg)`,
        boxShadow:
          "inset 0 0 0 1px rgba(26,24,20,0.08), 0 1px 2px rgba(26,24,20,0.12)",
        mixBlendMode: "multiply",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0 4px, transparent 4px 8px)",
        ...style,
      }}
      aria-hidden
    />
  );
};

/* ----------------------------- Thumbtack ----------------------------- */

export const Thumbtack = ({ className = "", color = "#C89932", size = 14 }) => (
  <span
    className={`absolute z-30 rounded-full ${className}`}
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle at 35% 30%, #fff7d8 0%, ${color} 55%, #6b4f17 100%)`,
      boxShadow:
        "0 2px 4px rgba(26,24,20,0.35), inset 0 -1px 1px rgba(0,0,0,0.25), inset 1px 1px 1px rgba(255,255,255,0.5)",
    }}
    aria-hidden
  />
);

/* ----------------------------- PaperClip ----------------------------- */

export const PaperClip = ({ className = "", color = "#1A1814", size = 28, rotate = -18 }) => (
  <svg
    className={`absolute z-30 pointer-events-none ${className}`}
    width={size}
    height={size * 2.1}
    viewBox="0 0 24 50"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)`, filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))" }}
    aria-hidden
  >
    <path
      d="M6 8 C 6 4, 18 4, 18 8 L18 38 C18 44, 6 44, 6 38 L 6 14 C6 10, 14 10, 14 14 L14 34"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/* ----------------------------- StickerBadge ----------------------------- */

export const StickerBadge = ({
  children,
  rotate = -8,
  tone = "gold", // gold | ink | cream
  size = "md", // sm | md | lg
  className = "",
  pulse = false,
}) => {
  const palette = {
    gold: { bg: "#C89932", fg: "#1A1814", border: "rgba(26,24,20,0.25)" },
    ink: { bg: "#1A1814", fg: "#F2E2A4", border: "rgba(242,226,164,0.35)" },
    cream: { bg: "#FAF7EE", fg: "#1A1814", border: "rgba(26,24,20,0.25)" },
  };
  const sizing = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-3 py-1 text-[12px]",
    lg: "px-4 py-1.5 text-[14px]",
  };
  const p = palette[tone] || palette.gold;
  return (
    <motion.span
      initial={{ scale: 0, rotate: rotate + 12 }}
      whileInView={{ scale: 1, rotate }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 230, damping: 14 }}
      className={`absolute z-40 inline-flex items-center gap-1 font-display italic tracking-tight ${sizing[size]} ${className}`}
      style={{
        background: p.bg,
        color: p.fg,
        border: `1px solid ${p.border}`,
        borderRadius: 999,
        boxShadow:
          "0 4px 10px rgba(26,24,20,0.18), inset 0 0 0 1px rgba(255,255,255,0.18)",
      }}
    >
      <span aria-hidden>✦</span>
      <span>{children}</span>
      {pulse && (
        <span
          className="ml-1 inline-block w-1.5 h-1.5 rounded-full"
          style={{
            background: tone === "ink" ? "#F2E2A4" : "#1A1814",
            animation: "hl-pulse 1.4s ease-in-out infinite",
          }}
        />
      )}
    </motion.span>
  );
};

/* ----------------------------- Polaroid ----------------------------- */

/**
 * A tilted polaroid card. Children render inside the "photo" area.
 * Props: rotate, caption, sticker (text), washi (bool|"top-left"|"top-right"|"bottom"), tack (bool|"corners"|"top"), tone
 */
export const Polaroid = ({
  children,
  caption,
  rotate = -2,
  className = "",
  innerClassName = "",
  washi = false,
  tack = false,
  pin = false,
  shadow = "lg", // sm | md | lg
  bg = "#FAF7EE",
  width,
  onClick,
}) => {
  const shadowMap = {
    sm: "0 6px 14px -8px rgba(26,24,20,0.30)",
    md: "0 12px 24px -10px rgba(26,24,20,0.32)",
    lg: "0 22px 40px -16px rgba(26,24,20,0.42), 0 2px 6px rgba(26,24,20,0.18)",
  };
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 28, rotate: rotate + (rotate >= 0 ? 4 : -4) }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      whileHover={{ y: -6, rotate: rotate * 0.35, transition: { duration: 0.35 } }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative inline-block ${className}`}
      style={{
        background: bg,
        padding: "12px 12px 50px 12px",
        boxShadow: shadowMap[shadow] || shadowMap.lg,
        border: "1px solid rgba(26,24,20,0.12)",
        width,
      }}
    >
      <div className={`relative overflow-hidden ${innerClassName}`}>{children}</div>
      {caption && (
        <div className="absolute left-0 right-0 bottom-3 text-center font-display italic text-[15px] tracking-tight text-[#1A1814]/80 px-3">
          {caption}
        </div>
      )}
      {washi && (
        <WashiTape
          tone={washi === "gold" ? "gold" : "cream"}
          className={
            washi === "top-right"
              ? "-top-3 right-4"
              : washi === "bottom"
              ? "-bottom-2 left-6"
              : "-top-3 left-4"
          }
          rotate={washi === "top-right" ? 12 : -10}
        />
      )}
      {tack && (
        <>
          <Thumbtack className="-top-2 left-1/2 -translate-x-1/2" />
          {tack === "corners" && (
            <>
              <Thumbtack className="-bottom-1 -left-1" size={10} />
              <Thumbtack className="-bottom-1 -right-1" size={10} />
            </>
          )}
        </>
      )}
      {pin && <PaperClip className="-top-3 -right-2" rotate={20} />}
    </motion.div>
  );
};

/* ------------------------ HandDrawnUnderline ------------------------ */

export const HandDrawnUnderline = ({
  color = "#C89932",
  className = "",
  thickness = 3,
  variant = "wobble", // wobble | dash | double
}) => {
  const paths = {
    wobble: "M2 11 C 70 -2, 150 18, 220 8 S 360 6, 398 12",
    dash: "M2 10 L 80 10 M 100 10 L 180 10 M 200 10 L 280 10 M 300 10 L 398 10",
    double: "M2 8 C 60 0, 200 15, 398 6 M 2 14 C 80 7, 220 19, 398 12",
  };
  return (
    <svg
      viewBox="0 0 400 18"
      fill="none"
      className={`block ${className}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d={paths[variant]}
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </svg>
  );
};

/* ---------------------------- WobblyArrow ---------------------------- */

export const WobblyArrow = ({
  className = "",
  color = "#1A1814",
  rotate = 0,
  flip = false,
  size = 120,
}) => (
  <svg
    viewBox="0 0 140 80"
    width={size}
    height={size * 0.6}
    className={className}
    style={{ transform: `rotate(${rotate}deg) ${flip ? "scaleX(-1)" : ""}` }}
    aria-hidden
  >
    <motion.path
      d="M5 65 C 35 10, 65 75, 95 30"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
    <motion.path
      d="M82 18 L 95 30 L 80 38"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 1.0 }}
    />
  </svg>
);

/* --------------------------- Sparkle ornament --------------------------- */

export const Sparkle = ({ size = 18, color = "#C89932", className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`inline-block ${className}`}
    aria-hidden
  >
    <path
      d="M12 1 L 13.5 9 L 22 12 L 13.5 15 L 12 23 L 10.5 15 L 2 12 L 10.5 9 Z"
      fill={color}
      opacity="0.95"
    />
  </svg>
);

/* --------------------------- ParallaxText ---------------------------- */

/** Big italic backdrop text that drifts horizontally on scroll. */
export const ParallaxText = ({ text, className = "", from = -120, to = 120, ...rest }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [from, to]);
  return (
    <div ref={ref} className={`relative w-full overflow-hidden select-none ${className}`} aria-hidden>
      <motion.div
        style={{ x }}
        className="font-display italic whitespace-nowrap text-[#1A1814]/[0.045] leading-none"
        {...rest}
      >
        {text}
      </motion.div>
    </div>
  );
};

/* --------------------------- HoneycombPattern --------------------------- */

export const HoneycombPattern = ({ className = "", opacity = 0.06, color = "#C89932" }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    style={{ opacity }}
    aria-hidden
  >
    <defs>
      <pattern id="hl-hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
        <polygon
          points="14,0 42,0 56,24 42,48 14,48 0,24"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hl-hex)" />
  </svg>
);

/* --------------------------- PostmarkStamp ---------------------------- */

export const PostmarkStamp = ({
  className = "",
  text = "POSTED FROM MELBOURNE",
  date = "MMXXVI",
  rotate = -6,
}) => (
  <div
    className={`relative ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
    aria-hidden
  >
    <div
      className="px-5 py-2.5 font-display italic text-[12px] tracking-[0.32em] uppercase text-[#1A1814]/80"
      style={{
        border: "2px solid rgba(26,24,20,0.55)",
        borderStyle: "double",
        background: "transparent",
      }}
    >
      <div className="flex flex-col items-center gap-0.5">
        <span style={{ fontStyle: "italic" }}>{text}</span>
        <span className="text-[10px] tracking-[0.45em]">· {date} ·</span>
      </div>
    </div>
  </div>
);

/* --------------------------- TornEdge ---------------------------- */

/** Torn-paper edge SVG; place at top/bottom of a section. */
export const TornEdge = ({ className = "", color = "#FAF7EE", flip = false }) => (
  <svg
    viewBox="0 0 1440 32"
    preserveAspectRatio="none"
    className={`block w-full ${className}`}
    style={{ transform: flip ? "scaleY(-1)" : "none" }}
    aria-hidden
  >
    <path
      d="M0 0 L 60 14 L 130 4 L 200 18 L 280 6 L 360 16 L 440 2 L 520 12 L 600 4 L 680 16 L 760 6 L 840 14 L 920 2 L 1000 12 L 1080 4 L 1160 18 L 1240 6 L 1320 14 L 1400 4 L 1440 12 L 1440 32 L 0 32 Z"
      fill={color}
    />
  </svg>
);
