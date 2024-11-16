const jwt = require("jsonwebtoken");

// auth wala
exports.auth = async (req, res, next) => {
  try {
    const token = req.body.token;
    // agar token nhi hAI TO
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "token missing",
      });
    }
    // verify the token
    try {
      const decode = jwt.verify(token, "vikasjwt");
      req.user = decode;
    } catch (err) {
      return res.status(400).json({
        message: "token is invalid",
      });
    }
    next();
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "something went wrong in finding token",
    });
  }
};

// student wala
exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(404).json({
        success: false,
        message: "its a protected route for only students u cannot access it",
      });
    }
    next();
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "user role is not matching",
    });
  }
};

// admin wala
exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is a protect route for Admins,you can not access it",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "User Role is not Matching",
    });
  }
};
