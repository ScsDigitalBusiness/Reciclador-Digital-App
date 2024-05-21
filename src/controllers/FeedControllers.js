exports.feedIndex = (req,res) =>{ 
    if(req.session.user) return res.render('Feed');
      
} 