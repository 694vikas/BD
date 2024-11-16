const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
  try {
    // get data
    const { name, email, password, role } = req.body;

    //check for existing user
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "user already existed in database",
      });
    }

    //hashed password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        message: "error in hashing the password",
      });
    }
    //put user into database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(200).json({
      success: true,
      message: "user is created successfully",
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "user cannot be registered",
    });
  }
};

// login wala
exports.login = async (req, res) => {
  try {
    //finding data
    const { email, password } = req.body;
    //validate
    if (!password || !email) {
      return res.status(500).json({
        success: false,
        message: "fill all the details",
      });
    }
    // user hai ya nhi
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user is not registered",
      });
    }
    // payload wala
    let payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    // password verification
    if (await bcrypt.compare(password, user.password)) {
      //genertae web token
      let token = jwt.sign(payload, "vikasjwt", { expiresIn: "2h" });

      // user = user.toObject();
      user = user.toObject();

      user.token = token;
      user.password = undefined;
      let options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        user,
        token,
        message: "user loggedin successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "passwored do not match",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "unable to login please try again later" });
  }
};
