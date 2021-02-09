import React, { useState, useRef } from "react";
import axios from "axios";
import FooterSocialLink from "../footer/FooterSocialLink";
import { motion } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import PrivacyPDF from "../../random/Privacy and Cookie Policy- 09-11-2020.pdf";
// import Heading from '../Heading';
import CloseIcon from "../../images/new_images/close-24px.svg";
import "./preordercss.css";
// import { Email, Height } from '@material-ui/icons';

const PreorderModal = ({ isModalOpen, setisModalOpen }) => {
  // this.state = {
  //   name: "",
  //   district: "",
  // }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState(undefined);
  const [Zipcode, setZipcode] = useState("");
  const [areaName, setAreaName] = useState([]);
  const [districtName, setDistrictName] = useState(null);
  const [agreement, setAgreement] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertBox, setAlertBox] = useState(null);
  const [flag, setflag] = useState(true);

  var areaArray = new Array();

  const [isOpen, setisOpen] = useState(isModalOpen);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const textRegex = RegExp(/[a-zA-Z ]$/);
  const individualEmailRegex = RegExp(/^[A-z0-9@.]+$/);
  // const emailRegex = RegExp(/^[A-z0-9.]+@[A-z0-9]+\.[A-z]+$/)
  // const individualNumberRegex = RegExp(/^[0-9]/)
  const numberRegex = RegExp(/^[0-9]{8,10}/);
  const zipcodeRegex = RegExp(/^[0-9]{0,6}/);

  const handleChange = (e) => {
    if (e.target.classList.contains("username")) {
      // textRegex.test(e.target.value) ? setUsername(e.target.value) : () => { setUsername(""); console.log("Please enter a valid name."); }
      if (!textRegex.test(e.target.value)) {
        setUsername("");
        setflag(false);
        setAlertMessage("Please enter a valid name.");
      } else {
        setUsername(e.target.value);
        setAlertMessage(null);
      }
    } else if (e.target.classList.contains("email")) {
      if (!individualEmailRegex.test(e.target.value)) {
        setEmail("");
        setflag(false);
        setAlertMessage("Please enter a valid email id.");
      } else {
        setEmail(e.target.value);
        setAlertMessage(null);
      }
    } else if (e.target.classList.contains("contact-number")) {
      if (!numberRegex.test(e.target.value)) {
        setContactNum(null);
        setflag(false);
        setAlertMessage("Please enter a valid contact number.");
      } else {
        setContactNum(e.target.value);
        setflag(true);
        setAlertMessage(null);
      }
    } else if (e.target.classList.contains("Zipcode")) {
      if (!zipcodeRegex.test(e.target.value)) {
        setflag(false);
        setZipcode("");
        setAlertMessage("Please enter a valid Zipcode.");
      } else {
        var zipcode = e.target.value;
        // console.log(e.target.value)
        setZipcode(() => {
          setZipcode(zipcode);
        });
        setflag(true);
        setAlertMessage(null);
      }
      //fetch address of the zipcode entered
      axios
        .get(`https://api.postalpincode.in/pincode/${zipcode}`)
        .then((response) => {
          //extract name and district and display a message confirming the details.
          response.data[0].PostOffice.forEach((element) => {
            areaArray.push(element.Name + "\t");
          });
          setAreaName(areaArray);
          setDistrictName(response.data[0].PostOffice[0].District);
          setAlertMessage(
            areaArray + "\n" + response.data[0].PostOffice[0].District
          );
        })
        .catch((error) => {
          //display an error in the pincode.
          setAlertMessage("Incorrect Zipcode.");
          console.log(error.data);
        });
    } else if (e.target.classList.contains("agreement")) {
      console.log(e.target.value);
      if (!e.target.value) {
        setflag(true);
        setAgreement(true);
      } else {
        setflag(false);
        setAgreement(false);
      }
    }
  };

  const submitPreorder = (e) => {
    e.preventDefault();

    if (flag) {
      axios
        .post("https://us-central1-da-preorder.cloudfunctions.net/send", {
          params: {
            username: username,
            email: email,
            contactNum: contactNum,
            area: areaName,
            district: districtName,
            Zipcode: Zipcode,
          },
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.status === "success") {
            setAlertMessage(null);
            setAlertBox("Form submitted. Follow us for more updates.");
            // alert("Message sent.");
          } else if (response.data.status === "fail") {
            // setAlertMessage("Form filled incorrectly.")
            alert("Message failed to send.");
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      setAlertMessage("Form filled incorrectly.");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setisModalOpen(false);
    setisOpen(false);
    // console.log(setisModalOpen)
  };

  const sidebar = {
    open: (height = 600) => ({
      clipPath: `circle(${height * 2 + 100}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 10,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 340px 240px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // console.log(isModalOpen)
  return (
    <motion.div
      className="background1"
      // initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      {/* <motion.div className="background1" variants={sidebar}> */}
      <motion.div className="preorder-form" variants={sidebar}>
        <img
          src={CloseIcon}
          className="close-form-icon"
          onClick={handleClick}
          alt=""
        />
        <h1>E-Bike Pre-order Form</h1>

        {/* alert messages */}
        <div
          //  className={flag ? 'alert-success' : 'alert-danger' }
          className="alert-message"
        >
          <p>{alertMessage}</p>
        </div>

        {/* alert message box */}
        <div
          //  className={flag ? 'alert-success' : 'alert-danger' }
          className="alert-message-box"
        >
          <p>{alertBox}</p>
          {alertBox ? (
            <div>
              <FooterSocialLink
                social="facebook"
                socialUrl="https://www.facebook.com/darwinautomotivepvtltd"
              />
              <FooterSocialLink
                social="instagram"
                socialUrl="https://www.instagram.com/darwinautomotive/"
              />
              <FooterSocialLink
                social="linkedin"
                socialUrl="https://www.linkedin.com/company/darwinautomotive/"
              />
              <FooterSocialLink
                social="whatsapp"
                socialUrl="https://chat.whatsapp.com/JX9WdAQu9bAKIYplXQC5x6"
              />
              <FooterSocialLink
                social="quora"
                socialUrl="https://www.quora.com/profile/DARWIN-Automotive-1?ch=10&share=12ca4385&srid=uR5jRd"
              />
            </div>
          ) : (
            <span></span>
          )}
        </div>

        <form method="post">
          <input
            type="text"
            className="username"
            name="name"
            placeholder="Your Name:"
            onChange={handleChange}
            value={username}
            required
          />

          <input
            type="email"
            className="email"
            name="email"
            placeholder="Your Email:"
            onChange={handleChange}
            value={email}
            required
          />

          <input
            type="number"
            className="contact-number"
            name="phone-number"
            placeholder="Your Contact Number:"
            onChange={handleChange}
            value={contactNum}
            required
          />

          <input
            type="text"
            className="Zipcode"
            name="Zipcode"
            placeholder="Your Zipcode:"
            onChange={handleChange}
            value={Zipcode}
            required
          />

          <label for="agreement">
            <input
              type="checkbox"
              className="agreement"
              name="agreement"
              onChange={handleChange}
              value={agreement ? agreement : ""}
              required
            />
            I have read and also agree to the Privacy Terms under DARWIN
            Automotive.
          </label>

          {/* <a href="" >Terms & Conditions</a> */}
          <a href={PrivacyPDF} target="_blank">
            Privacy Terms
          </a>

          <a className="preorder-btn" onClick={submitPreorder}>
            Pre Order
          </a>
        </form>
      </motion.div>
      {/* </motion.div> */}
    </motion.div>
  );
};

export default PreorderModal;
