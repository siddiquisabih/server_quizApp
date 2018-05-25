const express = require('express')
const app = express()
const port = process.env.port || 3050
const bodyParser = require('body-parser')
const route = require("./src/routes/authRoutes/authRoute")

const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/quiz_app')

app.use(bodyParser.json())





route(app)

app.listen(port, () => { console.log('server is running on port ', port) })