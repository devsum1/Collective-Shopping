import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';
import "./TopNav.css";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getItems } from '../../../actions/cartFunctionality';



class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCount: 0,
      searched: ''
    }
  }

  componentDidMount() {
    this.props.get();
  }

  passQuery(e) {
    e.preventDefault();
    this.props.filter(this.state.searched);
  }

  render(props) {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light Topnavbar">
        <a className="navbar-brand" href="#">
          <Link to="/" ><div className="Main-Logo"> </div></Link>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse combine" id="navbarSupportedContent">

          <form className="form-inline my-10 my-lg-0 top-form ">
            <input onChange={(e) => this.setState({ searched: e.target.value })} className="form-control mr-sm-2 main-search top-form-control" type="search" placeholder="Looking For...." aria-label="Search" />
            <button type="button" class="btn search-button" onClick={(e) => this.passQuery(e)}><Link to="/search">Search</Link></button>


          </form>


          <Link to="/Cart"><i className="fa fa-shopping-bag cart-icon" aria-hidden="true"></i>
          </Link>

          <span className="cart-number">{this.props.cartNumber.addToCart.length}
          </span>

        </div>


      </nav>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    get: () => dispatch(getItems()),
    filter: (val) => dispatch({
      type: 'search',
      payload: val
    })
  };
}

function mapStateToProps(state) {
  return {
    cartNumber: state
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
