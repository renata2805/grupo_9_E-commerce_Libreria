const usersController = {
    register: (req, res) => {
        res.render ('register'); //  como parametros va el nombre del archivo dentro views
       },
    login: (req, res) => {
        res.render ('Login'); // como parametros va el nombre del archivo dentro views
      },
    createProduct: (req, res) => {
        res.render ('indexAdmin'); // como parametros va el nombre del archivo dentro views
       },

}

module.exports= usersController;