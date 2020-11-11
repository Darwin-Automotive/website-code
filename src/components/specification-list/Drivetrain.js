import React, { Component } from 'react'
import { motion } from 'framer-motion'
import FeatureItem from "./FeatureItem";
// import SpecImg1 from '../../images/new_images/middle4.png'
import SpecImg2 from '../../images/new_images/drivetrain4.png'
import './featureList.css'


export class Drivetrain extends Component {
  render() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
      >
              {/* Mechanical Features - Drivetrain */}
        <ul className="featureGroup">
          <FeatureItem name="Chain Wheel" description="40TX170 Black with double guard" />
          <FeatureItem name="BB Set" description="Friction-free -Cotterless Cartridge type" />
          <FeatureItem name="Freewheel" description="Single Speed, 16T" />
          <FeatureItem name="Pedal" description="Anti Skid Alloy With reflector" />
        </ul>

        <div class="spec-img">
          <img src={SpecImg2} alt="MARK IV component" ></img>
        </div>
      </motion.div>
    )
  }
}

export default Drivetrain
