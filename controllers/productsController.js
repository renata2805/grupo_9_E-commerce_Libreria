const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { validationResult }  = require('express-validator');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
var products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const Product = require('../models/Product');

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
    category: (req, res) => {
      let category = req.params.category 
      let product = products.filter(product => product.category == category )
      function categoryName(){ 
if(category == 1){ return "Matematica"}
else if(category == 2){ return "Geografia"}
else if(category == 3){ return "Historia"}
else if(category == 4){ return "Ingles"}
else if(category == 5){ return "Astronomia"}
else if(category == 6){ return "Informatica"}
else if(category == 7){ return "Literatura"}
else if(category == 8){ return "Quimica"}
else if(category == 9){ return "Biologia"}
else if(category == 10){ return "Arte"}
else if(category == 11){ return "Economia"}
else if(category == 12){ return "Educacion Fisica"}}
      res.render('category', {
            product, categoryName,
          toThousand
      })
}

,
    create: (req, res) => {
        res.render ('productCreateForm'); // como parametros va el nombre del archivo dentro views
       },
    
    createProcess: (req, res) => {
		const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
         return res.render('productCreateForm', {
            errors: resultValidation.mapped(),
            oldData: req.body
          });
        }
        // let image
		// if(req.file[0] != undefined){
		// 	image = req.file[0].filename
		// } else {
		// 	image = 'default-image.jpg'
		// }
		
        let newProduct = {
			// id: Product[Product.length - 1].id + 1,
			// ...req.body,
			title: req.body.title,
            author: req.body.author,
            editorial: req.body.editorial,
            origin: req.body.origin,
            price: req.body.price,
            pages : req.body.pages,
            published_date: req.body.published_date,
            description: req.body.description,
            category: req.body.category,
            image: req.file.filename
		}
        let productCreated = Product.create(newProduct);
        
		// Product.push(newProduct)
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		return res.redirect('/products');
    
	},   
 
    edit: function(req,res) {
        let id = req.params.id;
        let product = products.find(product => product.id == id)
        res.render("productEditForm", {product});


    },
    editProcess: (req, res) => {
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

     
    delete: (req,res) => {
        let id = req.params.id;
        let product = products.find(product => product.id == id)
        res.render("productDeletionForm", {product});
    },    

    deleteProcess: (req, res) => {
        let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
        res.redirect('/products');
        },

    store: (req, res) => {
            res.render('products', {
                products, toThousand
            });
            }    
    } 


module.exports= productsController;