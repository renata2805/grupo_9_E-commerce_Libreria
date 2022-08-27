const fs = require('fs');
const path = require('path');
const multer = require('multer');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
var users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


const usersController = {
    register: (req, res) => {
        res.render ('register'); //  como parametros va el nombre del archivo dentro views
       },
    login: (req, res) => {
        res.render ('Login'); // como parametros va el nombre del archivo dentro views
      },
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