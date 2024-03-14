import english from "../i18n/en-EN.json";
import spanish from "../i18n/es-ES.json";

const LANG = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getI18N = ({
  currentLocale = "en",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english };
  return spanish;
};
