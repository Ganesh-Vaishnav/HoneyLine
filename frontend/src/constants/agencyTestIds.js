// Honeyline Studio (agency) — data-testid registry
export const HL_NAV = {
  brand: "hl-nav-brand",
  home: "hl-nav-home",
  about: "hl-nav-about",
  services: "hl-nav-services",
  contact: "hl-nav-contact",
  cta: "hl-nav-cta",
  mobileToggle: "hl-nav-mobile-toggle",
};

export const HL_HOME = {
  heroCta: "hl-hero-cta",
  heroSecondary: "hl-hero-secondary",
  heroVideo: "hl-hero-video",
  showreel: "hl-showreel",
  showreelCard: (i) => `hl-showreel-card-${i}`,
  blueprint: "hl-blueprint",
  blueprintCard: (i) => `hl-blueprint-card-${i}`,
  whyMelbourne: "hl-why-melbourne",
  testimonialSection: "hl-testimonial",
  closingCta: "hl-closing-cta",
};

export const HL_ABOUT = {
  root: "hl-about-page",
  member: (slug) => `hl-team-${slug}`,
};

export const HL_SERVICES = {
  root: "hl-services-page",
  pillar: (slug) => `hl-pillar-${slug}`,
};

export const HL_CONTACT = {
  root: "hl-contact-page",
  form: "hl-contact-form",
  name: "hl-input-name",
  email: "hl-input-email",
  company: "hl-input-company",
  phone: "hl-input-phone",
  budget: "hl-input-budget",
  timeline: "hl-input-timeline",
  serviceChip: (slug) => `hl-service-chip-${slug}`,
  message: "hl-input-message",
  submit: "hl-submit",
  success: "hl-success",
  error: "hl-error",
};

export const HL_FOOTER = {
  root: "hl-footer",
};
