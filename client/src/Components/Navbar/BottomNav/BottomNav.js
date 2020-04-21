import React, { Component } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../BottomNav/BottomNav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {userLogout} from "../../../actions/authVerify";
import {withRouter} from "react-router";
class BottomNav extends Component {
  deleteToken = () => {
    localStorage.removeItem("jwtToken");
    const payload = {
      name: "",
      email: "",
      user_id: "",
      isUserLogin: false,
    };
    this.props.deleteUser(payload,this.props.history);
  };
  render(props) {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg navbar-light Topnavbar bottomNav ">
          <a className="navbar-brand"></a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <a className="nav-item nav-link active bottom-content">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link bottom-content">Collection</a>
              <a className="nav-item nav-link bottom-content">Today's deals</a>
              <Link to="/Login">
                <i class="fa fa-user" aria-hidden="true"></i>
              </Link>
              <a className="nav-item nav-link bottom-content">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </a>

              {this.props.state.user.isUserLogin ? (
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.props.state.user.name}
                  </a>
                  <div
                    class="dropdown-menu "
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                    {this.props.state.user.email}
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={this.deleteToken}
                    >
                      Logout
                    </a>
                  </div>
                </li>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (payload,history) => dispatch(userLogout(payload,history)),
  };
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BottomNav));
