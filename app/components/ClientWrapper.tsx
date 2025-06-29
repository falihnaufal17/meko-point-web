'use client'

import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ClientNavigationWrapper } from './ClientNavigationWrapper';
import { HeroSection } from './HeroSection';
import { HowItWorksSection } from './HowItWorksSection';
import { FeaturesSection } from './FeaturesSection';
import { MissionSection } from './MissionSection';
import { BenefitsSection } from './BenefitsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { PricingSection } from './PricingSection';
import { CTASection } from './CTASection';
import { Footer } from './Footer';
import { Language } from '../lib/translations';

interface ClientWrapperProps {
  initialLanguage: Language;
}

export function ClientWrapper({ initialLanguage }: ClientWrapperProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <div className="min-h-screen bg-white scroll-smooth overflow-x-hidden w-full">
        <ClientNavigationWrapper scrollToSection={scrollToSection} />
        
        <main className="w-full overflow-x-hidden">
          <HeroSection />
          <HowItWorksSection />
          <FeaturesSection />
          <MissionSection />
          <BenefitsSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
        </main>

        <Footer scrollToSection={scrollToSection} />
      </div>
    </LanguageProvider>
  );
}