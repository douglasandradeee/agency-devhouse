const express = require('express')
const routes = express.Router()
const adminController = require('../../controllers/admin/products')

routes.get('/admin/products', adminController.products)
routes.get('/admin/register-product', adminController.registerProduct)
routes.post('/admin/register-product', adminController.registerProduct)

module.exports = routes