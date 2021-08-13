const depositions = require('../models/depositions')

const indexController = {
    viewHome: (req, res) => {
        res.render("home",{title: "Sua empresa entre as melhores"})
    },

    viewProducts:(req, res) => {
        res.render("products")
    },

    viewBlog: (req, res) => {
        res.render("blog")
    },

    viewDepositions: (req, res) => {
        res.render('depositions', {depositions})
    },

    viewContact: (req, res) => {
        res.render("contact")
    },

    viewMaintenance: (req, res) => {
        res.render("maintenance")
    }

}

module.exports = indexController