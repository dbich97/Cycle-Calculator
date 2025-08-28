import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { languages } from '../translations';
import { GlobeIcon } from './Icons';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLocalization();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="relative flex items-center">
      <GlobeIcon className="text-purple-600 w-5 h-5 absolute start-2 pointer-events-none" />
      <select
        value={language}
        onChange={handleLanguageChange}
        className="block appearance-none w-full md:w-auto bg-white border border-gray-300 text-gray-700 py-2 ps-8 pe-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        aria-label="Select language"
      >
        {Object.values(languages).map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
