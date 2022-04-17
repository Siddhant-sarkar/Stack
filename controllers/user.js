const db = require("../util/database");
const login = require("../models/sLogin");
const alert = require('alert');
const complaint = require('../models/complaint');
let nameStudent;
exports.userLogin = (req, res, next) => {
  res.render("login", {
    who: "user",
    wrong: "false",
  });
};
 exports.resolveComplaints = (req,res,next)=>{
   const t = req.body.CompId;
  const rmed = new complaint(t,'xx');
  rmed.resolveComp()
  .then(([rows])=>{
    console.log(rows);
    return res.redirect('dashboard?name='+encodeURIComponent(nameStudent));
  }).catch(err => console.log(err));
  // res.send('asdfasd');
};
exports.addComplaint = (req,res,next) =>{
  const body = req.body; 
  console.log(body);
  const cmp = new complaint(body.staff, body.roll) ;
  cmp.savetoDB()
  .then(([rows])=>{
    console.log(rows.insertId);
    const k = rows.insertId;
    return res.redirect('dashboard?name='+encodeURIComponent(nameStudent));
  }).catch(err => console.log(err));
}
exports.userAuthenticate = (req, res, next) => {
  const body = req.body;
  const l = new login(body.username, body.password);
  nameStudent= body.username;
  console.log(l.username);
  l.auth()
    .then(([rows]) => {
      if (rows[0].cnt) {
        return res.redirect('dashboard/?name='+encodeURIComponent(body.username));
      } else {
        return res.render("login",{who:'user',wrong:'true'});
      }
    })
    .catch((err) => console.log(err));
};
exports.userDashboard = (req,res,next) =>{
  return res.render('uDashboard',{user:req.query.name,is:'false',cmpId:''});
};
