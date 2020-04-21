import axios from 'axios';
import authToken from '../Components/Routes/Login/authToken';
const userLogin = (data,history)=>{
    return dispatch=>{
      axios.get('/user/login', {
				params: {
					email: data.Useremail,
					password: data.Password
				}
			})
				.then(res => {
					console.log(res);
					if (res.data.success) {
						//Saving token in local storage
						localStorage.setItem("token",res.data.token);
						authToken(res.data.token);
						//Send username and email to redux
					
						const payload = {
							name:res.data.name,
							email:res.data.email,
							user_id:res.data.token,
              isUserLogin:true,
              errors:"",
              }
              
              console.log(payload);
						//Triggering action
            dispatch( {
              type:"User_LogIn",
              payload
            })
            //Navigating to Home page
            history.push('/');
          }
          else{
            const data = {
							name:"",
							email:"",
							user_id:"",
              isUserLogin:false,
              errors:res.data.message,
              }
            dispatch({
              //It took me 3 hours to fix my action.type to User_login to User_Login
              type:"User_LogIn",
              payload:data
            })
          } 
				})
				.catch(err => console.log(err));
      
      }
}
const signUp = (data)=>{
  return dispatch =>{
  axios.post('/user/signup', data)
				.then(res =>{
          console.log(res);
          const payload = {
            name:"",
            email:"",
            user_id:"",
            isUserLogin:false,
            errors:res.data,
            }
          dispatch( {
            type:"User_SignUp",
            payload
          })
        })
        .catch(err => alert(err));
      }
}


const userLogout = (payload,history)=>{
  history.push("/login");
  localStorage.removeItem("token");
  authToken(null);
  return dispatch=>{
      dispatch( {
        type:"User_LogOut",
        payload
      })
  }
}

const setCurrentUser = (data) => {
  return {
    type: "SET_CURRENT_USER",
    payload: data
  };
};
export {userLogin,signUp,userLogout,setCurrentUser};

