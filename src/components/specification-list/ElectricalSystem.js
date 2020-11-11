import React, { Component } from 'react'
import { motion } from 'framer-motion'
import FeatureItem from './FeatureItem';
import SpecImg1 from '../../images/new_images/middle3.png'
// import SpecImg2 from '../../images/new_images/throttle2.png'
import './featureList.css'
export class ElectricalSystem extends Component {
  render() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
      >
        {/* Electrical Features - Electrical System */}
        <ul className="featureGroup">
          <FeatureItem name="Motor" description="BLDC 24V 250W, 25.8 Nm, Rear Hub Motor" />
          <FeatureItem name="Battery" description="Li-Ion 25.9 V, 15.8Ah (IP67 protection) with BMS and data logging" />
          <FeatureItem name="Controller" description="24V 350W Intelligent Sine wave controller which adjusts power output according to riding style" />
          <FeatureItem name="Battery Charger" description="26V/5A, Input 230V AC 26V/10A, Input 230V AC (DC Fast Charger)" />
        </ul>

        <div className="spec-img">
          <img src={SpecImg1} alt="MARK IV component" ></img>
        </div>
      </motion.div>
    )
  }
}

export default ElectricalSystem
