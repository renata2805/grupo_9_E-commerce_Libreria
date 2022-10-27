const express= require('express');
const router= express.Router();
const path = require("path");
const multer = require('multer');
const { body } = require("express-validator");

//Middlewares

const productsValidation= require("../middlewares/productCreateMiddleware")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './public/images/products')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})

//Controlador
const productsController= require('../controllers/productsController');

router.get('/productCart', productsController.productCart);
router.get('/productDetail/:id', productsController.productDetail); //OK
router.get('/productCreateForm', productsController.create);//OK
router.post('/', upload.any(), productsValidation, productsController.upload); //OK
router.get('/edit/:id', productsController.edit); //OK
router.patch('/edit/:id', upload.any(),productsController.update); //OK

router.delete("/delete/:id", productsController.delete); //OK


router.get('/', productsController.store);
router.get('/:category', productsController.category);





module.exports= router;