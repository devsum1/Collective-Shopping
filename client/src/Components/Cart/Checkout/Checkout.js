import React,{Component} from 'react';
import "./Checkout.css"
import {connect} from 'react-redux';
import axios from 'axios';

class Checkout extends Component{
  constructor(props){
    super(props);
    this.state = {
      totalPrice : 0
    }
  }

  pay(){
     axios.post('/pay',
     {
       totalPrice:this.totalPrice,
       items:this.props.cartItem
     })
    .then(res => window.location.href = res.data);
  }
  render(props){
    return(
      <div className = "checkout">
        
        <ul className="list-group list-group-flush">
        <li class="list-group-item active text-center">Checkout</li>
        {this.props.cartItem.map((item)=>
        <li className="list-group-item mr-10 ">{item.items.name}
         <span className="badge badge-primary badge-light ">*</span>
         <span className="badge badge-primary badge-pill">{item.quantity}</span>
        <span className = "ml-10">=</span>
        <span className = "float-right badge size">{item.items.price}</span>
        </li>)}
 
  <li className="list-group-item text">Subtotal<span className = "float-right badge size">{this.props.cartItem.reduce((value,item)=>{
    return this.totalPrice = item.items.price+value},0)}</span></li>
  
    <button onClick = {()=>this.pay()} type="button" class="btn btn-warning"><span>Pay Here</span></button>
</ul>


    </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cartItem: state.addToCart
  };

}
export default connect(mapStateToProps)(Checkout);
