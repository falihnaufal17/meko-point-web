'use client'

import React from 'react';
import { Menu, X, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="shadow-lg fixed w-full z-50 backdrop-blur-sm bg-white/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="shrink-0 flex items-center">
              <div className="bg-purple-600 p-2 rounded-lg" role="img" aria-label="Meko Point logo">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl font-bold text-gray-900">
                  Meko<span className="text-purple-600">Point</span>
                </h1>
                <p className="text-xs text-gray-500 -mt-1">{t('hero.tagline')}</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-baseline space-x-4" role="menubar">
              <li role="none">
                <button 
                  onClick={() => handleScrollToSection('features')} 
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  role="menuitem"
                >
                  {t('nav.features')}
                </button>
              </li>
              <li role="none">
                <button 
                  onClick={() => handleScrollToSection('how-it-works')} 
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  role="menuitem"
                >
                  {t('nav.howItWorks')}
                </button>
              </li>
              <li role="none">
                <button 
                  onClick={() => handleScrollToSection('mission')} 
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  role="menuitem"
                >
                  {t('nav.mission')}
                </button>
              </li>
              <li role="none">
                <button 
                  onClick={() => handleScrollToSection('pricing')} 
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  role="menuitem"
                >
                  {t('nav.pricing')}
                </button>
              </li>
              <li role="none">
                <button 
                  onClick={() => handleScrollToSection('contact')} 
                  className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                  role="menuitem"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
            <LanguageSwitcher />
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-purple-600"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t" role="navigation" aria-label="Mobile navigation">
              <button onClick={() => handleScrollToSection('features')} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">{t('nav.features')}</button>
              <button onClick={() => handleScrollToSection('how-it-works')} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">{t('nav.howItWorks')}</button>
              <button onClick={() => handleScrollToSection('mission')} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">{t('nav.mission')}</button>
              <button onClick={() => handleScrollToSection('pricing')} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">{t('nav.pricing')}</button>
              <button onClick={() => handleScrollToSection('contact')} className="bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 w-full text-left">{t('nav.contact')}</button>
              
              {/* Language switcher in mobile menu */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-500 mb-2">Language / Bahasa</div>
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}