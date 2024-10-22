const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { validateSignUp, validateLogin } = require("../controllers/validate");
const keys = require("../public/config/keys");
const jwt = require("jsonwebtoken");

// to register the user
router.post("/signup", async function (req, res) {
  const validStatus = validateSignUp(req.body);
  const { error } = validStatus;
  console.log(error);
  //Chehcking for validation error
  if (error) {
    const message = error.details[0].message;
    return res.send(message);
  }

  try {
    //Hashing passwords
    const salt = await bcrypt.genSalt();
    bcrypt.hash(req.body.Password, salt, (err, hash) => {
      if (err) throw err;
      const newuser = new User();
      newuser.Username = req.body.Username;
      newuser.Useremail = req.body.Useremail;
      newuser.password = hash;

      newuser.save(function (err, savedUser) {
        if (err) {
          console.log(err);
          return res.send("User already registerd");
        }
        return res.send("SignUp Succesful");
      });
    });
  } catch (e) {
    res.send("Some error occured");
  }
});
//for login the current user
router.get("/login", (req, res) => {
  //Handle user validation here

  const validStatus = validateLogin(req.query);
  const { error } = validStatus;
  console.log(error);
  //Chehcking for validation error
  if (error) {
    const message = error.details[0].message;
    return res.json({
      message,
      success:false,
    });
  }
  //Use user.findOne()
  User.find({}).exec((err, user) => {
    if (err) console.log(err);
    else {
      const email = req.query.email;
      const password = req.query.password;
      let emailMatch = false;

      user.forEach((item) => {
        if (email == item.Useremail) {
          emailMatch = true;
          bcrypt
            .compare(password, item.password)
            .then(function (result) {
              if (result) {
                const payload = {
                  email: item.Useremail,
                  name: item.Username,
                };
                // Sign token
                jwt.sign(
                  payload,
                  keys.app.secret,
                  {
                    expiresIn: 31556926, // 1 year in seconds
                  },
                  (err, token) => {
                    return res.json({
                      success: true,
                      token: "Bearer " + token,
                      name: payload.name,
                      email: payload.email,
                    });
                  }
                );
              } else return res.json({
                success:false,
                message:"Eithe of email and password is wrong"
              });
            })
            .catch((err) => console.log(err));
        }
      });
      if (!emailMatch){ return res.json({
        success:false,
        msg:"No email exists"
      });
    }
    }
  });
});

module.exports = router;
