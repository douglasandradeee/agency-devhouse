const express = require('express')
const path = require('path')
const app = express()
const port = 5000
const routes = require('./routes')
const productsRoutes = require('./routes/products')
const adminRoutes = require('./routes/admin/products')

//Configurando o template engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('views'))

app.use(express.json())
app.use(routes)
app.use(productsRoutes)
app.use(adminRoutes)
app.use(express.static("public"))
//Configurando recebimento de formulário
app.use(express.urlencoded({ extended: false }))
app.listen(port, () => console.log("The server is runing..."))
