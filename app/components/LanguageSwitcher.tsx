'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 transition-colors duration-200 border border-gray-300"
      aria-label={`Switch to ${language === 'id' ? 'English' : 'Indonesian'}`}
      title={`Switch to ${language === 'id' ? 'English' : 'Indonesian'}`}
    >
      <Languages className="h-4 w-4 text-gray-600" />
      <span className="text-sm font-medium text-gray-700 uppercase">
        {language}
      </span>
    </button>
  );
}