const cloudinary = require("cloudinary").v2;

exports.cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: "dz1vrbvcv",
      api_key: "694537254549272",
      api_secret: "SCiWRhQZAs3oVfKwpn-YrY_2LYQ",
    });
  } catch (error) {
    console.log(error);
  }
};
