// app.js
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 8000

const userConroller = require("./userController")

app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.json())
app.use(cors())

app.get('/users',  userConroller.getUsers)

app.post('/user', userConroller.addUser)

app.post('/hobby', userConroller.addHobby)

app.delete('/hobby', userConroller.deleteHobby)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))