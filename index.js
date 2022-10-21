const TelegramApi = require('node-telegram-bot-api');

const token = '5547233086:AAGAKj7G1emIx3LaDDij81u21e2xVEQB5-A';

const bot = new TelegramApi(token, { polling: true});

bot.on('message', async msg => {
    console.log(msg);
    const name = msg.from.first_name
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/start') {
        await bot.sendMessage(chatId, `Приветствую тебя ${name}! Прошло 14 лет, а ты всё не звонил. Скажи мне что нибудь.`)
    }
    if (text !== '/start') {
        await bot.sendMessage(chatId, `${name} ты написал мне ${text}. Садись 2. Ха-ха-ха.`)
    }
})

bot.on('message', (msg) => {

})