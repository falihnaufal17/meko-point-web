import { Star, Users } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Meko Point eliminated our cashier queues completely! The integrated inventory management is a game-changer. We serve 50% more customers daily.",
      name: "Budi Santoso",
      role: "Owner, Warung Nusantara",
      delay: 200
    },
    {
      text: "The affordable pricing and comprehensive POS features helped us modernize without breaking the bank. Revenue increased by 40% with better inventory control!",
      name: "Sari Dewi",
      role: "Manager, Cafe Indah",
      delay: 400
    },
    {
      text: "Customers scan QR codes and order instantly. The POS system tracks everything automatically. No more long queues, happier customers, perfect inventory management!",
      name: "Ahmad Rahman",
      role: "Owner, Resto Berkah",
      delay: 600
    }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <header>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Indonesian Restaurants
            </h2>
            <p className="text-xl text-gray-600">See how Meko Point transformed their business operations</p>
          </header>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} direction="up" delay={testimonial.delay}>
              <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <footer className="flex items-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center" aria-hidden="true">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <cite className="font-semibold text-gray-900 not-italic">{testimonial.name}</cite>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </footer>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
} 