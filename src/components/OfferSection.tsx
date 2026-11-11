import React from 'react';
import { HelpValue } from '../types';
import { ValueSelectionCard } from './ValueSelectionCard';

interface OfferSectionProps {
  selectedValue: HelpValue;
  onSelectValue: (val: HelpValue) => void;
  onTriggerCheckout: (val: HelpValue) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({
  selectedValue,
  onSelectValue,
  onTriggerCheckout,
}) => {
  return (
    <section id="escolha-valor" className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-14 scroll-mt-8">
      {/* Título e subtítulo da seção */}
      <div className="text-center max-w-2xl mx-auto mb-4">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2A5B] tracking-tight">
          Escolha o valor da sua ajuda
        </h2>
        <p className="mt-2.5 text-[13px] sm:text-[14px] text-[#5B6477] font-normal leading-[1.5] max-w-[540px] mx-auto text-center [text-wrap:balance]">
          Com qualquer valor você recebe os 120 marcadores e ajuda crianças em tratamentos de saúde.
        </p>
      </div>

      {/* Card de seleção de valor */}
      <div className="max-w-2xl mx-auto">
        <ValueSelectionCard
          cardId="card-valores"
          selectedValue={selectedValue}
          onSelectValue={onSelectValue}
          onTriggerCheckout={onTriggerCheckout}
        />
      </div>
    </section>
  );
};
