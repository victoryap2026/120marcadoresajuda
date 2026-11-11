import React from 'react';

interface FinalCtaBarProps {
  onScrollToChoice: () => void;
}

export const FinalCtaBar: React.FC<FinalCtaBarProps> = ({ onScrollToChoice }) => {
  return (
    <section className="w-full bg-[#0B2A5B] text-white py-10 sm:py-14 px-4 sm:px-6 text-center my-6 sm:my-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white max-w-xl leading-tight mb-5 sm:mb-8 [text-wrap:balance]">
          Comece hoje a marcar sua fé com beleza e devoção
        </h2>

        <button
          type="button"
          onClick={onScrollToChoice}
          className="w-full sm:w-auto px-4 sm:px-10 py-3 sm:py-4 bg-[#C9A24B] hover:bg-[#B58F38] active:bg-[#9E7828] text-white font-bold rounded-xl text-xs min-[360px]:text-[13px] sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 tracking-normal sm:tracking-wide uppercase whitespace-nowrap"
        >
          <span>Quero ajudar e receber meus marcadores</span>
        </button>
      </div>
    </section>
  );
};
