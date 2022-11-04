const fs = require('fs');
const path = require('path');
const multer = require('multer');

const { validationResult }  = require('express-validator');
const bcryptjs = require('bcryptjs');
 const User = require('../models/User');
 const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
 var users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
//const db = require('../database/models');

//Esto es otra forma de declarar los Modelos en nuestro controlador
//const Product = db.Product; 
//const Category = db.category;
//const TipoPago = db.TipoPago;
//Otra forma
//const {Product,Category,TipoPago} = require('../database/models');



const usersController = {
    register: (req, res) => {
        res.render ('register'); //  como parametros va el nombre del archivo dentro views
       },
    registerProcess: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
         return res.render('register', {
            errors: resultValidation.mapped(),
            oldData: req.body
          });
        }
         // TENER EN CONSIDERACION CUANDO TRABAJEMOS EN BASE DE DATOS
        //   save: (req,res)=>{
      //     //req.body.image = req.file.filename;
      //     //return res.send(req.body);
      //     const _body = { 
      //     //return res.send(_body);
      //         name : req.body.nombre,
      //         description: req.body.descripcion,
      //         price: req.body.precio,
      //         discount: req.body.descuento,
      //         image : req.file.filename,
      //         categoryId : req.body.categoria
      //     }    
      //     //return res.send(_body);
      //     Product.create(_body)
      //     .then(reloj =>{
      //         res.redirect('/administrar');
      //     })
      //     .catch(error => res.send(error))
      // },
  
    
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
          nombre: req.body.nombre,
          tel: req.body.tel,
          email: req.body.email,
          password: bcryptjs.hashSync(req.body.password, 10),
          imagen: req.file.filename,
          categoria: 0
        }
        let userCreated = User.create(userToCreate);
        
        return res.redirect('/users/login');
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
    
            if(req.body.recordame) {
              res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
            }
    
            return res.redirect('/');
          } 
          return res.render('login', {
            errors: {
              email: {
                msg: 'Credenciales inválidas'
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
        let id = req.params.id;
        let user = users.find(user => user.id == id)
        res.render("userEdit", {user});
      },

      editProcess: (req, res) => {
        let id = req.params.id;
		    let userToEdit = users.find(user => user.id == id)
		    
		  userToEdit = {
			  id: userToEdit.id,
        nombre: req.body.nombre,
        tel: req.body.tel,
        email: req.body.email,
        password: req.body.password,
      };
		
		let newUser = users.map(user => {
			if (user.id == userToEdit.id) {
				return user = {...userToEdit};
			}
			return user;
		})

		  fs.writeFileSync(usersFilePath, JSON.stringify(newUser, null, ' '));
		  res.redirect('/');
      },
    
      delete: (req,res) => {
        let id = req.params.id;
        let finalUsers = users.filter(user => user.id != id);
        fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
        res.redirect('/users/logout');
      },

      logout: (req,res) => {
      req.session.destroy();
      return res.redirect('/');
    },

      profile: (req, res) => {
      return res.render('profile', {user: req.session.userLogged})
    }
}

module.exports= usersController;