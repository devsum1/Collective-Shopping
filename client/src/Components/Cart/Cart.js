import React,{Component} from 'react';
import CartDetail from './CartDetail/CartDetail';
import Checkout from './Checkout/Checkout';
import { connect } from 'react-redux';


class Cart extends Component{
  render(props){
    return(
    <div>
        {
            this.props.cartItem.addToCart.map((cartitem,index)=><CartDetail key = {index} num = {index} 
            cartitem = {cartitem}/>
            )
        }
        <Checkout/>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItem: state
  };

}
export default connect(mapStateToProps)(Cart);
