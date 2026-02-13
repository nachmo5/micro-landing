import mednachLogo from "../assets/mednach-logo.svg";
import type { useTypography } from "../lib/typography";

export default (t: ReturnType<typeof useTypography>) => ({
  logo: mednachLogo,
  companyName: "MedNach",
  links: [
    { label: t("header.servicesAndPricing"), href: "#services-pricing" },
    { label: t("header.process"), href: "#roadmap" },
    { label: t("header.projects"), href: "#projects" },
  ],
});
