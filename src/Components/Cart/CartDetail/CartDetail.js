import React,{Component} from 'react';
import './CartDetail.css'

class CartDetail extends Component{
  render(props){
    console.log(this.props);
    return(  
      <div className="card cart-card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={this.props.cartitem.imageUrl} className="card-img" alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{this.props.cartitem.price}rs</h5>
            <p className="card-text product-card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted"></small></p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default CartDetail;
