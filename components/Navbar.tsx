
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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const navHeight = isScrolled ? 70 : 100;
      window.scrollTo({
        top: section.offsetTop - navHeight,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-red-600 text-white font-black text-xl px-2 py-0.5 rounded italic transition-transform group-hover:scale-105 group-hover:rotate-1">AD VDO</div>
          <span className="text-white font-medium text-xs tracking-widest hidden sm:inline">MADE EASY</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`font-semibold text-sm transition-all duration-300 relative ${activeSection === link.id ? 'text-red-500' : 'text-white hover:text-red-400'}`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 rounded-full animate-in fade-in slide-in-from-left-2" />
              )}
            </a>
          ))}
          <div className="group relative">
            <button className="text-white hover:text-red-500 font-medium text-sm flex items-center gap-1 transition-colors">
              Solutions <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 mt-4 w-48 glass rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
               <a href="#" className="block p-3 hover:bg-white/5 rounded-xl text-sm">Ad Strategy</a>
               <a href="#" className="block p-3 hover:bg-white/5 rounded-xl text-sm">UGC Content</a>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="hidden lg:flex bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-full items-center gap-2 transition-all red-glow transform hover:scale-105">
            Call Now <Phone className="w-4 h-4" />
          </a>
          
          <button 
            className={`md:hidden p-2 rounded-xl glass ${mobileMenuOpen ? 'text-red-500' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col gap-6 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              className={`text-lg font-bold transition-colors ${activeSection === link.id ? 'text-red-500' : 'text-white'}`}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-red-600 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-xl red-glow">
            Call Now <Phone className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
