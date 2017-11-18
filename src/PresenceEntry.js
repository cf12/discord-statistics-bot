module.exports = class PresenceEntry {
  constructor (member) {
    this.data = {
      username: member.displayName,
      bot: member.user.bot,
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