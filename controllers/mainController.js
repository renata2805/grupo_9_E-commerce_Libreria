const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
var products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const recomendados = products.filter(function(product){
	return product.status == "recomendados"
})
const masVendidos = products.filter(function(product){
	return product.status == 'masVendidos'
})
const mainController = {
    
     index: (req, res) => {
         res.render ('index', {recomendados, masVendidos, toThousand}); // como parametros va el nombre del archivo dentro views

    }
    }

    module.exports= mainController;