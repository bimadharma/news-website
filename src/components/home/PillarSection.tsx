"use client";

import { pillarData } from '@/data/pillarData';

export default function PillarSection() {
  return (
    <section className="container mx-auto px-6 py-16 transition-all duration-300">
      

      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold text-center text-foreground">Pillar Program</h2>
        <div className="w-56 h-0.5 bg-[#177BC7] mt-4"></div>
      </div>
      
      {/* Grid Responsif */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {pillarData.map((pillar) => (
          <div
            key={pillar.id}
            className="group bg-gradient-to-r from-[#177BC7] to-[#00ABE3] hover:from-white hover:to-white p-6 md:p-8 min-h-[320px] flex items-center justify-center rounded-3xl shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#177BC7]"
          >
            {/* Teks Center Semua */}
            <div className="space-y-3 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#177BC7] transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed group-hover:text-[#177BC7] transition-colors duration-300 mx-auto max-w-prose">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}