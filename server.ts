const express = require('express');
require('dotenv').config(); // vamos usar o env para nãp deixar nossos dados de acesso ao db publicos.
const mongoose = require('mongoose'); 
const session = require ("express-session"); 
const flash = require("connect-flash"); 
const MongoStore =require("connect-mongo"); 
const middlewareGlobal  = require("./src/middlewares/middleware.ts"); 
const router = require("./routes");
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
//URL DE CONEXÂO 
app.set('views', path.resolve(__dirname,"src", "views")); // para setar no express, passamos o nome e o diretório do view 
app.set("view engine", "ejs") // usamos  o ejs para renderize dados no html usando js  
app.use(express.static("public"));

const sessionOpions = session({
  secret: "App Sessions", 
  store: MongoStore.create({mongoUrl:process.env.CONNECTION_STRING}), 
  resave: false, 
  saveUninitialized:false, 
  cookie : {
    maxAge: 1000 * 60 * 60 *7,
    httpOnly: true, 
  }
})


//route  possui todos as rotas criadas. 
app.use(sessionOpions); 
app.use(flash());  
app.use(middlewareGlobal);  

//arquivos estaticos :  
app.use(router) //definimos que para o App usar as rotas criadas.. 
// essas rotas foram criadas e chamam os controllers, que vão manipular as repostas das requisições 

//conectando com a base de dados :  
mongoose.connect(process.env.CONNECTION_STRING).then(() => {
  //ele  vai emitir um Connected quando for conectado. 
  console.log("Conecting...")
  app.emit("Conected");  // ele retornna uma promise, estamos tratando essa promis.
})
app.on('Conected', () => { //ou seja quando a base de dados for conectada, ele vai emitir um sinal com p app.emit()
  app.listen(process.env.PORT, () => {
    console.log("Datase conected!");
    console.log("Acessar : http://localhost:3000/")
  })
})


