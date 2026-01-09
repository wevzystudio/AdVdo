
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Smartphone, Zap, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../lib/hooks';

const Counter = ({ target, duration = 2000, suffix = "" }: { target: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
};

const StatsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(containerRef);

  return (
    <div ref={containerRef} className={`max-w-7xl mx-auto px-4 md:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <div className="text-center mb-20">
        <div className="bg-red-950/30 border border-red-500/30 text-red-500 font-bold inline-block px-4 py-1.5 rounded-full text-sm mb-6">
          WHY VIDEO MARKETING WORKS
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <h2 className="text-4xl md:text-6xl font-black">
            Video <span className="text-red-600 italic">Outperforms</span> Every Other Marketing
          </h2>
          <div className="p-4 bg-red-600 rounded-2xl red-glow animate-pulse">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Large side card */}
        <div className="lg:col-span-1 glass p-10 rounded-[40px] border-red-500/20 group overflow-hidden relative">
          <p className="text-2xl font-medium leading-relaxed mb-10">
            It's the fastest way to grab attention, build trust, and convert viewers into customers.
          </p>
          <div className="aspect-square bg-red-600/10 rounded-3xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" 
              className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-700"
              alt="Conversion"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center">
                  <div className="text-7xl font-black text-white mb-2">
                    <Counter target={300} suffix="%" />
                  </div>
                  <div className="text-red-500 font-bold tracking-widest text-sm uppercase">ROI GROWTH</div>
               </div>
            </div>
          </div>
        </div>

        {/* Small cards grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: <Zap className="w-6 h-6"/>,
              title: "Higher Engagement",
              desc: "Video content consistently gets more likes, comments, and reach.",
              stat: 10,
              suffix: "X"
            },
            {
              icon: <Users className="w-6 h-6"/>,
              title: "Better Retention",
              desc: "Viewers remember almost everything they see in a video, compared to text.",
              stat: 95,
              suffix: "%"
            },
            {
              icon: <MessageSquare className="w-6 h-6"/>,
              title: "Trust & Connection",
              desc: "Seeing a real face builds credibility instantly for your brand.",
              stat: 80,
              suffix: "%"
            },
            {
              icon: <Smartphone className="w-6 h-6"/>,
              title: "Platform Growth",
              desc: "Instagram & YouTube prioritize video, giving you more organic reach.",
              stat: 1.2,
              suffix: "M+"
            }
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-[40px] hover:border-red-500/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black text-red-600">
                    <Counter target={item.stat} suffix={item.suffix} />
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
              <div className="mt-8">
                <ArrowUpRight className="w-6 h-6 text-red-600 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-xl text-gray-400 mb-8">Want to use video the right way?</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-black py-5 px-12 rounded-full text-lg red-glow transition-all transform hover:scale-105 active:scale-95">
          Get a Free Video Strategy
        </button>
      </div>
    </div>
  );
};

export default StatsSection;
