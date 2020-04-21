import React,{Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import authToken from "./Components/Routes/Login/authToken";
import jwt_decode from "jwt-decode";
import {connect} from 'react-redux';
import {setCurrentUser} from './actions/authVerify';
import { withRouter } from "react-router-dom";
import { decode } from 'jsonwebtoken';


class App extends Component{
  
    componentDidMount(){
      if(localStorage.getItem("token")){
        const token = localStorage.getItem("token");
        //Setting token in axios header
        authToken(token);
      
        const decoded = jwt_decode(token);
        const user = {
          name:decoded.name,
          email:decoded.email,
          isUserLogin:true,
         
        }
        console.log(decoded);
        this.props.setUser(user);
          }
    }
  render(props){
    return(
     <div>
     <Navbar/>
     </div>

    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
  setUser:(payload)=>dispatch(setCurrentUser(payload)),
}
}
const mapStateToProps = (state)=>{
  return {
   state
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
