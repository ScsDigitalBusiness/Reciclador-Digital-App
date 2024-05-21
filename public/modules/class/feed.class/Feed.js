class Feed {
    constructor (feedArea,post, postImage,postUserImage, PostUserName,interactions,postLegend) {
        this.feedArea = document.getElementById(feedArea); 
        this.post = document.getElementById(post); 
        this.postImage= document.getElementById(postImage); 
        this.postUserImage = document.getElementById(postUserImage); 
        this.PostUserName = document.getElementById(PostUserName);  
        this.interactions = document.getElementById(interactions); 
        this.postLegend = document.getElementById(postLegend);  

      
    }  

    async  geData() {
     const response =await axios.get("http://localhost:3000/users"); 
     return response.data; 
    }
    async setPost() {
        const response = await axios.post("http://localhost:3000/users",null); 
    }

}