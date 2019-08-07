import React,{Component} from 'react';
import BottomNav from "./BottomNav/BottomNav";
import TopNav from "./TopNav/TopNav";
import "./Navbar.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component{
  render(props){
    return(
        <div >
            <TopNav/>
            <BottomNav/>
        </div>
    );
  }
}
export default Navbar;
