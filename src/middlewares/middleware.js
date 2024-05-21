module.exports = (req,res,next) =>{ 
    res.locals.erros = req.flash('erros');  
    res.locals.sucess = req.flash('sucess'); 
    res.locals.user = req.session.user; 
   next(); 
}