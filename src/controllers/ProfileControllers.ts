abstract class ProfileController {
    public static index(req:any, res:any){
        res.render("ProfilePage"); 
    }   
} 

module.exports = ProfileController; 