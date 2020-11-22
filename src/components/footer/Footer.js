import React, { useState } from "react";
import axios from "axios";
import CompanyDetails from "./CompanyDetails";
import FooterLink from "./FooterLink";
import FooterSocialLink from "./FooterSocialLink";
import Heading from "../Heading";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const individualEmailRegex = RegExp(/^[A-z0-9@.]+$/);

  const handleChange = (e) => {
    if (individualEmailRegex.test(e.target.value)) setEmail(e.target.value);
    else setEmail("");
  };
  const submitEmail = (e) => {
    e.preventDefault();

    axios
      .post("/sendEmail", {
        params: {
          email: email,
        },
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.status === "success")
          alert("You have signed up to get in touch with us.");
        else if (response.data.status === "fail") alert("Email not sent.");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <>
      <footer>
        {/* <div className="footer-left"> */}
        <div className="sign-up">
          <Heading heading="Get in touch" />
          <form method="post">
            <label htmlFor="sign-up-email">
              <i className="fa fa-long-arrow-right" onClick={submitEmail}></i>
            </label>
            <input
              type="email"
              name="sign-up-email"
              placeholder="Enter your email here"
              onChange={handleChange}
              value={email}
            />
            {/* <input type="submit" name="submit-email" /> */}
          </form>
        </div>
        <CompanyDetails />
        <div className="social-container">
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
        {/* </div> */}

        <div className="footer-links">
          {/* <FooterLink title="Terms &amp; Conditions" link=""/> */}
          <h6>&copy;| DARWIN Automotive</h6>
          <FooterLink title="Privacy " />
        </div>
      </footer>
    </>
  );
};

export default Footer;
