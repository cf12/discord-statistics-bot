const fs = require('fs')
const path = require('path')
const Discord = require('discord.js')
const bot = new Discord.Client()
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const PresenceEntry = require('./PresenceEntry')
const MessageEntry = require('./MessageEntry')
const VoiceEntry = require('./VoiceEntry')
const User = require('./User')

const dirExists = fs.existsSync((path.join(__dirname, '..', 'data')))
const dbExists = fs.existsSync((path.join(__dirname, '..', 'data', 'db.json')))

function getMsgId () {
  let id = db.get('id.msg').value() + 1

  db.set('id.msg', id)
    .write()

  return id
}

function initUser (user) {
  if (db.get(`users.${user.id}`).value()) return db.get(`users.${user.id}`)
  else {
    const template = {
      messages: [],
      states: {
        presence: [],
        voice: []
      }
    }
    db.set(`users.${user.id}`, Object.assign({ user: user.getData() }, template))
      .write()

    return db.get(`users.${user.id}`)
  }
}

if (!dirExists) fs.mkdirSync(path.join(__dirname, '..', 'data'))
if (!dbExists) fs.openSync(path.join(__dirname, '..', 'data', 'db.json'), 'w')

const adapter = new FileSync(path.join(__dirname, '..', 'data', 'db.json'))
const db = low(adapter)

db.defaults({
  id: {
    msg: 0
  },
  users: {}
})
.write()

// Loads configs
let config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'config.json')))

// Event handler for when the bot's ready
bot.on('ready', () => {
  console.log(`INFO >> Bot started.`)
})

// Event handler for when the bot detects a message
bot.on('message', (msg) => {
  const userData = new User(msg.member)
  const msgData = new MessageEntry(msg, getMsgId())

  initUser(userData)
    .get('messages')
    .push(msgData.getData())
    .write()
})

bot.on('presenceUpdate', (oldMember, newMember) => {
  const userData = new User(newMember)
  const presenceData = new PresenceEntry(newMember)

  initUser(userData)
    .get('states.presence')
    .push(presenceData.getData())
    .write()
})

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  const userData = new User(newMember)
  const presenceData = new VoiceEntry(newMember)

  initUser(userData)
    .get('states.voice')
    .push(presenceData.getData())
    .write()
})

bot.login(config.bot_token)
