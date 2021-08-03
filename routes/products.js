const express = require('express')
const routes = express.Router()

routes.get("/products/list", (req, res) => {
    res.send("Página de produtos")

})

module.exports = routes