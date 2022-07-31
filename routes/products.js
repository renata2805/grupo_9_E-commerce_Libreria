const express= require('express');
const router= express.Router();

const productsController= require('../controllers/productsController.js');

router.get('/productCart', productsController.productCart);
router.get('/productDetail', productsController.productDetail);
router.get('/productCreateForm', productsController.create) 

module.exports= router;