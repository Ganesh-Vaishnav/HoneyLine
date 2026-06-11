import { motion } from "framer-motion";

/** Hand-drawn-style underline stroke (animated on view) */
export const UnderlineStroke = ({ className = "", color = "#1A1814" }) => (
  <svg
    viewBox="0 0 300 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`block ${className}`}
    aria-hidden
  >
    <motion.path
      d="M2 13 C 60 -2, 140 18, 200 8 S 290 6, 298 11"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
    />
  </svg>
);

/** Eight-point asterisk flourish */
export const Asterisk = ({ size = 32, color = "#1A1814", className = "", spin = true }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={`inline-block ${spin ? "hl-spin-slow" : ""} ${className}`}
    aria-hidden
  >
    <g stroke={color} strokeWidth="3.5" strokeLinecap="round">
      <line x1="32" y1="6" x2="32" y2="58" />
      <line x1="6" y1="32" x2="58" y2="32" />
      <line x1="13" y1="13" x2="51" y2="51" />
      <line x1="51" y1="13" x2="13" y2="51" />
    </g>
  </svg>
);

/** Rising sun motif — for the brand */
export const SunBurst = ({ size = 200, color = "#1A1814", className = "" }) => (
  <svg viewBox="0 0 200 100" width={size} height={size / 2} className={className} aria-hidden>
    <circle cx="100" cy="100" r="40" fill={color} fillOpacity="0.08" />
    <circle cx="100" cy="100" r="30" fill="none" stroke={color} strokeWidth="1.2" />
    {Array.from({ length: 11 }).map((_, i) => {
      const a = (Math.PI / 10) * i;
      const x1 = 100 + Math.cos(Math.PI + a) * 48;
      const y1 = 100 + Math.sin(Math.PI + a) * 48;
      const x2 = 100 + Math.cos(Math.PI + a) * 90;
      const y2 = 100 + Math.sin(Math.PI + a) * 90;
      return (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      );
    })}
  </svg>
);

/** Big squiggle — used as a section divider */
export const Squiggle = ({ className = "", color = "#1A1814" }) => (
  <svg viewBox="0 0 800 60" className={`w-full ${className}`} preserveAspectRatio="none" aria-hidden>
    <motion.path
      d="M0 30 Q 50 0, 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    />
  </svg>
);

/** Rotating circular stamp — text wraps around a circle */
export const RotatingStamp = ({
  text = "HONEYLINE · MELBOURNE · EST · 2026 · ",
  size = 160,
  color = "#1A1814",
  className = "",
  innerText = "★",
}) => {
  const radius = size / 2;
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg viewBox={`0 0 ${size} ${size}`} className="hl-spin-slow w-full h-full">
        <defs>
          <path
            id="hl-stamp-circle"
            d={`M ${radius}, ${radius} m -${radius - 14}, 0 a ${radius - 14},${radius - 14} 0 1,1 ${(radius - 14) * 2},0 a ${radius - 14},${radius - 14} 0 1,1 -${(radius - 14) * 2},0`}
          />
        </defs>
        <text fill={color} style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500 }}>
          <textPath href="#hl-stamp-circle" startOffset="0">{text.repeat(2)}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display italic text-[28px]" style={{ color }}>
          {innerText}
        </span>
      </div>
    </div>
  );
};

/** Text-reveal motion — animates word-by-word from below */
export const RevealText = ({ children, className = "", delay = 0, as = "span" }) => {
  const words = String(children).split(" ");
  const Tag = motion[as] || motion.span;
  return (
    <Tag className={className} aria-label={children}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.22em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: delay + i * 0.06, ease: [0.65, 0, 0.35, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
