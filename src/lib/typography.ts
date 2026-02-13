import en from "../data/typography/en.json";
import fr from "../data/typography/fr.json";

type Typography = typeof en;
export type TypographyKey = LeafPaths<Typography>;

type LeafPaths<T, Prefix extends string = ""> = T extends string
  ? Prefix
  : {
      [K in keyof T & string]: LeafPaths<
        T[K],
        Prefix extends "" ? K : `${Prefix}.${K}`
      >;
    }[keyof T & string];

export function useTypography(lang: "en" | "fr") {
  const typography: Record<string, unknown> = lang === "fr" ? fr : en;
  return function t(key: TypographyKey): string {
    return key
      .split(".")
      .reduce<unknown>(
        (obj, k) => (obj as Record<string, unknown>)[k],
        typography,
      ) as string;
  };
}
