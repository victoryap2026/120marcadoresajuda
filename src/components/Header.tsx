import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full pt-8 pb-5 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2A5B] tracking-tight">
          Páginas de Esperanza
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
          Una página marcada, una oración, una ayuda.
        </p>
      </div>
    </header>
  );
};
