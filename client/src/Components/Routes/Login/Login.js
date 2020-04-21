import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "../../Routes/Home/Home"
import { Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {userLogin} from '../../../actions/authVerify';
import { withRouter } from "react-router-dom";
import authToken from './authToken';
import {signUp} from "../../../actions/authVerify"
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Username: '',
			Useremail: '',
			Password: '',
			mode: 'Login',
		}

	}

	copyName(e) {
		this.setState({ Username: e.target.value });
	}
	copyEmail(e) {
		this.setState({ Useremail: e.target.value });
	}

	copyPassword(e) {
		this.setState({ Password: e.target.value });
	}

	changeMode(activeMode) {
		this.setState({
			mode: activeMode
		});

		let form = document.querySelector('.user-form');
		form.style.animationName = activeMode;
		form.style.animationDuration = "1s";
		form.style.left = activeMode == 'Login' ? '28%' : '-28%';
	}

	send(e) {
		e.preventDefault();
		const user = {
			Useremail:this.state.Useremail,
			Password:this.state.Password,
		}
		if (this.state.mode == 'Login') {
			//Setting valid user to false
			
			
			//Triggering action
			
			this.props.storeUser(user,this.props.history);
			
		}
		else {
			//User Data send to the server  
			const userdata = {
				Username: this.state.Username,
				Useremail: this.state.Useremail,
				Password: this.state.Password
			}
			//Dispatching for signUp
              this.props.signUser(userdata);
			
		}

	}

	render(props) {
		return (
			<div class="container login-container">

				<div class="login-info-box">
					<h2>Dont Have an account?</h2>
					<p>Register here</p>
					<label id="label-register" for="log-reg-show">Register</label>

					<input type="button" name="active-log-panel" onClick={() => this.changeMode("Register")} value="Register" id="log-reg-show" checked="checked" />

				</div>

				<div class="register-info-box">
					<h2>Have an account?</h2>
					<p>Login here</p>
					<label id="label-login" for="log-login-show">Login</label>

					<input type="button" value="Login" onClick={() => this.changeMode("Login")} name="active-log-panel" id="log-login-show" />
				</div>

				<div class="row">


					<form class="form-horizontal user-form" method="post">

						<h3>{this.state.mode === "Login" ? "Login Form" : "Registration Form "}</h3>
						{(this.state.mode === "Register") ?
							<div class="form-group">
								<label for="name" class="cols-sm-2 control-label">Your Name</label>
								<div class="cols-sm-10">
									<div class="input-group">
										<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
										<input type="text" onChange={(e) => this.copyName(e)} class="form-control" name="Username" id="name" placeholder="Enter your Name" required />
									</div>
								</div>
							</div> : ''
						}

						<div class="form-group">
							<label for="email" class="cols-sm-2 control-label">Your Email</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" onChange={(e) => this.copyEmail(e)} class="form-control" name="Useremail" id="email" placeholder="Enter your Email" />
								</div>
							</div>
						</div>

						<div class="form-group">
							<label for="password" class="cols-sm-2 control-label">Password</label>
							<div class="cols-sm-10">
								<div class="input-group">
									<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" onChange={(e) => this.copyPassword(e)} class="form-control" name="password" id="password" placeholder="Enter your Password" />
								</div>
							</div>

						</div>

						<div class="form-group">
							{
							
								this.state.errormsg == "SignUp Succesful" ?
									<p class="text-primary">{this.props.state.user.errors}</p> :
									<p class="text-danger">{this.props.state.user.errors}</p>
							}

						</div>


						<div class="form-group ">
							<button onClick={(e) => { this.send(e) }} type="button" class="btn btn-info btn-lg btn-block login-button">{this.state.mode}</button>
						</div>
					</form>

				</div>
			
				{this.state.isUserValid ? <Redirect to='/' /> : ""}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch)=>{
     return {
		 storeUser:(payload,history)=>dispatch(userLogin(payload,history)),
		 signUser:(payload)=>dispatch(signUp(payload))
	 }
}

const mapStateToProps = (state) =>{
   return{
	   state
   }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(withRouter(Login));
