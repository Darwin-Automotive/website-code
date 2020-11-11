import React from 'react'
import BatteryCharging90OutlinedIcon from '@material-ui/icons/BatteryCharging90Outlined';
import SpeedIcon from '@material-ui/icons/Speed';
import Specifications from './Specifications';
// import './specsBrief.css';

// const specsStyles = {
//   display : 'flex',
//   flexDirection : 'row',
//   width: '100%',
//   // margin: 'auto 15%',
// }

const SpecsBrief = () => {
  return (
    <div className="specs_brief">
      <ul>
        <Specifications classname="speed" icon={SpeedIcon}>
          Aesthetically pleasing.
        </Specifications>
        <Specifications classname="battery" icon={BatteryCharging90OutlinedIcon}>
          Engineered to perfection.
        </Specifications>
        <Specifications classname="range" icon={BatteryCharging90OutlinedIcon}>
          Ready-for-action.
        </Specifications>

      </ul>
    </div>
  )
}

export default SpecsBrief
