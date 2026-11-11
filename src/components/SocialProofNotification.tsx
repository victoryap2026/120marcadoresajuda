import React, { useState, useEffect } from 'react';
import { Heart, X } from 'lucide-react';

interface NotificationData {
  name: string;
  amount: number;
  city: string;
  timeAgo: string;
}

// Lista rica de doações simuladas com nomes femininos e masculinos de diversas regiões
// com predominância de R$ 20 (plano mais popular), além de R$ 10, R$ 30 e R$ 40
const NOTIFICATIONS_POOL: NotificationData[] = [
  { name: 'Juliana M.', amount: 20, city: 'São Paulo, SP', timeAgo: 'há 1 minuto' },
  { name: 'Carlos Eduardo', amount: 20, city: 'Belo Horizonte, MG', timeAgo: 'há 2 minutos' },
  { name: 'Maria Fernanda', amount: 10, city: 'Curitiba, PR', timeAgo: 'há 3 minutos' },
  { name: 'Rafael S.', amount: 20, city: 'Rio de Janeiro, RJ', timeAgo: 'há 1 minuto' },
  { name: 'Aparecida R.', amount: 30, city: 'Campinas, SP', timeAgo: 'há 4 minutos' },
  { name: 'Lucas G.', amount: 20, city: 'Fortaleza, CE', timeAgo: 'há 2 minutos' },
  { name: 'Beatriz L.', amount: 20, city: 'Salvador, BA', timeAgo: 'há 3 minutos' },
  { name: 'José Antônio', amount: 40, city: 'Goiânia, GO', timeAgo: 'há 5 minutos' },
  { name: 'Patrícia C.', amount: 20, city: 'Porto Alegre, RS', timeAgo: 'há 1 minuto' },
  { name: 'Gabriel H.', amount: 10, city: 'Recife, PE', timeAgo: 'há 2 minutos' },
  { name: 'Ana Paula', amount: 20, city: 'Florianópolis, SC', timeAgo: 'há 3 minutos' },
  { name: 'Felipe M.', amount: 20, city: 'Vitória, ES', timeAgo: 'há 4 minutos' },
  { name: 'Camila T.', amount: 30, city: 'Brasília, DF', timeAgo: 'há 2 minutos' },
  { name: 'Rodrigo B.', amount: 20, city: 'Ribeirão Preto, SP', timeAgo: 'há 1 minuto' },
  { name: 'Mariana D.', amount: 20, city: 'Santos, SP', timeAgo: 'há 3 minutos' },
  { name: 'Antônio Carlos', amount: 40, city: 'Manaus, AM', timeAgo: 'há 6 minutos' },
  { name: 'Larissa F.', amount: 20, city: 'Londrina, PR', timeAgo: 'há 2 minutos' },
  { name: 'Thiago V.', amount: 10, city: 'Natal, RN', timeAgo: 'há 4 minutos' },
  { name: 'Cláudia R.', amount: 20, city: 'Cuiabá, MT', timeAgo: 'há 2 minutos' },
  { name: 'Vinícius P.', amount: 20, city: 'Sorocaba, SP', timeAgo: 'há 1 minuto' },
  { name: 'Helena S.', amount: 20, city: 'Uberlândia, MG', timeAgo: 'há 3 minutos' },
  { name: 'Matheus O.', amount: 30, city: 'Maceió, AL', timeAgo: 'há 5 minutos' },
  { name: 'Renata B.', amount: 20, city: 'Joinville, SC', timeAgo: 'há 2 minutos' },
  { name: 'Leonardo M.', amount: 20, city: 'São José dos Campos, SP', timeAgo: 'há 1 minuto' },
];

export const SocialProofNotification: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<NotificationData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissedByUser, setIsDismissedByUser] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    if (isDismissedByUser) return;

    // Inicia a primeira notificação após 3 segundos da entrada do usuário na página
    const initialTimer = setTimeout(() => {
      showNextNotification();
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, [isDismissedByUser]);

  useEffect(() => {
    if (isDismissedByUser) return;

    // Ciclo a cada 15 segundos: exibe por 5 segundos, oculta por 10 segundos
    const interval = setInterval(() => {
      showNextNotification();
    }, 15000);

    return () => clearInterval(interval);
  }, [notificationIndex, isDismissedByUser]);

  const showNextNotification = () => {
    const nextItem = NOTIFICATIONS_POOL[notificationIndex % NOTIFICATIONS_POOL.length];
    setCurrentNotification(nextItem);
    setIsVisible(true);
    setNotificationIndex((prev) => prev + 1);

    // Fica visível por 5.5 segundos e depois some suavemente
    setTimeout(() => {
      setIsVisible(false);
    }, 5500);
  };

  if (!currentNotification) return null;

  return (
    <aside
      aria-live="polite"
      className={`fixed top-14 sm:top-16 right-3 sm:right-6 z-40 max-w-[310px] sm:max-w-[340px] w-full pointer-events-auto transition-all duration-500 ease-out transform ${
        isVisible && !isDismissedByUser
          ? 'translate-y-0 opacity-100 scale-100'
          : '-translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-lg shadow-[#0B2A5B]/10 border border-amber-200/80 flex items-start gap-3 relative">
        {/* Ícone com coração e brilho dourado sagrado */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/90 border border-amber-300/80 flex items-center justify-center shrink-0 shadow-2xs">
          <Heart className="w-5 h-5 text-amber-600 fill-amber-500" />
        </div>

        {/* Informações da doação */}
        <div className="flex-1 min-w-0 pr-4">
          <p className="text-xs sm:text-[13px] font-semibold text-[#0B2A5B] leading-tight truncate">
            {currentNotification.name}{' '}
            <span className="font-normal text-slate-600">acabou de ajudar com</span>{' '}
            <span className="font-bold text-amber-700 whitespace-nowrap">
              R$ {currentNotification.amount}
            </span>
          </p>

          <div className="flex items-center gap-1.5 mt-1 text-[10px] sm:text-[11px] text-slate-500">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="truncate">{currentNotification.city}</span>
            <span className="text-slate-300">·</span>
            <span className="shrink-0">{currentNotification.timeAgo}</span>
          </div>
        </div>

        {/* Botão de fechar discreto */}
        <button
          type="button"
          onClick={() => {
            setIsVisible(false);
            setIsDismissedByUser(true);
          }}
          aria-label="Fechar notificação"
          className="absolute top-2 right-2 text-slate-300 hover:text-slate-500 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
