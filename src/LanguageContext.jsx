import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './services/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'fr';
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key];
      } else {
        return path; // Retourne la clé si la traduction n'existe pas
      }
    }
    
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      changeLanguage,
      t,
      isFrench: language === 'fr',
      isEnglish: language === 'en'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
