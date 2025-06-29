import { Package, ArrowRight, QrCode, Utensils, Coffee, CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 overflow-hidden relative" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" delay={200}>
            <header>
              <div className="mb-6">
                <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 text-purple-100 text-sm font-medium">
                  <Package className="h-4 w-4 mr-2" aria-hidden="true" />
                  POS dan Inventory System
                </div>
              </div>
              <h2 id="hero-heading" className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Skip the Queue,
                <span className="block text-purple-200">Scan & Order</span>
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Revolutionary QR-based POS and inventory system. Customers scan QR codes at tables, 
                choose their meals, and skip the cashier queue entirely. Complete point-of-sale solution for Indonesian restaurants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </header>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={400}>
            <figure className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <QrCode className="h-24 w-24 text-white mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-white mb-2">Scan QR Code</h3>
                <p className="text-purple-200">Customer scans table QR code</p>
              </div>
              <div className="flex items-center justify-center space-x-4 text-white">
                <div className="text-center">
                  <Utensils className="h-8 w-8 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm">Choose Food</p>
                </div>
                <ArrowRight className="h-6 w-6" aria-hidden="true" />
                <div className="text-center">
                  <Coffee className="h-8 w-8 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm">Add Drinks</p>
                </div>
                <ArrowRight className="h-6 w-6" aria-hidden="true" />
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm">Order Ready</p>
                </div>
              </div>
            </figure>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 