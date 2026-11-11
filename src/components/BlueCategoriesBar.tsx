import React from 'react';
import { Bookmark } from 'lucide-react';
import { CATEGORIES } from '../data/campaignData';

export const BlueCategoriesBar: React.FC = () => {
  return (
    <section className="w-full bg-[#0B2A5B] text-white py-10 sm:py-14 px-4 sm:px-6 my-6">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Título da faixa */}
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white max-w-2xl leading-tight">
          8 categorias para acompanhar todas as suas devoções
        </h2>

        {/* 8 categorias em grade responsiva */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8 w-full max-w-4xl">
          {CATEGORIES.map((category) => (
            <div
              key={category}
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl p-3 sm:p-4 text-center transition-colors flex items-center justify-center gap-2"
            >
              <Bookmark className="w-4 h-4 text-[#C9A24B] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-white leading-snug">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
