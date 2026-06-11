import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Instagram,
  Layers,
  Cpu,
  Sparkles,
  Quote,
} from "lucide-react";
import { HL_ABOUT } from "@/constants/agencyTestIds";
import {
  StickerBadge,
  Thumbtack,
  WashiTape,
  PaperClip,
  HandDrawnUnderline,
  WobblyArrow,
  Sparkle,
  ParallaxText,
} from "@/components/agency/Collage";

/* ============================================================
   Magazine micro-components
   ============================================================ */
/**
 * Compact magazine page-heading: a "tab" with page number + italic section title.
 * One pin/tape moment, otherwise calm and editorial.
 */
const Folio = ({ num, section, issue = "Honeyline Quarterly" }) => (
  <div className="relative mb-10 md:mb-14 flex items-center gap-5">
    {/* page-number tab — slightly tilted, with one piece of tape */}
    <div className="relative shrink-0" style={{ transform: "rotate(-3deg)" }}>
      <span
        aria-hidden
        className="absolute -top-2 left-3 z-10"
        style={{
          width: 38,
          height: 14,
          background: "rgba(250, 235, 175, 0.78)",
          mixBlendMode: "multiply",
          border: "1px solid rgba(26,24,20,0.10)",
          transform: "rotate(-8deg)",
          boxShadow: "0 2px 4px rgba(26,24,20,0.08)",
        }}
      />
      <div className="bg-[#1A1814] text-[#F2E2A4] px-3.5 py-2 font-display italic text-[26px] md:text-[32px] leading-none tracking-tight shadow-[0_8px_18px_-10px_rgba(26,24,20,0.55)]">
        {num}
      </div>
    </div>

    {/* section title + tiny meta line */}
    <div className="flex-1 min-w-0">
      <div className="font-body text-[10px] tracking-[0.35em] uppercase text-[#1A1814]/55">
        Section
      </div>
      <h3 className="font-display italic text-[22px] md:text-[28px] leading-[1.05] tracking-tight truncate">
        {section}
      </h3>
    </div>

    {/* right rail — issue marker, hidden on mobile */}
    <div className="hidden md:flex items-center gap-3 shrink-0 font-body text-[10px] tracking-[0.32em] uppercase text-[#1A1814]/55">
      <span className="inline-block w-8 h-px bg-[#1A1814]/30" />
      <span>{issue}</span>
    </div>
  </div>
);

const Tape = ({ className = "", rotate = "-4deg", w = 80 }) => (
  <span
    aria-hidden
    className={`absolute z-10 ${className}`}
    style={{
      width: w,
      height: 22,
      background: "rgba(250, 235, 175, 0.78)",
      mixBlendMode: "multiply",
      border: "1px solid rgba(26,24,20,0.10)",
      transform: `rotate(${rotate})`,
      boxShadow: "0 2px 6px rgba(26,24,20,0.08)",
    }}
  />
);

const Rule = () => <div className="h-px w-full bg-[#1A1814]/30" />;

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3">
    <span className="inline-block w-10 h-px bg-[#1A1814]" />
    <span className="font-body text-[10.5px] tracking-[0.4em] uppercase">
      {children}
    </span>
  </div>
);

/* ============================================================
   Page
   ============================================================ */
export default function AgencyAbout() {
  return (
    <div
      data-testid={HL_ABOUT.root}
      className="bg-[#F2E2A4] text-[#1A1814] relative overflow-hidden"
    >
      {/* ============================================================
          MASTHEAD — the magazine cover
          ============================================================ */}
      <section className="pt-32 md:pt-36 pb-10 md:pb-14 relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between gap-6 border-b-2 border-[#1A1814] pb-4 mb-10">
            <span className="font-display italic text-[26px] md:text-[34px] leading-none tracking-tight">
              Honeyline Quarterly
            </span>
            <span className="hidden md:block font-body text-[10.5px] tracking-[0.4em] uppercase">
              Issue №01 · Vol. I
            </span>
            <span className="font-body text-[10.5px] tracking-[0.4em] uppercase">
              Melbourne · 2026
            </span>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-end relative">
            <div className="md:col-span-9">
              <SectionLabel>Cover Story · The Founder</SectionLabel>
              <h1 className="mt-7 font-display text-[52px] sm:text-[80px] md:text-[124px] leading-[0.9] tracking-tight">
                A 23-year-old
                <br />
                with a{" "}
                <span className="relative inline-block italic font-light">
                  vision
                  <HandDrawnUnderline color="#C89932" thickness={4} className="absolute -bottom-3 left-0 w-full h-[16px]" />
                </span>
                <br />— and a brand
                <br />
                <em className="italic font-light">built around</em> it.
              </h1>
              {/* floating editorial sticker */}
              <div className="hidden md:block absolute -top-2 -right-4 lg:-right-12 z-30 pointer-events-none">
                <StickerBadge tone="gold" rotate={-9} size="lg" className="!static" pulse>
                  Feature No. 01
                </StickerBadge>
              </div>
            </div>
            <div className="md:col-span-3 md:pb-2">
              <Rule />
              <p className="mt-4 font-body italic text-[14px] leading-[1.55] text-[#1A1814]/75">
                A Melbourne-based marketing studio for ambitious small businesses — founder-led, social-first, and quietly obsessed with the work.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#1A1814]/20 pt-6 font-body text-[10.5px] tracking-[0.32em] uppercase text-[#1A1814]/65">
            <span>Cover · <em className="not-italic font-display italic text-[13px] normal-case tracking-tight text-[#1A1814]">Simran Kaur</em></span>
            <span className="hidden md:inline-block w-1 h-1 rounded-full bg-[#1A1814]/40" />
            <span>Words · <em className="not-italic font-display italic text-[13px] normal-case tracking-tight text-[#1A1814]">Honeyline</em></span>
            <span className="md:ml-auto inline-flex items-center gap-2 bg-[#1A1814] text-[#F2E2A4] px-2.5 py-1 text-[10px]">
              Read freely ✦
            </span>
          </div>
        </div>

        {/* huge "01" backdrop number */}
        <div
          aria-hidden
          className="absolute -bottom-10 right-[-6vw] font-display italic text-[28vw] leading-none text-[#1A1814]/[0.05] select-none pointer-events-none"
        >
          01
        </div>
      </section>

      {/* ============================================================
          COVER STORY — SIMRAN
          ============================================================ */}
      <section className="py-20 md:py-28 relative border-t border-[#1A1814]/15">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Folio num="02" section="The Founder" issue="Cover Story · Iss. №01" />

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* PORTRAIT POLAROID — left column */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
              data-testid={HL_ABOUT.member("simran-kaur")}
              className="md:col-span-5 relative"
              style={{ transform: "rotate(-2deg)" }}
            >
              <div className="relative bg-[#FAF7EE] p-4 pb-16 border border-[#1A1814]/12 shadow-[0_30px_60px_-30px_rgba(26,24,20,0.45)]">
                <Tape className="-top-3 left-8" rotate="-6deg" />
                <Tape className="-top-3 right-8" rotate="5deg" w={64} />

                {/* Founder portrait */}
                <div className="relative w-full aspect-[4/5] bg-[#F2E2A4] border border-[#1A1814]/10 overflow-hidden">
                  <img
                    src="/team/simran.jpg"
                    alt="Simran Kaur, Founder of Honeyline"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 font-body text-[9.5px] tracking-[0.3em] uppercase text-[#1A1814]/85 bg-[#F2E2A4]/85 px-1.5 py-0.5">
                    Plate · 01
                  </span>
                </div>

                <figcaption className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                  <span className="font-display italic text-[18px] md:text-[20px] tracking-tight">
                    Simran, founder.
                  </span>
                  <span className="font-body text-[9.5px] tracking-[0.28em] uppercase text-[#1A1814]/65">
                    Melbourne · 2026
                  </span>
                </figcaption>
              </div>
            </motion.div>

            {/* BIO COLUMN — right */}
            <div className="md:col-span-7 md:pl-2">
              <div className="font-body text-[10.5px] tracking-[0.35em] uppercase text-[#1A1814]/65 mb-3">
                Cover Story
              </div>
              <h2 className="font-display text-[44px] sm:text-[60px] md:text-[86px] leading-[0.95] tracking-tight">
                Meet <em className="italic font-light">Simran</em> Kaur.
              </h2>

              {/* Two-column editorial body with drop-cap */}
              <div className="mt-7 md:columns-2 md:gap-10 md:column-rule md:column-rule-[#1A1814]/15">
                <p className="font-body text-[15.5px] md:text-[16px] leading-[1.7] text-[#1A1814]/88 break-inside-avoid mb-5">
                  <span className="float-left font-display italic text-[68px] leading-[0.78] mr-2 mt-1">
                    S
                  </span>
                  imran is 23. She has a Masters of Business from Griffith, a pastel-yellow obsession, and the kind of nerve you only see in founders who started before the world told them to wait. She’s spent the last few years quietly studying the marketing playbook small businesses get sold — and writing a better one.
                </p>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-[#1A1814]/85 break-inside-avoid">
                  She runs every account personally — strategy, social, the brand voice, the quarterly review. Calm in the room. Loud about the work.
                </p>
              </div>

              {/* Pull quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-9 relative pl-7 pr-2 py-2 border-l-2 border-[#1A1814] font-display italic text-[26px] md:text-[34px] leading-[1.15] tracking-tight"
              >
                <Quote
                  size={22}
                  strokeWidth={1.5}
                  className="absolute -left-3 top-2 bg-[#F2E2A4] text-[#1A1814]"
                />
                “I didn’t want to wait until I was thirty. Twenty-three felt like enough.”
              </motion.blockquote>

              {/* Quick facts sidebar */}
              <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-6">
                <div>
                  <div className="flex items-center gap-2 font-body text-[10.5px] tracking-[0.3em] uppercase text-[#1A1814]/70 mb-3 pb-2 border-b border-[#1A1814]/25">
                    <Sparkles size={12} strokeWidth={1.7} /> Three things to know
                  </div>
                  <ol className="space-y-3 font-body text-[14px] leading-[1.55] text-[#1A1814]/85">
                    <li className="flex gap-3">
                      <span className="font-display italic text-[#1A1814]/55">01.</span>
                      Founded Honeyline at 23 because waiting another decade felt wasteful.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-display italic text-[#1A1814]/55">02.</span>
                      Masters of Business · Griffith University, with a strategy-first bent.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-display italic text-[#1A1814]/55">03.</span>
                      Believes social media is the modern shop window — and treats it like one.
                    </li>
                  </ol>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-body text-[10.5px] tracking-[0.3em] uppercase text-[#1A1814]/70 mb-3 pb-2 border-b border-[#1A1814]/25">
                    Off the record
                  </div>
                  <dl className="space-y-2.5 font-body text-[13.5px] leading-[1.5]">
                    <div className="flex justify-between gap-4 border-b border-dashed border-[#1A1814]/20 pb-2">
                      <dt className="text-[#1A1814]/60 italic">Based</dt>
                      <dd>Melbourne, VIC</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-dashed border-[#1A1814]/20 pb-2">
                      <dt className="text-[#1A1814]/60 italic">Drinks</dt>
                      <dd>Hot chocolate, always</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-dashed border-[#1A1814]/20 pb-2">
                      <dt className="text-[#1A1814]/60 italic">Loves</dt>
                      <dd>Founders with conviction</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#1A1814]/60 italic">Allergic to</dt>
                      <dd>Template marketing</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DIVIDER — manifesto
          ============================================================ */}
      <section className="border-y border-[#1A1814]/25 bg-[#F2E2A4] py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 text-center">
          <span className="font-body text-[10.5px] tracking-[0.4em] uppercase text-[#1A1814]/65">
            — The Manifesto —
          </span>
          <p className="mt-6 font-display italic text-[28px] md:text-[44px] leading-[1.18] tracking-tight">
            We don’t pitch templates. We don’t sell retainer hours. We build brands that compound — so Honeyline earns its keep on the work it shipped two quarters ago.
          </p>
        </div>
      </section>

      {/* ============================================================
          FEATURE — SONIA (real photo)
          ============================================================ */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Folio num="04" section="The Designer" issue="Feature · Iss. №01" />

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* BIO LEFT */}
            <div className="md:col-span-7 md:order-2 md:pl-2">
              <div className="font-body text-[10.5px] tracking-[0.35em] uppercase text-[#1A1814]/65 mb-3">
                Feature · Lead Graphic Designer
              </div>
              <h2 className="font-display text-[44px] sm:text-[60px] md:text-[86px] leading-[0.95] tracking-tight">
                <em className="italic font-light">Sonia</em> Chauhan.
              </h2>

              <p className="mt-7 font-body text-[15.5px] md:text-[16.5px] leading-[1.7] text-[#1A1814]/88">
                <span className="float-left font-display italic text-[64px] leading-[0.78] mr-2 mt-1">
                  S
                </span>
                onia is 22, based in Mumbai, a university graduate, and has been designing seriously for 4+ years. What began as a passion for design became a journey across industries, brands, and even countries — from shaping identities for local businesses to contributing to projects in Dubai. Every design has been a step toward something bigger.
              </p>

              <motion.blockquote
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-7 relative pl-7 pr-2 py-2 border-l-2 border-[#1A1814] font-display italic text-[24px] md:text-[30px] leading-[1.18] tracking-tight"
              >
                <Quote
                  size={20}
                  strokeWidth={1.5}
                  className="absolute -left-3 top-2 bg-[#F2E2A4] text-[#1A1814]"
                />
                “Designing stories that transform — with every chapter of the journey.”
              </motion.blockquote>

              {/* Sonia sidebar facts */}
              <div className="mt-9 grid md:grid-cols-2 gap-x-10 gap-y-6">
                <div>
                  <div className="flex items-center gap-2 font-body text-[10.5px] tracking-[0.3em] uppercase text-[#1A1814]/70 mb-3 pb-2 border-b border-[#1A1814]/25">
                    <Layers size={12} strokeWidth={1.7} /> Five chapters, in short
                  </div>
                  <ol className="space-y-3 font-body text-[14px] leading-[1.55] text-[#1A1814]/85">
                    <li className="flex gap-3">
                      <span className="font-display italic text-[#1A1814]/55">01.</span>
                      4+ years of full-time design, across three industries.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-display italic text-[#1A1814]/55">02.</span>
                      A university graduate — multimedia &amp; visual storytelling.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-display italic text-[#1A1814]/55">03.</span>
                      <span>Has worked on brands across <em className="italic">India and Dubai</em>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-display italic text-[#1A1814]/55">04.</span>
                      Speciality: social-first brand systems, posts, templates, identity.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-display italic text-[#1A1814]/55">05.</span>
                      Toolbelt: Ps · Ai · Id · Lr · Canva — in that order of affection.
                    </li>
                  </ol>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-body text-[10.5px] tracking-[0.3em] uppercase text-[#1A1814]/70 mb-3 pb-2 border-b border-[#1A1814]/25">
                    Find her
                  </div>
                  <dl className="space-y-2.5 font-body text-[13.5px] leading-[1.5]">
                    <div className="flex justify-between gap-4 border-b border-dashed border-[#1A1814]/20 pb-2">
                      <dt className="text-[#1A1814]/60 italic flex items-center gap-1.5">
                        <MapPin size={12} strokeWidth={1.7} /> Based in
                      </dt>
                      <dd>Mumbai · India</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-dashed border-[#1A1814]/20 pb-2">
                      <dt className="text-[#1A1814]/60 italic flex items-center gap-1.5">
                        <Instagram size={12} strokeWidth={1.7} /> Instagram
                      </dt>
                      <dd>
                        <a
                          href="https://instagram.com/soniachauhan.__"
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-[#1A1814]/40 underline-offset-2 hover:decoration-[#1A1814]"
                        >
                          @soniachauhan.__
                        </a>
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-dashed border-[#1A1814]/20 pb-2">
                      <dt className="text-[#1A1814]/60 italic">Behance</dt>
                      <dd>
                        <a
                          href="https://behance.net/soniachauhan3"
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-[#1A1814]/40 underline-offset-2 hover:decoration-[#1A1814]"
                        >
                          /soniachauhan3
                        </a>
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#1A1814]/60 italic">Travels for</dt>
                      <dd>The next great brand ✦</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* PHOTO RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
              data-testid={HL_ABOUT.member("sonia-chauhan")}
              className="md:col-span-5 md:order-1 relative"
              style={{ transform: "rotate(2deg)" }}
            >
              <div className="relative bg-[#FAF7EE] p-4 pb-16 border border-[#1A1814]/12 shadow-[0_30px_60px_-30px_rgba(26,24,20,0.45)]">
                <Tape className="-top-3 left-8" rotate="5deg" />
                <Tape className="-top-3 right-8" rotate="-6deg" w={64} />

                <div className="relative w-full aspect-[4/5] bg-[#F2E2A4] border border-[#1A1814]/10 overflow-hidden">
                  <img
                    src="/team/sonia.jpg"
                    alt="Sonia Chauhan, Lead Graphic Designer at Honeyline"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 font-body text-[9.5px] tracking-[0.3em] uppercase text-[#1A1814]/85 bg-[#F2E2A4]/85 px-1.5 py-0.5">
                    Plate · 02
                  </span>
                </div>

                <figcaption className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                  <span className="font-display italic text-[18px] md:text-[20px] tracking-tight">
                    Sonia, at her desk.
                  </span>
                  <span className="font-body text-[9.5px] tracking-[0.28em] uppercase text-[#1A1814]/65">
                    Mumbai · 2026
                  </span>
                </figcaption>
              </div>

              {/* floating credential card */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden md:block absolute -left-6 -bottom-6 bg-[#1A1814] text-[#F2E2A4] px-5 py-4 max-w-[220px]"
                style={{ transform: "rotate(-4deg)" }}
              >
                <div className="font-body text-[10px] tracking-[0.28em] uppercase text-[#F2E2A4]/70 mb-1.5">
                  Designing since
                </div>
                <div className="font-display italic text-[26px] leading-tight">
                  2021
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THIRD COLUMN — Hiring placeholder
          ============================================================ */}
      <section className="py-20 md:py-24 border-t border-[#1A1814]/15">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Folio num="06" section="In the Wings" issue="Now Hiring" />

          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <SectionLabel>Now Casting</SectionLabel>
              <h3 className="mt-5 font-display text-[36px] md:text-[56px] leading-[1] tracking-tight">
                The next chair at the table.
              </h3>
              <p className="mt-6 font-body text-[15px] md:text-[16px] leading-[1.7] text-[#1A1814]/85 max-w-xl">
                We’re actively scouting our first IT &amp; Development lead — the engineer who’ll make every Honeyline build load fast, scale clean, and stay beautiful in the source code. If that’s you (or someone you love),{" "}
                <Link to="/contact" className="underline underline-offset-4 hover:no-underline">
                  send us a note
                </Link>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {["Web Engineering", "Performance", "Stack Architecture", "Integrations"].map((c) => (
                  <span
                    key={c}
                    className="font-body text-[10.5px] tracking-[0.16em] uppercase text-[#1A1814]/85 border border-[#1A1814]/25 px-2.5 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-testid={HL_ABOUT.member("it-specialist")}
              className="md:col-span-5 relative"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <div className="relative bg-[#FAF7EE] p-7 border border-dashed border-[#1A1814]/35 shadow-[0_18px_45px_-22px_rgba(26,24,20,0.35)]">
                <Tape className="-top-3 left-1/2 -translate-x-1/2" rotate="-3deg" w={72} />
                <div className="aspect-[4/5] bg-[#F2E2A4] border border-dashed border-[#1A1814]/30 flex flex-col items-center justify-center text-center px-6">
                  <Cpu size={36} strokeWidth={1.3} className="opacity-50 mb-4" />
                  <span className="font-display italic text-[40px] md:text-[48px] leading-none">
                    coming
                    <br />
                    soon.
                  </span>
                  <span className="mt-5 font-body text-[10.5px] tracking-[0.3em] uppercase text-[#1A1814]/65">
                    ✦ Profile pending arrival
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between font-body text-[10.5px] tracking-[0.3em] uppercase text-[#1A1814]/60">
                  <span>Plate · 03</span>
                  <span>—</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING — Apply to work with us
          ============================================================ */}
      <section className="py-24 md:py-32 border-t border-[#1A1814]/15 relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Folio num="08" section="The Last Word" issue="Closing · Iss. №01" />

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <SectionLabel>The Last Word</SectionLabel>
              <h2 className="mt-7 font-display text-[44px] md:text-[88px] leading-[0.96] tracking-tight">
                We{`’`}re only taking a{" "}
                <em className="italic font-light">handful</em> of new clients in 2026.
              </h2>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <Link
                to="/contact"
                className="hl-btn-ink inline-flex items-center justify-center gap-2 px-8 py-5 font-body text-[12px] tracking-[0.22em] uppercase"
              >
                Apply to work with us
                <ArrowUpRight size={16} strokeWidth={1.7} />
              </Link>
            </div>
          </div>
        </div>

        {/* tiny "back of book" colophon — single quiet line */}
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 mt-16 border-t border-[#1A1814]/15 pt-5 flex flex-wrap items-center justify-between gap-3 font-body text-[10.5px] tracking-[0.32em] uppercase text-[#1A1814]/55">
          <span>
            <em className="not-italic font-display italic text-[13px] normal-case tracking-tight text-[#1A1814]/85">
              Honeyline Quarterly
            </em>{" "}
            · Iss. №01
          </span>
          <span className="hidden md:inline">Set in Cormorant Garamond &amp; Inter</span>
          <span>Printed in Melbourne · 2026</span>
        </div>
      </section>
    </div>
  );
}
