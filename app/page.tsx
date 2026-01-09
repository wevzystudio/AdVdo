
"use client";

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set document title since Next.js metadata doesn't auto-apply in this client-side environment
    document.title = "Ad VDO Made Easy | Bengal's No.1 Video Agency";
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-20">
          <Benefits />
        </section>

        <section id="process" className="py-20 bg-[#050505]">
          <Process />
        </section>

        <section id="why-video" className="py-20">
          <StatsSection />
        </section>

        <section id="testimonials" className="py-20 bg-[#050505]">
          <Testimonials />
        </section>

        <section id="pricing" className="py-20">
          <Pricing />
        </section>

        <section id="faq" className="py-20 bg-[#050505]">
          <FAQ />
        </section>
      </main>

      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button className="bg-red-600 p-4 rounded-full shadow-lg red-glow flex items-center justify-center">
          <Phone className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
