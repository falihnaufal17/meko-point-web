import { CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
            <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">{t('pricing.starter.title')}</CardTitle>
                <CardDescription>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-purple-600">{t('pricing.starter.price')}</span>
                    <span className="text-gray-500 text-lg">{t('pricing.starter.period')}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {t('pricing.starter.features').split(',').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{feature.trim()}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3">
                  {t('pricing.startTrial')}
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={400}>
            <Card className="relative transform scale-105 shadow-xl border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {t('pricing.professional.mostPopular')}
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{t('pricing.professional.title')}</CardTitle>
                <CardDescription>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-purple-600">{t('pricing.professional.price')}</span>
                    <span className="text-gray-500 text-lg">{t('pricing.professional.period')}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {t('pricing.professional.features').split(',').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{feature.trim()}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 shadow-lg">
                  {t('pricing.startTrial')}
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={600}>
            <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">{t('pricing.enterprise.title')}</CardTitle>
                <CardDescription>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-purple-600">{t('pricing.enterprise.price')}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {t('pricing.enterprise.features').split(',').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{feature.trim()}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button variant="outline" className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 transition-all duration-300">
                  {t('pricing.contactSales')}
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}