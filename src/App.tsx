/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroBanner } from './components/HeroBanner';
import { CampaignsCarousel } from './components/CampaignsCarousel';
import { ThreeSteps } from './components/ThreeSteps';
import { LivingFaithSection } from './components/LivingFaithSection';
import { BookmarksBeautyGallery } from './components/BookmarksBeautyGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlueCategoriesBar } from './components/BlueCategoriesBar';
import { EverythingYouReceive } from './components/EverythingYouReceive';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaBar } from './components/FinalCtaBar';
import { Footer } from './components/Footer';
import { CheckoutNoticeModal } from './components/CheckoutNoticeModal';
import { UpgradeOfferModal } from './components/UpgradeOfferModal';
import { SocialProofNotification } from './components/SocialProofNotification';
import { HelpValue } from './types';
import { CHECKOUT_URLS, UPGRADE_CHECKOUT_URL } from './data/campaignData';

export default function App() {
  // R$ 20 selecionado por padrão
  const [selectedValue, setSelectedValue] = useState<HelpValue>(20);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState<HelpValue | number>(20);
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);

  const handleSelectValue = (val: HelpValue) => {
    setSelectedValue(val);
  };

  const handleTriggerCheckout = (val?: HelpValue) => {
    const valToUse = val ?? selectedValue;
    // Se o valor selecionado for R$ 10, abre o pop-up de upsell (R$ 14,90)
    if (valToUse === 10) {
      setUpgradeModalOpen(true);
      return;
    }

    proceedToCheckout(valToUse);
  };

  const proceedToCheckout = (val: HelpValue | number) => {
    const isUpgrade = val === 14.9 || val === 14.90;
    const rawTargetUrl = isUpgrade
      ? UPGRADE_CHECKOUT_URL
      : typeof val === 'number' && val in CHECKOUT_URLS
        ? CHECKOUT_URLS[val as HelpValue]
        : '#';

    if (rawTargetUrl && (rawTargetUrl as string) !== '#') {
      const search = window.location.search;
      let finalUrl = rawTargetUrl;
      if (search && search.length > 1) {
        const separator = finalUrl.includes('?') ? '&' : '?';
        finalUrl = `${finalUrl}${separator}${search.replace(/^\?/, '')}`;
      }
      window.location.href = finalUrl;
    } else {
      setModalValue(val);
      setModalOpen(true);
    }
  };

  const handleProceedWith10 = () => {
    setUpgradeModalOpen(false);
    proceedToCheckout(10);
  };

  const handleProceedWithUpgrade = () => {
    setUpgradeModalOpen(false);
    proceedToCheckout(14.9);
  };

  const scrollToChoice = () => {
    const el = document.getElementById('escolha-valor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#1E293B] flex flex-col overflow-x-hidden selection:bg-[#C9A24B]/20 selection:text-[#0B2A5B]">
      {/* 0) FAIXA SUPERIOR */}
      <TopBar />

      {/* 1) HERO */}
      <HeroBanner onScrollToChoice={scrollToChoice} />

      <main className="flex-1">
        {/* 2) CAMPANHAS QUE JÁ AJUDAMOS */}
        <CampaignsCarousel />

        {/* 3) 3 PASSOS SIMPLES */}
        <ThreeSteps />

        {/* 4) FEITO PARA QUEM VIVE A FÉ CATÓLICA */}
        <LivingFaithSection />

        {/* 5) VEJA A BELEZA DE CADA MARCADOR */}
        <BookmarksBeautyGallery />

        {/* 5.1) RECOMENDAÇÕES / HISTÓRIAS REAIS */}
        <TestimonialsSection />

        {/* 6) BARRA AZUL DAS 8 CATEGORIAS */}
        <BlueCategoriesBar />

        {/* 7) TUDO O QUE VOCÊ VAI RECEBER + BÔNUS */}
        <EverythingYouReceive />

        {/* 8) ESCOLHA O VALOR DA SUA AJUDA (id="escolha-valor") */}
        <OfferSection
          selectedValue={selectedValue}
          onSelectValue={handleSelectValue}
          onTriggerCheckout={handleTriggerCheckout}
        />

        {/* 9) GARANTIA DE 7 DIAS */}
        <GuaranteeSection />

        {/* 10) PERGUNTAS FREQUENTES */}
        <FaqSection />

        {/* 11) BARRA FINAL DE CHAMADA PARA AÇÃO */}
        <FinalCtaBar onScrollToChoice={scrollToChoice} />
      </main>

      {/* 12) RODAPÉ */}
      <Footer />

      {/* Notificação social proof lateral direita superior a cada 15 segundos */}
      <SocialProofNotification />

      {/* Pop-up de Upsell (R$ 14,90) para quem escolhe R$ 10 */}
      <UpgradeOfferModal
        isOpen={upgradeModalOpen}
        onClose={() => setUpgradeModalOpen(false)}
        onProceedWith10={handleProceedWith10}
        onProceedWithUpgrade={handleProceedWithUpgrade}
      />

      {/* Modal explicativo de checkout para quando href="#" */}
      {modalOpen && (
        <CheckoutNoticeModal
          value={modalValue}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
