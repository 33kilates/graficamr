import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Sinaliza para o @prerenderer/rollup-plugin (Puppeteer) que a renderização inicial do React terminou.
// Usamos um pequeno atraso (setTimeout) para garantir que o DOM foi pintado antes da captura.
setTimeout(() => {
  document.dispatchEvent(new Event('custom-render-trigger'));
}, 100);
