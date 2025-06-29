import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button"

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
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg">
            {t('cta.startTrial')}
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600">
            {t('cta.scheduleDemo')}
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}