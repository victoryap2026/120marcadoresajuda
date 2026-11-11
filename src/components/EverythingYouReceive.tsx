import React from 'react';
import { Check, Image as ImageIcon } from 'lucide-react';
import { BONUSES } from '../data/campaignData';

// Arte quadrada do produto principal
const MAIN_PRODUCT_IMAGE = '/assets/images/120_marcadores_catolicos_capa.webp';

export const EverythingYouReceive: React.FC = () => {
  const mainChecks = [
    '120 marcadores prontos para imprimir',
    '8 categorias de devoção católica',
    'Oração curta no verso de cada marcador',
    'Arquivo digital em altíssima resolução',
    'Acesso imediato por e-mail',
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Título da seção */}
      <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-8">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2A5B] tracking-tight">
          Tudo o que você vai receber
        </h2>
      </div>

      {/* Card do Produto Principal */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xs border border-slate-200/80 mb-8 sm:mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Espaço de imagem quadrada (1:1) à esquerda */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-[280px] sm:max-w-sm aspect-square rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 bg-slate-100 flex flex-col items-center justify-center p-2 sm:p-3">
              {MAIN_PRODUCT_IMAGE ? (
                <img
                  src={MAIN_PRODUCT_IMAGE}
                  alt="Coleção de 120 Marcadores Católicos prontos para imprimir"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/90 border border-slate-200 flex items-center justify-center mb-3 shadow-2xs">
                    <ImageIcon className="w-7 h-7 text-slate-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Arte do Produto Principal
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1">
                    Espaço quadrado (1:1)
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Lista com ícones de check à direita */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-700">
              {mainChecks.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                  </span>
                  <span className="font-medium text-[#0B2A5B] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Área dos 3 Bônus */}
      <div className="mt-6 sm:mt-8">
        <div className="text-center mb-5 sm:mb-8">
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#0B2A5B]">
            Estes 3 bônus são o nosso agradecimento a quem ajuda com mais de R$ 10
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#C9A24B]/50 transition-colors"
            >
              <div>
                {/* Espaço de imagem vertical proporcional (2:3) */}
                <div className="w-full aspect-[2/3] rounded-xl overflow-hidden shadow-xs border border-slate-200/80 bg-slate-100 flex flex-col items-center justify-center p-2 text-slate-400 mb-4">
                  {bonus.imageUrl ? (
                    <img
                      src={bonus.imageUrl}
                      alt={bonus.title}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-3">
                      <div className="w-10 h-10 rounded-xl bg-white/90 border border-slate-200 flex items-center justify-center mb-2 shadow-2xs">
                        <ImageIcon className="w-5 h-5 text-slate-400" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        Arte do {bonus.tag}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">
                        Proporção 2:3
                      </span>
                    </div>
                  )}
                </div>

                {/* Etiquetas: BÔNUS e INCLUSO */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold tracking-wider uppercase bg-[#C9A24B] text-white shadow-2xs">
                    {bonus.tag}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    {bonus.badge}
                  </span>
                </div>

                {/* Título do bônus */}
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#0B2A5B] mt-2 mb-1.5 leading-snug [text-wrap:balance]">
                  {bonus.title}
                </h4>

                {/* Descrição curta */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal [text-wrap:balance]">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
