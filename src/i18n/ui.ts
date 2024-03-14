import SpainFlag from "../components/flags/Spain.astro";
import UnitedStatesFlag from "../components/flags/UnitedStates.astro";

export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.legal": "Aviso Legal",
    "nav.privacidad": "Privacidad",
    "nav.cookies": "Cookies",
  },
  en: {
    "nav.inicio": "Home",
    "nav.legal": "Legal Notice",
    "nav.privacidad": "Privacy",
    "nav.cookies": "Cookies",
  },
} as const;

export const routes = {
  es: {
    "aviso-legal": "aviso-legal",
    privacidad: "privacidad",
    cookies: "cookies",
  },
  en: {
    "aviso-legal": "legal-notice",
    privacidad: "privacy",
    cookies: "cookies",
  },
};
