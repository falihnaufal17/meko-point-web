import { Clock, Package, BarChart3, QrCode, Utensils, Coffee } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <header>
            <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Meko Point?
            </h2>
            <p className="text-xl text-gray-600">Transform your restaurant operations with integrated QR ordering, POS, and inventory management</p>
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
                  <h3 className="text-xl font-semibold text-gray-900">70% Faster Service</h3>
                  <p className="text-gray-600">Eliminate cashier queues and reduce order processing time significantly</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 rounded-full p-3" aria-hidden="true">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Automated Inventory</h3>
                  <p className="text-gray-600">Real-time stock tracking with automatic updates when orders are placed</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 rounded-full p-3" aria-hidden="true">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Increased Revenue</h3>
                  <p className="text-gray-600">Serve more customers with same staff, reduce operational costs, better inventory control</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <figure className="bg-linear-to-br from-purple-100 to-indigo-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <QrCode className="h-16 w-16 text-purple-600 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Table #5</h3>
                  <p className="text-gray-600">Scan to order</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <Utensils className="h-8 w-8 text-purple-600 mx-auto mb-2" aria-hidden="true" />
                    <p className="text-sm font-semibold">Food Menu</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <Coffee className="h-8 w-8 text-purple-600 mx-auto mb-2" aria-hidden="true" />
                    <p className="text-sm font-semibold">Beverages</p>
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