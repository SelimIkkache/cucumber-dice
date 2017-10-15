class Dice {
  constructor (faces) {
    this.min = 1
    this.max = faces
  }
  jet () {
    return Math.floor(Math.random()*( this.max - this.min + 1 ) + this.min )
  }
}
module.exports = Dice
