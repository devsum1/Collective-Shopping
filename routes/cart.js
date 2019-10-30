const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cart = require('../models/Cart');
 const db = require('../public/config/keys').MongoURI;
 mongoose
 .connect(
   db,
   { useNewUrlParser: true,useCreateIndex:true}
 )
 .then(() => console.log('MongoDB Connected'))
 .catch(err => console.log(err));

//Adding products in cart
 router.post('/add',(req,res)=>{
  cart.find({},(err,alluser)=>{
    const cartItem =new cart();
    //Finding and Updating the content of Cart
     cart.find({items:req.body}, function (err, count){ 
        if(count.length>0){
          const query= req.body;
          cart.findOneAndUpdate({items:query}, {$inc:{quantity:"1"}}, {new: true}, (err, doc) => {
            if (err){
              console.log("Something wrong when updating data!");
            } 
            
            cartItem.user='suman';
            cartItem.items=req.body;
            cartItem.price=req.body.retail_price;
            cartItem.quantity=count[0].quantity;
           return res.status(200).send(alluser);
        });
       
      }
    else{
    
      //Adding new product to cart
      cartItem.user='suman';
      cartItem.items=req.body;
      cartItem.price=req.body.retail_price;
      cartItem.quantity=1;

  
      cartItem.save(function(err,Item){
        cart.find({},(err,newuser)=>{
          if(err)
          
        return res.status(200).send(newuser);
        })
        
    });
  
  }
 })  
 })
})

  //Sending all products 
router.get('/',(req,res)=>{
  cart.find({}, function(err,cartproduct) {
    res.json(cartproduct);
    });
})

 module.exports = router;