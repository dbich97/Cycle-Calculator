import React, { createContext, useState, useEffect, useMemo } from 'react';
import { translations, languages } from '../translations';

type LocalizationContextType = {
  language: string;
  setLanguage: (language: string) => void;
  t: typeof translations.en; // Use 'en' as the shape for the translation object
  dir: 'ltr' | 'rtl';
};

export const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('ar');

  useEffect(() => {
    const currentLanguage = languages[language as keyof typeof languages] || languages.ar;
    document.documentElement.lang = currentLanguage.code;
    document.documentElement.dir = currentLanguage.dir;
    document.body.style.fontFamily = currentLanguage.fontFamily;
  }, [language]);

  const value = useMemo(() => {
    // FIX: The type of `t` was inferred as a union of all translation types,
    // which was not assignable to `typeof translations.en` because some
    // translation files were incomplete. After fixing the files, an explicit
    // cast ensures type safety.
    const t = (translations[language as keyof typeof translations] || translations.ar) as typeof translations.en;
    // FIX: The 'dir' property from the `languages` object is inferred as a generic `string`.
    // We cast it to the specific 'ltr' | 'rtl' type required by `LocalizationContextType`
    // because we can be certain from the data source that it will be one of these values.
    const dir = (languages[language as keyof typeof languages]?.dir || 'rtl') as 'ltr' | 'rtl';
    return {
      language,
      setLanguage,
      t,
      dir,
    };
  }, [language]);

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};
