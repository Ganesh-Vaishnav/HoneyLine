import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { HL_SERVICES } from "@/constants/agencyTestIds";
import {
  StickerBadge,
  HandDrawnUnderline,
  Sparkle,
  Thumbtack,
  WashiTape,
  PaperClip,
  ParallaxText,
} from "@/components/agency/Collage";

const PILLARS = [
  {
    slug: "digital-social",
    label: "Digital & Social — Our flagship",
    headline: "Social media, run like a magazine.",
    body:
      "Social is the modern shop window — and it’s where Honeyline lives. We plan, shoot, write and ship Instagram, TikTok and LinkedIn so your channels feel like a publication, not a content mill. You run the business; we run the feed.",
    services: [
      { title: "Social Media Management", note: "Instagram, TikTok, LinkedIn — full content calendars, scheduling & community." },
      { title: "Content Studio", note: "On-brand reels, photography, copywriting, micro-campaigns — shot on location or remotely." },
      { title: "Personal Branding (Founder Channels)", note: "Build the founder’s voice — LinkedIn, IG, podcast bookings, op-eds." },
      { title: "Paid Media (Meta + Google)", note: "Performance creative, audience strategy, monthly optimisation." },
    ],
  },
  {
    slug: "creative-strategy",
    label: "Creative & Strategy",
    headline: "Brand-led from the inside out.",
    body:
      "Identity, messaging, websites and design systems — built on a strategic foundation that holds for the next ten years, not the next ten posts.",
    services: [
      { title: "Brand Strategy & Positioning", note: "Workshops, audience research, brand architecture, naming, voice." },
      { title: "Visual Identity Systems", note: "Logo, type, colour, motion, full brand bible & asset library." },
      { title: "Custom Web Design & Build", note: "Editorial websites engineered for speed, story and conversion." },
      { title: "Graphic Design & Editorial", note: "Print, packaging, decks and editorial spreads with serious craft." },
    ],
  },
  {
    slug: "authority-pr",
    label: "Authority & PR",
    headline: "Get noticed in the right rooms.",
    body:
      "Press, partnerships, founder positioning — the long-game work that puts your brand in feeds and inboxes that money can’t buy.",
    services: [
      { title: "PR Strategy & Outreach", note: "Local Melbourne press, lifestyle media, niche industry placements." },
      { title: "Founder Positioning", note: "LinkedIn presence, op-eds, podcast bookings, speaker positioning." },
      { title: "Partnerships & Collabs", note: "Curated brand-to-brand collaborations & community-led launches." },
      { title: "Launch & Event Campaigns", note: "Soft launches, openings, milestones — built for buzz and bookings." },
    ],
  },
];

const PROCESS = [
  { n: "01", title: "Listen", body: "A 30-minute discovery call. We learn the business, the bottlenecks, the dreams." },
  { n: "02", title: "Plan", body: "A bespoke 90-day growth roadmap — scoped, priced and pinned to outcomes." },
  { n: "03", title: "Ship", body: "Strategy, design and rollout — delivered by the founders, not a sub-agency." },
  { n: "04", title: "Compound", body: "Measure, refine, expand. Brands compound when the team stays sharp and the strategy stays calm." },
];

const FAQS = [
  {
    q: "Do you work with very early-stage businesses?",
    a: "Yes — early stage is often where we add the most leverage. We’ll be honest with you if a project isn’t the right fit yet, and point you to lighter-touch options.",
  },
  {
    q: "Can I just hire you for one service, like web design?",
    a: "Absolutely. While we’re built for full-stack engagements, you can engage any single pillar (Creative, Digital, or PR) as a stand-alone project.",
  },
  {
    q: "What does a typical engagement cost?",
    a: "Most engagements sit between $4,000 and $25,000+ depending on scope. We scope every project bespoke — no off-the-shelf packages.",
  },
  {
    q: "Where are you based, and do you take remote clients?",
    a: "We’re in Melbourne, VIC. About 70% of our work is local — but we happily work with regional and interstate Australian small businesses.",
  },
];

function FaqItem({ q, a, i }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="border-b border-[#1A1814]/15">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between py-6 text-left group"
        data-testid={`hl-faq-${i}`}
      >
        <span className="font-display text-[22px] md:text-[28px] tracking-tight pr-6">
          {q}
        </span>
        <span className="text-[#1A1814]">
          {open ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-7 max-w-2xl font-body text-[15px] leading-[1.7] text-[#1A1814]/85">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AgencyServices() {
  return (
    <div data-testid={HL_SERVICES.root} className="bg-[#F2E2A4] text-[#1A1814]">
      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 mb-7">
            <span className="inline-block w-10 h-px bg-[#1A1814]" />
            <span className="font-body text-[11px] tracking-[0.35em] uppercase">Services</span>
          </div>
          <h1 className="font-display text-[48px] sm:text-[72px] md:text-[120px] leading-[0.93] tracking-tight max-w-[16ch] relative">
            Social-led.
            <br />
            <span className="relative inline-block italic font-light">
              Everything
              <HandDrawnUnderline color="#C89932" thickness={4} className="absolute -bottom-3 left-0 w-full h-[14px]" />
            </span>{" "}
            else, layered in.
            <span className="hidden md:block absolute -top-6 right-0 lg:-right-6">
              <StickerBadge tone="gold" rotate={-11} size="md" className="!static" pulse>
                Now booking · Q1
              </StickerBadge>
            </span>
          </h1>
          <p className="mt-10 max-w-2xl font-body text-[16px] md:text-[19px] leading-[1.6] text-[#1A1814]/85">
            Social media is our flagship craft — full-service Instagram, TikTok and LinkedIn. From there we layer in identity, web, PR and paid media as a single, coordinated growth engine. Engage one pillar, or all three.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="hl-cream border-y border-[#1A1814]/15 relative overflow-hidden">
        <ParallaxText
          text="craft · craft · craft · craft ·"
          className="absolute top-1/3 left-0 right-0 pointer-events-none"
          style={{ fontSize: "20vw" }}
        />
        {PILLARS.map((p, i) => (
          <div
            key={p.slug}
            data-testid={HL_SERVICES.pillar(p.slug)}
            className={`border-b border-[#1A1814]/15 last:border-b-0 py-20 md:py-28 relative`}
          >
            {i === 0 && (
              <div className="hidden md:block absolute top-8 right-6 z-30 pointer-events-none">
                <StickerBadge tone="gold" rotate={8} size="md" className="!static" pulse>
                  Flagship · No.01
                </StickerBadge>
              </div>
            )}
            {i === 1 && (
              <div className="hidden md:block absolute top-8 left-1/2 z-30 pointer-events-none">
                <StickerBadge tone="ink" rotate={-6} size="sm" className="!static">
                  Best seller
                </StickerBadge>
              </div>
            )}
            {i === 2 && (
              <div className="hidden md:block absolute top-8 right-12 z-30 pointer-events-none">
                <StickerBadge tone="cream" rotate={5} size="sm" className="!static">
                  New for 2026
                </StickerBadge>
              </div>
            )}
            <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 relative">
              <div className="md:col-span-5">
                <div className="font-display italic text-[#1A1814]/40 text-[88px] md:text-[140px] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-body text-[11px] tracking-[0.35em] uppercase mt-4">
                  {p.label}
                </div>
                <h2 className="font-display text-[36px] md:text-[56px] leading-[1] tracking-tight mt-4">
                  {p.headline}
                </h2>
                <p className="mt-5 font-body text-[15px] md:text-[16px] leading-[1.7] text-[#1A1814]/80 max-w-md">
                  {p.body}
                </p>
                <Link
                  to="/contact"
                  className="mt-7 hl-btn-ghost inline-flex items-center gap-2 px-6 py-3 font-body text-[11.5px] tracking-[0.22em] uppercase"
                >
                  Scope this work
                  <ArrowUpRight size={14} strokeWidth={1.7} />
                </Link>
              </div>

              <ul className="md:col-span-7 divide-y divide-[#1A1814]/15 border-t border-b border-[#1A1814]/15">
                {p.services.map((s, j) => (
                  <motion.li
                    key={s.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.05 }}
                    className="py-6 md:py-7 flex flex-col md:flex-row md:items-start gap-2 md:gap-6"
                  >
                    <span className="font-display italic text-[#1A1814]/55 text-[18px] w-10 shrink-0">
                      .0{j + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-[24px] md:text-[28px] tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 font-body text-[14px] leading-[1.6] text-[#1A1814]/75 max-w-xl">
                        {s.note}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="md:grid md:grid-cols-12 md:gap-12 mb-12">
            <div className="md:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-10 h-px bg-[#1A1814]" />
                <span className="font-body text-[11px] tracking-[0.35em] uppercase">Process</span>
              </div>
              <h2 className="font-display text-[40px] md:text-[64px] leading-[0.98] tracking-tight">
                Calm, structured, transparent.
                <br />
                <em className="italic font-light">Promise.</em>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#1A1814]/15 border border-[#1A1814]/15">
            {PROCESS.map((p) => (
              <div key={p.n} className="bg-[#FAF7EE] p-8 md:p-10">
                <div className="hl-num text-[44px] md:text-[56px]">{p.n}</div>
                <h3 className="font-display text-[24px] md:text-[28px] tracking-tight mt-4">
                  {p.title}
                </h3>
                <p className="mt-3 font-body text-[14px] leading-[1.65] text-[#1A1814]/80">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hl-cream py-24 md:py-32 border-y border-[#1A1814]/15">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-10 h-px bg-[#1A1814]" />
            <span className="font-body text-[11px] tracking-[0.35em] uppercase">FAQ</span>
          </div>
          <h2 className="font-display text-[40px] md:text-[64px] leading-[0.98] tracking-tight mb-10">
            The questions <em className="italic font-light">everyone asks</em>.
          </h2>
          <div>
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <span className="font-body text-[11px] tracking-[0.35em] uppercase">
              Ready when you are
            </span>
            <h2 className="mt-5 font-display text-[42px] md:text-[80px] leading-[0.96] tracking-tight">
              Let{`’`}s scope your{" "}
              <em className="italic font-light">first 90 days</em>.
            </h2>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              to="/contact"
              className="hl-btn-ink inline-flex items-center justify-center gap-2 px-8 py-5 font-body text-[12px] tracking-[0.22em] uppercase"
            >
              Start a Project
              <ArrowUpRight size={16} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
