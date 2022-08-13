const express = require ("express");
const path = require("path")
const app = express();
const publicPath = path.resolve(__dirname,"./public");
const productsRoutes = require ("./routes/products")
const mainRoutes = require ("./routes/main")
const usersRoutes = require ("./routes/users")
const methodOverride = require ("method-override");


app.use (express.static(publicPath));
app.use(methodOverride("method"));

// EJS Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/", productsRoutes);
app.use("/", usersRoutes);
app.use("/", mainRoutes)

app.listen(3000, ()=> {
    console.log("Servidor Funcionando")
});


//A los siguientes get correspondería borrarlos, porque ya fueron reemplazados por los router.get detallados en cada archivo de rutas

// app.get("/",(req,res)=>{
//     res.render(path.resolve(__dirname + "/views/index.ejs"));
// });

// app.get("/login",(req,res)=>{
//     res.render(path.resolve(__dirname + "/views/users/login.ejs"));
// });

// app.get("/register",(req,res)=>{
//     res.render(path.resolve(__dirname + "/views/users/register.ejs"));
// });

// app.get("/productCart",(req,res)=>{
//     res.render(path.resolve(__dirname + "/views/products/productCart.ejs"));
// });

// app.get("/productDetail",(req,res) => {
//     res.render(path.join(__dirname + "/views/products/productDetail.ejs"));
// });
// app.get("/indexAdmin",(req,res) => {
//     res.render(path.join(__dirname + "/views/users/indexAdmin.ejs"));
// });
// app.get("/productCreateForm",(req,res) => {
//     res.render(path.join(__dirname + "/views/products/productCreateForm.ejs"));
// });





