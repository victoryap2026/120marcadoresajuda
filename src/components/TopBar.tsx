import React, { useState, useEffect } from 'react';

export const TopBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    dateFull: string;
    dateShort: string;
    timeString: string;
  }>({
    dateFull: '',
    dateShort: '',
    timeString: '00:00:00',
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();

      // Meta: 23:59:59 do dia de hoje no fuso horário do visitante
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59,
        999
      );

      const diffMs = endOfDay.getTime() - now.getTime();
      const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
      const seconds = String(totalSeconds % 60).padStart(2, '0');

      setTimeLeft({
        dateFull: `${day}/${month}/${year}`,
        dateShort: `${day}/${month}`,
        timeString: `${hours}:${minutes}:${seconds}`,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0B1F4B] text-white py-1.5 px-3 sm:px-4 text-center sticky top-0 z-50 shadow-xs border-b border-white/10 select-none">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs leading-none whitespace-nowrap overflow-hidden">
        {/* Lado esquerdo: Cruz dourada e texto com data */}
        <div className="flex items-center gap-1 font-bold text-[#F3D58A]">
          <span aria-hidden="true" className="text-xs sm:text-sm">✝</span>
          <span>
            Arrecadação de hoje{' '}
            <span className="hidden sm:inline">{timeLeft.dateFull}</span>
            <span className="sm:hidden">{timeLeft.dateShort}</span>
          </span>
        </div>

        {/* Separador */}
        <span className="text-slate-400 font-normal">·</span>

        {/* Lado direito: Termina em + cronômetro */}
        <div className="flex items-center gap-1 text-white">
          <span className="text-white/90">Termina em</span>
          <span className="font-mono font-bold text-white tracking-wider">
            {timeLeft.timeString}
          </span>
        </div>
      </div>
    </div>
  );
};
