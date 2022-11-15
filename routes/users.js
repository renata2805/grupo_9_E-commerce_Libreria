const express= require('express');
const router= express.Router();
const path = require("path");
const multer = require('multer');
const { body } = require("express-validator");
const db = require('../database/models');
const UserDB = db.UserDB;

//Controlador
const usersController= require('../controllers/usersController'); 

//Middlewares

const upload = require('../middlewares/usersMulterMiddleware');
const userValidations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


//Formulario de Registro
router.get ('/register', guestMiddleware, usersController.register);

//Procesar el Registro
router.post('/register', upload.single("imagen"), userValidations, usersController.registerProcess);

//Formulario de Login
router.get('/login', guestMiddleware, usersController.login);

//Procesar el Login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

//Logout
router.get('/logout', usersController.logout);

//Edición de datos de usuario y Eliminación
router.get('/edit/:id', usersController.edit);

router.patch('/edit/:id', usersController.editProcess);

router.delete('/delete/:id', usersController.delete)

module.exports= router;