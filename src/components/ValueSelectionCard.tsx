import React from 'react';
import { Check, X } from 'lucide-react';
import { HelpValue } from '../types';
import { HELP_OPTIONS } from '../data/campaignData';

interface ValueSelectionCardProps {
  selectedValue: HelpValue;
  onSelectValue: (val: HelpValue) => void;
  onTriggerCheckout: (val: HelpValue) => void;
  cardId?: string;
}

// Miniaturas / Mockups discretos
const MAIN_COVER_IMAGE = '/assets/images/120_marcadores_catolicos_capa.webp';
const BONUS_1_IMAGE = '/images/BONOS 1.webp';
const BONUS_2_IMAGE = '/images/BONOS 2.webp';
const BONUS_3_IMAGE = '/images/BONOS 3.webp';

export const ValueSelectionCard: React.FC<ValueSelectionCardProps> = ({
  selectedValue,
  onSelectValue,
  onTriggerCheckout,
  cardId,
}) => {
  const formattedSelectedValue = `R$ ${selectedValue}`;
  const isBasic = selectedValue === 10;

  const planName = isBasic
    ? '120 Marcadores Católicos para Imprimir – Ajuda Essencial'
    : '120 Marcadores Católicos para Imprimir – Ajuda Completa + 3 Bônus';

  const planDescription = isBasic
    ? 'Receba os 120 Marcadores Católicos prontos para imprimir (8 categorias) e ajude uma campanha.'
    : 'Receba os 120 Marcadores Católicos prontos para imprimir (8 categorias) + 3 bônus exclusivos: Guia de Impressão Perfeita, Marcadores para Crianças e 20 Convites de Jesus. Sua ajuda chega a mais crianças.';

  return (
    <div
      id={cardId}
      className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between"
    >
      <div>
        {/* Título de seleção */}
        <h3 className="text-sm sm:text-base font-semibold text-[#0B2A5B] tracking-tight">
          Comece escolhendo o valor da sua ajuda:
        </h3>

        {/* Quatro chips de valor em reais */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-4">
          {HELP_OPTIONS.map((opt) => {
            const isSelected = selectedValue === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onSelectValue(opt.value)}
                className={`py-2.5 sm:py-3 px-2 sm:px-3 text-center rounded-xl font-semibold text-xs sm:text-base transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B2A5B] text-white border-[#0B2A5B] shadow-md ring-2 ring-[#0B2A5B]/20 scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Divisor suave */}
        <hr className="my-4 sm:my-6 border-slate-100" />

        {/* Nome do plano e descrição curta com mockups discretos */}
        <div className="mb-4 p-3 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#0B2A5B] block mb-0.5">
                {planName}
              </span>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                {planDescription}
              </p>
            </div>

            {/* Mockups discretos em miniatura */}
            <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-center py-1">
              {/* Capa do produto principal */}
              <div className="relative group/mockup" title="120 Marcadores Católicos">
                <img
                  src={MAIN_COVER_IMAGE}
                  alt="Produto Principal"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-cover border border-amber-300/80 shadow-2xs bg-white"
                  loading="lazy"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                  ✓
                </span>
              </div>

              {/* Bônus inclusos (na ajuda 20, 30 e 40) ou bloqueados discretos (na ajuda 10) */}
              {!isBasic ? (
                <>
                  <div className="relative" title="Bônus 1: Guia de Impressão">
                    <img
                      src={BONUS_1_IMAGE}
                      alt="Bônus 1"
                      className="w-8 h-10 sm:w-9 sm:h-11 rounded-lg object-cover border border-slate-200 shadow-2xs bg-white"
                      loading="lazy"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#C9A24B] rounded-full flex items-center justify-center text-white text-[7px] font-bold">
                      +
                    </span>
                  </div>
                  <div className="relative" title="Bônus 2: Marcadores Infantis">
                    <img
                      src={BONUS_2_IMAGE}
                      alt="Bônus 2"
                      className="w-8 h-10 sm:w-9 sm:h-11 rounded-lg object-cover border border-slate-200 shadow-2xs bg-white"
                      loading="lazy"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#C9A24B] rounded-full flex items-center justify-center text-white text-[7px] font-bold">
                      +
                    </span>
                  </div>
                  <div className="relative" title="Bônus 3: 20 Convites de Jesus">
                    <img
                      src={BONUS_3_IMAGE}
                      alt="Bônus 3"
                      className="w-8 h-10 sm:w-9 sm:h-11 rounded-lg object-cover border border-slate-200 shadow-2xs bg-white"
                      loading="lazy"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#C9A24B] rounded-full flex items-center justify-center text-white text-[7px] font-bold">
                      +
                    </span>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>

        {/* Título de benefícios */}
        <h4 className="text-xs sm:text-base font-semibold text-[#0B2A5B] mb-3 sm:mb-4">
          Itens inclusos no seu acesso:
        </h4>

        {/* Lista com checks e bônus */}
        <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-base text-slate-700">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
            <span>
              <strong>120 marcadores prontos para imprimir</strong> em 8 categorias
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
            <span>Oração curta no verso de cada marcador</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#C9A24B]/15 text-[#C9A24B] flex items-center justify-center">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
            <span>Acesso imediato por e-mail</span>
          </li>

          {/* Na ajuda de 20, 30 e 40: 3 bônus inclusos com check */}
          {!isBasic && (
            <>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-emerald-800">
                  <strong>Bônus 1:</strong> Guia de Impressão Perfeita
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-emerald-800">
                  <strong>Bônus 2:</strong> Marcadores para Crianças
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-emerald-800">
                  <strong>Bônus 3:</strong> 20 Convites de Jesus
                </span>
              </li>
            </>
          )}

          {/* Na ajuda de 10: os 3 bônus listados riscados em vermelho */}
          {isBasic && (
            <>
              <li className="flex items-start gap-3 opacity-75">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-rose-50 text-rose-500 border border-rose-200 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="line-through text-rose-600">
                  Bônus 1: Guia de Impressão Perfeita
                </span>
              </li>
              <li className="flex items-start gap-3 opacity-75">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-rose-50 text-rose-500 border border-rose-200 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="line-through text-rose-600">
                  Bônus 2: Marcadores para Crianças
                </span>
              </li>
              <li className="flex items-start gap-3 opacity-75">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-rose-50 text-rose-500 border border-rose-200 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="line-through text-rose-600">
                  Bônus 3: 20 Convites de Jesus
                </span>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Rodapé do card com preço, botão e microtexto */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Valor selecionado e pagamento único */}
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold text-[#0B2A5B] tracking-tight">
              {formattedSelectedValue}
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
              pagamento único
            </span>
          </div>

          <button
            type="button"
            onClick={() => onTriggerCheckout(selectedValue)}
            className="w-full sm:w-auto px-4 sm:px-8 py-3.5 bg-[#C9A24B] hover:bg-[#B58F38] active:bg-[#9E7828] text-white font-bold rounded-xl text-xs min-[360px]:text-[13px] sm:text-base shadow-md hover:shadow-lg transition-all duration-200 text-center cursor-pointer flex items-center justify-center gap-2 uppercase tracking-normal sm:tracking-wide whitespace-nowrap"
          >
            <span>Quero ajudar e receber meus marcadores</span>
          </button>
        </div>

        {/* Microtexto */}
        <p className="mt-4 text-center sm:text-right text-xs text-slate-500 font-normal">
          Pagamento seguro · Cartão e Pix · Garantia de 7 dias
        </p>
      </div>
    </div>
  );
};
