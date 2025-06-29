import { CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <header>
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Affordable Pricing for Every Business
            </h2>
            <p className="text-xl text-gray-600">Choose the Meko Point plan that fits your restaurant&apos;s needs</p>
          </header>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection direction="up" delay={200}>
            <article className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <header>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">Rp 299K</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </header>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />Up to 10 tables</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />QR code ordering</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />Basic POS features</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />Simple inventory tracking</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />Email support</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Free Trial
              </button>
            </article>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={400}>
            <article className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 rounded-xl text-white relative transform scale-105 shadow-xl">
              <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <header>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Rp 499K</span>
                  <span className="text-purple-200">/month</span>
                </div>
              </header>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" aria-hidden="true" />Up to 30 tables</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" aria-hidden="true" />Advanced QR ordering</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" aria-hidden="true" />Complete POS system</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" aria-hidden="true" />Advanced inventory management</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" aria-hidden="true" />Analytics & reports</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" aria-hidden="true" />Priority support</li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
            </article>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={600}>
            <article className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <header>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">Custom</span>
                </div>
              </header>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />Unlimited tables</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />Multi-location support</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />Custom QR designs</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />Enterprise POS features</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />Advanced inventory analytics</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />API integrations</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" aria-hidden="true" />Dedicated support</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Sales
              </button>
            </article>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 