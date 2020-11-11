import React from 'react'

const FooterSocialLink = (props) => {

  return (
    <div className="social-link">
      <a 
        href={props.socialUrl} 
        alt={props.social} 
        target="_blank"
      >
        <i className={"fa fa-"+props.social} aria-hidden="true" ></i>
      </a>
    </div>
  )
}

export default FooterSocialLink
