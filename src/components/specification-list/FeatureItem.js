import React from 'react'
import { motion } from 'framer-motion'
import './featureItem.css'



const Specifications = (props) => {
  // const feature = new Object(name);
  // console.log(feature)
  return (
    <motion.div
      layout
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
    >
      <li style={{margin:'10px'}}>
        <p className="featureName">
          {props.name}
        </p>
        <p className="featureDesc">
          {props.description}
        </p>
      </li>
    </motion.div>
  )
}

export default Specifications
