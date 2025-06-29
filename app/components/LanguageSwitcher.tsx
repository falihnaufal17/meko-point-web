'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languages = [
  {
    code: 'id',
    name: 'Bahasa Indonesia',
    flag: '🇮🇩'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  }
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as 'id' | 'en');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="flex items-center justify-between gap-2 h-9 px-3 min-w-[80px] border border-gray-300 bg-white hover:border-purple-400 hover:bg-purple-50 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
          aria-label="Select language"
        >
          <div className="flex items-center gap-2">
            <span className="text-base leading-none" role="img" aria-label={currentLanguage.name}>
              {currentLanguage.flag}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {currentLanguage.code.toUpperCase()}
            </span>
          </div>
          <ChevronDown className="h-3 w-3 text-gray-500 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-52 p-1 bg-white border border-gray-200 shadow-lg rounded-lg mt-1"
        sideOffset={4}
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-colors duration-150 hover:bg-purple-50 focus:bg-purple-50 focus:outline-none ${
              language === lang.code 
                ? 'bg-purple-100 text-purple-900 font-medium' 
                : 'text-gray-700 hover:text-purple-700'
            }`}
          >
            <span className="text-lg leading-none" role="img" aria-label={lang.name}>
              {lang.flag}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium">{lang.code.toUpperCase()}</div>
              <div className="text-xs text-gray-500 truncate">{lang.name}</div>
            </div>
            {language === lang.code && (
              <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}