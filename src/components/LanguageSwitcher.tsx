import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-1 bg-dark-800 p-1 rounded-full">
      <button
        onClick={() => changeLanguage('id')}
        className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200 ${
          i18n.language.startsWith('id') ? 'bg-primary-600 text-white' : 'text-dark-300 hover:bg-dark-700'
        }`}
      >
        ID
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200 ${
          i18n.language.startsWith('en') ? 'bg-primary-600 text-white' : 'text-dark-300 hover:bg-dark-700'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
