import { CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

export function MissionSection() {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-20 bg-linear-to-br from-gray-50 to-purple-50" aria-labelledby="mission-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <article>
              <header>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('mission.visionTitle')}</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t('mission.visionDescription')}
                </p>
              </header>
              <aside className="bg-linear-to-r from-purple-600 to-indigo-600 p-8 rounded-xl text-white shadow-xl">
                <h3 className="text-2xl font-semibold mb-4">{t('mission.revolutionizing')}</h3>
                <p className="text-purple-100 leading-relaxed">
                  {t('mission.revolutionizingDescription')}
                </p>
              </aside>
            </article>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <article>
              <header>
                <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('mission.missionTitle')}</h2>
              </header>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-purple-100 rounded-full p-3 shrink-0" aria-hidden="true">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('mission.digitalTransformation.title')}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('mission.digitalTransformation.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-purple-100 rounded-full p-3 shrink-0" aria-hidden="true">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('mission.affordableSolutions.title')}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('mission.affordableSolutions.description')}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}