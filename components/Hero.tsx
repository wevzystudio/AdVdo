
import React from 'react';
// Fix: Added missing 'Play' icon import
import { Phone, ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10 relative">
            <div className="glass-red inline-block px-4 py-1.5 rounded-full text-red-500 font-bold text-sm mb-6 border border-red-500/30">
              Bengal's No.1 Video Agency
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Ad <span className="text-red-600">VDO</span> <br />
              Made Easy
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              We understand you're an expert in your business, not in video production. That's where we come in. We handle everything, from concept to completion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all red-glow transform hover:scale-105 active:scale-95">
                Call Now <Phone className="w-5 h-5" />
              </button>
              <button className="glass border border-white/20 hover:border-red-500/50 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 active:scale-95">
                See Plans
              </button>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="relative group">
            <div className="relative z-10 glass p-3 rounded-[32px] overflow-hidden">
              <div className="rounded-[24px] overflow-hidden aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Video Editing Pro" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass p-4 rounded-2xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Play className="text-white fill-current w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Latest Client Case Study</p>
                      <p className="text-xs text-gray-400">1.2M+ Organic Views</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-[40px] rotate-3 pointer-events-none"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-red-600/10 rounded-[40px] -rotate-2 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
