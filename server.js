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
  request.chance = dice.jet()
  next()
})

// Manage the route
app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
})

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(port)
