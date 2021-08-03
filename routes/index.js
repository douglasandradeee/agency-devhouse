const express = require('express')
const routes = express.Router()
const path = require('path')

routes.get('/', (req, res) => {
    res.render("home",{title: "Sua empresa entre as melhores"})
})

routes.get('/home', (req, res) => {
    res.redirect('/')
})

routes.get('/blog', (req, res) => {
    res.render("blog")
})

routes.get('/maintenance', (req, res) => {
    res.render("maintenance")
})

routes.get('/contact', (req, res) => {
    res.render("contact")
})

routes.post('/create-contact', (req, res) => {
    res.render("contact")
})

routes.get('/products', (req, res) => {
    res.redirect('/maintenance')
})

routes.get('/depositions', (req, res) => {
    res.redirect('/maintenance')
})

module.exports = routes