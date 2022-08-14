const fs = require('fs');
const path = require('path');
const multer = require('multer');
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
//     categoria: (req, res) => {
//     let categoria = req.params.categoria  
//     let product = products.find(product => product.categoria == categoria )
//     res.render('products', {
//         product,
//         toThousand
//     })
// },

    create: (req, res) => {
        res.render ('productCreateForm'); // como parametros va el nombre del archivo dentro views
       },
    edit: (req, res) => {
        res.render('productEditForm');
        },
    update: (req, res) => {
		let imagen
		if(req.files[0] != undefined){
			imagen = req.files[0].filename
		} else {
			imagen = 'default-image.jpg'
		}
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			imagen: imagen
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/products');
	},
    store: (req, res) => {
        res.render('products', {
            products, toThousand
        });
        },
}

module.exports= productsController;