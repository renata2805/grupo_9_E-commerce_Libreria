const express = require ("express");
const path = require("path")
const app = express();
const publicPath = path.resolve(__dirname,"./public");
//const productsRoutes = require ("./routes/productsRoutes")
//const mainRoutes = require ("./routes/mainRoutes")
//const usersRoutes = require ("./routes/usersRoutes")

app.use (express.static(publicPath));

// EJS Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//app.use("/productos", productsRoutes);
//app.use("/users", usersRoutes);
//app.use("/main", mainRoutes)

app.listen(3000, ()=> {
    console.log("Servidor Funcionando")
});


//A los siguientes get correspondería borrarlos, porque ya fueron reemplazados por los router.get detallados en cada archivo de rutas

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/views/index.html"));
});

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/views/users/login.html"));
});

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/views/users/register.html"));
});

app.get("/productCart",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/views/products/productCart.html"));
});

app.get("/productDetail",(req,res) => {
    res.sendFile(path.join(__dirname + "/views/products/productDetail.html"));
});
app.get("/indexAdmin",(req,res) => {
    res.sendFile(path.join(__dirname + "/views/users/indexAdmin.html"));
});





