const express= require('express');
const router= express.Router();

const usersController= require('../controllers/usersController'); 

router.get ('/register', usersController.register);
router.get('/login', usersController.login);
router.get("/users/edit/:idUser", usersController.edit);

//router.get("/login",(req,res)=>{
//    res.sendFile(path.resolve(__dirname + "/views/users/login.html"));
//});

//router.get("/register",(req,res)=>{
//    res.sendFile(path.resolve(__dirname + "/views/users/register.html"));
//});

//router.get("/indexAdmin",(req,res) => {
//    res.sendFile(path.join(__dirname + "/views/users/indexAdmin.html"));
//});


 module.exports= router;