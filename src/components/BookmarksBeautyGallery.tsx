import React, { useState } from 'react';

export interface UnitBookmark {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export const UNIT_BOOKMARKS: UnitBookmark[] = [
  {
    id: 'marcador-01',
    title: 'Nossa Senhora Aparecida',
    subtitle: 'Mãe Aparecida, rogai por nós',
    image: '/assets/marcadores_unitarios/marcador_01_aparecida.webp',
  },
  {
    id: 'marcador-02',
    title: 'Sagrado Coração de Jesus',
    subtitle: 'Jesus, manso e humilde de coração',
    image: '/assets/marcadores_unitarios/marcador_02_sagrado_coracao.webp',
  },
  {
    id: 'marcador-03',
    title: 'São Miguel Arcanjo',
    subtitle: 'Defendei-nos no combate',
    image: '/assets/marcadores_unitarios/marcador_03_sao_miguel.webp',
  },
  {
    id: 'marcador-04',
    title: 'Nossa Senhora das Graças',
    subtitle: 'Ó Maria concebida sem pecado',
    image: '/assets/marcadores_unitarios/marcador_04_nossa_senhora_gracas.webp',
  },
  {
    id: 'marcador-05',
    title: 'Jesus Bom Pastor',
    subtitle: 'O Senhor é o meu pastor',
    image: '/assets/marcadores_unitarios/marcador_05_bom_pastor.webp',
  },
  {
    id: 'marcador-06',
    title: 'Santo Anjo da Guarda',
    subtitle: 'Anjo de Deus, que sois o meu guardião',
    image: '/assets/marcadores_unitarios/marcador_06_anjo_guarda.webp',
  },
  {
    id: 'marcador-07',
    title: 'Jesus Misericordioso',
    subtitle: 'Jesus, eu confio em Vós',
    image: '/assets/marcadores_unitarios/marcador_07_jesus_misericordioso.webp',
  },
  {
    id: 'marcador-08',
    title: 'São Rafael Arcanjo',
    subtitle: 'Deus cura e ilumina os caminhos',
    image: '/assets/marcadores_unitarios/marcador_08_sao_rafael.webp',
  },
  {
    id: 'marcador-09',
    title: 'Cristo Rei do Universo',
    subtitle: 'Venha a nós o vosso Reino',
    image: '/assets/marcadores_unitarios/marcador_09_cristo_rei.webp',
  },
];

export const BookmarksBeautyGallery: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicamos os 9 marcadores unitários para criar um fluxo contínuo e sem emendas
  const repeatedBookmarks = [...UNIT_BOOKMARKS, ...UNIT_BOOKMARKS];

  return (
    <section className="w-full py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-[#FAF8F5]/50 to-[#F5F7FB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-6 sm:mb-8">
        <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full mb-2">
          Design Sagrado &amp; Acabamento Impecável
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          Veja a beleza de cada marcador
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto [text-wrap:balance]">
          Conheça de perto alguns dos 120 modelos exclusivos para enriquecer sua Bíblia, livros de oração e momentos com Deus
        </p>
      </div>

      {/* Carrossel automático contínuo com pausa suave ao interagir */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Esmaecimento suave nas laterais para transição fluida */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#F5F7FB] to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#F5F7FB] to-transparent z-10 pointer-events-none"
        />

        {/* Trilho do carrossel de marcadores unitários */}
        <div
          className="animate-marquee flex gap-4 sm:gap-6 select-none items-center"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
            animationDuration: '38s',
          }}
        >
          {repeatedBookmarks.map((bookmark, index) => (
            <div
              key={`${bookmark.id}-${index}`}
              className="group relative w-[160px] sm:w-[190px] md:w-[210px] shrink-0 transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-1"
            >
              {/* Moldura elegante com efeito de elevação realista */}
              <div className="relative rounded-[20px] p-1.5 sm:p-2 bg-gradient-to-b from-amber-100/70 via-white to-amber-50/50 shadow-md group-hover:shadow-xl border border-amber-200/60 transition-shadow duration-300">
                <img
                  src={bookmark.image}
                  alt={bookmark.title}
                  className="w-full aspect-[310/746] object-cover rounded-[14px] block shadow-inner"
                  loading="lazy"
                  decoding="async"
                  width={310}
                  height={746}
                />
              </div>

              {/* Legenda discreta com nome do marcador */}
              <div className="mt-2.5 text-center px-1">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 line-clamp-1 group-hover:text-[#0B2A5B] transition-colors">
                  {bookmark.title}
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1 italic">
                  {bookmark.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
