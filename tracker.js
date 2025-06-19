// Reemplaza esta URL con la tuya
const webhookURL = 'https://discord.com/api/webhooks/1385310066906763396/qZOuYGCp_kOqIhG85DCsb4z9KdTtubw_p_w5aSNnrmQ_pCru-S54xOtnLNvijgJR0GZB';

const now = new Date();
const embed = {
  title: '📥 Nueva visita a tu página',
  color: 0xff69b4, // color rosita
  fields: [
    {
      name: '🧭 Página visitada',
      value: window.location.pathname,
      inline: false
    },
    {
      name: '🕒 Hora local',
      value: now.toLocaleString(),
      inline: true
    },
    {
      name: '🌐 Navegador',
      value: navigator.userAgent,
      inline: false
    },
    {
      name: '🖥️ Resolución de pantalla',
      value: `${screen.width}x${screen.height}`,
      inline: true
    },
    {
      name: '🗣️ Idioma',
      value: navigator.language,
      inline: true
    }
  ],
  footer: {
    text: '✨ Visita detectada automáticamente',
  },
  timestamp: new Date().toISOString()
};

fetch(webhookURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: '🌐 Notificador Web',
    embeds: [embed]
  })
}).catch(console.error);