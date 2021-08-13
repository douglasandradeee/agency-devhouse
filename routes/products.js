const express = require('express')
const routes = express.Router()
const productController = require('../controllers/products')

routes.get("/products/list", productController.listProducts)

module.exports = routes