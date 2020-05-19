// app.js
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 8000

const userConroller = require("./userController")

app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.json())

app.get('/users',  userConroller.getUsers)

app.post('/user', userConroller.addUser)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))