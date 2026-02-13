import pmuLogo from "../assets/PMU.svg";
import appartooLogo from "../assets/appartoologo.webp";
import brsLogo from "../assets/brs-logo.svg";
import enedisLogo from "../assets/enedis-logo.svg";
import laplaylistLogo from "../assets/laplaylist-logo.svg";
import questelLogo from "../assets/questel-logo.png";
import testGorillaLogo from "../assets/testgorilla-logo.svg";
import your3rdspotLogo from "../assets/y3s-logo.svg";
import type { useTypography } from "../lib/typography";

export default (t: ReturnType<typeof useTypography>) => ({
  clients: [
    { name: "PMU", logo: pmuLogo },
    { name: "ENEDIS", logo: enedisLogo },
    { name: "APPARTOO", logo: appartooLogo },
    { name: "BRS", logo: brsLogo },
    { name: "TESTGORILLA", logo: testGorillaLogo },
    { name: "QUESTEL", logo: questelLogo },
    { name: "LAPLAYLIST", logo: laplaylistLogo },
    { name: "YOUR3RDSPOT", logo: your3rdspotLogo },
  ],
  stats: [
    { value: 10, suffix: "+", title: t("whyUs.stats.experience") },
    { value: 50, suffix: "+", title: t("whyUs.stats.projects") },
    { value: 15, suffix: "+", title: t("whyUs.stats.clients") },
  ],
  features: [
    {
      title: t("whyUs.features.quality.title"),
      description: t("whyUs.features.quality.description"),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    },
    {
      title: t("whyUs.features.documented.title"),
      description: t("whyUs.features.documented.description"),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    },
    {
      title: t("whyUs.features.seo.title"),
      description: t("whyUs.features.seo.description"),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
    },
    {
      title: t("whyUs.features.support.title"),
      description: t("whyUs.features.support.description"),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    },
    {
      title: t("whyUs.features.fastDelivery.title"),
      description: t("whyUs.features.fastDelivery.description"),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    },
    {
      title: t("whyUs.features.cleanCode.title"),
      description: t("whyUs.features.cleanCode.description"),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    },
  ],
});
