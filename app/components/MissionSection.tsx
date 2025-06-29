import { CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-linear-to-br from-gray-50 to-purple-50" aria-labelledby="mission-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <article>
              <header>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  To optimize food reservation with efficient time, eliminating queues and transforming 
                  how Indonesian restaurants serve their customers through innovative QR technology and comprehensive POS solutions.
                </p>
              </header>
              <aside className="bg-linear-to-r from-purple-600 to-indigo-600 p-8 rounded-xl text-white shadow-xl">
                <h3 className="text-2xl font-semibold mb-4">Revolutionizing Restaurant Operations</h3>
                <p className="text-purple-100 leading-relaxed">
                  We envision a future where every Indonesian restaurant offers seamless, 
                  queue-free dining experiences through smart QR ordering technology integrated with powerful POS and inventory management.
                </p>
              </aside>
            </article>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <article>
              <header>
                <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              </header>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-purple-100 rounded-full p-3 shrink-0" aria-hidden="true">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Transform SME Indonesia to digital food reservation using our innovative QR-based web application platform with integrated POS and inventory management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-purple-100 rounded-full p-3 shrink-0" aria-hidden="true">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Provide low-price service that makes advanced QR ordering technology and comprehensive POS systems accessible to every Indonesian SME.
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