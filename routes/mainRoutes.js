const express= require('express');
const router= express.Router();

const mainController= require('../controllers/mainController'); 

router.get('/', mainController.index);

//router.get("/",(req,res)=>{
//    res.sendFile(path.resolve(__dirname + "/views/index.html"));
//});


 module.exports= router;
