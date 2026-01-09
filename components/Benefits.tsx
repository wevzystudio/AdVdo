
import React from 'react';
import { CheckCircle2, Video as VideoIcon, ArrowRight } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Left side: content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-600 rounded-2xl red-glow">
              <VideoIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black">
              Grow Your Business with <br />
              <span className="text-red-600">Video Marketing</span>
            </h2>
          </div>

          <div className="glass p-8 rounded-3xl mb-8">
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
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center transition-transform group-hover:scale-110">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg">
                  <span className="font-bold text-red-600">{benefit.title}</span> – <span className="text-gray-400">{benefit.desc}</span>
                </p>
              </div>
            ))}
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-2xl flex items-center gap-3 transition-all red-glow">
            Book a Free Call <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right side: image stack */}
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden border border-white/10 glass-red p-2 rotate-2 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80&w=800" 
              alt="Video Shooting" 
              className="w-full h-full object-cover rounded-[32px] grayscale-[0.3]"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 md:-right-20 w-48 h-64 rounded-[32px] overflow-hidden border border-white/10 p-2 glass -rotate-6 hidden sm:block">
            <img 
              src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=400" 
              alt="Behind the scenes" 
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
