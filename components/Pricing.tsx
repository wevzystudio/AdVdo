
import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../lib/constants';

const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <div className="bg-red-950/30 border border-red-500/30 text-red-500 font-bold inline-block px-4 py-1.5 rounded-full text-sm mb-6">
          OUR PRICING
        </div>
        <h2 className="text-4xl md:text-6xl font-black">
          Plan For <span className="text-red-600">Every</span> Business Need
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan, i) => (
          <div 
            key={i} 
            className={`relative rounded-[40px] p-1 ${plan.isPopular ? 'bg-gradient-to-b from-red-600 to-black p-[2px] transform lg:-translate-y-4 shadow-2xl red-glow' : 'glass border-white/10'}`}
          >
            <div className={`h-full w-full rounded-[38px] p-10 flex flex-col ${plan.isPopular ? 'bg-[#050505]' : 'bg-transparent'}`}>
              <h3 className="text-xl font-bold mb-6 text-gray-400">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
                <span className="text-gray-500 font-medium">{plan.period}</span>
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPopular ? 'text-red-600' : 'text-gray-400'}`} />
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 px-8 rounded-2xl font-black transition-all transform hover:scale-[1.02] active:scale-[0.98] ${plan.isPopular ? 'bg-red-600 text-white red-glow' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Choose this plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
