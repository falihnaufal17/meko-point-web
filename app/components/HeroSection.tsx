import { Package, ArrowRight, QrCode, Utensils, Coffee, CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-20 pb-16 bg-linear-to-br from-purple-600 via-purple-700 to-indigo-800 overflow-hidden relative" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" delay={200}>
            <header>
              <div className="mb-6">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-purple-100 text-sm font-medium">
                  <Package className="h-4 w-4 mr-2" aria-hidden="true" />
                  {t('hero.tagline')}
                </div>
              </div>
              <h2 id="hero-heading" className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {t('hero.title')}
                <span className="block text-purple-200">{t('hero.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                  {t('hero.startTrial')}
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  {t('hero.watchDemo')}
                </button>
              </div>
            </header>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={400}>
            <figure className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <QrCode className="h-24 w-24 text-white mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-white mb-2">{t('hero.scanQr')}</h3>
                <p className="text-purple-200">{t('hero.scanDescription')}</p>
              </div>
              <div className="flex items-center justify-center space-x-4 text-white">
                <div className="text-center">
                  <Utensils className="h-8 w-8 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm">{t('hero.chooseFood')}</p>
                </div>
                <ArrowRight className="h-6 w-6" aria-hidden="true" />
                <div className="text-center">
                  <Coffee className="h-8 w-8 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm">{t('hero.addDrinks')}</p>
                </div>
                <ArrowRight className="h-6 w-6" aria-hidden="true" />
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm">{t('hero.orderReady')}</p>
                </div>
              </div>
            </figure>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}