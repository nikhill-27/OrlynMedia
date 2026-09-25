import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Locale, LocaleInfo, TranslationDictionary } from './types';
import { AVAILABLE_LOCALES, TRANSLATIONS } from './translations';

interface I18nContextType {
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
  t: TranslationDictionary;
  availableLocales: LocaleInfo[];
  currentLocaleInfo: LocaleInfo;
}

const STORAGE_KEY = 'orlyn_agency_locale';

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
        if (saved && (saved === 'en' || saved === 'de' || saved === 'fr')) {
          return saved;
        }
        // Check browser language preference if user hasn't explicitly chosen
        const navLang = navigator.language?.toLowerCase() || '';
        if (navLang.startsWith('de')) return 'de';
        if (navLang.startsWith('fr')) return 'fr';
      } catch (e) {
        // Fallback safely if localStorage is restricted
      }
    }
    return 'en';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, newLocale);
        document.documentElement.lang = newLocale;
      } catch (e) {
        // ignore
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const t = useMemo(() => {
    return TRANSLATIONS[locale] || TRANSLATIONS.en;
  }, [locale]);

  const currentLocaleInfo = useMemo(() => {
    return AVAILABLE_LOCALES.find((l) => l.code === locale) || AVAILABLE_LOCALES[0];
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      availableLocales: AVAILABLE_LOCALES,
      currentLocaleInfo,
    }),
    [locale, t, currentLocaleInfo]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
