import { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith('ja')) {
      setLang('jp'); // Use 'jp' internal code
    }
  }, []);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'jp' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
