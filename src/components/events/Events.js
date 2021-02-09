import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Heading from "../Heading.js";
// import instance from "../../../functions/razorpay";
import Axios from "axios";
import logo from "../../images/new_images/logo1.png";
import coursePDF from "../../random/A Comprehensive Course on EV 2 Wheelers- DARWIN Automotive.pdf";
import "./events.css";
function Events() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobileNum, setMobileNum] = useState(91);
  const [alertMessage, setAlertMessage] = useState(null);
  const [flag, setflag] = useState(null);
  const history = useHistory();

  const textRegex = RegExp(/[a-zA-Z ]$/);
  const individualEmailRegex = RegExp(/^[A-z0-9@.]+$/);
  // const emailRegex = RegExp(/^[A-z0-9.]+@[A-z0-9]+\.[A-z]+$/)
  // const individualNumberRegex = RegExp(/^[0-9]/)
  const numberRegex = RegExp(/^[0-9]{10,12}/);

  const handleChange = (e) => {
    if (e.target.classList.contains("username")) {
      // textRegex.test(e.target.value) ? setUsername(e.target.value) : () => { setUsername(""); console.log("Please enter a valid name."); }
      if (!textRegex.test(e.target.value)) {
        setName("");
        setflag(false);
        setAlertMessage("Please enter a valid name.");
      } else {
        setName(e.target.value);
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
        setMobileNum(null);
        setflag(false);
        setAlertMessage("Please enter a valid contact number.");
      } else {
        setMobileNum(e.target.value);
        setflag(true);
        setAlertMessage(null);
      }
    }
  };
  const loadScript = (src) => {
    console.log("Loading script");
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
        console.log("Script loaded");
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  async function payment(e) {
    e.preventDefault();
    if (name !== null && email !== null && mobileNum !== null) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        setAlertMessage(
          "Unable to load Razorpay SDK. Check your internet connection."
        );
        return;
      } else {
        setAlertMessage("Payment Processing...");
      }
      const result = await Axios.post(
        // "/sendEmail"
        "http://localhost:3001/events/payments/orders"
      );

      if (!result) {
        setAlertMessage(
          "Unable to connect to server. Check your internet connectivity."
        );
        return;
      }
      const { amount, id: order_id, currency } = result.data;

      const options = {
        key: "rzp_test_7mQ67IoKzvvuB2", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "DARWIN Automotive",
        description: "Test Transaction",
        image: logo,
        order_id: order_id,
        handler: async function (response) {
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await Axios.post(
            "http://localhost:3001/events/payments/success",
            data
          );

          if (result) {
            // Email course handout
            const courseHandout = document.createElement("a");
            courseHandout["href"] = coursePDF;
            document.body.appendChild(courseHandout);
            console.log(result.data.msg);
            if (result.data.msg === "success") {
              setAlertMessage(() => "Payment Successful!");
              // history.replace("/success");
            }
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: mobileNum,
        },
        theme: {
          color: "#000000",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else setAlertMessage("Enter the all the fields");
  }
  return (
    <div className="events">
      <div className="events__heading">
        <Heading heading="Events" />
      </div>
      <div className="events__content">
        <div className="events__contentIntro">
          {/* Brief of the event */}

          <p>
            The course has been specifically designed to help prepare candidates
            for the ever-increasing e-bike market sector. It provides the skills
            needed to confidently set up, design and manufacture, service and
            repair a broad spectrum of electric bikes along with an
            understanding of the specific standards and legal aspects that apply
            to them. It quickly gets candidates up to speed with all the latest
            e-bike technology and equips them with the skills needed to work on
            today’s rapidly advancing and ever more complex workshop
            environment.
          </p>
        </div>
        {/* Details regarding the event */}

        {/* Introduce guests */}

        {/* Attach course handout */}

        {/* Registration form and payment - Name, Email, Mobile Number, Confirm Amount, */}

        <div className="events__container">
          <Heading heading="Registration" />
          <div
            //  className={flag ? 'alert-success' : 'alert-danger' }
            className="alert-message"
          >
            <p>{alertMessage}</p>
          </div>
          <form>
            <div className="events__formField">
              <h5>Name</h5>
              <input
                className="username"
                type="text"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="events__formField">
              <h5>E-mail</h5>
              <input
                className="email"
                type="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="events__formField">
              <h5>Mobile Number</h5>
              <input
                className="contact-number"
                type="number"
                value={mobileNum}
                onChange={handleChange}
              />
            </div>

            <p>
              By continuing, you agree to DARWIN Automotive's Conditions of Use
              and Privacy Notice.
            </p>
            <button
              type="submit"
              onClick={payment}
              className="events__paymentButton"
              unselectable="on"
            >
              Proceed to Payment
            </button>
            {/* <Buttons
              btnStyle="btn--outline"
              btnSize="btn--medium"
              onClick={payment}
            >
              Proceed to Payment
            </Buttons> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Events;
