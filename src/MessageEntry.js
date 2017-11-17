module.exports = class MessageEntry {
  constructor (msg) {
    this.date = msg.createdAt
    this.data = {
      author: msg.author.username,
      message: msg.content,
      time: {
        timestamp: this.date.getTime(),
        year: this.date.getFullYear(),
        month: this.date.getMonth(),
        day: this.date.getDate(),
        hours: this.date.getHours(),
        minutes: this.date.getMinutes(),
        seconds: this.date.getSeconds()
      }
    }
  }

  getData () {
    return this.data
  }
}
