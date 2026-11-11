import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { UPGRADE_CHECKOUT_URL, CHECKOUT_URLS } from '../data/campaignData';

interface UpgradeOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedWith10: () => void;
  onProceedWithUpgrade?: () => void;
}

export const UpgradeOfferModal: React.FC<UpgradeOfferModalProps> = ({
  isOpen,
  onClose,
  onProceedWith10,
  onProceedWithUpgrade,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleUpgradeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (UPGRADE_CHECKOUT_URL && UPGRADE_CHECKOUT_URL !== '#') {
      const search = window.location.search;
      let finalUrl = UPGRADE_CHECKOUT_URL;
      if (search && search.length > 1) {
        const separator = finalUrl.includes('?') ? '&' : '?';
        finalUrl = `${finalUrl}${separator}${search.replace(/^\?/, '')}`;
      }
      window.location.href = finalUrl;
    } else {
      if (onProceedWithUpgrade) {
        onProceedWithUpgrade();
      }
    }
  };

  const handle10Click = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
    onProceedWith10();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[20px] max-w-[420px] w-full p-4 sm:p-5 shadow-2xl relative mx-2 text-left border border-slate-100 overflow-hidden transition-all duration-200 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar (X) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>

        {/* Tag dourada */}
        <div className="flex items-center gap-1.5 mb-1">
          <span className="inline-block text-[9.5px] sm:text-[10.5px] font-bold tracking-wider uppercase text-[#C9A24B] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
            OFERTA ESPECIAL DE UPGRADE
          </span>
        </div>

        {/* Título */}
        <h3 className="font-serif text-[17px] sm:text-[20px] font-bold text-[#0B2A5B] leading-tight mb-1 pr-6 [text-wrap:balance]">
          Espere! Ajude mais uma campanha e leve os 3 bônus exclusivos
        </h3>

        {/* Subtítulo */}
        <p className="text-[11.5px] sm:text-[12.5px] text-slate-600 leading-snug mb-2 sm:mb-2.5 font-normal [text-wrap:pretty]">
          Por apenas R$ 14,90 você recebe os 120 marcadores, todos os 3 bônus exclusivos e sua ajuda chega a mais crianças.
        </p>

        {/* Preço centralizado */}
        <div className="text-center py-1.5 sm:py-2 px-3 mb-2 sm:mb-2.5 bg-gradient-to-r from-[#F5F7FB] via-amber-50/40 to-[#F5F7FB] rounded-xl border border-amber-100/80">
          <div className="text-[22px] sm:text-[26px] font-bold text-[#0B2A5B] tracking-tight leading-none">
            R$ 14,90
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 font-normal">
            Pagamento único · Acesso imediato no e-mail
          </div>
        </div>

        {/* Lista com checks compacta */}
        <div className="mb-2.5 sm:mb-3">
          <p className="text-[11px] sm:text-[12px] font-semibold text-[#0B2A5B] mb-1">
            Você leva:
          </p>
          <ul className="space-y-1 text-[11px] sm:text-[12px] text-slate-700">
            <li className="flex items-center gap-1.5">
              <span className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>120 marcadores católicos prontos para imprimir</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>Bônus 1: Guia de Impressão Perfeita</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>Bônus 2: Marcadores para Crianças</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>Bônus 3: 20 Convites de Jesus</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>Sua ajuda chega a mais campanhas</span>
            </li>
          </ul>
        </div>

        {/* Botão principal */}
        <a
          href={UPGRADE_CHECKOUT_URL}
          onClick={handleUpgradeClick}
          className="w-full block py-2.5 sm:py-3 px-3 bg-[#C9A24B] hover:bg-[#B58F38] active:bg-[#9E7828] text-[#0B2A5B] font-bold rounded-xl text-xs sm:text-[13px] shadow-sm hover:shadow transition-all duration-200 text-center uppercase tracking-wide cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
        >
          Sim, quero ajudar com R$ 14,90
        </a>

        {/* Link secundário */}
        <div className="mt-1.5 text-center">
          <a
            href={CHECKOUT_URLS[10]}
            onClick={handle10Click}
            className="text-[11px] sm:text-[11.5px] text-slate-500 hover:text-slate-700 underline underline-offset-2 transition-colors cursor-pointer inline-block py-0.5"
          >
            Não, obrigado, continuar com R$ 10
          </a>
        </div>
      </div>
    </div>
  );
};
