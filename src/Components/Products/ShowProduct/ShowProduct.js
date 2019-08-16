import React,{Component} from 'react';
import"../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./ShowProduct.css";

class ShowProduct extends Component{
  render(props){
    console.log(this.props.imageUrl);
    return (
        <div class="card show-content">
        <img src={this.props.imageUrl}  class="card-img-top Product-img" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{this.props.price}</h5>
          <p class="card-text">{this.props.name}</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    );
  }
}
export default ShowProduct;
