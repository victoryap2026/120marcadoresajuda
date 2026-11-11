# Páginas de Esperança — Compra Solidária

Página única para campanha solidária de marcadores católicos de página para imprimir (*Marcadores Página Abençoada*).

Construída com **Vite**, **React 19**, **TypeScript** e **Tailwind CSS**.

---

## 🚀 Como subir no Git e na Vercel

### 1. Inicializar e subir no Git (GitHub / GitLab)

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar o repositório Git
git init

# Adicionar todos os arquivos (o .gitignore já está configurado)
git add .

# Criar o primeiro commit
git commit -m "feat: landing page Páginas de Esperança"

# Renomear a branch para main (padrão)
git branch -M main

# Conectar ao seu repositório no GitHub (substitua pela sua URL)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Enviar os arquivos
git push -u origin main
```

---

### 2. Publicar na Vercel

O projeto já contém o arquivo `vercel.json` e a pasta `public/` configurada para entrega estática automática.

#### Opção A — Pelo Painel da Vercel (Recomendado):
1. Acesse [vercel.com](https://vercel.com) e faça login.
2. Clique em **"Add New..."** → **"Project"**.
3. Selecione o repositório do GitHub que você acabou de subir.
4. A Vercel detectará automaticamente o framework **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `vite build` (ou `npm run build`)
   - **Output Directory**: `dist`
5. Clique em **"Deploy"**. Pronto! Sua página estará no ar com HTTPS gratuito.

#### Opção B — Pela CLI da Vercel:
```bash
npm i -g vercel
vercel
```

---

## ⚙️ Configuração dos Links de Checkout

Para inserir os links reais da sua plataforma de pagamento (Kiwify, Hotmart, Asaas, Mercado Pago, etc.), abra o arquivo:

`src/data/campaignData.ts`

E edite o objeto `CHECKOUT_URLS`:

```typescript
export const CHECKOUT_URLS: Record<HelpValue, string> = {
  20: 'https://pay.suaplataforma.com/checkout-20',
  40: 'https://pay.suaplataforma.com/checkout-40', // Seleção padrão
  80: 'https://pay.suaplataforma.com/checkout-80',
  100: 'https://pay.suaplataforma.com/checkout-100',
};
```

---

## 🛠️ Comandos de Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor local
npm run dev

# Testar o build de produção (gera a pasta dist/)
npm run build

# Visualizar o build de produção
npm run preview
```
