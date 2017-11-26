const defineSupportCode = require("cucumber").defineSupportCode
const http = require("http")
const expect = require('chai')

defineSupportCode( ({When}) => {
  When ("J’ouvre l’url {string}", (url, callback) => {
    // open the url
    console.log("When : " + url)
    var req = http.get(url, (res) => {
      const statusCode = res
      console.log("SC : " + statusCode)
      res.on('response', () => {
        console.log("When : " + statusCode)
        expect(statusCode).to.eql(200)
      })
      res.on('error', () => {
        console.log("When : error")
      })
    })
  })
})
