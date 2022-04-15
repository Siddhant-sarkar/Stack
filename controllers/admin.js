exports.adminLogin = (req,res,next) =>{
  res.render('login',{
    who:'admin',
    wrong :'true'
  });
}