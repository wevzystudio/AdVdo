
import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-600 text-white font-black text-xl px-2 py-0.5 rounded italic">AD VDO</div>
          <span className="text-white font-medium text-xs tracking-widest hidden sm:inline">MADE EASY</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-red-500 font-semibold text-sm">Home</a>
          <div className="group relative">
            <button className="text-white hover:text-red-500 font-medium text-sm flex items-center gap-1 transition-colors">
              Digital Marketing <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="group relative">
            <button className="text-white hover:text-red-500 font-medium text-sm flex items-center gap-1 transition-colors">
              Content Creation <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <a href="#contact" className="text-white hover:text-red-500 font-medium text-sm transition-colors">Contact</a>
          <a href="#about" className="text-white hover:text-red-500 font-medium text-sm transition-colors">About Us</a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="hidden lg:flex bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-full items-center gap-2 transition-all red-glow">
            Call Now <Phone className="w-4 h-4" />
          </a>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#home" className="text-red-500 font-bold" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#services" className="text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Digital Marketing</a>
          <a href="#content" className="text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Content Creation</a>
          <a href="#contact" className="text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#about" className="text-white font-medium" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2">
            Call Now <Phone className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
