module.exports = class MessageEntry {
  constructor (msg, msgId) {
    let user = msg.author
    let member = msg.member

    this.data = {
      id: msgId,

      user: {
        username: user.username,
        displayname: member.displayName,
        discriminator: user.discriminator,
        id: user.id,
        bot: member.user.bot
      },

      message: {
        content: msg.content,
        id: msg.id
      },

      timestamp: msg.createdAt.getTime()
    }
  }

  getData () {
    return this.data
  }
}
