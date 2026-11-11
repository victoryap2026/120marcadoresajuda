import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/campaignData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center mb-5 sm:mb-8">
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2A5B] tracking-tight">
          Perguntas frequentes
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Tire suas dúvidas sobre os marcadores e a sua colaboração.
        </p>
      </div>

      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xs border border-slate-200/80 divide-y divide-slate-100">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question} className="py-3.5 sm:py-4 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full py-1.5 flex items-center justify-between text-left gap-3.5 font-semibold text-[#0B2A5B] hover:text-[#0B2A5B]/80 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-xs sm:text-base">{item.question}</span>
                <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[#0B2A5B] shrink-0">
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>
              {isOpen && (
                <div className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
