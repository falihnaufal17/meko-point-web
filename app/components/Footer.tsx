import { Package } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <AnimatedSection direction="fade">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 p-2 rounded-lg" role="img" aria-label="Meko Point logo">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div className="ml-3">
                  <span className="text-xl font-bold">Meko</span>
                  <span className="text-xl font-bold text-purple-400">Point</span>
                  <div className="text-xs text-gray-400 -mt-1">POS dan Inventory</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering Indonesian SMEs with affordable, QR-based POS and inventory solutions that eliminate queues and enhance customer experience.
              </p>
            </div>
            
            <nav aria-label="Product links">
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">QR Ordering</button></li>
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">POS System</button></li>
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">Inventory Management</button></li>
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">Pricing</button></li>
              </ul>
            </nav>
            
            <nav aria-label="Company links">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><button onClick={() => scrollToSection('mission')} className="text-gray-400 hover:text-white transition-colors">Mission</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </nav>
            
            <address className="not-italic">
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Jakarta, Indonesia</p>
                <p><a href="tel:+622112345678" className="hover:text-white transition-colors">+62 21 1234 5678</a></p>
                <p><a href="mailto:hello@mekopoint.com" className="hover:text-white transition-colors">hello@mekopoint.com</a></p>
              </div>
            </address>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Meko Point. All rights reserved.</p>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
} 