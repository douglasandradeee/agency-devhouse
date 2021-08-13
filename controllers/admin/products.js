const adminController = {

    showProducts: (req, res) => {
        res.render("/admin/products")
    },

    showRegisterProduct: (req, res) => {
        res.render("/admin/registerProduct")
    },

    registerProduct: (req, res) => {
        

    }
}
module.exports = adminController