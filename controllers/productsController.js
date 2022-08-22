const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




const productsController = {
    productCart: (req, res) => {
        res.render ('productCart'); // como parametros va el nombre del archivo dentro views
       },

   productDetail: (req, res) => {
        res.render ('productDetail'); // como parametros va el nombre del archivo dentro views
       },
    create: (req, res) => {
        res.render ('productCreateForm'); // como parametros va el nombre del archivo dentro views
       },
    edit: (req, res) => {
        res.render('productEditForm');
        },
    
        catalogo: (req, res) => {
            let id = req.params.id
            let product = products.find(product => product.id == id)
            res.render('catalogo', {
                product,
                
            })
        },
}

module.exports= productsController;