const express= require('express');
const router= express.Router();
const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/products');
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + `${Date.now}_img_${path.extname(file.originalname)} `);
    }
})
var upload = multer({storage: storage})
const productsController= require('../controllers/productsController');

router.get('/productCart', productsController.productCart);
router.get('/productDetail/:id', productsController.productDetail);
router.get('/productCreateForm', productsController.create);
router.get('/productEditForm', productsController.edit);
router.post('/productCreateForm', upload.single('product'), upload.any(), productsController.store)



// router.get("/productCart",(req,res)=>{
//    res.sendFile(path.resolve(__dirname + "/views/products/productCart.ejs"));
// });

// router.get("/productDetail",(req,res) => {
//    res.sendFile(path.join(__dirname + "/views/products/productDetail.ejs"));
// });

module.exports= router;