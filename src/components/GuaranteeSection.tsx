import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-xs text-center flex flex-col items-center">
        {/* Selo Oficial: Garantia 7 Dias */}
        <div className="mb-3 sm:mb-4 flex justify-center">
          <img
            src="/assets/images/selo_garantia_7_dias.webp"
            alt="Selo oficial Garantia de 7 Dias"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Título: Garantia de 7 dias */}
        <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#0B2A5B] tracking-tight mb-2 [text-wrap:balance]">
          Garantia incondicional de 7 dias
        </h3>

        {/* Texto */}
        <p className="max-w-xl text-xs sm:text-sm text-slate-600 leading-relaxed font-normal [text-wrap:balance]">
          Adquira, baixe e imprima. Se por qualquer motivo você não ficar satisfeito, basta solicitar dentro dos primeiros 7 dias e devolvemos 100% do seu dinheiro.
        </p>
      </div>
    </section>
  );
};
