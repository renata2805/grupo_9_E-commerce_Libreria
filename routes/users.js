const express= require('express');
const router= express.Router();
const path = require("path");
const multer = require('multer');
const {body} = require("express-validator");

//Controlador
const usersController= require('../controllers/usersController'); 

//Middlewares

const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './public/images/users')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

//Formulario de Registro
router.get ('/register', guestMiddleware, usersController.register);

//Procesar el Registro
router.post('/', upload.any(), validations, usersController.processRegister);

//Formulario de Login
router.get('/login/', guestMiddleware, usersController.login);

//Procesar el Login
router.post('/login/', usersController.processLogin);

router.get("/users/edit/:idUser", usersController.edit);

router.put("/users/edit", function (req,res) {
    res.send("¡Modificación exitosa!")
});

router.delete("/users/delete/:idUser", function (req,res){
    res.send("¡Eliminación exitosa!")
})

 module.exports= router;