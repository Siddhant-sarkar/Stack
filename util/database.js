const db = require('mysql2');
const pool = db.createPool({
  host : 'localhost',
  user : 'root',
  database : 'admin',
  password : 'qwertyui'
});

module.exports  = pool.promise();