
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Smartphone, Zap, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../lib/hooks';

const Counter = ({ target, duration = 1500, suffix = "" }: { target: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easedProgress * target * 10) / 10);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return <div ref={ref} className="tabular-nums">{count}{suffix}</div>;
};

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);
  
  return (
    <div 
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <Reveal>
        <div className="text-center mb-20">
          <div className="bg-red-950/30 border border-red-500/30 text-red-500 font-bold inline-block px-4 py-1.5 rounded-full text-sm mb-6">
            WHY VIDEO MARKETING WORKS
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <h2 className="text-4xl md:text-6xl font-black">
              Video <span className="text-red-600 italic">Outperforms</span> Every Other Marketing
            </h2>
            <div className="p-4 bg-red-600 rounded-2xl red-glow animate-pulse hidden md:block">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Large side card */}
        <Reveal delay={200}>
          <div className="lg:col-span-1 glass p-10 rounded-[40px] border-red-500/20 group overflow-hidden relative h-full flex flex-col">
            <p className="text-2xl font-medium leading-relaxed mb-10 text-gray-200">
              It's the fastest way to grab attention, build trust, and convert viewers into customers.
            </p>
            <div className="mt-auto aspect-square bg-red-600/10 rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000"
                alt="Conversion"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                    <div className="text-7xl font-black text-white mb-2 drop-shadow-2xl">
                      <Counter target={300} suffix="%" />
                    </div>
                    <div className="text-red-500 font-bold tracking-widest text-sm uppercase">ROI GROWTH</div>
                 </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Small cards grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: <Zap className="w-6 h-6"/>,
              title: "Higher Engagement",
              desc: "Video content consistently gets more likes, comments, and reach.",
              stat: 10,
              suffix: "X",
              delay: 300
            },
            {
              icon: <Users className="w-6 h-6"/>,
              title: "Better Retention",
              desc: "Viewers remember almost everything they see in a video.",
              stat: 95,
              suffix: "%",
              delay: 400
            },
            {
              icon: <MessageSquare className="w-6 h-6"/>,
              title: "Trust & Connection",
              desc: "Seeing a real face builds credibility instantly for your brand.",
              stat: 80,
              suffix: "%",
              delay: 500
            },
            {
              icon: <Smartphone className="w-6 h-6"/>,
              title: "Platform Growth",
              desc: "Social algorithms prioritize video, giving you massive reach.",
              stat: 1.2,
              suffix: "M+",
              delay: 600
            }
          ].map((item, i) => (
            <Reveal key={i} delay={item.delay}>
              <div className="glass p-10 rounded-[40px] hover:border-red-500/30 transition-all flex flex-col justify-between group h-full">
                <div>
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
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
                <div className="mt-8 flex justify-end">
                  <ArrowUpRight className="w-6 h-6 text-red-600 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={800}>
        <div className="mt-20 text-center">
          <p className="text-xl text-gray-400 mb-8">Ready to grow your revenue?</p>
          <a 
            href="tel:+1234567890" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-black py-5 px-12 rounded-full text-lg red-glow transition-all transform hover:scale-105 active:scale-95"
          >
            Get a Free Video Strategy
          </a>
        </div>
      </Reveal>
    </div>
  );
};

export default StatsSection;
