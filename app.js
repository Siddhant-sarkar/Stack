const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();


app.set('view engine','ejs');
app.set('views','views');
app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'views')));

app.use(require('./routes/com'));
app.use('/admin',require('./routes/admin'))
app.use('/user',require('./routes/user'))

app.use('/',(req,res,next)=>{
  res.send('Page not available');
})


console.log('<------------->');
app.listen(3000);