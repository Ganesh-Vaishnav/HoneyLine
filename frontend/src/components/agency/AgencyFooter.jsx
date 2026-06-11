import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Mail, Phone } from "lucide-react";
import { HL_FOOTER } from "@/constants/agencyTestIds";

export const AgencyFooter = () => {
  return (
    <footer
      data-testid={HL_FOOTER.root}
      className="hl-ink text-[#F2E2A4] pt-20 pb-10 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="border-b border-[#F2E2A4]/15 pb-16 mb-12">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#F2E2A4]/65 mb-6">
            Got a brand worth growing?
          </p>
          <h2 className="font-display text-[56px] sm:text-[88px] md:text-[140px] leading-[0.92] tracking-tight text-[#F2E2A4]">
            Let{`’`}s talk over <em className="italic font-light">a flat white</em>.
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 border border-[#F2E2A4]/30 px-7 py-4 font-body text-[12px] tracking-[0.2em] uppercase hover:bg-[#F2E2A4] hover:text-[#1A1814] transition-colors"
          >
            Start a Conversation
            <ArrowUpRight size={14} strokeWidth={1.7} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#F2E2A4]/60 mb-4">
              Studio
            </div>
            <p className="font-display text-[20px] leading-tight">
              Honeyline
              <br />
              <span className="text-[#F2E2A4]/65 font-body text-[14px] tracking-wide">
                Melbourne, VIC
              </span>
            </p>
          </div>

          <div>
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#F2E2A4]/60 mb-4">
              Direct
            </div>
            <a
              href="mailto:simransidhu1202@gmail.com"
              className="flex items-start gap-2 font-body text-[13px] sm:text-[14px] hover:text-white"
            >
              <Mail size={14} strokeWidth={1.6} className="mt-0.5 shrink-0" />
              <span className="min-w-0 flex-1 break-all">
                simransidhu1202@gmail.com
              </span>
            </a>
            <a
              href="https://wa.me/61000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 font-body text-[14px] hover:text-white"
            >
              <Phone size={14} strokeWidth={1.6} />
              Book a call
            </a>
          </div>

          <div>
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#F2E2A4]/60 mb-4">
              Navigate
            </div>
            <div className="flex flex-col gap-2.5 font-body text-[14px]">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/about" className="hover:text-white">About & Team</Link>
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-[#F2E2A4]/60 mb-4">
              Social
            </div>
            <a
              href="https://instagram.com/honeyline.au"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-body text-[14px] hover:text-white"
            >
              <Instagram size={14} strokeWidth={1.6} />
              @honeyline.au
            </a>
            <a
              href="https://honeyline.com.au"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2 font-body text-[14px] hover:text-white"
            >
              <ArrowUpRight size={14} strokeWidth={1.6} />
              honeyline.com.au
            </a>
            <p className="mt-5 font-body text-[12px] text-[#F2E2A4]/55 leading-relaxed">
              Made in Melbourne — for small businesses with big ideas.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[#F2E2A4]/12 flex flex-col md:flex-row justify-between gap-3 font-body text-[11px] tracking-[0.18em] uppercase text-[#F2E2A4]/50">
          <span>© {new Date().getFullYear()} Honeyline. All rights reserved.</span>
          <span>Crafted with care · Melbourne, VIC</span>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div
        aria-hidden
        className="select-none pointer-events-none absolute -bottom-12 md:-bottom-20 left-0 right-0 text-center font-display text-[28vw] leading-none italic text-[#F2E2A4]/[0.06] whitespace-nowrap"
      >
        honeyline
      </div>
    </footer>
  );
};
