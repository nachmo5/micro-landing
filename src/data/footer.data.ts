import type { useTypography } from "../lib/typography";

export default (t: ReturnType<typeof useTypography>) => ({
  companyName: "MedNach",
  siret: "10099300500014",
  email: "contact@mednach.com",
  navLinks: [
    { label: t("header.servicesAndPricing"), href: "/#services-pricing" },
    { label: t("header.process"), href: "/#roadmap" },
    { label: t("header.projects"), href: "/#projects" },
    { label: t("header.contact"), href: "/#contact" },
  ],
  legalLinks: [
    { label: t("footer.legalNotice"), href: "/legal" },
    { label: t("footer.privacyPolicy"), href: "/privacy" },
    { label: t("footer.cookieSettings"), href: "#", id: "footer-cookie-settings" },
  ],
});
