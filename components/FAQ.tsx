
"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../lib/constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <div className="bg-red-950/30 border border-red-500/30 text-red-500 font-bold inline-block px-4 py-2 rounded-xl text-sm mb-6">
          FAQ
        </div>
        <h2 className="text-4xl md:text-6xl font-black">Frequently asked questions</h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b border-white/10 overflow-hidden">
            <button 
              className="w-full py-8 px-2 flex items-center justify-between text-left group transition-all"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className={`text-xl md:text-2xl font-bold transition-all ${openIndex === i ? 'text-red-600' : 'text-white group-hover:text-red-400'}`}>
                {faq.question}
              </span>
              <div className={`transition-all duration-300 transform ${openIndex === i ? 'rotate-180 text-red-600' : 'text-gray-500'}`}>
                {openIndex === i ? <Minus className="w-8 h-8" /> : <Plus className="w-8 h-8" />}
              </div>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
              <p className="text-gray-400 text-lg leading-relaxed px-2">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
