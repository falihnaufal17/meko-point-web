'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
        <Languages className="h-4 w-4 text-white" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'id' | 'en')}
          className="bg-transparent text-white text-sm font-medium border-none outline-none cursor-pointer"
        >
          <option value="id" className="text-gray-900">ID</option>
          <option value="en" className="text-gray-900">EN</option>
        </select>
      </div>
    </div>
  );
}