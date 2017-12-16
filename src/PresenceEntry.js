module.exports = class PresenceEntry {
  constructor (member) {
    let user = member.user

    this.data = {
      user: {
        username: user.username,
        displayname: member.displayName,
        discriminator: user.discriminator,
        id: user.id,
        bot: member.user.bot
      },

      time: Date.now(),
      presence: {
        status: member.presence.status,
        game: (member.presence.game) ? member.presence.game.name : ''
      }
    }
  }

  getData () {
    return this.data
  }
}
