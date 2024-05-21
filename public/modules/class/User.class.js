export class User {
    constructor(nome,email,password) { 
        this.nome = document.getElementById(nome).value;
        this.email = document.getElementById(email).value;
        this.password = document.getElementById(password).value; 

    }
}