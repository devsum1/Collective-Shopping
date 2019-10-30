import React,{Component} from 'react';
import './CartDetail.css'

class CartDetail extends Component{

  incrementOrder = () =>{
   this.setState({
     orderCount:this.state.orderCount+1
   })
  }
  
  decrementOrder = ()=>{
    this.setState({
      orderCount:this.state.orderCount-1
    })
  }
  render(props){
    return(  
      <table class="table">
  <thead>
    <tr>
      <th>{this.props.num + 1}</th>
      <th>Product</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class= "product-desc"><img src={this.props.cartitem.items.imageUrl} className="card-img" alt="..."></img></th>
      <td class= "product-desc">{this.props.cartitem.items.name}</td>
      <td class= "product-desc">
        <button class = "btn btn-primary" onClick = {this.decrementOrder}>-</button>
        <span class = "show-order">{this.props.cartitem.quantity}</span>
        <button class = "btn btn-primary" onClick = {this.incrementOrder}>+</button>
      </td>
      <td class= "product-desc">{this.props.cartitem.items.price}</td>
    </tr>
  </tbody>
</table>

    );
  }
}

export default CartDetail;
