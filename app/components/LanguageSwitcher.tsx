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
          className="flex items-center space-x-2 min-w-[120px]"
          aria-label="Select language"
        >
          <span className="text-lg" role="img" aria-label={currentLanguage.name}>
            {currentLanguage.flag}
          </span>
          <span className="text-sm font-medium flex-1 text-left">
            {currentLanguage.code.toUpperCase()}
          </span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center space-x-3 cursor-pointer ${
              language === lang.code ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            <span className="text-lg" role="img" aria-label={lang.name}>
              {lang.flag}
            </span>
            <div className="flex-1">
              <div className="text-sm font-medium">{lang.code.toUpperCase()}</div>
              <div className="text-xs text-muted-foreground">{lang.name}</div>
            </div>
            {language === lang.code && (
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}