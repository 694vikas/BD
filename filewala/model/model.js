const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

// post middleware
fileSchema.post("save", async function (doc) {
  try {
    console.log("DOC", doc);
  } catch (err) {
    console.log(err);
  }
});

//mailhost-  , mailuser--,mailpassword,,fcix jdii kqze gyrf
// post hooks middleware
fileSchema.post("save", async function (doc) {
  try {
    console.log("doc is", doc);
    // transpoter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: "vikaskumar5016473@gmail.com",
        pass: "fcix jdii kqze gyrf",
      },
    });

    // mail send
    let info = await transporter.sendMail({
      from: "vikasbhai",
      to: doc.email,
      subject: "New File uploaded",
      html: `<h2>jai shree ram ${doc.name} bhai</h2> <p>file upload ho gya hai bhaiya : </p>view here :<a href="${doc.imageurl}">${doc.imageurl}</a></p>`,
    });

    console.log(info);
  } catch (err) {
    console.log("cosole error", err);
  }
});

module.exports = mongoose.model("File", fileSchema);
