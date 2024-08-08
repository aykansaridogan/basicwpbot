# WhatsApp Botu

Bu proje, Node.js kullanarak basit bir WhatsApp botu oluşturmayı gösterir. Bot, `.`, yani tek bir nokta mesajına karşılık "Merhab" yanıtını verir.

## Başlarken

### Gereksinimler

- [Node.js](https://nodejs.org/) (v14 veya üstü)
- [npm](https://www.npmjs.com/) (Node.js ile birlikte gelir)

### Kurulum

1. **Proje Dizini Oluşturun**

    ```bash
    mkdir whatsapp-bot
    cd whatsapp-bot
    ```

2. **Yeni Bir Node.js Projesi Başlatın**

    ```bash
    npm init -y
    ```

3. **Gerekli Paketleri Yükleyin**

    ```bash
    npm install whatsapp-web.js qrcode-terminal
    ```

4. **Bot Kodu Yazın**

    Proje dizininde `bot.js` adında bir dosya oluşturun ve aşağıdaki kodu ekleyin:

    ```javascript
    const { Client, LocalAuth } = require('whatsapp-web.js');
    const qrcode = require('qrcode-terminal');

    const client = new Client({
        authStrategy: new LocalAuth()
    });

    client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true });
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.on('message', message => {
        if (message.body === '.') {
            message.reply('Merhab');
        }
    });

    client.initialize();
    ```

5. **Botu Çalıştırın**

    ```bash
    node bot.js
    ```

### QR Kodunu Tarama

Konsolda görünen QR kodunu WhatsApp Web üzerinden tarayarak botunuzu WhatsApp hesabınıza bağlayın.

## Görseller

Bu bölümde, botun nasıl çalıştığını gösteren bir GIF ekleyebilirsiniz:

![Bot Animasyonu](https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif)

## Katkıda Bulunanlar

- [Senin Adın](https://github.com/senin-adin)

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.
