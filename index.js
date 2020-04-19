const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors')
const keys = require('./public/config/keys');

const user = require('./routes/user');
const cart = require('./routes/cart');
const payments = require('./routes/payments');
// Connect to MongoDB
mongoose
  .connect(
    keys.mongo.MongoURI,
    { 
      useNewUrlParser: true,
      useCreateIndex:true 
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/cart',cart);
app.use('/user',user);
app.use('/pay',payments);
app.use(cors());
  
app.listen(5000);





