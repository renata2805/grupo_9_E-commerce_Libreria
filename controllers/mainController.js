const mainController = {
    
     index: (req, res) => {
         res.render ('index'); // como parametros va el nombre del archivo dentro views 
    },

    register: (req, res) => {
        res.render ('register'); //  como parametros va el nombre del archivo dentro views
       },

    login: (req, res) => {
        res.render ('Login'); // como parametros va el nombre del archivo dentro views
      },
  
       productCart: (req, res) => {
         res.render ('productCart'); // como parametros va el nombre del archivo dentro views
        },

        productDetail: (req, res) => {
         res.render ('productDetail'); // como parametros va el nombre del archivo dentro views
        }



   
      
  
  
    }

//    module.exports= controller;