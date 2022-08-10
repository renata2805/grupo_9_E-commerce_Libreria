const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    productCart: (req, res) => {
        res.render ('productCart'); // como parametros va el nombre del archivo dentro views
       },

   productDetail: (req, res) => {
    let id = req.params.id
    let product = products.find(product => product.id == id)
    res.render('productDetail', {
        product,
        toThousand
    })
},
    create: (req, res) => {
        res.render ('productCreateForm'); // como parametros va el nombre del archivo dentro views
       },
    edit: (req, res) => {
        res.render('productEditForm');
        },
    store: (req, res) => {
		let image
		console.log(req.files);
		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = 'default-image.png'
		}
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('products');
	},
}

module.exports= productsController;