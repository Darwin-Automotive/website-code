const functions = require("firebase-functions");
// const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors");
// ({
//   origin: false,
// });
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
// admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: "hostinger",
  host: "smtp.hostinger.in",
  port: 587,
  secure: false,
  auth: {
    user: "sales@darwinautomotive.in",
    pass: "zs$jg1?4",
  },
});

// app.use(express.json());
exports.send = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // console.log(JSON.stringify(req.body.params))
    // console.log(express.json())
    var username = req.body.params.username;
    var email = req.body.params.email;
    var contactNum = req.body.params.contactNum;
    var areaArray = req.body.params.area;
    var districtName = req.body.params.district;
    var Zipcode = req.body.params.Zipcode;
    // console.log(email)
    var content = ` 
      <p>Username: ${username}</p> \n <p>Email: ${email}</p> \n <p>Contact Number: ${contactNum}</p> \n <p>Area: ${areaArray}</p> \n <p>District Name: ${districtName}</p> \n <p>Zipcode: ${Zipcode}</p>`;

    console.log(content);
    const mail = {
      from: email.json,
      to: "sales@darwinautomotive.in, ayush@darwinautomotive.in",
      subject: "Preorder Query",
      html: content,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
        });
      } else {
        res.json({
          status: "success",
        });
      }
    });
  });
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    var email = req.body.params.email;
    var content = `<h4>Email: ${email}</h4>`;

    const mail = {
      from: email.json,
      to: "sales@darwinautomotive.in, ayush@darwinautomotive.in",
      subject: "Marketing mail signup",
      html: content,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
        });
      } else {
        res.json({
          status: "success",
        });
      }
    });
  });
});
app.use(cors({ origin: true }));
app.use(express.json({ extended: false }));

app.use("/events/payments", require("./routes/payments"));

app.listen(port, () => console.log(`Server started on PORT ${port}`));
