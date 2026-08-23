import { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedLang = localStorage.getItem('lang');
        if (savedLang === 'en' || savedLang === 'jp') {
          return savedLang;
        }
      } catch (e) {}
    }
    return 'en';
  });

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('lang');
      if (!savedLang) {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && browserLang.toLowerCase().startsWith('ja')) {
          setLang('jp');
        }
      }
    } catch (e) {}
  }, []);

  const toggleLanguage = () => {
    setLang(prev => {
      const next = prev === 'en' ? 'jp' : 'en';
      try {
        localStorage.setItem('lang', next);
      } catch (e) {}
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
