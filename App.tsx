
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="services" className="py-24 scroll-mt-20">
          <Benefits />
        </section>

        <section id="process" className="py-24 bg-[#050505] border-y border-white/5 scroll-mt-20">
          <Process />
        </section>

        <section id="why-video" className="py-24 scroll-mt-20">
          <StatsSection />
        </section>

        <section id="testimonials" className="py-24 bg-[#050505] border-y border-white/5 scroll-mt-20">
          <Testimonials />
        </section>

        <section id="pricing" className="py-24 scroll-mt-20">
          <Pricing />
        </section>

        <section id="faq" className="py-24 bg-[#050505] border-t border-white/5 scroll-mt-20">
          <FAQ />
        </section>
      </main>

      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a 
          href="tel:+1234567890"
          className="bg-red-600 p-4 rounded-full shadow-2xl red-glow flex items-center justify-center animate-bounce-subtle active:scale-90 transition-transform"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
}
