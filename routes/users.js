const express= require('express');
const router= express.Router();
const path = require("path");
const multer = require('multer');
const {body} = require("express-validator");


//Validaciones
const validateUserLogin = [
    body("email").isEmail().withMessage("Email Inválido"), 
    body("contraseña").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")
];



var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './public/images/users')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

const usersController= require('../controllers/usersController'); 

router.get ('/register', usersController.register);
router.post('/', upload.any(), usersController.update);
router.get('/login', usersController.login);
router.post("/login", validateUserLogin, usersController.processLogin);

router.get("/users/edit/:idUser", usersController.edit);

router.put("/users/edit", function (req,res) {
    res.send("¡Modificación exitosa!")
});

router.delete("/users/delete/:idUser", function (req,res){
    res.send("¡Eliminación exitosa!")
})

 module.exports= router;