const mongoose= require('mongoose');

const cartSchema= new mongoose.Schema({
    user:{type: String},
    items:{type :Object},
    price:{type :Number},
    quantity:{type :Number},
});

const Cart =mongoose.model('mycart',cartSchema);
module.exports =Cart;