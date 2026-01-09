
"use client";

import React, { useEffect, useState } from 'react';
// Added TrendingUp to the imports
import { Phone, ArrowRight, Play, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`z-10 relative transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="glass-red inline-block px-4 py-1.5 rounded-full text-red-500 font-bold text-sm mb-6 border border-red-500/30 animate-bounce-subtle">
              Bengal's No.1 Video Agency
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Ad <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">VDO</span> <br />
              Made Easy
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              We understand you're an expert in your business, not in video production. That's where we come in. We handle everything, from concept to completion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all red-glow transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20">
                Call Now <Phone className="w-5 h-5" />
              </button>
              <button className="glass border border-white/20 hover:border-red-500/50 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 active:scale-95">
                See Plans
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-gray-500 font-medium">
               <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                   </div>
                 ))}
               </div>
               <p>Trusted by <span className="text-white font-bold">50+ business owners</span> in West Bengal</p>
            </div>
          </div>

          {/* Right Visuals */}
          <div className={`relative group transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
            <div className="relative z-10 glass p-3 rounded-[32px] overflow-hidden shadow-2xl">
              <div className="rounded-[24px] overflow-hidden aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Video Editing Pro" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center red-glow cursor-pointer hover:scale-110 transition-transform group/btn">
                      <Play className="text-white fill-current w-8 h-8 ml-1 group-hover:scale-110 transition-transform" />
                   </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass p-4 rounded-2xl flex items-center gap-4 border-white/5 backdrop-blur-md">
                    <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-red-500 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Latest Client Case Study</p>
                      <p className="text-xs text-gray-400">1.2M+ Organic Views</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-[40px] rotate-3 pointer-events-none group-hover:rotate-6 transition-transform duration-1000"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-red-600/10 rounded-[40px] -rotate-2 pointer-events-none group-hover:-rotate-4 transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
