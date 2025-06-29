import { QrCode, Package, Cloud, Clock, Smartphone, BarChart3 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function FeaturesSection() {
  const features = [
    { icon: QrCode, title: "QR Code Ordering", desc: "Customers scan table QR codes to access digital menus and place orders directly from their phones.", delay: 100 },
    { icon: Package, title: "Inventory Management", desc: "Real-time inventory tracking with automatic stock updates when orders are placed and fulfilled.", delay: 200 },
    { icon: Cloud, title: "Cloud-Based POS", desc: "Access your POS system anywhere, anytime. No installation required, automatic updates, and secure cloud storage.", delay: 300 },
    { icon: Clock, title: "Zero Queue Time", desc: "Eliminate cashier queues completely. Orders go directly to kitchen, reducing wait times by up to 70%.", delay: 400 },
    { icon: Smartphone, title: "Mobile Optimized", desc: "Perfect mobile experience for customers. No app download needed - works directly in web browser.", delay: 500 },
    { icon: BarChart3, title: "Real-Time Analytics", desc: "Track orders, inventory levels, popular items, peak hours, and revenue in real-time with comprehensive dashboard.", delay: 600 }
  ];

  return (
    <section id="features" className="py-20 bg-white" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <header>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete POS dan Inventory Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meko Point combines QR ordering with comprehensive point-of-sale and inventory management
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