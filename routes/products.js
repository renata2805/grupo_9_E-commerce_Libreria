const express= require('express');
const router= express.Router();
const path = require("path");
const multer = require('multer');
const { body } = require("express-validator");

//Controlador
const productsController= require('../controllers/productsController');

//Middlewares

const upload = require('../middlewares/productsMulterMiddleware')
const productsValidation= require("../middlewares/productCreateMiddleware")


//Carrito de compras
router.get('/productCart', productsController.productCart);

//Product Detail
router.get('/productDetail/:id', productsController.productDetail); //OK

//Formulario de creación de productos
router.get('/productCreateForm', productsController.create);//OK

//Procesar la creación del producto
router.post('/', upload.single("image"), productsValidation, productsController.createProcess); //OK

//Formulario de edición de Productos
router.get('/edit/:id', productsController.edit); //OK

//Procesar la edición del producto
router.patch('/edit/:id', upload.any(),productsController.editProcess); //OK

//Formulario de eliminación de Productos
router.get('/delete/:id', productsController.delete)

//Proceso de eliminación de Productos
router.delete("/delete/:id", productsController.deleteProcess); //OK


router.get('/', productsController.store);
router.get('/:category', productsController.category);





module.exports= router;