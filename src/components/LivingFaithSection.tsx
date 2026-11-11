import React from 'react';
import { BookOpen, Church, Flame, Gift } from 'lucide-react';

export const LivingFaithSection: React.FC = () => {
  const cards = [
    {
      icon: <BookOpen className="w-5 h-5 text-[#C9A24B]" />,
      title: 'No seu momento diário de oração',
      description: 'Marque a leitura do dia e conclua com a oração curta no verso.',
    },
    {
      icon: <Church className="w-5 h-5 text-[#C9A24B]" />,
      title: 'Na Santa Missa e sacramentos',
      description: 'Leve no seu missal para acompanhar as leituras e orar em silêncio.',
    },
    {
      icon: <Flame className="w-5 h-5 text-[#C9A24B]" />,
      title: 'No cantinho de oração do seu lar',
      description: 'Coloque junto às velas, imagens e terços da sua casa.',
    },
    {
      icon: <Gift className="w-5 h-5 text-[#C9A24B]" />,
      title: 'Para presentear com fé e carinho',
      description: 'Um gesto que edifica amigos, afilhados e grupos de oração.',
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-8">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2A5B] tracking-tight">
          Feito para quem vive a fé católica
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-md mx-auto [text-wrap:balance]">
          Para usar na sua Bíblia, missal, devocionário ou presentear quem você ama.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col items-center text-center hover:border-[#C9A24B]/40 transition-colors"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#C9A24B]/15 flex items-center justify-center mb-3">
              {card.icon}
            </div>
            <h3 className="font-serif text-sm sm:text-base font-bold text-[#0B2A5B] mb-1 leading-snug [text-wrap:balance]">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed [text-wrap:balance]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
