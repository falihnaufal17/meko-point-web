import { CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

export function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <header>
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('pricing.description')}</p>
          </header>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection direction="up" delay={200}>
            <article className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <header>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('pricing.starter.title')}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">{t('pricing.starter.price')}</span>
                  <span className="text-gray-600">{t('pricing.starter.period')}</span>
                </div>
              </header>
              <ul className="space-y-3 mb-8">
                {t('pricing.starter.features').split(',').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />
                    {feature.trim()}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                {t('pricing.startTrial')}
              </button>
            </article>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={400}>
            <article className="bg-linear-to-br from-purple-600 to-indigo-600 p-8 rounded-xl text-white relative transform scale-105 shadow-xl">
              <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
                {t('pricing.professional.mostPopular')}
              </div>
              <header>
                <h3 className="text-2xl font-bold mb-4">{t('pricing.professional.title')}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{t('pricing.professional.price')}</span>
                  <span className="text-purple-200">{t('pricing.professional.period')}</span>
                </div>
              </header>
              <ul className="space-y-3 mb-8">
                {t('pricing.professional.features').split(',').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" aria-hidden="true" />
                    {feature.trim()}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t('pricing.startTrial')}
              </button>
            </article>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={600}>
            <article className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <header>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('pricing.enterprise.title')}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">{t('pricing.enterprise.price')}</span>
                </div>
              </header>
              <ul className="space-y-3 mb-8">
                {t('pricing.enterprise.features').split(',').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />
                    {feature.trim()}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                {t('pricing.contactSales')}
              </button>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}