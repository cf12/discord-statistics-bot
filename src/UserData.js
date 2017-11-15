module.exports = class UserData {
  constructor (member) {
    this.username = member.displayName
    this.bot = member.user.bot
    this.presence = {
      status: member.presence.status,
      game: (member.presence.game) ? member.presence.game.name : ''
    }
  }

  getData () {
    return this
  }
}