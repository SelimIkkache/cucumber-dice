const defineSupportCode = require("cucumber").defineSupportCode

defineSupportCode( ({Given}) => {
  Given ("Je suis sur internet", (callback) => {
    // start the server
    console.log("Given : ping localhost OK")
    callback()
  })
})
