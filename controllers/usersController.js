const fs = require('fs');
const path = require('path');
const multer = require('multer');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const { validationResult }  = require("express-validator");
var users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
var bcrypt = require('bcryptjs')

const usersController = {
    register: (req, res) => {
        res.render ('register'); //  como parametros va el nombre del archivo dentro views
       },
    login: (req, res) => {
        res.render ('Login'); // como parametros va el nombre del archivo dentro views
      },
    processLogin: (req, res) => {
        let userToLogin =  users.email
                
           if(userToLogin) {
          let isOkThePassword = bcryptjs.compareSync(users.contraseña, userToLogin.contraseña);
          if (isOkThePassword) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
    
            if(req.body.remember_user) {
              res.cookie('email', users.email, { maxAge: (1000 * 60) * 60 })
            }
    
            return res.redirect('/');
          } 
          return res.render('login', {
            errors: {
              email: {
                msg: 'Las credenciales son inválidas'
              }
            }
          });
        }
    
          return res.render('login', {
            errors: {
              email: {
                msg: 'No se encuentra este email en nuestra base de datos'
            }
          }
        });
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
    //},

    edit: function(req,res) {
      let idUser = req.params.idUser;

      let userToEdit = users[idUser] 

      res.render("userEdit", {userToEdit: userToEdit});
    },
    upload:  (req, res) => {
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