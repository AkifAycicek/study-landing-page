import i18next from "i18next";
import { initReactI18next } from "react-i18next";

async function loadLocaleResources() {
  const locales = import.meta.glob("@/locales/**/*.{js,json}");
  const messages = {};

  for (const key in locales) {
    const { namespaces, lang } =
      /\/src\/locales\/(?<lang>([A-Za-z0-9-_])+)\/(?<namespaces>.+)?\.(js|json)/.exec(key).groups;
    const module = await locales[key]();
    i18next.addResourceBundle(
      lang,
      namespaces.replace(/\//g, "."),
      get(module, "default", module),
      true,
    );
  }
  return messages;
}

export const setupi18N = async () => {
  await i18next.use(initReactI18next).init({
    debug: import.meta.env.MODE == "development",
    lng: "en",
    ns: [],
    fallbackLng: ["en", "en-US", "tr", "tr-TR"],
    interpolation: {
      escapeValue: false,
    },
  });
  await loadLocaleResources();
};

export default i18next;
