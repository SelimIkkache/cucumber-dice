class Dice {
  constructor (faces) {
    if (Number.isInteger(faces) && faces > 1) {
      this.min = 1
      this.max = faces
    }
    else {
      throw "Not an integer greater than 1"
    }
  }
  jet () {
    return Math.floor(Math.random()*( this.max - this.min + 1 ) + this.min )
  }
}
module.exports = Dice
