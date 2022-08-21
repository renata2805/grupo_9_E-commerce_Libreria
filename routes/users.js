const express= require('express');
const router= express.Router();

const usersController= require('../controllers/usersController'); 

router.get ('/register', usersController.register);
router.get('/login', usersController.login);
router.get("/users/edit/:idUser", usersController.edit);

router.put("/users/edit", function (req,res) {
    res.send("Modificación exitosa!")
});

 module.exports= router;