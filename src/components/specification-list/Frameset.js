import React, { Component } from 'react'
import { motion } from 'framer-motion'
import FeatureItem from './FeatureItem'
import SpecImg1 from '../../images/new_images/11.png'
// import SpecImg2 from '../../images/new_images/throttle2.png'
import './featureList.css'

export class Frameset extends Component {
  render() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
      >
        {/* Mechanical Features - Frameset */}
        <ul className="featureGroup">
          <FeatureItem name="Frame" description="Alloy (6061) 16“ Unisex Frame, City Commuting E-Cycle & comfort Geometry with motor cable & brake cable routing" />
          <FeatureItem name="Front Fork" description="Steel Rigid aerodynamic blade type" />
          <FeatureItem name="Colors" description="Black, White" />
          <FeatureItem name="Decals Type" description="None" />
        </ul>
        
        <div class="spec-img">
          <img src={SpecImg1} alt="MARK IV component" ></img>
        </div>
      </motion.div>
    )
  }
}

export default Frameset
