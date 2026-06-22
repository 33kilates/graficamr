import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3055;
const distPath = join(__dirname, 'dist');
const indexPath = join(distPath, 'index.html');

async function prerender() {
  console.log('Iniciando pre-renderização...');

  // Iniciar servidor express temporário para servir a pasta dist
  const app = express();
  app.use(express.static(distPath));
  const server = app.listen(PORT);

  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Otimizações para carregamento mais rápido
    await page.setCacheEnabled(false);

    // Carregar a página do servidor local
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Aguardar o evento customizado que adicionamos no main.tsx
    // (O Vite/React já deve ter renderizado)
    await page.evaluate(() => {
      return new Promise((resolve) => {
        if (document.getElementById('root').innerHTML.trim().length > 0) {
          resolve(); // Já renderizou
        } else {
          document.addEventListener('custom-render-trigger', resolve, { once: true });
          // Fallback
          setTimeout(resolve, 5000);
        }
      });
    });

    // Pega o HTML completo renderizado
    let html = await page.content();
    
    // Limpar tags indesejadas que o React insere (se houver) ou coisas que não queremos no HTML estático
    // Não precisa de muito tratamento para um app SPA simples, o hydration do React vai assumir o controle depois.

    await browser.close();

    // Sobrescrever o index.html com o conteúdo renderizado
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('Pré-renderização concluída com sucesso!');
    
  } catch (error) {
    console.error('Erro durante a pré-renderização:', error);
    process.exit(1);
  } finally {
    server.close();
  }
}

prerender();
