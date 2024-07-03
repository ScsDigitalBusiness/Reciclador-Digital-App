const express = require('express');
//importando o LoginController : 
const SignUpAndLoginController  = require("./src/controllers/LoginAndSignUpControllers");
const FeedController  = require("./src/controllers/FeedControllers"); 
const ProfileController= require("./src/controllers/ProfileControllers")

const router = express.Router(); 

//Login  e suas rotas  
router.get("/", SignUpAndLoginController.index); 
router.get("/profile/index",)
router.get("/login",SignUpAndLoginController.indexLogin);
router.post("/login/auth",SignUpAndLoginController.auth)
//Criar conta routes: loginmodels
router.get("/signup",SignUpAndLoginController.indexSignUp);
router.post("/signup/create",SignUpAndLoginController.create);
//Feed e suas rotas 
router.get("/feed", FeedController.feedIndex);  
router.get("/profile/index",ProfileController.index)

module.exports = router;