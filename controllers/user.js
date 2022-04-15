exports.loginPage = (req,res,next) =>{
  res.render('login',{who:'user'});
}