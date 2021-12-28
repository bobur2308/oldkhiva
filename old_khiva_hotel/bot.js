const Telegram = require('node-telegram-bot-api')

const token = '5030441280:AAHynBcLfn0_u5y-PV2A8UovBRNza1sb5w8'
const bot = new Telegram(token, {polling: true});
const admin_1 = 273832648
const admin_2 = 917489514
const maker = 1135938477
bot.on("message",(msg)=>{
  console.log(msg);
  const chatId = msg.chat.id;
  
  if(msg.from.id === maker){
    bot.sendMessage(chatId, 'Hello world')
  } 
  if(msg.from.id === admin_1){
    bot.sendMessage(chatId, 'Hello world')
  } 
  if(msg.from.id === admin_2){
    bot.sendMessage(chatId, 'Hello world')
  } 
})

