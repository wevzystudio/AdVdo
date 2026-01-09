
"use client";

import React, { useRef } from 'react';
import { CheckCircle2, Video as VideoIcon, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../lib/hooks';

const Benefits: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <div ref={ref} className={`max-w-7xl mx-auto px-4 md:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Left side: content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-600 rounded-2xl red-glow shadow-lg shadow-red-600/20">
              <VideoIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black">
              Grow Your Business with <br />
              <span className="text-red-600">Video Marketing</span>
            </h2>
          </div>

          <div className="glass p-8 rounded-3xl mb-8 border-white/5">
            <p className="text-gray-300 text-lg leading-relaxed">
              Turn viewers into customers using short-form videos that grab attention, build trust, and drive leads on Instagram, Facebook & YouTube.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {[
              { title: "More Attention", desc: "People stop scrolling for videos" },
              { title: "More Trust", desc: "Faces convert better than banners" },
              { title: "More Leads & Sales", desc: "Videos sell while you sleep" }
            ].map((benefit, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 group cursor-default transition-all duration-500"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center transition-transform group-hover:scale-125 shadow-md shadow-red-600/30">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg">
                  <span className="font-bold text-red-600">{benefit.title}</span> – <span className="text-gray-400">{benefit.desc}</span>
                </p>
              </div>
            ))}
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-2xl flex items-center gap-3 transition-all red-glow transform hover:translate-x-2">
            Book a Free Call <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right side: image stack */}
        <div className="relative group">
          <div className="rounded-[40px] overflow-hidden border border-white/10 glass-red p-2 rotate-2 shadow-2xl transition-transform duration-700 group-hover:rotate-0">
            <img 
              src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=800" 
              alt="Video Shooting" 
              className="w-full h-full object-cover rounded-[32px] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 md:-right-20 w-48 h-64 rounded-[32px] overflow-hidden border border-white/10 p-2 glass -rotate-6 hidden sm:block shadow-2xl transition-all duration-700 group-hover:-rotate-2 group-hover:translate-x-4">
            <img 
              src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=400" 
              alt="Behind the scenes" 
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
          {/* Decorative floating dots */}
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-12 h-12 bg-red-600 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
