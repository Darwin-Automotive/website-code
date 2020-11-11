import React, { Component } from 'react'
import { motion } from 'framer-motion'
import FeatureItem from './FeatureItem'
// import SpecImg1 from '../../images/new_images/middle2.png'
import SpecImg2 from '../../images/new_images/wheel3.6.png'
import './featureList.css'
export class Wheels extends Component {
  render() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
      >
        {/* Mechanical Features - Wheels */}
        <span>
          <ul className="featureGroup">
            <FeatureItem name="Rim" description="Alloy 26” Double-wall Silver" />
            <FeatureItem name="Tires" description='26*1.90" Nylon, Black' />
            <FeatureItem name="Tube" description='26" x 1.90" 45L' />
            <FeatureItem name="Spokes" description="13 SWG ED Silver" />
          </ul>

          <div class="spec-img">
            <img src={SpecImg2} alt="MARK IV component" ></img>
          </div>
        </span>
      </motion.div>
    )
  }
}

export default Wheels
