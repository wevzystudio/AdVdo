
import React from 'react';
import { Instagram, Youtube, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 text-white font-black text-2xl px-2 py-0.5 rounded italic">AD VDO</div>
              <span className="text-white font-medium text-xs tracking-widest uppercase">Made Easy</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              We help businesses grow using high-impact, short-form video content and strategic performance marketing. Stop ignoring the future of digital marketing.
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-600/50 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Content Creation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Growth News</h4>
            <p className="text-gray-400 text-sm mb-6">Get weekly insights on video trends.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-600 w-full" />
              <button className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors">
                <ArrowUp className="w-5 h-5 rotate-45" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} AD VDO MADE EASY. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-600 uppercase tracking-tighter">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 hover:text-red-600 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
