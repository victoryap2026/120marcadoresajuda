import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FooterProps {
  onScrollToChoice?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [modalType, setModalType] = useState<'termos' | 'privacidade' | null>(null);

  return (
    <>
      <footer className="w-full border-t border-slate-200/80 bg-white py-10 px-4 text-center text-xs sm:text-sm text-slate-500">
        <div className="max-w-4xl mx-auto space-y-3.5">
          {/* Marca no rodapé */}
          <h3 className="font-serif text-base font-bold text-[#0B2A5B]">
            Páginas de Esperança
          </h3>

          {/* Links legais */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setModalType('termos')}
              className="text-slate-600 hover:text-[#0B2A5B] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Termos de uso
            </button>
            <span className="text-slate-300">·</span>
            <button
              type="button"
              onClick={() => setModalType('privacidade')}
              className="text-slate-600 hover:text-[#0B2A5B] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Política de privacidade
            </button>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-xs">
            © Páginas de Esperança. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Modal de Termos de Uso / Política de Privacidade */}
      {modalType && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h4 className="font-serif font-bold text-lg text-[#0B2A5B]">
                {modalType === 'termos' ? 'Termos de Uso' : 'Política de Privacidade'}
              </h4>
              <button
                type="button"
                onClick={() => setModalType(null)}
                aria-label="Fechar"
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              {modalType === 'termos' ? (
                <>
                  <p>
                    <strong>1. Objeto:</strong> Esta página realiza a entrega do produto digital
                    "120 Marcadores Católicos de Páginas", composto por arquivos em altíssima resolução prontos para impressão pessoal.
                  </p>
                  <p>
                    <strong>2. Escolha de Valor:</strong> O comprador escolhe livremente o valor da sua contribuição
                    (R$ 10, R$ 20, R$ 30 ou R$ 40), recebendo o conteúdo digital correspondente ao plano selecionado.
                  </p>
                  <p>
                    <strong>3. Entrega:</strong> O acesso é enviado imediatamente por e-mail após a confirmação do
                    pagamento, com link direto para download dos arquivos.
                  </p>
                  <p>
                    <strong>4. Garantia e Reembolso:</strong> O comprador tem até 7 dias para solicitar o reembolso total
                    caso não fique satisfeito.
                  </p>
                  <p>
                    <strong>5. Destinação dos Recursos:</strong> Parte do lucro é destinado ao apoio de crianças em tratamento de saúde.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Proteção de Dados:</strong> Seus dados (nome, e-mail e dados de faturamento) são
                    utilizados exclusivamente para processar o pagamento e enviar o produto digital adquirido.
                  </p>
                  <p>
                    <strong>2. Segurança:</strong> Todas as transações ocorrem em ambiente criptografado e seguro com
                    certificado SSL. Não armazenamos dados confidenciais de cartões de crédito.
                  </p>
                  <p>
                    <strong>3. Comunicação:</strong> Apenas enviamos o link de acesso aos seus marcadores e mensagens
                    estritamente ligadas à sua compra. Não compartilhamos suas informações com terceiros.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-[#0B2A5B] text-white rounded-lg text-xs font-semibold hover:bg-[#071D40] transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
