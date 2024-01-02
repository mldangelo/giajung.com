import React, { useEffect, useState } from "react";

interface LanguageSelectorProps {
  onLanguageChange: (language: string) => void;
}

const supportedLanguages = {
  en: "EN",
  ko: "한글",
  한글: "한글",
};

const languageAbbreviations: string[] = Array.from(
  new Set(Object.values(supportedLanguages)),
).sort();

const defaultLanguage = "EN";

const mapLanguage = (languageCode: string | null): string => {
  if (!languageCode) {
    return defaultLanguage;
  }

  const code = languageCode
    .toLowerCase()
    .split("-")?.[0] as keyof typeof supportedLanguages;

  return supportedLanguages[code] || defaultLanguage;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
}) => {
  const [language, setLanguage] = useState<string>(defaultLanguage);

  useEffect(() => {
    const storedLanguage =
      window.localStorage.getItem("language") || window.navigator.language;
    const preferredLanguage = mapLanguage(storedLanguage);
    setLanguage(preferredLanguage);
    onLanguageChange(preferredLanguage);
  }, [onLanguageChange]);

  const handleSetLanguage = (lang: string) => {
    const mappedLanguage = mapLanguage(lang);
    setLanguage(mappedLanguage);
    onLanguageChange(mappedLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", mappedLanguage);
    }
  };

  return (
    <div className="float-right fixed top-0 right-0 p-4">
      {languageAbbreviations.map((lang, i) => {
        return (
          <>
            <button
              key={lang}
              className={`hover:text-gray-600 ${
                language === lang ? "font-bold" : ""
              }`}
              onClick={() => handleSetLanguage(lang)}
            >
              {lang}
            </button>
            {i < languageAbbreviations.length - 1 && (
              <span className="mx-2" key={`${lang}-separator`}>
                |
              </span>
            )}
          </>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
