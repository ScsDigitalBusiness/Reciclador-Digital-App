

export class Form {
  constructor(email, password, button) {
    this.email = document.getElementById(email);
    this.password = document.getElementById(password);
    this.button = document.getElementById(button);

  }
  async getData() {
    const response = await axios.get("http:/8/localhost:3000/users");
    return response.data;

  } 
  
  async setNewAccount(user) {

    try {
      const response = await axios.post("http://localhost:3000/users", user);
      return response;
    } catch (er) {
      throw new Error("post não executado." + er);

    }
  }

  Auth(db) {
    for (let i in db) {
      if (this.email.value !== db[i].email || this.password.value !== db[i].password) {
         this.error(this.email); 
        this.error(this.password); 
      }
      else { 
        this.sucess(this.email);  
        this.sucess(this.password); 
        window.location.href = "../feed-page/feed.html"
      }

    }
  }

  sucess(el) {
    el.style.border = "1px solid  #61BA61";
    el.style.backgroundColor = "#BCE3BC";
    this.button.removeAttribute("disabled", "disabled");
  }

  error(el) {
    el.style.border = "1px solid #F0473E";
    
    this.button.setAttribute("disabled", "disabled");
  }
}