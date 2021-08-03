const express = require('express')
const path = require('path')
const app = express()
const port = 5000
const routes = require('./routes')
const productsRoutes = require('./routes/products')

//Configurando o template engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('views'))

app.use(express.json())
app.use(routes)
app.use(productsRoutes)
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.listen(port, () => console.log("The server is runing..."))
