const express= require('express');
const router= express.Router();
const path = require("path");
const multer = require('multer');

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './public/images/products')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})


const productsController= require('../controllers/productsController');

router.get('/productCart', productsController.productCart);
router.get('/productDetail/:id', productsController.productDetail);
router.put('/productDetail/:id/editar?', productsController.edit);
router.get('/productCreateForm', productsController.create);
router.get('/productEditForm', productsController.edit);
router.post('/', upload.any(), productsController.update);
router.get('/', productsController.store);
//router.get('/:categoria', productsController.categoria);





module.exports= router;