const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views','views');
app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'views')));


console.log('<------------->');
app.listen(3000);