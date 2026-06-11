import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu as MenuIcon, X, ArrowUpRight } from "lucide-react";
import { HL_NAV } from "@/constants/agencyTestIds";

const links = [
  { to: "/", label: "Home", testid: HL_NAV.home, end: true },
  { to: "/about", label: "About", testid: HL_NAV.about },
  { to: "/services", label: "Services", testid: HL_NAV.services },
  { to: "/contact", label: "Contact", testid: HL_NAV.contact },
];

export const AgencyNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 16
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#F2E2A4]/85 border-b border-[#1A1814]/15" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" data-testid={HL_NAV.brand} className="flex items-center gap-3 group">
          <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1814] text-[#F2E2A4] font-display text-[18px] italic leading-none">
            h
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[20px] md:text-[22px] tracking-tight text-[#1A1814] leading-none">
              Honeyline
            </span>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#6B6657] mt-1">
              Melbourne · Est. 2026
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={!!l.end}
              data-testid={l.testid}
              className={({ isActive }) =>
                `hl-link font-body text-[13px] tracking-[0.16em] uppercase ${
                  isActive ? "text-[#1A1814]" : "text-[#1A1814]/85 hover:text-[#1A1814]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            data-testid={HL_NAV.cta}
            className="hl-btn-ink inline-flex items-center gap-2 px-5 py-2.5 font-body text-[12px] tracking-[0.2em] uppercase"
          >
            Let{`’`}s Talk Growth
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </Link>
        </nav>

        <button
          className="md:hidden text-[#1A1814] p-2"
          data-testid={HL_NAV.mobileToggle}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#F2E2A4] border-t border-[#1A1814]/15 ${
          open ? "max-h-[440px]" : "max-h-0"
        }`}
      >
        <div className="px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={!!l.end}
              onClick={closeMenu}
              data-testid={`${l.testid}-mobile`}
              className={({ isActive }) =>
                `font-display text-[34px] tracking-tight leading-none ${
                  isActive ? "text-[#1A1814]" : "text-[#1A1814]/70"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="hl-btn-ink mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 font-body text-[12px] tracking-[0.2em] uppercase"
          >
            Let{`’`}s Talk Growth
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </header>
  );
};
