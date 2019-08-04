const express = require('express');
const path = require('path');
const app = express();
const routes = require('./router');

const url = "mongodb://localhost:27017/Users"


app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/members',routes);

  
app.listen(3000);