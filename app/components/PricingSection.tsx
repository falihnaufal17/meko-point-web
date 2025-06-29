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
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{t('pricing.starter.title')}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold text-purple-600">{t('pricing.starter.price')}</span>
                  <span className="text-gray-600">{t('pricing.starter.period')}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t('pricing.starter.features').split(',').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />
                      {feature.trim()}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  {t('pricing.startTrial')}
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={400}>
            <Card className="relative transform scale-105 shadow-xl border-purple-200">
              <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
                {t('pricing.professional.mostPopular')}
              </div>
              <CardHeader className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-t-xl">
                <CardTitle className="text-2xl">{t('pricing.professional.title')}</CardTitle>
                <CardDescription className="text-purple-100">
                  <span className="text-4xl font-bold">{t('pricing.professional.price')}</span>
                  <span className="text-purple-200">{t('pricing.professional.period')}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {t('pricing.professional.features').split(',').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />
                      {feature.trim()}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  {t('pricing.startTrial')}
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={600}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{t('pricing.enterprise.title')}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold text-purple-600">{t('pricing.enterprise.price')}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t('pricing.enterprise.features').split(',').map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />
                      {feature.trim()}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
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