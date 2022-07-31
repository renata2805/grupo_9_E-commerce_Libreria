const productsController = {
    productCart: (req, res) => {
        res.render ('productCart'); // como parametros va el nombre del archivo dentro views
       },

   productDetail: (req, res) => {
        res.render ('productDetail'); // como parametros va el nombre del archivo dentro views
       }
}

module.exports= productsController;