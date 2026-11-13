import React from 'react';

interface HeroBannerProps {
  onScrollToChoice: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onScrollToChoice }) => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-6 sm:pb-8 text-center">
      {/* Título com destaque dourado e quebra balanceada */}
      <h1 className="font-serif text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight tracking-tight text-[#0B2A5B] max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto [text-wrap:balance]">
        <span className="text-[#C9A24B] block sm:inline">Ajude crianças em&nbsp;tratamento</span>{' '}
        <span>e receba 120 Marcadores Católicos de&nbsp;Páginas prontos para&nbsp;imprimir</span>
      </h1>

      {/* Subtítulo explicativo */}
      <p className="mt-2.5 sm:mt-4 text-[13px] sm:text-base text-slate-600 max-w-[340px] sm:max-w-lg md:max-w-xl mx-auto leading-relaxed font-normal [text-wrap:balance]">
        Marcadores premium com Maria, Jesus, santos, anjos e versículos, ideais para Bíblia, missal, livros e devocionais
      </p>

      {/* Mockup do produto centralizado */}
      <div className="mt-4 sm:mt-6 flex justify-center">
        <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-white p-1.5 sm:p-2">
          <img
            src="/images/hero_bundle_pt.webp"
            alt="Coleção oficial 120 Marcadores Católicos de Páginas prontos para imprimir"
            className="w-full h-auto object-cover rounded-xl"
            loading="eager"
            decoding="async"
            width={1200}
            height={1200}
          />
        </div>
      </div>

      {/* Botão dourado centralizado e microtexto */}
      <div className="mt-5 sm:mt-6 flex flex-col items-center">
        <button
          type="button"
          onClick={onScrollToChoice}
          className="w-full sm:w-auto px-4 sm:px-10 py-3 sm:py-4 bg-[#C9A24B] hover:bg-[#B58F38] active:bg-[#9E7828] text-white font-bold rounded-xl text-xs min-[360px]:text-[13px] sm:text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 tracking-normal sm:tracking-wide uppercase whitespace-nowrap"
        >
          <span>Quero meus marcadores</span>
        </button>
        <span className="mt-2 text-[11px] sm:text-xs text-slate-500 font-normal [text-wrap:balance]">
          Pagamento seguro · Cartão e Pix · Garantia de 7&nbsp;dias
        </span>
      </div>
    </section>
  );
};
