const mongoose = require('mongoose');
const validator = require('validator');
//usamos o model para modelar os dados que vão para a base de dadaos  
//mongo db é noSQL por isso devemos usar um SCHEMA para definir como os dados vão chegar na baase de dados. 

const SignUpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true }

});
//dessa forma criamos um model para Login
const SignUpModel = new mongoose.model("signUpModel", SignUpSchema);

class SignUpAndLoginModel {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }
  async create() {
    try {
      this.validations();
      const userExistent = await SignUpModel.findOne({ email: this.body.email }); 
      if (userExistent) this.errors.push("Já existe uma conta com este E-mail!");
      if (this.errors.length === 0) this.user = await SignUpModel.create(this.body);
    } catch (e) {
      throw new Error(e);
    }


  }
  validations() { 
    if(typeof this.body.name !== "string") this.errors.push("Nome inválido!")
    if (!validator.isEmail(this.body.email)) this.errors.push("Email inválido!");
    if (this.body.password < 3) this.errors.push("A senha não está de acordo com o número mínimo de caracteres.");
  }
  async Auth() {
    try {
      this.user = await SignUpModel.findOne({ email: this.body.email, password: this.body.password });
      if (!this.user) this.errors.push("Usuário não existe !");
    } catch (e) {
      throw new Error(e);
    }


  }
  async checkInDataBase() {
    this.user = await SignUpModel.find({ email: this.body.email });

  }

}


module.exports = SignUpAndLoginModel;

