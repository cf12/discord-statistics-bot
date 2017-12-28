module.exports = class MessageEntry {
  constructor (msg, msgId) {
    this.data = {
      id: msgId,
      timestamp: msg.createdAt.getTime(),
      message: {
        content: msg.content,
        id: msg.id
      }
    }
  }

  getData () {
    return this.data
  }
}
