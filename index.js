const TelegramApi = require("node-telegram-bot-api");
require("dotenv").config();
const https = require("https");
const bot = new TelegramApi(process.env.BOT_TOKEN, { polling: true });

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
  bot.sendMessage(chatId, chatId);
  console.log(chatId);
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
    `${user} я застрял в веб пространстве, кажется теперь я навсегда тут...`,
  ];
  const rand = Math.floor(Math.random() * 11);

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, phrases[rand]);
});

// https.get(`https://api.telegram.org/AnatolyViktorovichBot:${process.env.BOT_TOKEN}/getUpdates`, res => {
//   let data = [];
//   const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//   console.log('Status Code:', res.statusCode);
//   console.log('Date in Response header:', headerDate);

//   res.on('data', chunk => {
//     data.push(chunk);
//   });

//   res.on('end', () => {
//     console.log('Response ended: ');
//     const users = JSON.parse(Buffer.concat(data).toString());

//   // console.log(users);
//   });
// }).on('error', err => {
//   console.log('Error: ', err.message);
// });

// const getUpd = () => {
//     return fetch(`https://api.telegram.org/bot:${process.env.BOT_TOKEN}/getUpdates`).then(res => res.json).then(data => data)
// }
const date = new Date().toLocaleDateString().substring(0, 6);
const bdayDates = [
  {
    name: "Таня Белых",
    dob: "23.10.",
    sex: "дорогая",
    isCongrtatulated: false,
  },
  {
    name: "Аня Агасян",
    dob: "11.11.",
    sex: "дорогая",
    isCongrtatulated: false,
  },
  {
    name: "Сандро Твалиашвили",
    dob: "25.11.",
    sex: "дорогой",
    isCongrtatulated: false,
  },
  {
    name: "Руслан Кубиев",
    dob: "16.12.",
    sex: "дорогой",
    isCongrtatulated: false,
  },
  {
    name: "Вова Веселов",
    dob: "17.01.",
    sex: "дорогой",
    isCongrtatulated: false,
  },
  {
    name: "Бекхан Гудиев",
    dob: "28.02.",
    sex: "дорогой",
    isCongrtatulated: false,
  },
  {
    name: "Саша Лутовинов",
    dob: "28.03.",
    sex: "дорогой",
    isCongrtatulated: false,
  },
  {
    name: "Галя Оллерова",
    dob: "26.04.",
    sex: "дорогая",
    isCongrtatulated: false,
  },
  {
    name: "Кирилл Дундуков",
    dob: "06.05.",
    sex: "дорогой",
    isCongrtatulated: false,
  },
  {
    name: "Катя Суховерхова",
    dob: "08.05.",
    sex: "дорогая",
    isCongrtatulated: false,
  },
  {
    name: "Рита Бабаева",
    dob: "17.06.",
    sex: "дорогая",
    isCongrtatulated: false,
  },
  {
    name: "Арман Черхаров",
    dob: "19.06.",
    sex: "дорогой",
    isCongrtatulated: false,
  },
  {
    name: "Женя Помаскина",
    dob: "06.07.",
    sex: "дорогая",
    isCongrtatulated: false,
  },
  {
    name: "Валера Жутов",
    dob: "06.07.",
    sex: "дорогой",
    isCongrtatulated: false,
  },
  {
    name: "Оля Зеленина",
    dob: "14.07.",
    sex: "дорогая",
    isCongrtatulated: false,
  },
  {
    name: "Кирилл Гаврилин",
    dob: "23.08.",
    sex: "дорогой",
    isCongrtatulated: false,
  },
  {
    name: "Нарэ Сагиян",
    dob: "29.08.",
    sex: "дорогая",
    isCongrtatulated: false,
  },
  {
    name: "Лиза Эбаноидзе",
    dob: "23.09.",
    sex: "дорогая",
    isCongrtatulated: false,
  },
  {
    name: "Рита Анисимова",
    dob: "22.09.",
    sex: "дорогая",
    isCongrtatulated: false,
  },
];
function congratWithBDay(bdayDates) {
  bdayDates.forEach((person) => {
    if (date === person.dob && !person.isCongrtatulated) {
      // console.log(`${person.name} с днем рождения ${person.sex}! Оставайся таким же красивым и добрым человеком! Передаю слово твоим однокласникам.`);
      bot.sendMessage(
        "-1001589814315",
        `${person.name}, поздравляю с днем рождения, ${person.sex}! Оставайся таким же красивым и добрым человеком! Передаю слово твоим однокласникам.`
      );
      person.isCongrtatulated = true;
    }
  });
}
congratWithBDay(bdayDates);
const day = 60000 * 1440
setInterval(() => congratWithBDay(bdayDates), day);

// console.log(congratWithBDay());

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
