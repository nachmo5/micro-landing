import auditImage from "../assets/hero-audit.svg";
import coachingImage from "../assets/hero-coaching.svg";
import mobileDevImage from "../assets/hero-mobile.svg";
import webDevImage from "../assets/hero-web.svg";
import type { useTypography } from "../lib/typography";

export default (t: ReturnType<typeof useTypography>) => ({
  main: {
    services: [
      { title: t("home.main.webDevelopment"), image: webDevImage, class: "north" },
      { title: t("home.main.mobileDevelopment"), image: mobileDevImage, class: "east" },
      { title: t("home.main.codeAudit"), image: auditImage, class: "south" },
      { title: t("home.main.devTraining"), image: coachingImage, class: "west" },
    ],
  },
});
