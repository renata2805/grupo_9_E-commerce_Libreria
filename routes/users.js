const express= require('express');
const router= express.Router();
const path = require("path");
const multer = require('multer');
const { body } = require("express-validator");

//Controlador
const usersController= require('../controllers/usersController'); 

//Middlewares

const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


//Formulario de Registro
router.get ('/register', guestMiddleware, usersController.register);

//Procesar el Registro
router.post('/', upload.single("imagen"), validations, usersController.processRegister);

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