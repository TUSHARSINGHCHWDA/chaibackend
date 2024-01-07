require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req , res) => {
    res.send('Welcome to profile... at X')
})
   
app.get('/login', (req, res) => {
    res.send('hey you are logged in... bro')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})