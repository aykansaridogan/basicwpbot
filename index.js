const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

// Initialize WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-gpu'],
    },
    restartOnAuthFail: true,
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.3000.1014670596-alpha.html',
    }
});

// Event handlers
// QR kodunu konsolda göster
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// İstemci hazır olduğunda bu fonksiyon çalışacak
client.on('ready', () => {
    console.log('Client is ready!');
});

// Mesaj alındığında bu fonksiyon çalışacak
client.on('message', message => {
    if (message.body === '.') {
        message.reply('Merhaba');
    }
});

// İstemciyi başlat
client.initialize();