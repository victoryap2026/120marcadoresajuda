import React, { useState, useEffect } from 'react';

// Tempo inicial de 01:59:00 em segundos = 1h * 3600 + 59m * 60 = 7140 segundos
const INITIAL_SECONDS = 1 * 3600 + 59 * 60;
const STORAGE_KEY = 'paginas_esperanca_timer_end';

export const TopBar: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState<number>(INITIAL_SECONDS);

  useEffect(() => {
    // Persistência leve por sessão para manter a contagem realista e sem pular para trás em reloads
    let endTime: number;
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        endTime = parseInt(stored, 10);
      } else {
        endTime = Date.now() + INITIAL_SECONDS * 1000;
        sessionStorage.setItem(STORAGE_KEY, endTime.toString());
      }
    } catch {
      endTime = Date.now() + INITIAL_SECONDS * 1000;
    }

    const tick = () => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setSecondsLeft(remaining);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  const timeFormatted = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="w-full bg-[#0B1F4B] text-white py-2 px-3 sm:px-4 text-center sticky top-0 z-50 shadow-xs border-b border-white/10 select-none">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-[13px] leading-none whitespace-nowrap overflow-hidden">
        {/* Cruz sagrada dourada */}
        <span aria-hidden="true" className="text-[#F3D58A] font-bold text-xs sm:text-sm">
          ✝
        </span>

        {/* Texto solicitado: Arrecadação encerra em */}
        <span className="font-medium text-white/95">
          Arrecadação encerra em
        </span>

        {/* Cronômetro iniciando em 01:59:00 */}
        <span className="font-mono font-bold text-[#F3D58A] bg-black/25 px-2 py-0.5 rounded-md tracking-wider border border-[#F3D58A]/30">
          {timeFormatted}
        </span>
      </div>
    </div>
  );
};
