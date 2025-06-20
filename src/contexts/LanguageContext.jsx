import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Get language from localStorage or default to Dutch
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "nl";
  });

  // Update localStorage and HTML lang attribute when language changes
  useEffect(() => {
    localStorage.setItem("language", language);

    // Update HTML lang attribute
    const htmlElement = document.getElementById("html-root");
    if (htmlElement) {
      htmlElement.lang = language;
    }
  }, [language]);

  // Toggle between Dutch and English
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "nl" ? "en" : "nl"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
