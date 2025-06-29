import { AnimatedSection } from './AnimatedSection';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600" aria-labelledby="cta-heading">
      <AnimatedSection direction="fade" className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <header>
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of Indonesian restaurants using Meko Point to serve customers faster with integrated QR ordering, POS, and inventory management
          </p>
        </header>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
            Schedule Demo
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
} 