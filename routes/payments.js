const router = require('express').Router();
const paypal = require('paypal-rest-sdk');
const keys = require('../public/config/keys');


paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': keys.paypal.client_id,
    'client_secret': keys.paypal.client_secret,
  });
  

router.post('/',(req,res)=>{
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

  module.exports = router;