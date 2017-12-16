module.exports = class VoiceEntry {
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
      voice: {
        channel: (member.voiceChannel) ? member.voiceChannel.name : '',
        muted: member.mute,
        deafened: member.deaf
      }
    }
  }

  getData () {
    return this.data
  }
}
