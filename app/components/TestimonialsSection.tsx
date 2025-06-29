import { Star, Users } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';

export function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonials.testimonial1'),
      name: t('testimonials.customer1.name'),
      role: t('testimonials.customer1.role'),
      delay: 200
    },
    {
      text: t('testimonials.testimonial2'),
      name: t('testimonials.customer2.name'),
      role: t('testimonials.customer2.role'),
      delay: 400
    },
    {
      text: t('testimonials.testimonial3'),
      name: t('testimonials.customer3.name'),
      role: t('testimonials.customer3.role'),
      delay: 600
    }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <header>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('testimonials.description')}</p>
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