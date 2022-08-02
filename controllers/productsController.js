const productsController = {
    productCart: (req, res) => {
        res.render ('productCart'); // como parametros va el nombre del archivo dentro views
       },

   productDetail: (req, res) => {
        res.render ('productDetail'); // como parametros va el nombre del archivo dentro views
       },
    create: (req, res) => {
        res.render ('productCreateForm'); // como parametros va el nombre del archivo dentro views
       },
    edit: (req, res) => {
        res.render('productEditForm');
        }
}

module.exports= productsController;