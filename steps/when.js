const defineSupportCode = require("cucumber").defineSupportCode
const http = require("http")
const assert = require("assert")

defineSupportCode( ({When}) => {
  When (/^J’ouvre l’url "(.*?)"$/, (url) => {
    // open the url
    console.log("When : " + url)
    var req = http.get(url, (res) => {
      const { statusCode } = res
      res.on('response', () => {
        console.log("When : " + statusCode)
      })
      res.on('error', () => {
        console.log("When : error")
      })
    })
  })
})
