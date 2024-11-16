const File = require("../model/model");
const cloudinary = require("cloudinary").v2;
exports.localFileUpload = async (req, res) => {
  try {
    // taking file from req body;
    const file = req.files.file;
    console.log("file is", file);

    //path jha file store hogi
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("pathe->", path);

    // adding path to move function
    file.mv(path, (err) => {
      console.log(err);
    });
    // success wala response

    res.status(200).json({
      success: true,
      message: "the file is uploaded successfully",
    });
  } catch (err) {
    console.log("error in uploading file", err.message);
  }
};
////
function isFileTypeSupported(fileType, supportedTypes) {
  return supportedTypes.includes(fileType);
}
// file upload to cloudinary
async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image Uploader Handler
exports.imageUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    // Fetch file
    const imageFile = req.files.imageFile;
    // validation kro image k upar

    const supportedTypes = ["png", "jpg", "jpeg"];
    const fileType = imageFile.name.split(".")[1].toLowerCase();

    // Check file type is supported or not
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File type not supported",
      });
    }
    //file type supported hai
    // Upload to Cloudinary
    const response = await uploadFileToCloudinary(imageFile, "vikashelp");
    console.log("RESPONSE==", response);

    // Upload to DB
    const fileData = await File.create({
      name,
      tags,
      email,
      imageurl: response.secure_url,
    });

    res.status(200).json({
      success: true,
      message: "Image  uploaded successfully",
      file: fileData,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong in uploading image",
    });
  }
};

// video upload handler
exports.videoUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    //fetch video data
    const fileVideo = req.files.videoFile;
    console.log(File);

    //validate the video
    const supportedType = ["mp4", "mov"];
    const fileType = fileVideo.name.split(".")[1].toLowerCase();
    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "File type not supported",
      });
    }
    console.log("filetype:", fileType);
    // upload file supported
    // Upload to Cloudinary
    const response = await uploadFileToCloudinary(fileVideo, "vikashelp");

    console.log("RESPONSE==", response);

    // upload to db
    const vidFile = new File({
      name,
      tags,
      email,
      imageurl: response.secure_url,
    });
    const fileData = await vidFile.save();

    res.status(200).json({
      success: true,
      message: "video  uploaded successfully",
      file: fileData,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

// image resizer
exports.imageSizeReducer = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    // Fetch file
    const imageFile = req.files.imageFile;
    console.log(imageFile);

    const supportedTypes = ["png", "jpg", "jpeg"];
    const fileType = imageFile.name.split(".")[1].toLowerCase();
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File type not supported",
      });
    }

    // Upload to Cloudinary
    // HW - Decrease size by height and width
    const response = await uploadFileToCloudinary(imageFile, "vikashelp", 50);
    console.log(response);

    // Upload to DB
    const fileData = await File.create({
      name,
      tags,
      email,
      imageurl: response.secure_url,
    });

    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      file: fileData,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};
