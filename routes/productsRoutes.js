const express= require('express');
const router= express.Router();

const productsController= require('../controllers/productsController.js'); 

router.get('/productCart', productsController.productCart);
router.get('/productDetail', productsController.productDetail);

//router.get("/productCart",(req,res)=>{
//    res.sendFile(path.resolve(__dirname + "/views/products/productCart.html"));
//});

//router.get("/productDetail",(req,res) => {
//    res.sendFile(path.join(__dirname + "/views/products/productDetail.html"));
//});

module.exports= router;