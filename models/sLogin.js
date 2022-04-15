const db = require('../util/database')
module.exports = class login{
  constructor(id, pass){
    this.id = id;
    this.pass = pass;
  }
  auth(id,pass){
    // return db.execute('select * from admin where id=? and pass=?',['admin',this.id,this.pass]);
    return db.execute('select count(*) as cnt from sLogin where id=? and pass=?',[this.id,this.pass]);
  }
}
