import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-linear-to-r from-purple-600 to-indigo-600" aria-labelledby="cta-heading">
      <AnimatedSection direction="fade" className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <header>
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            {t('cta.description')}
          </p>
        </header>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t('cta.startTrial')}
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
            {t('cta.scheduleDemo')}
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
}