import React from 'react';
import './heading.css'


const Heading = (props) => {
  return (
    <div className="_heading">
      <h1>{props.heading}</h1>
    </div>
  )
}

export default Heading
