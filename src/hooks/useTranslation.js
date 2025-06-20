import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations";

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const t = (key) => {
    // Navigate through nested keys (e.g., "header.title")
    const keys = key.split(".");
    let translation = translations[language];

    for (const k of keys) {
      if (!translation[k]) {
        console.warn(
          `Translation key "${key}" not found for language "${language}"`
        );
        return key; // Return key as fallback
      }
      translation = translation[k];
    }

    return translation;
  };

  return { t, language };
};
