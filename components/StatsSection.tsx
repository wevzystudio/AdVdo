
import React from 'react';
import { TrendingUp, Users, Smartphone, Zap, MessageSquare, ArrowUpRight } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-20">
        <div className="bg-red-950/30 border border-red-500/30 text-red-500 font-bold inline-block px-4 py-1.5 rounded-full text-sm mb-6">
          WHY VIDEO MARKETING WORKS
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <h2 className="text-4xl md:text-6xl font-black">
            Video <span className="text-red-600 italic">Outperforms</span> Every Other Marketing
          </h2>
          <div className="p-4 bg-red-600 rounded-2xl red-glow">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Large side card */}
        <div className="lg:col-span-1 glass p-10 rounded-[40px] border-red-500/20">
          <p className="text-2xl font-medium leading-relaxed mb-10">
            It's the fastest way to grab attention, build trust, and convert viewers into customers.
          </p>
          <div className="aspect-square bg-red-600/10 rounded-3xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" 
              className="w-full h-full object-cover opacity-50 grayscale"
              alt="Conversion"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center">
                  <div className="text-6xl font-black text-white mb-2">300%</div>
                  <div className="text-red-500 font-bold tracking-widest text-sm">ROI GROWTH</div>
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
              desc: "Video content consistently gets more likes, comments, and reach."
            },
            {
              icon: <Users className="w-6 h-6"/>,
              title: "95% Better Retention",
              desc: "Viewers remember almost everything they see in a video, compared to text."
            },
            {
              icon: <MessageSquare className="w-6 h-6"/>,
              title: "Faster Trust & Connection",
              desc: "Seeing a real face builds credibility instantly for your brand."
            },
            {
              icon: <Smartphone className="w-6 h-6"/>,
              title: "Platforms Push Video",
              desc: "Instagram & YouTube prioritize video, giving you more reach without extra ad spend."
            }
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-[40px] hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
              <div className="mt-8">
                <ArrowUpRight className="w-6 h-6 text-red-600 opacity-20" />
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
