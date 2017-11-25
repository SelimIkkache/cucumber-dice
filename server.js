const express = require('express')
const app = express()
const port = 3000


// Use middlewares to manage the different aspects of the
// server

// Log the request
app.use((request, response, next) => {
  console.log(request.headers)
  next()
})

// Get the result of the dice
app.use((request, response, next) => {
  var Dice = require("./app/dice.js")
  var dice = new Dice(6)
  request.chance = dice.jet().toString()
  console.log("Jet : " + request.chance)
  next()
})

// Manage the route
app.get('/', (request, response) => {
  response.send("<p>" + request.chance + "</p>")
})

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(port)
