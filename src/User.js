module.exports = class User {
  constructor (member) {
    const user = member.user

    this.username = user.username
    this.displayname = member.displayName
    this.discriminator = user.discriminator
    this.id = user.id
    this.bot = user.bot
  }

  getData () {
    return {
      username: this.username,
      displayname: this.displayname,
      discriminator: this.discriminator,
      id: this.id,
      bot: this.bot
    }
  }
}
