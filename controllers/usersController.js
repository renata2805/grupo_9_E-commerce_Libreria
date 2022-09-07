const fs = require('fs');
const path = require('path');
const multer = require('multer');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const validationResult = require("express-validator");
var users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


const usersController = {
    register: (req, res) => {
        res.render ('register'); //  como parametros va el nombre del archivo dentro viewss
       },
    login: (req, res) => {
        res.render ('Login'); // como parametros va el nombre del archivo dentro views
      },
    processLogin: (req,res) =>{
      let errors = validationResult(req);
      if (errors.isEmpty()){
      let user= req.body; 
      res.redirect("/login");}
      else {
      res.render("/register", {errors: errors.array(), old: req.body })  
      }
    },
    //      if (users== ""){
    //        users=[];
    //      }
    //      for (let i=0; i<users.length; i++){
    //        if (users[i].email== req.body.email) {
    //          if(bcrypt.compareSync(req.body.contraseña, users[i].contraseña)){
    //            let userToLog= users[i];
    //            break;
    //          }
    //        }
    //      }
    //      if(userToLog == undefined) {
    //        return res.render("Login", {errors: [
    //          {msg: "Credenciales Inválidas"}
    //        ]});
    //      }
    //      req.session.userLogged = userToLog;
    //    } 
    //    else {
    //      return res.render("Login", { errors: errors.errors});
    //    }
    // },

    edit: function(req,res) {
      let idUser = req.params.idUser;

      let userToEdit = users[idUser] 

      res.render("userEdit", {userToEdit: userToEdit});
    },
    update:  (req, res) => {
      let imagen
      if(req.files[0] != undefined){
        imagen = req.files[0].filename
      } else {
        imagen = 'default-image.jpg'
      }
      let newUser = {
        id: users[users.length - 1].id + 1,
        ...req.body,
        imagen: imagen
      };
      users.push(newUser)
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
      res.redirect('index');
    },
}

module.exports= usersController;