const express = require('express')
const routes = express.Router()
const indexController = require('../controllers/index')

routes.get('/', indexController.viewHome)

routes.get('/home', indexController.viewHome)

routes.get('/products', indexController.viewProducts)

routes.get('/blog', indexController.viewBlog)

routes.get('/depositions', indexController.viewDepositions)

routes.get('/contact', indexController.viewContact)

routes.post('/create-contact', indexController.viewContact)

routes.get('/maintenance', indexController.viewMaintenance)

module.exports = routes