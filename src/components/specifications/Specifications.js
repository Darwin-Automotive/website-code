import React from 'react';
// import Icon from '@material-ui/icons';
import './specifications.css';


const Specifications = ({classname, children, icon} ) => {
  return (
    <div className="specs">
      <span className={classname}>
        {/* <i className={icon}>******ICONS******</i> */}
        <p>
          {children}
        </p>
      </span>
    </div>
  )
}

export default Specifications
