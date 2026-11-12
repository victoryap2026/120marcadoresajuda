import { BookmarkItem, HelpValue } from '../types';

/**
 * CONFIGURAÇÃO DE LINKS DE CHECKOUT:
 * Links reais da plataforma de pagamento (Cakto, Hotmart, Kiwify, etc.)
 * para cada valor em R$. Se estiver vazio ou "#", abre o aviso demonstrativo.
 */
export const CHECKOUT_URLS: Record<HelpValue, string> = {
  10: 'https://ggcheckout.app/checkout/v5/JgwM28YCKf89wZITmFvoDK',
  20: 'https://ggcheckout.app/checkout/v5/PxVg2L6Dm1s8ZhGdF3HVzL',
  30: 'https://ggcheckout.app/checkout/v5/fI9Ea0IbwOvzz4AkMRCrKa',
  40: 'https://ggcheckout.app/checkout/v5/KaWBDF2qqP0Uy6kkMfgBWU',
};

/**
 * LINK DE CHECKOUT DO UPGRADE / UPSELL (R$ 14,90):
 * Link especial para a oferta de R$ 14,90 no pop-up.
 */
export const UPGRADE_CHECKOUT_URL: string = 'https://ggcheckout.app/checkout/v5/syb9QpZ6mXKuNifA3Ngfo3';

export const HELP_OPTIONS: { value: HelpValue; label: string }[] = [
  { value: 10, label: 'R$ 10' },
  { value: 20, label: 'R$ 20' },
  { value: 30, label: 'R$ 30' },
  { value: 40, label: 'R$ 40' },
];

export const CATEGORIES = [
  'Nossa Senhora',
  'Sagrado Coração de Jesus',
  'Santos e Santas',
  'Anjos e Arcanjos',
  'Salmos',
  'Versículos de Fé',
  'Terço e Orações',
  'Intenções e Gratidão',
] as const;

export const SAMPLE_BOOKMARKS: BookmarkItem[] = [
  {
    id: 'nossa-senhora-gracas',
    title: 'Nossa Senhora das Graças',
    category: 'Nossa Senhora',
    image: '/assets/images/bookmark_nossa_senhora_1793911229075.webp',
    verseOrExcerpt: 'Ó Maria concebida sem pecado, rogai por nós que recorremos a Vós.',
    backPrayerTitle: 'Oração da Medalha Milagrosa',
    backPrayer:
      'Ó Maria Imaculada, Mãe de Deus e nossa Mãe, ao contemplar vossas mãos abertas derramando torrentes de graças, consagramos nossos lares e todas as crianças enfermas. Dai-nos paciência nas tribulações e a doce certeza da vossa maternal intercessão. Amém.',
  },
  {
    id: 'sagrado-coracao',
    title: 'Sagrado Coração de Jesus',
    category: 'Sagrado Coração de Jesus',
    image: '/assets/images/bookmark_sagrado_coracao_1793911228362.webp',
    verseOrExcerpt: 'Vinde a Mim todos vós que estais cansados e sobrecarregados, e Eu vos aliviarei.',
    backPrayerTitle: 'Ato de Confiança no Sagrado Coração',
    backPrayer:
      'Jesus manso e humilde de Coração, fazei o meu coração semelhante ao vosso. Em vossa santa chaga coloco as minhas aflições, a saúde dos pequeninos e a serenidade dos lares que enfrentam o sofrimento. Sagrado Coração de Jesus, em Vós confio e espero. Amém.',
  },
  {
    id: 'sao-miguel',
    title: 'São Miguel Arcanjo',
    category: 'Anjos e Arcanjos',
    image: '/assets/images/bookmark_sao_miguel_1793911228596.webp',
    verseOrExcerpt: 'Quem como Deus? Ninguém como Deus!',
    backPrayerTitle: 'Oração de Proteção a São Miguel',
    backPrayer:
      'São Miguel Arcanjo, defendei-nos no combate, sede nosso refúgio contra a maldade e as ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos; e vós, príncipe da milícia celeste, protegei cada leito de hospital e cada lar com vossa espada de luz. Amém.',
  },
  {
    id: 'santa-teresinha',
    title: 'Santa Teresinha do Menino Jesus',
    category: 'Santos e Santas',
    image: '/assets/images/bookmark_santa_teresinha_1793969518364.webp',
    verseOrExcerpt: 'Passarei o meu Céu fazendo o bem sobre a terra.',
    backPrayerTitle: 'Oração das Rosas de Santa Teresinha',
    backPrayer:
      'Santa Teresinha do Menino Jesus, que prometestes fazer cair do Céu uma chuva de rosas, acolhei a minha prece. Ensinai-me o caminho do amor puro, da confiança filial e do abandono nos momentos de dor e fragilidade. Rogai por nós. Amém.',
  },
  {
    id: 'santo-anjo',
    title: 'Santo Anjo da Guarda',
    category: 'Anjos e Arcanjos',
    image: '/assets/images/bookmark_anjo_guarda_1793969533650.webp',
    verseOrExcerpt: 'Aos seus anjos dará ordens a teu respeito para que te guardem em todos os teus caminhos.',
    backPrayerTitle: 'Consagração ao Anjo da Guarda',
    backPrayer:
      'Santo Anjo do Senhor, meu zeloso guardião, se a ti me confiou a piedade divina, sempre me rege, me guarda, me governa e me ilumina. Acompanhai com ternura os pequeninos no sono e na vigília de cada dia de tratamento. Amém.',
  },
  {
    id: 'salmo-23',
    title: 'Salmo 23 - O Bom Pastor',
    category: 'Salmos',
    image: '/assets/images/bookmark_bom_pastor_1793969546531.webp',
    verseOrExcerpt: 'O Senhor é o meu pastor, nada me faltará. Em verdes prados me faz repousar.',
    backPrayerTitle: 'Prece de Serenidade no Bom Pastor',
    backPrayer:
      'Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque Tu estás comigo; a tua vara e o teu cajado me consolam. Derramai, Senhor, o bálsamo da paz e da cura sobre todos os corações aflitos. Amém.',
  },
  {
    id: 'sao-jose',
    title: 'São José com o Menino Jesus',
    category: 'Santos e Santas',
    image: '/assets/images/bookmark_sao_jose_1793969566954.webp',
    verseOrExcerpt: 'Ide a José; fazei o que ele vos disser.',
    backPrayerTitle: 'Oração a São José Protetor das Famílias',
    backPrayer:
      'Glorioso São José, pai nutrício de Jesus e custódio da Sagrada Família de Nazaré, estendei vosso manto protetor sobre todos os lares, especialmente sobre os pais e mães que velam pela saúde de seus filhos. Alcançai-nos uma fé inabalável. Amém.',
  },
  {
    id: 'jesus-misericordioso',
    title: 'Jesus Misericordioso',
    category: 'Versículos de Fé',
    image: '/assets/images/bookmark_misericordia_1793969583858.webp',
    verseOrExcerpt: 'Jesus, eu confio em Vós.',
    backPrayerTitle: 'Oração da Divina Misericórdia',
    backPrayer:
      'Ó Sangue e Água que brotastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós! Derramai o bálsamo da esperança, da saúde e da paz sobre cada criança e família necessitada. Amém.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '1',
    title: 'Imprima',
    description: 'Na sua casa ou em uma gráfica rápida.',
  },
  {
    number: '2',
    title: 'Recorte',
    description: 'Pelo contorno e use na sua Bíblia, missal ou livro de orações.',
  },
  {
    number: '3',
    title: 'Reze',
    description:
      'Ao fechar o livro, leia a oração curta no verso. São Páginas de Esperança em um minuto de oração.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Isto é uma doação?',
    answer:
      'Não. Você adquire um produto digital completo e recebe tudo na hora. Parte do lucro é destinado ao apoio de crianças em tratamento de saúde.',
  },
  {
    question: 'A quem chega a ajuda?',
    answer:
      'A crianças em tratamento de saúde. Parte do lucro arrecadado é destinado a elas e suas famílias.',
  },
  {
    question: 'Como recebo os marcadores?',
    answer:
      'Diretamente no seu e-mail, imediatamente após a confirmação do pagamento, com acesso vitalício e arquivos organizados.',
  },
  {
    question: 'Preciso de gráfica profissional?',
    answer:
      'Não. Você pode imprimir em casa com qualquer impressora comum ou levar o arquivo a uma gráfica rápida ou papelaria do seu bairro.',
  },
  {
    question: 'Posso pedir reembolso?',
    answer:
      'Sim! Você tem garantia incondicional de 7 dias após a compra para solicitar a devolução de 100% do seu dinheiro sem burocracia.',
  },
  {
    question: 'Por que ajudar?',
    answer:
      'Para uma família, o tratamento médico de um filho transforma toda a rotina: viagens, remédios e dias longe de casa. Qualquer apoio alivia esse peso e renova a esperança. É sobre isso este projeto.',
  },
  {
    question: 'Como funciona a compra?',
    answer:
      'Você escolhe o valor da sua ajuda (R$ 10, R$ 20, R$ 30 ou R$ 40), realiza o pagamento seguro por Pix ou cartão e recebe os 120 marcadores em qualquer valor, além dos 3 bônus exclusivos em apoios a partir de R$ 20. O acesso chega no seu e-mail imediatamente.',
  },
  {
    question: 'Posso imprimir mais de uma vez?',
    answer:
      'Sim! O arquivo é seu para sempre. Você pode imprimir quantas vezes quiser para uso pessoal, para presentear familiares e afilhados ou compartilhar na sua comunidade e paróquia.',
  },
  {
    question: 'É um arquivo digital?',
    answer:
      'Sim. Você recebe os arquivos em alta resolução (PDFs em tamanho padrão prontos para imprimir) no seu e-mail com acesso permanente.',
  },
];

export interface BonusItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  imageUrl?: string;
}

export const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    tag: 'BÔNUS 1',
    title: 'Guia de Impressão Perfeita',
    description:
      'O passo a passo completo para imprimir seus marcadores com qualidade profissional: papel recomendado, gramatura ideal, plastificação, como recortar e dicas práticas.',
    badge: 'INCLUSO',
    imageUrl: '/images/BONOS 1.webp',
  },
  {
    id: 'bonus-2',
    tag: 'BÔNUS 2',
    title: 'Marcadores para Crianças',
    description:
      'Histórias bíblicas para o coração: marcadores infantis ilustrados para ensinar a fé católica aos pequenos com muito amor e cor.',
    badge: 'INCLUSO',
    imageUrl: '/images/BONOS 2.webp',
  },
  {
    id: 'bonus-3',
    tag: 'BÔNUS 3',
    title: '20 Convites de Jesus',
    description:
      '20 mensagens diferentes escritas como um convite pessoal para aproximar alguém de Jesus. Ideais para evangelizar, convidar para a Igreja ou acolher quem deseja voltar para Deus.',
    badge: 'INCLUSO',
    imageUrl: '/images/BONOS 3.webp',
  },
];

export interface CampaignPrint {
  id: string;
  title: string;
  imageUrl?: string;
}

export const CAMPAIGN_PRINTS: CampaignPrint[] = [
  {
    id: 'campanha-1',
    title: 'Bebê de 11 meses com fibrose cística',
    imageUrl: '/images/campanha_01.webp',
  },
  {
    id: 'campanha-3',
    title: 'Bebê de 1 mês e meio com glaucoma congênito',
    imageUrl: '/images/campanha_03.webp',
  },
  {
    id: 'campanha-4',
    title: 'Bebê de 11 meses com condição neurológica',
    imageUrl: '/images/campanha_04.webp',
  },
  {
    id: 'campanha-7',
    title: 'Menina de 1 ano e 8 meses em tratamento',
    imageUrl: '/images/campanha_07.webp',
  },
  {
    id: 'campanha-8',
    title: 'Riley fez cirurgia de coração e aguarda transplante',
    imageUrl: '/images/campanha_08.webp',
  },
  {
    id: 'campanha-9',
    title: 'Kaiden sorri sempre, apesar da doença',
    imageUrl: '/images/campanha_09.webp',
  },
  {
    id: 'campanha-10',
    title: 'Honzík luta contra um câncer no fígado',
    imageUrl: '/images/campanha_10.webp',
  },
  {
    id: 'campanha-11',
    title: 'Menina que sorri durante o tratamento contra o câncer',
    imageUrl: '/images/campanha_11.webp',
  },
];
