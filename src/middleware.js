import { getLocale } from "astro-i18n-aut";

export function onRequest(context, next) {
  context.locals.lang = getLocale(context.url);
  // return a Response or the result of calling `next()`
  return next();
}
