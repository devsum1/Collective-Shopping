import React,{Component} from 'react';
import"../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./ShowProduct.css";
import {connect} from 'react-redux';

class ShowProduct extends Component{

  render(props){
    return (
        <div class="card product-card show-content">
        <img src={this.props.imageUrl}  class="card-img-top Product-img" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{this.props.price}</h5>
          <p class="card-text">{this.props.name}</p>
          <button class="btn btn-primary" onClick = {() => { this.props.increment(); this.props.add(this.props);}}>Add to Cart</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
   increment: () => dispatch({type: 'Order'}),
   add: (data) => dispatch({type: 'add',payload:data})
  };
 }

export default connect(null,mapDispatchToProps)(ShowProduct);
