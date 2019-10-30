const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const routes = require('./router');
const cors = require('cors')
const cart = require('./routes/cart');
 bodyParser = require('body-parser');
// const url =require("./public/config/keys").MongoURI;
const db = require('./public/config/keys').MongoURI;

const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AafPsdl6JO53fPHMuYVEn3aaOSRJEAaUxvCDHirmz5prT1RS528b1Wszsgh6ukkRxqHZfp_jPeQP5mVn',
  'client_secret': 'ENZpJaz9TbYTlm8i3WDSMR7Juf2GDTCjU4-htGQPPe6TM8WsrrdrvVFSCjrKbVwrxVpPikK6QFUU1lTh'
});

app.post('/pay',(req,res)=>{
  console.log(req.body);
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000",
        "cancel_url": "http://localhost:5000/cancel.url"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Tshirt",
                "sku": "001",
                "price": "1000",
                "currency": "INR",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "INR",
            "total": "1000.00"
        },
        "description": "This is the payment description."
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) {
      throw error;
  } else {
      console.log("Create Payment Response");
      payment.links.filter((link)=>{
      if(link.rel =='approval_url'){
        res.send(link.href);
      }
      })
  }
});

})
// Connect to MongoDB
mongoose
  .connect(
    db,
    { 
      useNewUrlParser: true,
      useCreateIndex:true 
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',routes);
app.use('/cart',cart);
app.use(cors());
  
app.listen(5000);





