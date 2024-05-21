const express = require('express');
//importando o LoginController : 

const { index, indexLogin,indexSignUp,create,auth } = require("./src/controllers/LoginAndSignUpControllers");
const { feedIndex } = require("./src/controllers/FeedControllers")

const route = express.Router(); 

//Login  e suas rotas  

route.get("/", index);
route.get("/login",indexLogin);
route.post("/login/auth",auth)

//Criar conta routes: loginmodels
route.get("/signup",indexSignUp);
route.post("/signup/create",create);

//Feed e suas rotas 

route.get("/feed", feedIndex);





module.exports = route;