const express= require('express');
const router= express.Router();
const path = require("path");

const productsController= require('../controllers/productsController');

router.get('/productCart', productsController.productCart);
router.get('/productDetail', productsController.productDetail);
router.get('/productCreateForm', productsController.create) 

// router.get("/productCart",(req,res)=>{
//    res.sendFile(path.resolve(__dirname + "/views/products/productCart.ejs"));
// });

// router.get("/productDetail",(req,res) => {
//    res.sendFile(path.join(__dirname + "/views/products/productDetail.ejs"));
// });

module.exports= router;