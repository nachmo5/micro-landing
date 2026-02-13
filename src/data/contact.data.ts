import type { useTypography } from "../lib/typography";

export default (t: ReturnType<typeof useTypography>) => ({
  heading: t("contact.heading"),
  subtitle: t("contact.subtitle"),
  emailLabel: t("contact.emailLabel"),
  email: "contact@mednach.com",
  fields: {
    name: t("contact.name"),
    email: t("contact.email"),
    message: t("contact.message"),
  },
  send: t("contact.send"),
});
