const express = require ("express");
const path = require("path")
const app = express();
const publicPath = path.resolve(__dirname,"./public");
app.use (express.static(publicPath));


app.listen(3000, ()=> {
    console.log("Servidor Funcionando")
});

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/views/index.html"));
});

app.get("/login.html",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/views/login.html"));
});

app.get("/register.html",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/views/register.html"));
});

app.get("/productCart.html",(req,res)=>{
    res.sendFile(path.resolve(__dirname + "/views/products/productCart.html"));
});

app.get("/productDetail.html",(req,res) => {
    res.sendFile(path.join(__dirname + "/views/products/productDetail.html"));
});





