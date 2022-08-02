const express= require('express');
const router= express.Router();
const path = require("path");

const mainController= require('../controllers/mainController'); 

router.get('/', mainController.index);

// router.get("/",(req,res)=>{
//    res.render(path.resolve(__dirname + "/views/index.ejs"));
// });



 module.exports= router;
