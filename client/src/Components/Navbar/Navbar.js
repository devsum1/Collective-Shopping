import React,{Component} from 'react';
import BottomNav from "./BottomNav/BottomNav";
import TopNav from "./TopNav/TopNav";
import "./Navbar.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Navbar extends Component{
 
  render(props){
    const MainNav = {marginBottom:'130px'};
    return(
        <div class = "Main-nav" style = {MainNav}>
            <TopNav />
            <BottomNav/>
        </div>
    );
  }
}
export default Navbar;
