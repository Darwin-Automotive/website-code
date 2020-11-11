import React from 'react'
import PrivacyPDF from "../../random/Privacy and Cookie Policy- 09-11-2020.pdf"
const FooterLink = (props) => {
  return (
    <div className="footer-link">
      <p> 
        <a href={PrivacyPDF} target="_blank">
        {props.title}
        </a>
      </p>
    </div>
  )
}

export default FooterLink
