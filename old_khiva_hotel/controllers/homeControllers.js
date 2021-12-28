const Person = require('../models/models')
const Telegram = require('node-telegram-bot-api')

const token = '5030441280:AAHynBcLfn0_u5y-PV2A8UovBRNza1sb5w8'
const bot = new Telegram(token, {polling: true});
const admin_1 = 273832648
const admin_2 = 917489514
const maker = 1135938477

const getHomePage = (req,res)=>{
  res.render('home',{
    title:'Home page'
  })
}

const getAboutPage = (req,res)=>{
  res.render('about',{
    title:'About Page',
  })
}

const getRoomsPage = (req,res)=>{
  res.render('room',{
    title:'Rooms Page'
  })
}

const getContactPage = (req,res)=>{
  res.render('contact',{
    title:"Contact Page"
  })
}


const getServicesPage = (req,res)=>{
  res.render('services',{
    title:'Services Page'
  })
}

const setContactPage = async (req,res)=>{
  try {
     const inf = {
      name:req.body.name,
      email:req.body.email,
      message:req.body.message
    }
    await Person.create(inf)
    res.redirect('/')
    bot.on("message",(msg)=>{
      const chatId = msg.chat.id;
      console.log(msg)
      if(msg.from.id === maker){
        if(msg.text === '/show'){
          bot.sendMessage(chatId, JSON.stringify(inf))
        }
        
      } 
      if(msg.from.id === admin_1){
        if(msg.text === '/show'){
          bot.sendMessage(chatId, JSON.stringify(inf))
        }
      }
      if(msg.from.id === admin_2){
        if(msg.text === '/show'){
          bot.sendMessage(chatId, JSON.stringify(inf))
        }
      } 
    })
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getHomePage,
  getAboutPage,
  getRoomsPage,
  getContactPage,
  getServicesPage,
  setContactPage,
}