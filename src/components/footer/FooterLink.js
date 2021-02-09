import React from "react";

const FooterLink = (props) => {
  return (
    <div className="footer-link">
      <p>
        <a href={props.document} target="_blank">
          {props.title}
        </a>
      </p>
    </div>
  );
};

export default FooterLink;
