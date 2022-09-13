const express = require ("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname,"./public");
const productsRoutes = require ("./routes/products");
const mainRoutes = require ("./routes/main");
const usersRoutes = require ("./routes/users");
const methodOverride = require ("method-override");
var session = require("express-session");

app.use(express.urlencoded({ extended:false}))
app.use(express.json());
app.use(express.static(publicPath));
app.use(methodOverride("_method"));

app.use (express.static(publicPath));
app.use(session({secret: "Secreto"}))

// EJS Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/products", productsRoutes);
app.use("/", usersRoutes);
app.use("/", mainRoutes)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req,res,next) =>{
    res.status(404).render("errors");
    next();
})


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





