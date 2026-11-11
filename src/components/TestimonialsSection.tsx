import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  initials: string;
  avatarBg: string;
  name: string;
  location: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'maria-aparecida',
    quote:
      '“Comprei para colocar na minha Bíblia e fiquei encantada! As imagens são lindas, parecem santinhos sagrados antigos. Imprimi em papel fotográfico e ficaram perfeitos.”',
    initials: 'MA',
    avatarBg: 'bg-[#EF6A60]',
    name: 'Maria Aparecida',
    location: 'Aparecida, SP',
  },
  {
    id: 'joao-pedro',
    quote:
      '“Recebi na mesma hora por e-mail. Já imprimi vários para presentear minha mãe e minha sogra. Elas choraram de emoção. Vale a pena demais!”',
    initials: 'JP',
    avatarBg: 'bg-[#2370A5]',
    name: 'João Pedro',
    location: 'Belo Horizonte, MG',
  },
  {
    id: 'luciana-ferreira',
    quote:
      '“Sou catequista e usei como lembrancinha na primeira comunhão da minha turma. As crianças amaram! A qualidade da impressão é realmente impressionante.”',
    initials: 'LF',
    avatarBg: 'bg-[#C74B78]',
    name: 'Luciana Ferreira',
    location: 'Curitiba, PR',
  },
  {
    id: 'carlos-eduardo',
    quote:
      '“Mais de 120 modelos diferentes — tem para todas as devoções. Nossa Senhora, Jesus, santos, anjos, salmos e versículos... Uso um diferente em cada livro espiritual.”',
    initials: 'CE',
    avatarBg: 'bg-[#0B958A]',
    name: 'Carlos Eduardo',
    location: 'Recife, PE',
  },
  {
    id: 'beatriz-souza',
    quote:
      '“Escolhi a opção completa. O guia de impressão me ajudou muito a escolher o papel e a gramatura ideal. Os marcadores infantis foram um encanto à parte!”',
    initials: 'BS',
    avatarBg: 'bg-[#DC7128]',
    name: 'Beatriz Souza',
    location: 'Porto Alegre, RS',
  },
  {
    id: 'rafael-lima',
    quote:
      '“Imprimi, plastifiquei e dei de lembrança para os padrinhos do nosso casamento religioso. Ficaram muito emocionados. Material lindo e muito abençoado.”',
    initials: 'RL',
    avatarBg: 'bg-[#4F59A6]',
    name: 'Rafael Lima',
    location: 'Salvador, BA',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2A5B] tracking-tight">
            Quem já imprimiu, recomenda
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto [text-wrap:balance]">
            Histórias reais de quem já está usando os marcadores na Bíblia e em livros de oração
          </p>
        </div>

        {/* Grade de 6 Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.04)] flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-200/80"
            >
              <div>
                {/* 5 Estrelas Douradas */}
                <div className="flex items-center gap-1 mb-4" aria-label="Avaliação 5 de 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                <div
                  className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                >
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
