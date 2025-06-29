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
          className="flex items-center gap-2 h-9 px-3 border-gray-300 hover:border-purple-300 hover:bg-purple-50 transition-colors"
          aria-label="Select language"
        >
          <span className="text-base leading-none" role="img" aria-label={currentLanguage.name}>
            {currentLanguage.flag}
          </span>
          <span className="text-sm font-medium">
            {currentLanguage.code.toUpperCase()}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 p-1 bg-white border border-gray-200 shadow-lg rounded-lg"
        sideOffset={5}
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors hover:bg-purple-50 focus:bg-purple-50 ${
              language === lang.code ? 'bg-purple-100 text-purple-900' : 'text-gray-700'
            }`}
          >
            <span className="text-base leading-none" role="img" aria-label={lang.name}>
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