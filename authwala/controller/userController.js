const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  try {
    // fetch data
    const { name, email, password, role } = req.body;
    // validate
    const existUser = await User.findOne({ email });
    // return if exist
    if (existUser) {
      return res.status(400).json({
        message: "user is alredy existed",
        success: false,
      });
    }
    // hash
    let hashedPassword;
    try {
      // hash krna hoga password
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (erro) {
      console.log(erro.message);
      return res.status(500).json({
        success: false,
        message: "error in hashing the password",
      });
    }

    // db me  daalo data
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(200).json({
      message: "user created successfully",
      success: true,
      data: user,
    });
  } catch (erro) {
    res.status(500).json({
      message: "user not created try after ",
      success: false,
    });
  }
};
