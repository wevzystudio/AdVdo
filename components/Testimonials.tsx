
import React from 'react';

const Testimonials: React.FC = () => {
  const samples = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <div className="bg-red-950/30 border border-red-500/30 text-red-500 font-bold inline-block px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider">
          What our client say
        </div>
        <h2 className="text-4xl md:text-5xl font-black">Success Stories</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {samples.map((src, i) => (
          <div key={i} className="group relative aspect-[9/16] rounded-3xl overflow-hidden glass p-1">
            <div className="w-full h-full rounded-[20px] overflow-hidden relative">
              <img 
                src={src} 
                alt={`Testimonial ${i}`} 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="h-0.5 w-full bg-white/20 mb-3">
                    <div className="h-full bg-red-600 w-1/3"></div>
                 </div>
                 <p className="text-sm font-bold text-white uppercase tracking-widest">View Results</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
