import type { useTypography } from "../lib/typography";

export default (t: ReturnType<typeof useTypography>) => ({
  items: [
    {
      title: t("pricing.items.ecommerce.title"),
      description: t("pricing.items.ecommerce.description"),
      price: "€6,000",
      estimation: `4 - 8 ${t("pricing.estimation.weeks")}`,
      features: [
        t("pricing.items.ecommerce.features.f1"),
        t("pricing.items.ecommerce.features.f2"),
        t("pricing.items.ecommerce.features.f3"),
        t("pricing.items.ecommerce.features.f4"),
      ],
    },
    {
      title: t("pricing.items.landing.title"),
      description: t("pricing.items.landing.description"),
      price: "€600",
      estimation: `2 - 5 ${t("pricing.estimation.days")}`,
      features: [
        t("pricing.items.landing.features.f1"),
        t("pricing.items.landing.features.f2"),
        t("pricing.items.landing.features.f3"),
        t("pricing.items.landing.features.f4"),
      ],
    },
    {
      title: t("pricing.items.audit.title"),
      description: t("pricing.items.audit.description"),
      price: "€2,500",
      estimation: `2 - 5 ${t("pricing.estimation.days")}`,
      features: [
        t("pricing.items.audit.features.f1"),
        t("pricing.items.audit.features.f2"),
        t("pricing.items.audit.features.f3"),
        t("pricing.items.audit.features.f4"),
      ],
    },
    {
      title: t("pricing.items.mobile.title"),
      description: t("pricing.items.mobile.description"),
      price: "€5,000",
      estimation: `6 - 12 ${t("pricing.estimation.weeks")}`,
      features: [
        t("pricing.items.mobile.features.f1"),
        t("pricing.items.mobile.features.f2"),
        t("pricing.items.mobile.features.f3"),
        t("pricing.items.mobile.features.f4"),
      ],
    },
    {
      title: t("pricing.items.embedded.title"),
      description: t("pricing.items.embedded.description"),
      price: "€7,500",
      estimation: `6 - 12 ${t("pricing.estimation.weeks")}`,
      features: [
        t("pricing.items.embedded.features.f1"),
        t("pricing.items.embedded.features.f2"),
        t("pricing.items.embedded.features.f3"),
        t("pricing.items.embedded.features.f4"),
      ],
    },
    {
      title: t("pricing.items.coaching.title"),
      description: t("pricing.items.coaching.description"),
      price: "500 €",
      estimation: `2 ${t("pricing.estimation.hourSession")}`,
      isFixedPrice: true,
      features: [
        t("pricing.items.coaching.features.f1"),
        t("pricing.items.coaching.features.f2"),
        t("pricing.items.coaching.features.f3"),
        t("pricing.items.coaching.features.f4"),
      ],
    },
    {
      title: t("pricing.items.custom.title"),
      description: t("pricing.items.custom.description"),
      price: t("pricing.customQuote"),
      estimation: t("pricing.estimation.flexible"),
      isFixedPrice: true,
      features: [
        t("pricing.items.custom.features.f1"),
        t("pricing.items.custom.features.f2"),
        t("pricing.items.custom.features.f3"),
        t("pricing.items.custom.features.f4"),
      ],
    },
    {
      title: t("pricing.items.team.title"),
      description: t("pricing.items.team.description"),
      price: `600 € / ${t("pricing.estimation.day")}`,
      estimation: t("pricing.estimation.flexible"),
      isFixedPrice: true,
      features: [
        t("pricing.items.team.features.f1"),
        t("pricing.items.team.features.f2"),
        t("pricing.items.team.features.f3"),
        t("pricing.items.team.features.f4"),
      ],
    },
  ],
});
