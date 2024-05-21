
const SignUpAndLoginModel = require("../models/LoginAndSignUpModel");
//render Home 
exports.index = (req, res) => {
   res.render("Home");
}
//render page Login
exports.indexLogin = (req, res) => {
   res.render("Login");

}
//render page SignUp
exports.indexSignUp = (req, res) => {
   res.render("SignUp");
}
//Accout creation controller
exports.create = async (req, res) => {
   console.log(req.body);
   const signUp = new SignUpAndLoginModel(req.body);
   await signUp.create();
   if (signUp.errors.length > 0) {
      req.flash('erros', signUp.errors);
      req.session.save(() => { return res.redirect('back') });
      return;
   } else {
      req.session.save(() => {
         req.flash("sucess", "Conta criada com sucesso!");
         return res.redirect("/login");
      })
      return;
   }
}

exports.auth = async (req, res) => {
   const signup = new SignUpAndLoginModel(req.body);
   await signup.Auth();

   if (signup.errors.length > 0) {
      req.flash('erros', signup.errors);
      req.session.save(() => {
         return res.redirect("back");
      })
      return
   } else {
      req.session.user = signup.user;

      req.flash("sucess", "Login feito com sucesso!");
      req.session.save(() => {
         return res.redirect("/feed");

      })
      return;
   }



}