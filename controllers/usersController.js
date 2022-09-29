const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { validationResult }  = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
var products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const recomendados = products.filter(function(product){
	return product.status == "recomendados"
})
const masVendidos = products.filter(function(product){
	return product.status == 'mas-vendidos'
})




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
          /* ...req.body, */
          nombre: req.body.nombre,
          tel: req.body.tel,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
          imagen: req.file.filename,
          categoria: 0
        }
        let userCreated = User.create(userToCreate);
        
        return res.redirect('/login');
    },
    login: (req, res) => {
        res.render ('login'); // como parametros va el nombre del archivo dentro views
      },

      loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
        
        if(userToLogin) {
          let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
          if (isOkThePassword) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
    
            if(req.body.remember_user) {
              res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
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

      profile: (req, res) => {
        return res.render('index', {recomendados, masVendidos, toThousand, user: req.session.userLogged})
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