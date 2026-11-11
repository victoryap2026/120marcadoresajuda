import React, { useState } from 'react';
import { X, CheckCircle, Mail, FolderCheck } from 'lucide-react';
import { HelpValue } from '../types';

interface CheckoutNoticeModalProps {
  value: HelpValue | number;
  onClose: () => void;
}

export const CheckoutNoticeModal: React.FC<CheckoutNoticeModalProps> = ({ value, onClose }) => {
  const [showSimulatedAccess, setShowSimulatedAccess] = useState(false);
  const formattedVal = value === 14.9 || value === 14.90 ? 'R$ 14,90' : `R$ ${value}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!showSimulatedAccess ? (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 stroke-[2.2]" />
            </div>

            <span className="text-xs font-semibold text-[#C9A24B] uppercase tracking-wider">
              Valor Selecionado: {formattedVal} pagamento único
            </span>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B2A5B] mt-1 mb-3">
              Botão pronto para o seu link de checkout
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              O botão já está configurado com o valor de <strong>{formattedVal}</strong>. No código do projeto,
              você pode inserir os links da sua plataforma de pagamento (Cakto, Hotmart, Kiwify, etc.) no arquivo:
            </p>

            <div className="my-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-xs text-slate-700 overflow-x-auto">
              <code>{value === 29.9 ? "UPGRADE_CHECKOUT_URL = 'https://sua-plataforma.com/...';" : `CHECKOUT_URLS[${value}] = 'https://sua-plataforma.com/...';`}</code>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => setShowSimulatedAccess(true)}
                className="w-full py-3 px-4 bg-[#0B2A5B] hover:bg-[#071D40] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <FolderCheck className="w-4 h-4 text-[#C9A24B]" />
                <span>Simular experiência do cliente após o pagamento</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium transition-colors cursor-pointer"
              >
                Entendido, voltar para a página
              </button>
            </div>
          </div>
        ) : (
          <div className="text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
              <Mail className="w-6 h-6" />
            </div>

            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Acesso Imediato
            </span>

            <h3 className="font-serif text-xl font-bold text-[#0B2A5B] mt-1 mb-2">
              Os 120 marcadores na sua caixa de entrada
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Assim que o pagamento de <strong>{formattedVal}</strong> é confirmado, o comprador recebe um e-mail com acesso instantâneo aos arquivos prontos para imprimir:
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
              <div className="flex items-center gap-2 text-[#0B2A5B] font-semibold">
                <FolderCheck className="w-4 h-4 text-[#C9A24B]" />
                <span>Coleção: 120 Marcadores Católicos</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                <li>120 Marcadores em PDF tamanho padrão (5x15 cm)</li>
                <li>Frente com arte sagrada + Verso com oração curta</li>
                <li>Folhas organizadas para impressão econômica rápida</li>
                <li>Guia de recorte e recomendações de papel</li>
              </ul>
            </div>

            <div className="mt-5 text-right">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-[#C9A24B] hover:bg-[#B58F38] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Concluir demonstração
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
