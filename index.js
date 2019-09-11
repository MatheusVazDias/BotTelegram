const TelegramBot = require( `node-telegram-bot-api` )

const TOKEN = `901645873:AAHRonxJZGm1eHeqokohIoUkjCpBEfeIeOU`

const bot = new TelegramBot( TOKEN, { polling: true } )


bot.on('new_chat_members', (msg) => {
    bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, seja bem vindo ao devBage!!
O objetivo do grupo é juntar todo o povo de TI da cidade e região em um único lugar indiferente de Instituição/Empresa/etc.
Nosso foco aqui é formar uma comunidade de TI para tirar duvidas, compartilhar conhecimento, organizar/divulgar eventos, entre outras coisas. Além disso temos o nosso código de conduta que pode ser acessado no link: 
https://github.com/devbage/codigo-de-conduta`)
 })

 bot.on('left_chat_member', (msg) => {
    bot.sendMessage(msg.chat.id, `Está cedo para ir embora ${msg.from.first_name}! :( `)
 })
