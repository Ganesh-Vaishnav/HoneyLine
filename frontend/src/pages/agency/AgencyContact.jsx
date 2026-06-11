import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle, Mail, Coffee, MapPin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HL_CONTACT } from "@/constants/agencyTestIds";
import {
  StickerBadge,
  Thumbtack,
  WashiTape,
  PaperClip,
  HandDrawnUnderline,
  PostmarkStamp,
  Sparkle,
} from "@/components/agency/Collage";

const CONTACT_EMAIL = "simransidhu1202@gmail.com";
const WEB3FORMS_KEY = "e0dd6a60-c841-4ac9-8e27-654da7dca09a";

const SERVICES = [
  { slug: "branding", label: "Brand & Identity" },
  { slug: "web", label: "Web Design" },
  { slug: "social", label: "Social Media" },
  { slug: "paid", label: "Paid Advertising" },
  { slug: "pr", label: "PR & Outreach" },
  { slug: "full", label: "Full-service" },
];

const BUDGETS = [
  "Under $5k",
  "$5k \u2013 $15k",
  "$15k \u2013 $40k",
  "$40k+",
  "Not sure yet",
];

const TIMELINES = [
  "ASAP",
  "Within a month",
  "1 \u2013 3 months",
  "3+ months",
  "Just exploring",
];

const inputCls =
  "bg-transparent border-0 border-b border-[#1A1814]/20 rounded-none focus-visible:ring-0 focus-visible:border-[#1A1814] text-[#1A1814] placeholder:text-[#1A1814]/40 px-0 py-3 h-auto text-[15px]";

export default function AgencyContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    timeline: "",
    services: [],
    message: "",
  });
  const [status, setStatus] = useState({ type: null, msg: "" });
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));
  const toggleService = (slug) =>
    setForm((s) => ({
      ...s,
      services: s.services.includes(slug)
        ? s.services.filter((x) => x !== slug)
        : [...s.services, slug],
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, msg: "" });
    setLoading(true);
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New enquiry from ${form.name}`,
        from_name: "Honeyline Website",
        name: form.name,
        email: form.email,
        company: form.company || "Not provided",
        phone: form.phone || "Not provided",
        budget: form.budget || "Not provided",
        timeline: form.timeline || "Not provided",
        services: form.services.length ? form.services.join(", ") : "Not specified",
        message: form.message,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          msg: "Thanks \u2014 we\u2019ve got your note. Simran will be in touch within 1 business day, usually with a few questions and a calendar link.",
        });
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          budget: "",
          timeline: "",
          services: [],
          message: "",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Something went sideways. Please email us directly at simransidhu1202@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid={HL_CONTACT.root} className="bg-[#F2E2A4] text-[#1A1814]">
      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 items-end relative">
          <div className="md:col-span-9 relative">
            <div className="hidden md:block absolute -top-6 right-0 lg:-right-4 z-20 pointer-events-none">
              <StickerBadge tone="gold" rotate={-9} size="md" className="!static" pulse>
                Open · accepting projects
              </StickerBadge>
            </div>
            <div className="flex items-center gap-3 mb-7">
              <span className="inline-block w-10 h-px bg-[#1A1814]" />
              <span className="font-body text-[11px] tracking-[0.35em] uppercase">
                Discovery
              </span>
            </div>
            <h1 className="font-display text-[48px] sm:text-[72px] md:text-[120px] leading-[0.93] tracking-tight">
              Let{`'`}s grab a{" "}
              <span className="relative inline-block italic font-light">
                flat white
                <HandDrawnUnderline color="#C89932" thickness={4} className="absolute -bottom-3 left-0 w-full h-[14px]" />
              </span>
              <br />
              and talk <span className="italic font-light">growth</span>.
            </h1>
            <p className="mt-10 max-w-2xl font-body text-[16px] md:text-[19px] leading-[1.6] text-[#1A1814]/85">
              Tell us a little about your business and where you want to take it. Simran replies to every enquiry personally &mdash; usually within one Melbourne business day.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
          {/* LEFT — quick contact + closing */}
          <aside className="md:col-span-4 space-y-7">
            <div className="border border-[#1A1814]/20 p-7 md:p-8 hl-cream">
              <div className="font-body text-[11px] tracking-[0.3em] uppercase text-[#1A1814]/70 mb-3">
                Direct line
              </div>
              <a
                href="mailto:simransidhu1202@gmail.com"
                data-testid="hl-direct-email"
                className="flex items-start gap-2 font-display text-[15px] md:text-[16.5px] leading-tight tracking-tight hover:underline"
              >
                <Mail size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span className="min-w-0 flex-1 break-all">
                  simransidhu1202@gmail.com
                </span>
              </a>
              <p className="mt-4 font-body text-[14px] leading-[1.65] text-[#1A1814]/75">
                Prefer email? Skip the form &mdash; Simran reads every message herself.
              </p>
            </div>

            <div className="relative border border-[#1A1814]/20 p-7 md:p-8 hl-cream"
              style={{ transform: "rotate(-1deg)" }}>
              <Thumbtack className="-top-2 left-6" />
              <WashiTape tone="gold" rotate={-7} width={90} className="-top-3 right-8" />
              <div className="font-body text-[11px] tracking-[0.3em] uppercase text-[#1A1814]/70 mb-3">
                Based in · Melbourne
              </div>
              <p className="flex items-start gap-2 font-display text-[22px] md:text-[26px] tracking-tight">
                <MapPin size={18} className="mt-1.5 shrink-0" strokeWidth={1.5} />
                <span>Remote-first, working across Melbourne, VIC.</span>
              </p>
              <p className="mt-4 font-body text-[14px] leading-[1.65] text-[#1A1814]/75">
                We work with clients over video calls and async &mdash; fast, focused, and on your schedule.
              </p>
            </div>

            <div className="relative border border-[#1A1814]/20 p-7 md:p-8 hl-cream"
              style={{ transform: "rotate(0.8deg)" }}>
              <Thumbtack className="-top-2 right-6" />
              <div className="font-body text-[11px] tracking-[0.3em] uppercase text-[#1A1814]/70 mb-3">
                Social
              </div>
              <a
                href="https://instagram.com/honeyline.au"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-display text-[22px] tracking-tight hover:underline"
              >
                <Instagram size={18} strokeWidth={1.5} />
                @honeyline.au
              </a>
              <a
                href="https://honeyline.com.au"
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center gap-2 font-body text-[14px] tracking-tight text-[#1A1814]/80 hover:underline"
              >
                <ArrowUpRight size={14} strokeWidth={1.6} />
                honeyline.com.au
              </a>
            </div>

            <div className="relative hl-ink p-7 md:p-8 text-[#F2E2A4]"
              style={{ transform: "rotate(-1.2deg)" }}>
              <WashiTape tone="gold" rotate={-10} width={140} className="-top-3 left-1/2 -translate-x-1/2" />
              <StickerBadge tone="gold" rotate={-12} size="md" className="!static absolute -top-4 -right-3">
                On the house
              </StickerBadge>
              <div className="font-body text-[11px] tracking-[0.3em] uppercase text-[#F2E2A4]/70 mb-4 flex items-center gap-2">
                <Coffee size={14} strokeWidth={1.6} /> The invitation
              </div>
              <p className="font-display text-[22px] md:text-[26px] leading-[1.2] tracking-tight">
                The first chat is on us.
                <br />
                <em className="italic font-light">Let{`'`}s build something worth talking about.</em>
              </p>
              <div className="mt-6 flex justify-end">
                <PostmarkStamp text="POSTED FROM MELBOURNE" date="MMXXVI" rotate={-7} />
              </div>
            </div>
          </aside>

          {/* RIGHT — form */}
          <div className="md:col-span-8">
            <div className="border border-[#1A1814]/20 p-7 md:p-12 hl-cream">
              <h2 className="font-display text-[32px] md:text-[48px] leading-[1] tracking-tight">
                Tell us about your business
              </h2>
              <p className="mt-3 font-body text-[14px] md:text-[15px] text-[#1A1814]/75">
                The more we know upfront, the more useful our first call can be.
              </p>

              <form
                onSubmit={onSubmit}
                data-testid={HL_CONTACT.form}
                className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7"
              >
                <div>
                  <Label className="font-body text-[10px] tracking-[0.28em] uppercase text-[#1A1814]/65">
                    Your name *
                  </Label>
                  <Input
                    data-testid={HL_CONTACT.name}
                    required
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Your full name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Label className="font-body text-[10px] tracking-[0.28em] uppercase text-[#1A1814]/65">
                    Email *
                  </Label>
                  <Input
                    data-testid={HL_CONTACT.email}
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@yourbusiness.com.au"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Label className="font-body text-[10px] tracking-[0.28em] uppercase text-[#1A1814]/65">
                    Business name
                  </Label>
                  <Input
                    data-testid={HL_CONTACT.company}
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                    placeholder="Your company"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Label className="font-body text-[10px] tracking-[0.28em] uppercase text-[#1A1814]/65">
                    Phone
                  </Label>
                  <Input
                    data-testid={HL_CONTACT.phone}
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="04xx xxx xxx"
                    className={inputCls}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label className="font-body text-[10px] tracking-[0.28em] uppercase text-[#1A1814]/65">
                    What do you need help with?
                  </Label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SERVICES.map((s) => {
                      const active = form.services.includes(s.slug);
                      return (
                        <button
                          type="button"
                          key={s.slug}
                          data-testid={HL_CONTACT.serviceChip(s.slug)}
                          onClick={() => toggleService(s.slug)}
                          className={`px-4 py-2 font-body text-[12px] tracking-[0.16em] uppercase border transition-colors ${active
                            ? "bg-[#1A1814] text-[#F2E2A4] border-[#1A1814]"
                            : "border-[#1A1814]/30 text-[#1A1814] hover:border-[#1A1814]"
                            }`}
                        >
                          {s.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Label className="font-body text-[10px] tracking-[0.28em] uppercase text-[#1A1814]/65">
                    Budget range
                  </Label>
                  <Select
                    value={form.budget}
                    onValueChange={(v) => set("budget", v)}
                  >
                    <SelectTrigger
                      data-testid={HL_CONTACT.budget}
                      className="bg-transparent border-0 border-b border-[#1A1814]/20 rounded-none px-0 py-3 h-auto text-[15px] text-[#1A1814] focus:ring-0 focus:border-[#1A1814]"
                    >
                      <SelectValue placeholder="Choose a range" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#FAF7EE] border-[#1A1814]/20 text-[#1A1814]">
                      {BUDGETS.map((b) => (
                        <SelectItem key={b} value={b}>
                          {b}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="font-body text-[10px] tracking-[0.28em] uppercase text-[#1A1814]/65">
                    Timeline
                  </Label>
                  <Select
                    value={form.timeline}
                    onValueChange={(v) => set("timeline", v)}
                  >
                    <SelectTrigger
                      data-testid={HL_CONTACT.timeline}
                      className="bg-transparent border-0 border-b border-[#1A1814]/20 rounded-none px-0 py-3 h-auto text-[15px] text-[#1A1814] focus:ring-0 focus:border-[#1A1814]"
                    >
                      <SelectValue placeholder="When do you want to start?" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#FAF7EE] border-[#1A1814]/20 text-[#1A1814]">
                      {TIMELINES.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <Label className="font-body text-[10px] tracking-[0.28em] uppercase text-[#1A1814]/65">
                    Tell us about your business & goals *
                  </Label>
                  <Textarea
                    data-testid={HL_CONTACT.message}
                    required
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    rows={5}
                    placeholder="A few sentences about your business, what's working, what's not, and what you'd love to achieve in the next 90 days."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-3">
                  <p className="font-body text-[11px] text-[#1A1814]/65 tracking-wide max-w-sm">
                    By submitting, you agree we may contact you about your enquiry. We don{`'`}t share your details. Ever.
                  </p>
                  <button
                    type="submit"
                    data-testid={HL_CONTACT.submit}
                    disabled={loading}
                    className="hl-btn-ink inline-flex items-center justify-center gap-2 px-8 py-4 font-body text-[12px] tracking-[0.22em] uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending\u2026" : "Send Enquiry"}
                    <ArrowUpRight size={16} strokeWidth={1.7} />
                  </button>
                </div>

                {status.type === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    data-testid={HL_CONTACT.success}
                    className="md:col-span-2 flex items-start gap-3 border border-[#1A1814]/30 bg-[#F2E2A4] p-5"
                  >
                    <CheckCircle2 size={18} className="text-[#1A1814] shrink-0 mt-0.5" />
                    <p className="font-body text-[14px] leading-relaxed text-[#1A1814]">{status.msg}</p>
                  </motion.div>
                )}
                {status.type === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    data-testid={HL_CONTACT.error}
                    className="md:col-span-2 flex items-start gap-3 border border-red-800/40 bg-red-100 p-5"
                  >
                    <AlertCircle size={18} className="text-red-700 shrink-0 mt-0.5" />
                    <p className="font-body text-[14px] leading-relaxed text-[#1A1814]">{status.msg}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
