import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations } from '@/i18n';

type Language = 'zh' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    // Check localStorage for saved preference
    const savedLang = localStorage.getItem('portfolio-lang');
    return (savedLang as Language) || 'zh';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations[lang];

    for (const k of keys) {
      if (result === undefined) break;
      result = result[k];
    }

    // Fallback to chinese if key is missing in English
    if (result === undefined && lang !== 'zh') {
      let fallbackResult: any = translations['zh'];
      for (const k of keys) {
        if (fallbackResult === undefined) break;
        fallbackResult = fallbackResult[k];
      }
      return typeof fallbackResult === 'string' ? fallbackResult : key;
    }

    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
