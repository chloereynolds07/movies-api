const express = require('express')
const server = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000

server.use('/', router)

server.set('view engine', 'ejs')

server.listen(PORT, ()=> console.log(`welcome to hogwarts your house is ${PORT}`))