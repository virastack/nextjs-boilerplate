import { DEFAULT_LOCALE, LOCALES, type LocaleCode } from "@/constants/i18n.constants";

export const getLocaleLabel = (
  code: string,
  displayLocale: LocaleCode = DEFAULT_LOCALE
): string => {
  if (code in LOCALES) {
    return LOCALES[code as LocaleCode].label;
  }

  try {
    const intl = new Intl.DisplayNames([displayLocale], { type: "language" });
    return intl.of(code) ?? code.toUpperCase();
  } catch {
    return code.toUpperCase();
  }
};
