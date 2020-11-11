import React, { Component } from 'react'
import { motion } from 'framer-motion'
import FeatureItem from './FeatureItem'
// import SpecImg1 from '../../images/new_images/middle2.png'
import SpecImg2 from '../../images/new_images/throttle2.png'
import './featureList.css'
export class Performance extends Component {
  render() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
      >
        {/* Electrical Features - Performance */}
        <ul className="featureGroup">
          {/* {console.log(this.state.featureGroup)} */}
          <FeatureItem name="Max Speed" description="25 KMPH (electronically limited) 40 KMPH(Unlocked speed)" />
          <FeatureItem name="Max Power" description="250 W (electronically limited) 350 W(Unlocked speed)" />
          <FeatureItem name="Range/Charge" description="Min- 15KM, Max-35KM (Electric Mode) Min-15KM, Max-45KM (Hybrid Mode)" />
          <FeatureItem name="Charging Time" description="4 HRS (Normal Charging) 1 HR (DC Fast Charging)" />
        </ul>

        <div class="spec-img">
          <img src={SpecImg2} alt="MARK IV component" ></img>
        </div>
      </motion.div>
    )
  }
}

export default Performance
