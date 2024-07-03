const SignUpAndLoginModel = require("../models/LoginAndSignUpModel");

abstract class SignUpAndLoginController {
  //render Home
  public static async index(req: any, res: any): Promise<any> {
    res.render("Home");
  }
  //render page Login
  public static async indexLogin(req: any, res: any): Promise<any> {
    res.render("Login");
  }
  //render page SignUp
  public static async indexSignUp(req: any, res: any): Promise<any> {
    res.render("SignUp");
  }
  //Accout creation controller
  public static async create(req: any, res: any) {
    console.log(req.body);
    const signUp = new SignUpAndLoginModel(req.body);
    await signUp.create();
    if (signUp.errors.length > 0) {
      req.flash("erros", signUp.errors);
      req.session.save(() => {
        return res.redirect("back");
      });
      return;
    } else {
      req.session.save(() => {
        req.flash("sucess", "Conta criada com sucesso!");
        return res.redirect("/login");
      });
      return;
    }
  }

  public static async auth(req: any, res: any): Promise<any> {
    const signup = new SignUpAndLoginModel(req.body);
    await signup.Auth();

    if (signup.errors.length > 0) {
      req.flash("erros", signup.errors);
      req.session.save(() => {
        return res.redirect("back");
      });
      return;
    } else {
      req.session.user = signup.user;

      req.flash("sucess", "Login feito com sucesso!");
      req.session.save(() => {
        return res.redirect("/feed");
      });
      return;
    }
  }
}
module.exports = SignUpAndLoginController