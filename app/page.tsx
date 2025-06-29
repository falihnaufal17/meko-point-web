'use client'

import React from 'react';
import { 
  Cloud, 
  Users, 
  Clock, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Star, 
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  QrCode,
  Utensils,
  Zap,
  Coffee,
  Package
} from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <header className="bg-white shadow-lg fixed w-full z-50 backdrop-blur-sm bg-white/95">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-purple-600 p-2 rounded-lg" role="img" aria-label="Meko Point logo">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div className="ml-3">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Meko<span className="text-purple-600">Point</span>
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">POS dan Inventory</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4" role="menubar">
                <li role="none">
                  <button 
                    onClick={() => scrollToSection('features')} 
                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    role="menuitem"
                  >
                    Features
                  </button>
                </li>
                <li role="none">
                  <button 
                    onClick={() => scrollToSection('how-it-works')} 
                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    role="menuitem"
                  >
                    How It Works
                  </button>
                </li>
                <li role="none">
                  <button 
                    onClick={() => scrollToSection('mission')} 
                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    role="menuitem"
                  >
                    Mission
                  </button>
                </li>
                <li role="none">
                  <button 
                    onClick={() => scrollToSection('pricing')} 
                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    role="menuitem"
                  >
                    Pricing
                  </button>
                </li>
                <li role="none">
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                    role="menuitem"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-gray-700 hover:text-purple-600"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t" role="navigation" aria-label="Mobile navigation">
                <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Features</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">How It Works</button>
                <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Mission</button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Pricing</button>
                <button onClick={() => scrollToSection('contact')} className="bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 w-full text-left">Contact</button>
              </nav>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
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

        {/* How It Works Section */}
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

        {/* Features Section */}
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
              {[
                { icon: QrCode, title: "QR Code Ordering", desc: "Customers scan table QR codes to access digital menus and place orders directly from their phones.", delay: 100 },
                { icon: Package, title: "Inventory Management", desc: "Real-time inventory tracking with automatic stock updates when orders are placed and fulfilled.", delay: 200 },
                { icon: Cloud, title: "Cloud-Based POS", desc: "Access your POS system anywhere, anytime. No installation required, automatic updates, and secure cloud storage.", delay: 300 },
                { icon: Clock, title: "Zero Queue Time", desc: "Eliminate cashier queues completely. Orders go directly to kitchen, reducing wait times by up to 70%.", delay: 400 },
                { icon: Smartphone, title: "Mobile Optimized", desc: "Perfect mobile experience for customers. No app download needed - works directly in web browser.", delay: 500 },
                { icon: BarChart3, title: "Real-Time Analytics", desc: "Track orders, inventory levels, popular items, peak hours, and revenue in real-time with comprehensive dashboard.", delay: 600 }
              ].map((feature, index) => (
                <AnimatedSection key={index} direction="up" delay={feature.delay}>
                  <article className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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

        {/* Mission & Vision Section */}
        <section id="mission" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50" aria-labelledby="mission-heading">
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
                  <aside className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-xl text-white shadow-xl">
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
                      <div className="bg-purple-100 rounded-full p-3 flex-shrink-0" aria-hidden="true">
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
                      <div className="bg-purple-100 rounded-full p-3 flex-shrink-0" aria-hidden="true">
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

        {/* Benefits Section */}
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
                <figure className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-2xl">
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

        {/* Testimonials */}
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
              {[
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
              ].map((testimonial, index) => (
                <AnimatedSection key={index} direction="up" delay={testimonial.delay}>
                  <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 mb-6 leading-relaxed">
                      "{testimonial.text}"
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

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white" aria-labelledby="pricing-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="fade" className="text-center mb-16">
              <header>
                <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Affordable Pricing for Every Business
                </h2>
                <p className="text-xl text-gray-600">Choose the Meko Point plan that fits your restaurant's needs</p>
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

        {/* CTA Section */}
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
      </main>

      {/* Footer */}
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
    </div>
  );
}