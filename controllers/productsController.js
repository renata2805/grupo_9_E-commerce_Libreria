const fs = require('fs');
const path = require('path');
const multer = require('multer');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
var products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
      categoria: (req, res) => {
      let categoria = req.params.category 
      //let product = products.find(product => product.categoria == categoria )
      res.render('categoria', {
          products,
          toThousand
      })
  },
    create: (req, res) => {
        res.render ('productCreateForm'); // como parametros va el nombre del archivo dentro views
       },
    edit: function(req,res) {
        let id = req.params.id;
        let product = products.find(product => product.id == id)
        res.render("productEditForm", {product});


    },
    update: (req, res) => {
        let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		let image

		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
            ...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/products');

    },


    upload: (req, res) => {
		let image
		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = 'default-image.jpg'
		}
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image
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
    delete: (req, res) => {
            let id = req.params.id;
            let finalProducts = products.filter(product => product.id != id);
            fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
            res.redirect('/products');
        }
    } 


module.exports= productsController;