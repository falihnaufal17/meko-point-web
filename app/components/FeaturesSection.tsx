import { QrCode, Package, Cloud, Clock, Smartphone, BarChart3 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    { 
      icon: QrCode, 
      title: t('features.qrOrdering.title'), 
      desc: t('features.qrOrdering.description'), 
      delay: 100 
    },
    { 
      icon: Package, 
      title: t('features.inventory.title'), 
      desc: t('features.inventory.description'), 
      delay: 200 
    },
    { 
      icon: Cloud, 
      title: t('features.cloudPos.title'), 
      desc: t('features.cloudPos.description'), 
      delay: 300 
    },
    { 
      icon: Clock, 
      title: t('features.zeroQueue.title'), 
      desc: t('features.zeroQueue.description'), 
      delay: 400 
    },
    { 
      icon: Smartphone, 
      title: t('features.mobileOptimized.title'), 
      desc: t('features.mobileOptimized.description'), 
      delay: 500 
    },
    { 
      icon: BarChart3, 
      title: t('features.analytics.title'), 
      desc: t('features.analytics.description'), 
      delay: 600 
    }
  ];

  return (
    <section id="features" className="py-20 bg-white" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <header>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.description')}
            </p>
          </header>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} direction="up" delay={feature.delay}>
              <article className="bg-linear-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}