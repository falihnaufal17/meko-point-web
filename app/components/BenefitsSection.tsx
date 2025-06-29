import { Clock, Package, BarChart3, QrCode, Utensils, Coffee } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

export function BenefitsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <header>
            <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('benefits.description')}</p>
          </header>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-full p-3" aria-hidden="true">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{t('benefits.fasterService.title')}</h3>
                  <p className="text-gray-600">{t('benefits.fasterService.description')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 rounded-full p-3" aria-hidden="true">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{t('benefits.automatedInventory.title')}</h3>
                  <p className="text-gray-600">{t('benefits.automatedInventory.description')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 rounded-full p-3" aria-hidden="true">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{t('benefits.increasedRevenue.title')}</h3>
                  <p className="text-gray-600">{t('benefits.increasedRevenue.description')}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <figure className="bg-linear-to-br from-purple-100 to-indigo-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <QrCode className="h-16 w-16 text-purple-600 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('benefits.tableNumber')}</h3>
                  <p className="text-gray-600">{t('benefits.scanToOrder')}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <Utensils className="h-8 w-8 text-purple-600 mx-auto mb-2" aria-hidden="true" />
                    <p className="text-sm font-semibold">{t('benefits.foodMenu')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <Coffee className="h-8 w-8 text-purple-600 mx-auto mb-2" aria-hidden="true" />
                    <p className="text-sm font-semibold">{t('benefits.beverages')}</p>
                  </div>
                </div>
              </div>
            </figure>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}