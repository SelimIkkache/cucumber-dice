const defineSupportCode = require("cucumber").defineSupportCode

defineSupportCode( ({Given}) => {
  Given ("Je suis sur internet", () => {
    // ping localhost
    console.log("ping localhost OK")
  })
})
