import React,{Component} from 'react';
import"../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./ShowProduct.css";
import {connect} from 'react-redux';
import {addIn} from '../../../actions/cartFunctionality';
import Products from '../Products';
 

class ShowProduct extends Component{
  constructor(props){
    super(props);
    this.state = {
      disable:false,
    }
  }
  

  changeStyle(btn){
    this.setState({
      disable:!this.state.disable,
    });
    
 }

  render(props){

    const showModal = {display:this.state.disable?'inline-block':'none'};
    return (
        <div className="card product-card show-content">
        <img src={this.props.imageUrl}  className="card-img-top Product-img" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.price}</h5>
          <p className="card-text">{this.props.name}</p>
          <button data-toggle = "modal" data-target="#exampleModal"className={this.state.disable?"btn btn-success disabled":"btn btn-primary"} onClick = {() => { this.props.add(this.props);
          this.changeStyle(this.props.number)}}>{this.state.disable?"Added to Cart":"Add to Cart"}</button>
        </div>

        
        <div className="modal order-signal " style = {showModal} tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{this.props.name}</h5> 
        <button type="button" className="close" onClick = {()=> this.changeStyle()}data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <img src={this.props.imageUrl}  className="card-img-top Product-img" alt="..."></img>
      <h5 className="modal-title">{this.props.price}</h5>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">View Cart</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Delete</button>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
   add: (data) => dispatch(addIn(data))
  };
 }


export default connect(null,mapDispatchToProps)(ShowProduct);
