import appartooImage from "../assets/appartoo-app.png";
import brsImage from "../assets/brs-app.png";
import ecommerceImage from "../assets/ecommerce-app.png";
import geerdImage from "../assets/geerd-app.png";
import laplaylistImage from "../assets/laplaylist-app.png";
import pmuKioskImage from "../assets/pmu-borne.jpg";
import pmuMobileImage from "../assets/pmu-mobile.png";
import y3sImage from "../assets/your3rdspot-app.webp";
import type { useTypography } from "../lib/typography";

export default (t: ReturnType<typeof useTypography>) => ({
  items: [
    {
      title: t("projects.items.project3"),
      image: geerdImage,
      href: "https://www.geerd.ma/en/",
    },
    {
      title: t("projects.items.project1"),
      image: ecommerceImage,
      href: "https://eryx-commerce-web.vercel.app",
    },
    {
      title: t("projects.items.project2"),
      image: pmuMobileImage,
      href: "https://apps.apple.com/fr/app/pmu-fr-pari-hippique-turf/id369344998",
    },
    {
      title: t("projects.items.project4"),
      image: appartooImage,
      href: "https://www.appartoo.com",
    },
    {
      title: t("projects.items.project5"),
      image: brsImage,
      href: "https://bornerecharge.fr",
    },
    {
      title: t("projects.items.project6"),
      image: pmuKioskImage,
      href: "https://entreprise.pmu.fr/nouvelleborne",
    },
    {
      title: t("projects.items.project7"),
      image: laplaylistImage,
      href: "https://la-playlist.com/",
    },
    {
      title: t("projects.items.project8"),
      image: y3sImage,
      href: "https://apps.apple.com/us/app/your-3rd-spot/id1645557820",
    },
  ],
});
