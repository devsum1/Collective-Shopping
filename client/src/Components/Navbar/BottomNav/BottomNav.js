import React,{Component} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../BottomNav/BottomNav.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class BottomNav extends Component{
  render(props){
    return(
    <div>
      
      <nav className="navbar  navbar-expand-lg navbar-light Topnavbar bottomNav ">
        <a className="navbar-brand" >
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       
        <div className="navbar-nav">
          <a className="nav-item nav-link active bottom-content">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link bottom-content" >Collection</a>
          <a className="nav-item nav-link bottom-content" >Today's deals</a>
          <Link to = "/Login"><i class="fa fa-user" aria-hidden="true"></i>
             </Link>
          <a className="nav-item nav-link bottom-content" ><i class="fa fa-phone" aria-hidden="true"></i></a>
        </div>
      
       </div>
      
      </nav>
     
    </div>

    );
  }
}
export default BottomNav;
