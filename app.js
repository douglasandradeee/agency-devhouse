const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send("Welcome to Agency Devhouse")
})

app.get('/maintenance', (req, res) => {
    // res.send("page under maintenance, please come back later!")
    res.sendFile(__dirname + "/views/maintenance.html")
})

app.listen(port, () => console.log("Rodando..."))
