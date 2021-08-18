module.exports = class PresenceEntry {
  constructor (member) {
    this.data = {
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
