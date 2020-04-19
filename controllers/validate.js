const joi= require('@hapi/joi');


const validateSignUp = (data)=>{
    const registerschema ={
        Username:joi.string().required().min(3).max(25),
        Useremail:joi.string().required().email(),
        Password:joi.string().required().min(3).max(255),
    };

    const signupstatus = joi.validate(data,registerschema);
    return signupstatus;
}

const validateLogin = (data)=>{
  
    const Loginschema ={
        email:joi.string().required().email(),
        password:joi.string().required().min(3).max(255),
    };

    const Loginstatus = joi.validate(data,Loginschema);
    return Loginstatus;
}
module.exports.validateSignUp = validateSignUp;
module.exports.validateLogin = validateLogin;