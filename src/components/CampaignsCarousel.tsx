import React from 'react';
import { CAMPAIGN_PRINTS } from '../data/campaignData';

export const CampaignsCarousel: React.FC = () => {
  // Duplicamos a lista de itens para loop infinito contínuo e sem saltos
  const repeatedPrints = [...CAMPAIGN_PRINTS, ...CAMPAIGN_PRINTS];

  return (
    <section className="w-full py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-transparent via-[#F7F9FC]/60 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-5 sm:mb-8">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2A5B] tracking-tight">
          Para onde vai a sua ajuda
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-lg mx-auto [text-wrap:balance]">
          Conheça algumas das pessoas que recebem o apoio da nossa comunidade.
        </p>
      </div>

      {/* Carrossel de imagens contínuo: sem pausar ao passar o mouse ou tocar, sem zoom */}
      <div className="relative w-full overflow-hidden py-3 pointer-events-none select-none">
        {/* Esmaecimento leve nas bordas para suavizar a transição */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#F5F7FB] to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#F5F7FB] to-transparent z-10 pointer-events-none"
        />

        {/* Trilho da esteira: animação contínua perpétua que não para nunca */}
        <div
          className="animate-marquee flex gap-4 select-none pointer-events-none"
          style={{
            animationDuration: '38s',
            animationPlayState: 'running',
          }}
        >
          {repeatedPrints.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[76vw] sm:w-[280px] md:w-[310px] shrink-0 aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 flex items-center justify-center select-none pointer-events-none"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl block select-none pointer-events-none"
                loading="lazy"
                decoding="async"
                width={980}
                height={1225}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
