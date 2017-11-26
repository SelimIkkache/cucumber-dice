const defineSupportCode = require("cucumber").defineSupportCode
const http = require("http")
const expect = require('chai')

defineSupportCode( ({Then}) => {
  Then ("L\'url {string} s’ouvre qui affiche un nombre de {int} à {int}",
  (url, int1, int2, callback) => {
    // open the url
    console.log("When : " + url)
    var req = http.get(url, (res) => {
      const statusCode = res
      res.on('response', () => {
        console.log("When : " + statusCode)
        expect(statusCode).to.eql(200)
        callback()
      })
      res.on('error', () => {
        console.log("When : error")
        callback()
      })
    })
  })
})
