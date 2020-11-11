import React, { Component } from 'react'
import { motion } from 'framer-motion'
import FeatureItem from './FeatureItem'
// import SpecImg1 from '../../images/new_images/exploded render 1.39.jpg'
import SpecImg2 from '../../images/new_images/exploded2.106.png'
import './featureList.css'


export class Components extends Component {
  render() {
    return (
      <motion.div
      layout
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
    >
        {/* Mechanical Features - Components */}
        <ul className="featureGroup">
          <FeatureItem name="Saddle" description="PU Black with DARWIN Automotive Brand" />
          <FeatureItem name="Seat Post" description="Φ27.2*300L with QR ED Black" />
          <FeatureItem name="Handle Bar" description="Steel 31.8*630 - Black" />
          <FeatureItem name="Stem" description="Alloy forged Ø31.8 mm with 60 mm Ext. welded to the main tube" />
          {/* <FeatureItem name="Brake set front" description="Rubber pad brakes" /> */}
          {/* <FeatureItem name="Brake set rear" description="Rubber pad brakes" /> */}
          <FeatureItem name="Front Hub" description="QR & fixed disc type" />
          <FeatureItem name="Grip" description="Rubber 117L, Black" />
          {/* <FeatureItem name="Stand" description="Chainstay mounted boot type" /> */}
          {/* <FeatureItem name="Reflector" description="As per safety norms" /> */}
        </ul>
        
        <div class="spec-img">
          <img src={SpecImg2} alt="MARK IV component" ></img>
        </div>
      </motion.div>
    )
  }
}

export default Components
