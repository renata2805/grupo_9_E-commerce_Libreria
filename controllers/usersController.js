const fs = require('fs');
const path = require('path');
const multer = require('multer');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
var users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult }  = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');


const usersController = {
    register: (req, res) => {
        res.render ('register'); //  como parametros va el nombre del archivo dentro views
       },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
    
        if (resultValidation.errors.length > 0) {
          return res.render('register', {
            errors: resultValidation.mapped(),
            oldData: req.body
          });
        }
    
        let userInDB = User.findByField("email", req.body.email);

        if (userInDB) {
          return res.render('register', {
            errors: {
              email: {
                msg: 'Este email ya está registrado'
              }
            },
            oldData: req.body
          });
        }
        
        let userToCreate = {
          ...req.body,
          password: bcryptjs.hashSync(req.body.password, 10),
          imagen: req.file.filename
        }
    
        let userCreated = User.create(userToCreate);
        function ejecucion(){ userCreated}
        return res.redirect('/login');
    },
    login: (req, res) => {
        res.render ('login'); // como parametros va el nombre del archivo dentro views
      },
    processLogin: (req, res) => {
      let userToLogin = users.findByField('email', req.body.email);
                
           if(userToLogin) {
          let isOkThePassword = bcryptjs.compareSync(req.body.contraseña, userToLogin.hashSync);
          if (isOkThePassword) {
            delete userToLogin.contraseña;
            req.session.userLogged = userToLogin;
    
            if(req.body.remember_user) {
              res.cookie('email', users.email, { maxAge: (1000 * 60) * 60 })
            }
    
            return res.redirect('/user/profile');
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