
"use client";

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach(link => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust based on navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')} 
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="bg-red-600 text-white font-black text-xl px-2 py-0.5 rounded italic transition-all group-hover:scale-110 group-hover:rotate-1 red-glow">AD VDO</div>
          <span className="text-white font-medium text-[10px] tracking-[0.2em] hidden sm:inline uppercase opacity-80">Made Easy</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`px-4 py-2 font-bold text-sm transition-all rounded-full relative ${activeSection === link.id ? 'text-red-500' : 'text-gray-300 hover:text-white'}`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
              )}
            </a>
          ))}
          <div className="w-px h-4 bg-white/10 mx-4"></div>
          <div className="group relative">
            <button className="text-gray-300 hover:text-red-500 font-bold text-sm flex items-center gap-1 transition-colors px-4 py-2">
              Solutions <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 mt-4 w-56 glass rounded-[24px] p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-white/10 shadow-2xl">
               <a href="#" className="block p-4 hover:bg-red-600/10 hover:text-red-500 rounded-2xl text-sm font-bold transition-colors">Performance Ads</a>
               <a href="#" className="block p-4 hover:bg-red-600/10 hover:text-red-500 rounded-2xl text-sm font-bold transition-colors">UGC Video Creation</a>
               <a href="#" className="block p-4 hover:bg-red-600/10 hover:text-red-500 rounded-2xl text-sm font-bold transition-colors">Brand Storytelling</a>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="hidden lg:flex bg-red-600 hover:bg-red-700 text-white font-black py-2.5 px-6 rounded-full items-center gap-2 transition-all red-glow transform hover:scale-105 active:scale-95 shadow-lg">
            Call Now <Phone className="w-4 h-4" />
          </a>
          
          <button 
            className={`md:hidden p-3 rounded-2xl glass ${mobileMenuOpen ? 'text-red-500' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      
      {/* Mobile Menu Panel */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-2 p-6">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              className={`text-2xl font-black p-3 rounded-2xl transition-all ${activeSection === link.id ? 'text-red-500 bg-red-600/5' : 'text-gray-400'}`}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-white/5 my-4"></div>
          <a 
            href="tel:+1234567890"
            className="bg-red-600 text-white font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl red-glow active:scale-95 transition-transform"
          >
            Call Now <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
