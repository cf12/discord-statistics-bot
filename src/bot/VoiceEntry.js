module.exports = class VoiceEntry {
  constructor (member) {
    this.data = {
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
