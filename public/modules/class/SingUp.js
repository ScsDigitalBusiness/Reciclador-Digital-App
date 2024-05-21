import { Form } from "./Form.js";

export class SingUp extends Form {
    constructor(username,email, password,confirm, button) { 
        super(email, password, button); 
        this.username = document.getElementById(username);  
        this.confirmPassword = document.getElementById(confirm) ; 

    } 
    
    
    verifyDataExist(db,UserExistTest)  {
        for(let values of  db) {
            if(values.email === UserExistTest.email) {
                this.error(this.email); 
                
              }
        }
     }
}