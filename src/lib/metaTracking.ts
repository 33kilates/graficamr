/**
 * Meta Tracking — Pixel + Conversions API (CAPI)
 * 
 * Dispara evento "Contact" no browser (fbq) e server-side (CAPI)
 * em cada clique de WhatsApp para otimização de campanhas Meta Ads.
 * 
 * O envio duplo (browser + server) garante:
 * - Deduplicação automática via event_id
 * - Resiliência contra bloqueadores de anúncio
 * - Melhor match rate e quality score no Events Manager
 */

const PIXEL_ID = '3238458039648184';
const ACCESS_TOKEN = 'EAAN5dWZBsBzsBRqN6YQQpAPkBROrsFidrwDtZBzU0j9gISg9HZBwaB1vAsUwRM73cB5PdLS0uZC1LJZADeQyAB0QbcFBWcAsmy9gdXWu8EliyaOoFxf1Rki7OZAfuZBJbm5GGiA4fZCy7uNeY6tCY5Ad2AuEe1ZAFDXCjF8MQdbrrnBY3cbZCBWmXmIQzpF8ChCTUYWgZDZD';
const API_VERSION = 'v21.0';

/** Gera um ID único para deduplicação entre Pixel e CAPI */
function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}

/** Hash SHA-256 para dados do usuário (CAPI exige hash) */
export async function sha256(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(value.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Coleta dados do navegador para melhorar o match rate */
function getUserData() {
  return {
    client_user_agent: navigator.userAgent,
    // fbp e fbc são cookies do Meta Pixel — melhoram o match
    fbp: getCookie('_fbp') || undefined,
    fbc: getCookie('_fbc') || undefined,
  };
}

/** Lê cookie por nome */
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Dispara evento "Contact" via browser (Pixel) e server-side (CAPI).
 * Chamar em todo clique de WhatsApp.
 */
export async function trackContact(source?: string): Promise<void> {
  const eventId = generateEventId();
  const eventTime = Math.floor(Date.now() / 1000);
  const sourceUrl = window.location.href;

  // 1. Disparo browser (Meta Pixel)
  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', 'Contact', {
      content_name: source || 'WhatsApp CTA',
    }, { eventID: eventId });
  }

  // 2. Disparo server-side (Conversions API)
  try {
    const userData = getUserData();

    const payload = {
      data: [
        {
          event_name: 'Contact',
          event_time: eventTime,
          event_id: eventId,
          event_source_url: sourceUrl,
          action_source: 'website',
          user_data: {
            client_user_agent: userData.client_user_agent,
            fbp: userData.fbp,
            fbc: userData.fbc,
          },
          custom_data: {
            content_name: source || 'WhatsApp CTA',
          },
        },
      ],
    };

    // Envia para a Graph API do Meta (CAPI)
    await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true, // Garante envio mesmo se a página fechar
      }
    );
  } catch (error) {
    // Silencia erros — tracking nunca deve bloquear UX
    console.warn('[MR Tracking] CAPI error:', error);
  }
}

/**
 * Dispara evento "ViewContent" para ações de scroll profundo.
 * Útil para funis avançados.
 */
export function trackViewContent(contentName: string): void {
  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', 'ViewContent', {
      content_name: contentName,
    });
  }
}
