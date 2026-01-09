
import React from 'react';
import { Play, ClipboardList, Target, Send, Search } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  const icons = [<Search className="w-8 h-8"/>, <ClipboardList className="w-8 h-8"/>, <Target className="w-8 h-8"/>, <Send className="w-8 h-8"/>];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <div className="bg-red-950/30 border border-red-500/30 text-red-500 font-bold inline-block px-4 py-1.5 rounded-full text-sm mb-6">
          Our Process
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl md:text-6xl font-black">
            Professional Video Production
          </h2>
          <div className="flex items-center gap-6">
            <span className="text-red-600 text-4xl md:text-6xl font-black italic">SIMPLIFIED</span>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center red-glow cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-current" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((step, idx) => (
          <div key={idx} className="glass p-10 rounded-[32px] hover:border-red-500/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="mb-8">
              <span className="text-red-600 font-black text-6xl opacity-30 group-hover:opacity-100 transition-opacity">{step.number}</span>
            </div>

            <div className="mb-6 text-red-600">
              {icons[idx]}
            </div>

            <h3 className="text-2xl font-black mb-4">{step.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
