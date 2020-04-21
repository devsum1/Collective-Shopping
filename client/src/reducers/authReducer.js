const initialstate = {
  name: "",
  email: "",
  user_id: "",
  isUserLogin: false,
  errors: "",
};
const authReducer = (state = initialstate, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "User_LogIn":
      state = action.payload;
      break;
    case "User_LogOut":
      state = action.payload;
      break;
    case "User_SignUp":
      state = action.payload;
      break;
    case "SET_CURRENT_USER":
      state = action.payload;
      break;
  
    default:
      break;
  }
  return state;
};

export default authReducer;
