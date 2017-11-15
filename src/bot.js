const fs = require('fs')
const path = require('path')
const Discord = require('discord.js')
const bot = new Discord.Client()
const UserData = require('./UserData')

// Loads configs
let config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'config.json')))

// Event handler for when the bot's ready
bot.on('ready', () => {
  console.log(`INFO >> Bot started.`)
})

// Event handler for when the bot detects a message
bot.on('message', (msg) => {

})

bot.on('presenceUpdate', (oldMember, newMember) => {
  let data = new UserData(newMember)

  console.log(data.getData())
})

bot.login(config.bot_token)
