import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Globe2, MessageSquare, Megaphone, Sparkles, Star, Film } from "lucide-react";
import { HL_HOME } from "@/constants/agencyTestIds";
import { Magnetic } from "@/components/agency/Magnetic";
import {
  UnderlineStroke,
  Asterisk,
  Squiggle,
  RotatingStamp,
} from "@/components/agency/Flourishes";
import {
  Polaroid,
  WashiTape,
  Thumbtack,
  PaperClip,
  StickerBadge,
  HandDrawnUnderline,
  WobblyArrow,
  Sparkle,
  ParallaxText,
  HoneycombPattern,
} from "@/components/agency/Collage";
import { MelbourneClock } from "@/components/agency/MelbourneClock";
import { VideoLoop, PlayBadge } from "@/components/agency/VideoLoop";

const HERO_VIDEO = "https://assets.mixkit.co/videos/4925/4925-720.mp4";
const HERO_POSTER = "/posters/hero-loop.jpg";

const SHOWREEL = [
  {
    title: "Inside the Edit",
    label: "Reel · 01",
    body: "A week behind the lens at Honeyline — shooting reels, scripting copy, and shaping campaigns for Melbourne small businesses.",
    video: "/intro/IMG_8418.MOV",
    rotate: "-1.5deg",
    tag: "Content Studio",
    big: true,
  },
  {
    title: "Social, on the Street",
    label: "Reel · 02",
    body: "Founder-led content, captured the way real people scroll — vertical, raw, and on-brand.",
    video: "/intro/IMG_8509.MOV.mp4",
    rotate: "2deg",
    tag: "On Location",
  },
];

const PILLARS = [
  {
    icon: MessageSquare,
    title: "Social Media Marketing",
    body: "Our flagship craft. Full-service Instagram, TikTok and LinkedIn — strategy, content calendars, reels, community management and personal branding. Run like a magazine, not a megaphone.",
    n: "01",
    img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-7 md:row-span-2",
    accent: true,
  },
  {
    icon: Globe2,
    title: "Custom Web Design",
    body: "Editorial websites that load fast, convert visitors, and don’t look like the other twelve in your industry.",
    n: "02",
    span: "md:col-span-5",
  },
  {
    icon: Megaphone,
    title: "PR & Partnerships",
    body: "Pitching, placements, founder positioning and brand-to-brand collabs. Get your business in the rooms (and feeds) that matter most.",
    n: "03",
    span: "md:col-span-5",
  },
  {
    icon: Sparkles,
    title: "Brand & Paid Advertising",
    body: "Identity systems, plus Meta, Google and out-of-home campaigns crafted to feel like editorial — not interruption.",
    n: "04",
    span: "md:col-span-12",
  },
];

const STATS = [
  { n: "A — Z", label: "Full-service · strategy to scale" },
  { n: "100%", label: "Melbourne small-business focus" },
  { n: "1 : 1", label: "Founder-led account relationships" },
];

const MARQUEE_ITEMS = [
  "Branding",
  "Web Design",
  "Social Strategy",
  "Paid Media",
  "PR Outreach",
  "Content Studio",
  "Identity Systems",
  "Launch Campaigns",
  "Editorial Thinking",
];

const Marquee = () => {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="border-y border-[#1A1814]/15 py-6 overflow-hidden bg-[#FAF7EE] relative">
      <div className="hl-marquee inline-flex whitespace-nowrap items-center">
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center mx-7">
            <Asterisk size={20} spin={false} className="opacity-80 mr-5" />
            <span className="font-display italic text-[34px] md:text-[44px] text-[#1A1814]">
              {t}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default function AgencyHome() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const stampY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div className="bg-[#F2E2A4] text-[#1A1814] overflow-hidden">
      {/* ============== HERO ============== */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-end pt-32 pb-12 md:pb-20 overflow-hidden">

        {/* top ticker */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between text-[#1A1814]">
            <MelbourneClock />
            <span className="hidden sm:flex items-center gap-2 font-body text-[10px] tracking-[0.3em] uppercase">
              <span className="opacity-60">Now booking</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1A1814] animate-pulse" />
              <span>Q1 2026 · 2 spots</span>
            </span>
          </div>
        </div>



        <motion.div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-12 lg:col-span-11">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.7 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="inline-block w-10 h-px bg-[#1A1814]" />
              <span className="font-body text-[11px] tracking-[0.35em] uppercase">
                Melbourne · Marketing & Brand
              </span>
            </motion.div>

            {/* Massive editorial headline */}
            <h1 className="font-display text-[44px] sm:text-[72px] md:text-[96px] lg:text-[108px] xl:text-[116px] leading-[0.92] tracking-[-0.02em]">
              <span className="block overflow-y-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 1.75, ease: [0.65, 0, 0.35, 1] }}
                  className="block"
                >
                  We grow
                </motion.span>
              </span>
              <span className="block overflow-y-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 1.85, ease: [0.65, 0, 0.35, 1] }}
                  className="block italic font-light"
                >
                  small brands
                </motion.span>
              </span>
              <span className="block overflow-y-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 1.95, ease: [0.65, 0, 0.35, 1] }}
                  className="block relative"
                >
                  into{" "}
                  <span className="relative inline-block italic font-light">
                    unforgettable
                  </span>{" "}
                  ones.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 2.35 }}
              className="mt-10 max-w-2xl font-body text-[16px] md:text-[19px] leading-[1.65] text-[#1A1814]/85"
            >
              Honeyline is a founder-led Melbourne marketing house for ambitious small businesses. Social-first, strategy-led — we run Instagram, TikTok and LinkedIn like a magazine, then layer in everything else (identity, web, PR, paid media) under one calm, very organised roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 2.45 }}
              className="mt-12 flex flex-col sm:flex-row gap-3 items-start"
            >
              <Magnetic strength={0.45}>
                <Link
                  to="/contact"
                  data-testid={HL_HOME.heroCta}
                  className="hl-btn-ink inline-flex items-center justify-center gap-3 px-9 py-5 font-body text-[12px] tracking-[0.22em] uppercase"
                >
                  Let’s Talk Growth
                  <ArrowUpRight size={16} strokeWidth={1.7} />
                </Link>
              </Magnetic>
              <Magnetic strength={0.35}>
                <Link
                  to="/services"
                  data-testid={HL_HOME.heroSecondary}
                  className="hl-btn-ghost inline-flex items-center justify-center gap-2 px-9 py-5 font-body text-[12px] tracking-[0.22em] uppercase"
                >
                  See How We Work
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* Rotating stamp + trust block */}
          <motion.div
            style={{ y: stampY }}
            initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 2.1, ease: [0.34, 1.56, 0.64, 1] }}
            className="hidden md:flex md:col-span-3 flex-col items-end gap-8"
          >
            <RotatingStamp size={150} text="HONEYLINE · MADE IN MELBOURNE · SINCE 2026 · " innerText="✦" />
            <div className="text-right">
              <div className="flex items-center justify-end gap-1.5 mb-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={13} className="text-[#1A1814]" fill="currentColor" />
                ))}
              </div>
              <div className="font-display italic text-[22px] leading-tight">small businesses,</div>
              <div className="font-display italic text-[22px] leading-tight">big plans.</div>
            </div>
          </motion.div>
        </motion.div>

      </section>

      <Marquee />

      {/* ============== SHOWREEL — Pinterest moodboard ============== */}
      <section
        data-testid={HL_HOME.showreel}
        className="relative py-24 md:py-32 bg-[#F2E2A4] border-b border-[#1A1814]/15 overflow-hidden"
      >
        {/* giant italic backdrop word */}
        <div
          aria-hidden
          className="absolute -top-6 -right-[4vw] font-display italic text-[18vw] leading-[0.85] text-[#1A1814]/[0.06] select-none pointer-events-none"
        >
          reel.
        </div>

        <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
          {/* header */}
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14 md:mb-20">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-10 h-px bg-[#1A1814]" />
                <span className="font-body text-[11px] tracking-[0.35em] uppercase flex items-center gap-2">
                  <Film size={13} strokeWidth={1.7} /> The Showreel
                </span>
              </div>
              <h2 className="font-display text-[40px] sm:text-[64px] md:text-[88px] leading-[0.95] tracking-tight">
                The work,
                <br />
                <em className="italic font-light">in motion</em>.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 mt-3 md:mt-0">
              <p className="font-body text-[15.5px] md:text-[17px] leading-[1.65] text-[#1A1814]/85">
                A glimpse behind the work — content shoots, reels, behind-the-scenes. New cuts dropped quarterly.
              </p>
            </div>
          </div>

          {/* Pinterest-y collage */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
            {SHOWREEL.map((r, i) => (
              <motion.figure
                key={i}
                data-testid={HL_HOME.showreelCard(i)}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: parseFloat(r.rotate) }}
                whileHover={{ rotate: 0, scale: 1.015 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.65, 0, 0.35, 1] }}
                className={`relative ${r.big ? "md:col-span-8" : "md:col-span-4 md:mb-16"}`}
                style={{ transform: `rotate(${r.rotate})` }}
              >
                {/* tape strips */}
                <span
                  aria-hidden
                  className="absolute -top-3 left-10 z-10"
                  style={{
                    width: 90,
                    height: 22,
                    background: "rgba(250, 235, 175, 0.78)",
                    mixBlendMode: "multiply",
                    border: "1px solid rgba(26,24,20,0.10)",
                    transform: "rotate(-5deg)",
                    boxShadow: "0 2px 6px rgba(26,24,20,0.08)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute -top-3 right-10 z-10"
                  style={{
                    width: 64,
                    height: 22,
                    background: "rgba(250, 235, 175, 0.78)",
                    mixBlendMode: "multiply",
                    border: "1px solid rgba(26,24,20,0.10)",
                    transform: "rotate(6deg)",
                    boxShadow: "0 2px 6px rgba(26,24,20,0.08)",
                  }}
                />

                <div className="relative bg-[#FAF7EE] p-4 md:p-5 pb-16 md:pb-20 border border-[#1A1814]/12 shadow-[0_30px_60px_-30px_rgba(26,24,20,0.45)]">
                  {/* corner thumbtack */}
                  <Thumbtack className="-top-2 left-1/2 -translate-x-1/2" />
                  {/* sticker badge on the big card */}
                  {r.big && (
                    <StickerBadge
                      rotate={-12}
                      tone="gold"
                      size="md"
                      className="!static absolute -top-4 -right-4"
                    >
                      Editor’s pick
                    </StickerBadge>
                  )}
                  {!r.big && (
                    <StickerBadge
                      rotate={9}
                      tone="ink"
                      size="sm"
                      className="!static absolute -top-3 -right-2"
                    >
                      Founder favourite
                    </StickerBadge>
                  )}
                  <VideoLoop
                    src={r.video}
                    poster={r.poster}
                    objectPosition={r.big ? "bottom" : "center"}
                    className={`w-full ${r.big ? "aspect-[16/10]" : "aspect-[3/4]"} bg-[#1A1814]`}
                    overlay={
                      <>
                        <div className="absolute inset-0 bg-[#1A1814]/15" />
                        <div className="absolute top-4 left-4 z-10 font-body text-[10px] tracking-[0.28em] uppercase text-[#F2E2A4]/95 bg-[#1A1814]/55 px-2 py-1 backdrop-blur-sm border border-[#F2E2A4]/20">
                          {r.label}
                        </div>
                        <div className="absolute top-4 right-16 z-10 font-body text-[10px] tracking-[0.28em] uppercase text-[#F2E2A4]/95 bg-[#1A1814]/55 px-2 py-1 backdrop-blur-sm border border-[#F2E2A4]/20">
                          {r.tag}
                        </div>
                      </>
                    }
                  />

                  {/* caption strip — handwritten feel */}
                  <figcaption className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                    <span className="font-display italic text-[20px] md:text-[26px] tracking-tight leading-[1.05]">
                      {r.title}
                    </span>
                    <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#1A1814]/65 whitespace-nowrap">
                      Honeyline · 2026
                    </span>
                  </figcaption>
                </div>

                {/* below-card description */}
                <p className="mt-5 font-body text-[14px] md:text-[15px] leading-[1.65] text-[#1A1814]/80 max-w-md">
                  {r.body}
                </p>
              </motion.figure>
            ))}
          </div>

          {/* mini "more reels" CTA */}
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-[#1A1814]/15 pt-8">
            <p className="font-display italic text-[22px] md:text-[28px] leading-tight max-w-xl">
              Want to see a brand we’ve built end-to-end?
            </p>
            <Magnetic strength={0.3}>
              <Link
                to="/contact"
                className="hl-btn-ghost inline-flex items-center justify-center gap-2 px-7 py-4 font-body text-[12px] tracking-[0.22em] uppercase"
              >
                Request the full reel
                <ArrowUpRight size={15} strokeWidth={1.7} />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ============== INTRO BAND — Pinterest mood board · The Pitch ============== */}
      <section className="py-24 md:py-36 hl-cream relative overflow-hidden">
        {/* big italic "01" backdrop number */}
        <div
          aria-hidden
          className="absolute -top-10 -left-6 md:-left-10 font-display italic text-[34vw] md:text-[24vw] leading-none text-[#1A1814]/[0.05] select-none pointer-events-none"
        >
          01
        </div>

        <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
          {/* Section header — magazine folio + tab */}
          <div className="flex items-end justify-between gap-6 border-b border-[#1A1814]/25 pb-5 mb-12 md:mb-16">
            <div className="flex items-center gap-4">
              <div
                className="relative shrink-0"
                style={{ transform: "rotate(-3deg)" }}
              >
                <span
                  aria-hidden
                  className="absolute -top-2 left-3 z-10"
                  style={{
                    width: 36,
                    height: 13,
                    background: "rgba(250, 235, 175, 0.85)",
                    mixBlendMode: "multiply",
                    border: "1px solid rgba(26,24,20,0.12)",
                    transform: "rotate(-8deg)",
                    boxShadow: "0 2px 4px rgba(26,24,20,0.08)",
                  }}
                />
                <div className="bg-[#1A1814] text-[#F2E2A4] px-3 py-1.5 font-display italic text-[22px] md:text-[26px] leading-none tracking-tight">
                  01
                </div>
              </div>
              <div>
                <div className="font-body text-[10px] tracking-[0.35em] uppercase text-[#1A1814]/60">
                  Index
                </div>
                <div className="font-display italic text-[22px] md:text-[28px] leading-tight tracking-tight">
                  The Pitch.
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 font-body text-[10px] tracking-[0.32em] uppercase text-[#1A1814]/55">
              <span>A short film, three notes &amp; a mood board.</span>
              <span className="inline-block w-8 h-px bg-[#1A1814]/30" />
            </div>
          </div>

          {/* MASONRY PINBOARD — 12 col grid, hand-pinned feel */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7">
            {/* Card 1 — 10s INTRO VIDEO polaroid */}
            <motion.figure
              initial={{ opacity: 0, y: 24, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
              data-testid="hl-pitch-intro-video"
              className="md:col-span-5 md:row-span-2 relative bg-[#FAF7EE] p-3 pb-12 border border-[#1A1814]/12 shadow-[0_28px_60px_-30px_rgba(26,24,20,0.45)]"
              style={{ transform: "rotate(-2deg)" }}
            >
              <span
                aria-hidden
                className="absolute -top-3 left-10 z-10"
                style={{
                  width: 70,
                  height: 20,
                  background: "rgba(250, 235, 175, 0.85)",
                  mixBlendMode: "multiply",
                  border: "1px solid rgba(26,24,20,0.10)",
                  transform: "rotate(-5deg)",
                  boxShadow: "0 2px 6px rgba(26,24,20,0.08)",
                }}
              />
              <span
                aria-hidden
                className="absolute -top-3 right-10 z-10"
                style={{
                  width: 56,
                  height: 20,
                  background: "rgba(250, 235, 175, 0.85)",
                  mixBlendMode: "multiply",
                  border: "1px solid rgba(26,24,20,0.10)",
                  transform: "rotate(6deg)",
                  boxShadow: "0 2px 6px rgba(26,24,20,0.08)",
                }}
              />

              <div className="relative aspect-[4/5] overflow-hidden border border-[#1A1814]/12">
                <VideoLoop
                  testId="hl-pitch-intro-videoloop"
                  src="/intro/honeyline-real.mp4"
                  poster="/posters/intro-honeyline-real.jpg"
                  className="w-full h-full"
                  overlay={
                    <>
                      <div className="absolute inset-0 bg-[#1A1814]/15" />
                      <span className="absolute top-3 left-3 font-body text-[9.5px] tracking-[0.3em] uppercase bg-[#F2E2A4]/85 text-[#1A1814] px-1.5 py-0.5">
                        On location · 0:10
                      </span>
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 font-body text-[9.5px] tracking-[0.3em] uppercase text-[#F2E2A4] bg-[#1A1814]/70 backdrop-blur-sm px-2 py-1">
                        <Film size={11} strokeWidth={1.7} /> Real
                      </span>
                    </>
                  }
                />
              </div>

              <figcaption className="absolute bottom-2 left-4 right-4 flex items-end justify-between gap-2">
                <span className="font-display italic text-[16px] md:text-[18px] tracking-tight">
                  Out in the wild.
                </span>
                <span className="font-body text-[9px] tracking-[0.28em] uppercase text-[#1A1814]/60">
                  Reel · 01
                </span>
              </figcaption>
            </motion.figure>

            {/* Card 2 — Big italic manifesto headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:col-span-7 bg-[#1A1814] text-[#F2E2A4] p-8 md:p-10 relative"
            >
              <span
                aria-hidden
                className="absolute -top-3 left-1/2 -translate-x-1/2"
                style={{
                  width: 80,
                  height: 20,
                  background: "rgba(250, 235, 175, 0.55)",
                  mixBlendMode: "screen",
                  border: "1px solid rgba(242,226,164,0.18)",
                  transform: "translateX(-50%) rotate(-2deg)",
                }}
              />
              <div className="flex items-center gap-3 mb-5 font-body text-[10px] tracking-[0.32em] uppercase text-[#F2E2A4]/65">
                <Asterisk size={14} color="#F2E2A4" />
                Pin · 01 · The thesis
              </div>
              <h3 className="font-display text-[30px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-tight">
                Most agencies talk in <em className="italic font-light">slogans</em>.
                <br />
                We talk in <em className="italic font-light">numbers</em> —
                <br />
                booked tables, signed clients,
                <br />
                full waitlists.
              </h3>
              <div className="mt-7 pt-5 border-t border-[#F2E2A4]/20 flex items-center justify-between font-body text-[10.5px] tracking-[0.28em] uppercase text-[#F2E2A4]/60">
                <span>— a real outcome, every quarter.</span>
                <Squiggle className="max-w-[120px] opacity-70" />
              </div>
            </motion.div>

            {/* Card 3 — Sticky-note quote */}
            <motion.div
              initial={{ opacity: 0, y: 18, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="md:col-span-3 relative bg-[#F2E2A4] border border-[#1A1814]/15 p-6 shadow-[0_18px_40px_-22px_rgba(26,24,20,0.4)]"
              style={{ transform: "rotate(2deg)" }}
            >
              <span
                aria-hidden
                className="absolute -top-3 left-6"
                style={{
                  width: 58,
                  height: 18,
                  background: "rgba(26,24,20,0.18)",
                  border: "1px solid rgba(26,24,20,0.12)",
                  transform: "rotate(-7deg)",
                  boxShadow: "0 2px 6px rgba(26,24,20,0.08)",
                }}
              />
              <div className="font-body text-[9.5px] tracking-[0.3em] uppercase text-[#1A1814]/60 mb-3">
                Pin · 02 · A founder said
              </div>
              <p className="font-display italic text-[18px] md:text-[20px] leading-[1.25] tracking-tight">
                “They run our Instagram like a magazine — and our bookings like clockwork.”
              </p>
              <div className="mt-4 font-body text-[10px] tracking-[0.22em] uppercase text-[#1A1814]/60">
                ✦ A Melbourne wellness brand
              </div>
            </motion.div>

            {/* Card 4 — Number/stat card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="md:col-span-4 bg-[#FAF7EE] border border-[#1A1814]/15 p-7 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="font-body text-[9.5px] tracking-[0.3em] uppercase text-[#1A1814]/60 mb-4">
                  Pin · 03 · The proof
                </div>
                <div className="font-display italic text-[64px] md:text-[88px] leading-[0.9] tracking-tight">
                  2×
                </div>
                <p className="mt-3 font-body text-[14px] leading-[1.55] text-[#1A1814]/80">
                  Bookings doubled in six weeks for a Melbourne wellness brand after rebrand &amp; relaunch.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-dashed border-[#1A1814]/25 font-body text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/55 flex items-center justify-between">
                <span>Q1 · 2026</span>
                <Asterisk size={14} />
              </div>
            </motion.div>

            {/* Card 5 — Three quick promises */}
            <motion.ul
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="md:col-span-5 bg-[#FAF7EE] border border-[#1A1814]/15 p-7 md:p-8 space-y-3.5 font-body text-[14px] leading-[1.55] text-[#1A1814]/85"
            >
              <div className="font-body text-[9.5px] tracking-[0.3em] uppercase text-[#1A1814]/60 mb-1">
                Pin · 04 · What you get
              </div>
              <li className="flex gap-3 pb-3 border-b border-dashed border-[#1A1814]/20">
                <span className="font-display italic text-[20px] leading-none text-[#1A1814]/55 shrink-0 w-7">
                  i.
                </span>
                One founder-led team. No account-manager telephone game.
              </li>
              <li className="flex gap-3 pb-3 border-b border-dashed border-[#1A1814]/20">
                <span className="font-display italic text-[20px] leading-none text-[#1A1814]/55 shrink-0 w-7">
                  ii.
                </span>
                Editorial-grade content — social, web, identity, paid.
              </li>
              <li className="flex gap-3">
                <span className="font-display italic text-[20px] leading-none text-[#1A1814]/55 shrink-0 w-7">
                  iii.
                </span>
                Numbers reviewed every quarter. The work has to earn its keep.
              </li>
            </motion.ul>
          </div>

          {/* footer rule — magazine-style continued */}
          <div className="mt-14 md:mt-16 pt-5 border-t border-[#1A1814]/20 flex flex-wrap items-center justify-between gap-3 font-body text-[10px] tracking-[0.32em] uppercase text-[#1A1814]/55">
            <span>
              <em className="not-italic font-display italic text-[13px] normal-case tracking-tight text-[#1A1814]/85">
                Continued
              </em>{" "}
              · Index — 02 · The Blueprint
            </span>
            <span className="hidden md:inline">Honeyline · Melbourne · 2026</span>
            <span>↓ Keep reading</span>
          </div>
        </div>
      </section>

      {/* ============== BLUEPRINT (Bento asymmetric) ============== */}
      <section data-testid={HL_HOME.blueprint} className="py-24 md:py-36 relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="md:grid md:grid-cols-12 md:gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-10 h-px bg-[#1A1814]" />
                <span className="font-body text-[11px] tracking-[0.35em] uppercase">
                  Index — 02 · The Blueprint
                </span>
              </div>
              <h2 className="font-display text-[44px] md:text-[80px] leading-[0.95] tracking-tight">
                Everything <em className="italic font-light">your brand</em> needs.
                <br /> Under <span className="italic font-light">one</span> roof.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 mt-6 md:mt-3 flex md:items-end">
              <p className="font-body text-[16px] md:text-[18px] leading-[1.65] text-[#1A1814]/85 max-w-md">
                Most small businesses juggle four agencies, twelve freelancers and a cousin who “does design”. We replace the chaos with one founder-led team — social-first, end-to-end, and one quarterly invoice.
              </p>
            </div>
          </div>

          {/* Asymmetric bento */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  data-testid={HL_HOME.blueprintCard(i)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className={`${p.span} relative group overflow-hidden border border-[#1A1814]/15 ${p.accent ? "bg-[#1A1814] text-[#F2E2A4]" : "bg-[#FAF7EE] text-[#1A1814] hover:bg-[#F2E2A4] transition-colors duration-500"
                    } p-8 md:p-10 min-h-[260px] flex flex-col justify-between`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`hl-num text-[44px] md:text-[64px] ${p.accent ? "text-[#F2E2A4]" : ""}`}>
                      {p.n}
                    </span>
                    <Icon size={26} strokeWidth={1.3} className={p.accent ? "text-[#F2E2A4]" : "text-[#1A1814]"} />
                  </div>

                  {p.img && p.accent && (
                    <div className="my-6 -mx-10 overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-[200px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                      />
                    </div>
                  )}

                  <div>
                    <h3 className={`font-display text-[28px] md:text-[40px] leading-[0.98] tracking-tight ${p.accent ? "text-[#F2E2A4]" : ""}`}>
                      {p.title}
                    </h3>
                    <p className={`mt-3 font-body text-[14.5px] leading-[1.65] max-w-md ${p.accent ? "text-[#F2E2A4]/80" : "text-[#1A1814]/80"}`}>
                      {p.body}
                    </p>
                  </div>

                  {/* corner asterisk */}
                  <span className={`absolute bottom-4 right-4 opacity-50 ${p.accent ? "text-[#F2E2A4]" : "text-[#1A1814]"}`}>
                    <Asterisk size={18} color="currentColor" />
                  </span>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Magnetic>
              <Link
                to="/services"
                className="hl-btn-ghost inline-flex items-center gap-2 px-7 py-4 font-body text-[12px] tracking-[0.22em] uppercase"
              >
                Open the full service map
                <ArrowUpRight size={14} strokeWidth={1.7} />
              </Link>
            </Magnetic>
            <span className="font-body italic text-[14px] text-[#1A1814]/65">
              ↳ or skip ahead and{" "}
              <Link to="/contact" className="hl-link">book a 30-min discovery call</Link>.
            </span>
          </div>
        </div>
      </section>

      {/* ============== WHY MELBOURNE ============== */}
      <section data-testid={HL_HOME.whyMelbourne} className="py-24 md:py-36 hl-cream border-y border-[#1A1814]/15 relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5 md:hl-pillar-sticky">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-10 h-px bg-[#1A1814]" />
              <span className="font-body text-[11px] tracking-[0.35em] uppercase">
                Index — 03 · Why Melbourne
              </span>
            </div>
            <h2 className="font-display text-[40px] md:text-[72px] leading-[0.96] tracking-tight">
              We don’t do{" "}
              <em className="italic font-light">vanity metrics</em>.
              <br /> We do <span className="italic font-light">growth</span>.
            </h2>
            <div className="mt-10 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80"
                alt="Studio mood"
                className="w-full aspect-[5/6] object-cover border border-[#1A1814]/15"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-7 font-body text-[16px] md:text-[18px] leading-[1.7] text-[#1A1814]/85">
            <p>
              <span className="font-display italic text-[64px] md:text-[88px] leading-none float-left mr-3 mt-1 mb-1 text-[#1A1814]">L</span>
              ocal Melbourne small businesses don’t need a deck full of buzzwords — they need leads, regulars and revenue. Every Honeyline engagement starts with a single question:{" "}
              <em className="font-display text-[20px] italic">what does growth actually look like for you?</em>
            </p>
            <p>
              From a Melbourne café trying to fill weekday lunches, to a local clinic launching a new service line — we build the strategy, the assets, and the rollout. Then we measure what matters and keep going.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="border-t border-[#1A1814]/20 pt-5"
                >
                  <div className="font-display text-[42px] leading-none italic">{s.n}</div>
                  <div className="mt-2 font-body text-[12.5px] tracking-wide text-[#1A1814]/75">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-[#1A1814]/15">
              <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#1A1814]/65 mb-5">
                Currently on the workbench
              </div>
              <div className="relative bg-[#FAF7EE] border border-[#1A1814]/15 p-6 md:p-7 shadow-[0_18px_36px_-22px_rgba(26,24,20,0.45)]"
                style={{ transform: "rotate(-0.6deg)" }}>
                <Thumbtack className="-top-2 left-6" />
                <Thumbtack className="-top-2 right-6" />
                <WashiTape tone="gold" rotate={-4} width={120} className="-top-3 left-1/2 -translate-x-1/2" />
                <ul className="space-y-3.5 font-body text-[14px] text-[#1A1814]/85">
                  <li className="flex items-baseline gap-3">
                    <span className="text-[#C89932]" aria-hidden>✦</span>
                    <span>Rebranding a Melbourne wellness brand <em className="opacity-70">(full identity + web)</em></span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-[#C89932]" aria-hidden>✦</span>
                    <span>Launch campaign for a local coffee roastery</span>
                  </li>
                  <li className="flex items-baseline gap-3">
                    <span className="text-[#C89932]" aria-hidden>✦</span>
                    <span>Quarterly PR retainer for a sustainable fashion label</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIAL ============== */}
      <section data-testid={HL_HOME.testimonialSection} className="py-24 md:py-36 relative overflow-hidden">
        <ParallaxText
          text="praise · praise · praise · praise ·"
          className="absolute top-1/2 -translate-y-1/2 left-0 right-0"
          style={{ fontSize: "22vw" }}
        />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-90">
          <Asterisk size={36} />
        </div>
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 pt-12 relative">
          <div className="text-center mb-10">
            <span className="font-body text-[11px] tracking-[0.35em] uppercase">
              Index — 04 · A recent note
            </span>
          </div>
          <div className="relative max-w-[900px] mx-auto">
            <div className="relative bg-[#FAF7EE] border border-[#1A1814]/15 px-7 md:px-14 py-12 md:py-16 shadow-[0_30px_60px_-26px_rgba(26,24,20,0.45)]"
              style={{ transform: "rotate(-0.8deg)" }}>
              <Thumbtack className="-top-2 left-10" />
              <Thumbtack className="-top-2 right-10" />
              <WashiTape tone="gold" rotate={-7} width={130} className="-top-4 left-1/2 -translate-x-1/2" />
              <StickerBadge tone="gold" rotate={-9} size="md" className="!static absolute -top-5 -right-3 md:-right-8">
                Real client · Real results
              </StickerBadge>
              <blockquote className="font-display text-[28px] md:text-[56px] leading-[1.1] tracking-tight text-center">
                <span className="text-[#C89932] text-[80px] leading-none align-top mr-2 font-display italic">“</span>
                They didn’t just redesign our website — they rewrote{" "}
                <span className="relative inline-block italic font-light">
                  how we talk about ourselves
                  <HandDrawnUnderline color="#C89932" className="absolute -bottom-2 left-0 w-full h-[12px]" />
                </span>
                . Bookings doubled in six weeks.”
              </blockquote>
              <div className="mt-10 flex items-center justify-center gap-4 font-body text-[12px] tracking-[0.22em] uppercase text-[#1A1814]/70">
                <span className="inline-block w-10 h-px bg-[#1A1814]/50" />
                Founder · Melbourne wellness brand
                <span className="inline-block w-10 h-px bg-[#1A1814]/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CLOSING CTA ============== */}
      <section data-testid={HL_HOME.closingCta} className="py-24 md:py-36 hl-ink text-[#F2E2A4] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 items-end relative z-10">
          <div className="md:col-span-8">
            <span className="font-body text-[11px] tracking-[0.35em] uppercase text-[#F2E2A4]/70">
              Step one
            </span>
            <h2 className="mt-5 font-display text-[48px] md:text-[112px] leading-[0.94] tracking-tight">
              A <em className="italic font-light">30-minute</em>
              <br /> conversation.
            </h2>
            <p className="mt-7 font-body text-[16px] md:text-[18px] text-[#F2E2A4]/75 max-w-md leading-[1.65]">
              Zero pressure. Real ideas. Bring your messy business problem — we’ll bring the second flat white.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end flex flex-col items-start md:items-end gap-6">
            <Magnetic strength={0.5}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-9 py-5 bg-[#F2E2A4] text-[#1A1814] hover:bg-[#FAF7EE] transition-colors font-body text-[12px] tracking-[0.22em] uppercase"
              >
                Book a Discovery Call
                <ArrowUpRight size={16} strokeWidth={1.7} />
              </Link>
            </Magnetic>
            <RotatingStamp
              size={130}
              color="#F2E2A4"
              text="BOOK · A · DISCOVERY · CALL · TODAY · "
              innerText="↗"
              className="opacity-90"
            />
          </div>
        </div>
        <div
          aria-hidden
          className="absolute -bottom-16 -right-10 font-display italic text-[28vw] leading-[0.85] text-[#F2E2A4]/[0.05] select-none pointer-events-none"
        >
          hello.
        </div>
      </section>
    </div>
  );
}
