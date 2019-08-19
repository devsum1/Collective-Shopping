import React,{Component} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';
import "./TopNav.css";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cart from "../../Cart/Cart";
import Home from "../../Routes/Home/Home"
import {connect} from 'react-redux';
import { log } from 'util';

class TopNav extends Component{
  render(props){
    return(
      <nav className="navbar navbar-expand-lg navbar-light Topnavbar">
          <a className="navbar-brand" href="#">
              <Link to = "/" ><div className = "Main-Logo"> </div></Link>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
          </button>
    
      <div className = "collapse navbar-collapse" id="navbarSupportedContent">
    
        <form className="form-inline my-10 my-lg-0 ">
          <input className="form-control mr-sm-2 main-search" type="search" placeholder="Search" aria-label="Search"/>
          <div className="dropdown">
            <button className="btn btn-outline my-2 my-sm-0 dropdown-toggle category-options" type="submit" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Select Category
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
         
              <button type="button" class="btn search-button">Search</button> 

        </form>
        
         
             <Link to = "/Cart"><i className="fa fa-shopping-bag cart-icon" aria-hidden="true"></i>
             </Link>
          
        

        <span className = "cart-number">{this.props.cartNumber.orderCount}
        </span>
      </div>

              
    </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    cartNumber: state
  };

}

export default connect(mapStateToProps)(TopNav);
