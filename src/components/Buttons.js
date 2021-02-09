import React from "react";
// import {Link } from 'react-router-dom'
import "./buttons.css";

export const Buttons = (props) => {
  // function onClick() {
  //   console.log(props.children);
  // }
  return (
    <div className="buttons">
      {/* // <Link to={buttonDetails.href}> */}
      <a
        // className="buttons"
        href=" "
        // onClick={onClick()}
      >
        {props.children}
      </a>
      {/* // </Link> */}
    </div>
  );
};

export default Buttons;
