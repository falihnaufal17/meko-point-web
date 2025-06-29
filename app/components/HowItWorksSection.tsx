import { QrCode, Utensils, Zap } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <header>
            <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Meko Point QR Ordering Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple 3-step process that eliminates queues and enhances customer experience with integrated POS and inventory management
            </p>
          </header>
        </AnimatedSection>
        
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection direction="up" delay={200}>
            <li className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                <QrCode className="h-10 w-10 text-white" />
              </div>
              <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Scan QR Code</h3>
                <p className="text-gray-600 leading-relaxed">
                  Customer sits at table and scans the unique QR code with their smartphone. 
                  Instantly opens the digital menu without any app download required.
                </p>
              </article>
            </li>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={400}>
            <li className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                <Utensils className="h-10 w-10 text-white" />
              </div>
              <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Browse & Order</h3>
                <p className="text-gray-600 leading-relaxed">
                  Browse the complete menu with photos, descriptions, and prices. 
                  Select food and drinks, customize orders, and add special requests easily.
                </p>
              </article>
            </li>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={600}>
            <li className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Skip the Queue</h3>
                <p className="text-gray-600 leading-relaxed">
                  Order goes directly to kitchen via POS system. Inventory automatically updated. 
                  No waiting in line at cashier. Food delivered straight to the table.
                </p>
              </article>
            </li>
          </AnimatedSection>
        </ol>
      </div>
    </section>
  );
} 