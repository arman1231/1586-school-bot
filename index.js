const TelegramApi = require("node-telegram-bot-api");

const token = "5547233086:AAGAKj7G1emIx3LaDDij81u21e2xVEQB5-A";

const bot = new TelegramApi(token, { polling: true });

// bot.on('message', async msg => {
//     console.log(msg);
//     const name = msg.from.first_name
//     const text = msg.text;
//     const chatId = msg.chat.id;
//     // if (text.) {
//     //     await bot.sendMessage(chatId, `Приветствую тебя ${name}! Прошло 14 лет, а ты всё не звонил. Скажи мне что нибудь.`)
//     // }
//     // if (text !== '/start') {
//     //     await bot.sendMessage(chatId, `${name} ты написал мне ${text}. Садись 2. Ха-ха-ха.`)
//     // }
// })

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/AnatolyViktorovichBot (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  const user = msg.from.first_name ? msg.from.first_name : msg.from.username;
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  const phrases = [
    `${user} говорите, вас не слышно?`,
    `${user} садись, 2`,
    `${user} а ты когда последний раз был школе?`,
    `${user} от мертвого остла уши, получите у Пушкина`,
    `${user} я против политики в этом чате!`,
    `${user} приветствую!`,
    `${user} останешься после уроков`,
    `${user} сегодня проходим "Руслан и Людмила"`,
    `${user} охарактеризуй личность Чичикова`,
    `${user} звонок для учителя!`,
    `${user} я застрял в веб пространстве, теперь я навсегда тут...`,
  ];
  const rand = Math.floor(Math.random() * 11);

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, phrases[rand]);
});

// const { Telegraf } = require('telegraf');
// require('dotenv').config()

// const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.start((ctx) => ctx.reply(console.log(ctx)));
// // bot.help((ctx) => ctx.reply('Send me a sticker'));
// // bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('hi'));
// // bot.hears('hi', (ctx) => console.log(ctx));
// bot.launch();

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));
