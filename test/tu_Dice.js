const chai = require("chai")
const Dice = require("../app/Dice")
chai.should() // Tells to chai that we'll use should assertions
//const expect = chai.expect

describe("Dice", () => {
  describe("constructor", () => {
    it ("can be built only with integer faces greater than 2", () => {
      (()=> {var myDice = new Dice(1.5)}).should.throw ()
      (()=> {var myDice = new Dice("a string")}).should.throw ()
      (()=> {var myDice = new Dice(0)}).should.throw ()
      (()=> {var myDice = new Dice(-1)}).should.throw ()
    })
  })

  describe("jets", () => {
    it ("give an integer between 1 and 6 if it has 6 faces", () => {
      var myDice = new Dice(6)
      var r = myDice.jet()
      r.should.be.within(1, 6)
      r.should.be.a('number')

      let reste=(r % 1)
      reste.should.be.equal(0)
    })

    it ("always gives a number between 1 and 6 if it has 6 faces", () => {
      var myDice = new Dice(6)
      var max = 0
      var min = 7
      for (var i = 0; i < 10000; i = i + 1 ) {
        var r = myDice.jet()
        max = r > max ? r : max
        min = r < min ? r : min
      }
      max.should.be.below (7)
      min.should.be.above (0)
    })
  })
})
