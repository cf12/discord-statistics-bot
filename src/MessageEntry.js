module.exports = class MessageEntry {
  constructor (msg) {
    let user = msg.author
    let member = msg.member

    this.data = {
      user: {
        username: user.username,
        displayname: member.displayName,
        discriminator: user.discriminator,
        id: user.id,
        bot: member.user.bot
      },

      message: msg.content,
      timestamp: msg.createdAt.getTime()
    }
  }

  getData () {
    return this.data
  }
}
