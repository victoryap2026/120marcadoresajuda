import React from 'react';

export const ThreeSteps: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200/80 bg-white">
          <img
            src="/images/PASSO PT.webp"
            alt="3 Passos Simples para usar seus Marcadores Católicos: 1 Imprima, 2 Recorte, 3 Reze"
            className="w-full h-auto object-cover block"
            loading="lazy"
            decoding="async"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};
