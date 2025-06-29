import { Package } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <AnimatedSection direction="fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 p-2 rounded-lg" role="img" aria-label="Meko Point logo">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div className="ml-3">
                  <span className="text-xl font-bold">Meko</span>
                  <span className="text-xl font-bold text-purple-400">Point</span>
                  <div className="text-xs text-gray-400 -mt-1">{t('hero.tagline')}</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            
            <nav aria-label="Product links">
              <h3 className="text-lg font-semibold mb-4">{t('footer.product')}</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">{t('footer.qrOrdering')}</button></li>
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">{t('footer.posSystem')}</button></li>
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">{t('footer.inventoryManagement')}</button></li>
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">{t('footer.features')}</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">{t('footer.pricing')}</button></li>
              </ul>
            </nav>
            
            <nav aria-label="Company links">
              <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.aboutUs')}</a></li>
                <li><button onClick={() => scrollToSection('mission')} className="text-gray-400 hover:text-white transition-colors">{t('footer.mission')}</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.careers')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.support')}</a></li>
              </ul>
            </nav>
            
            <address className="not-italic">
              <h3 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h3>
              <div className="space-y-2 text-gray-400">
                <p>{t('footer.location')}</p>
                <p><a href="tel:+622112345678" className="hover:text-white transition-colors">{t('footer.phone')}</a></p>
                <p><a href="mailto:hello@mekopoint.com" className="hover:text-white transition-colors">{t('footer.email')}</a></p>
              </div>
            </address>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}