import React from 'react'
import CountUp from 'react-countup';
import Heading from '../Heading.js';

import SpeedImg from '../../images/new_images/speed.png';
import BatteryImg from '../../images/new_images/battery.png';
import RangeImg from '../../images/new_images/range white.png';
import './specDetail.css';


// const counterStyle = () => ({
//   padding: '30px 5px',
//   fontWeight: '900',
//   color: '#49D14E',
//   fontFamily: 'Montserrat',
//   textTransform: 'uppercase',
//   // letterSpacing: '2px',
//   fontSize: '2.5em',
//   // width: '50%',
//   marginLeft: '20px',
// })

// const mobileCounterStyle = () => ({

// })

const BikeAdjectives = () => {
  return (
    <div className="features">
    <h1 className="headStyling">Features</h1>
      <span className="adjectives">
        <ul>
          <img src={SpeedImg} className="imgStyle" alt="MARK IV component" />
          <Heading heading="Speed"/>

          <p>With great speed comes impeccable performance.</p>
          <p className="counterStyle">
            <CountUp start={0} end={25} delay={3} className="counterStyle"   />kmph (electronically limited) <br></br>
            <CountUp start={0} end={40} delay={3} className="counterStyle" /> kmph


          </p>

        </ul>
      </span>

      <span className="adjectives">
        <ul>
          <img src={BatteryImg} className="imgStyle" alt="MARK IV component" />
          <Heading heading="Charging"/>

          <p>Equipped with a fast charging system which can reduce charging delays by upto 40%.</p>
          <div>
            <table>
              <thead>
                <tr>
                  {/* <th></th> */}
                </tr>
                <tr>
                  {/* <th></th> */}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><li>0-80% (AC Charging)</li></td>
                  <td>
                    <CountUp start={0} end={2} delay={3} className="counterStyle"   /><span>Hours</span>
                    <CountUp start={0} end={30} delay={3} className="counterStyle" /><span>Mins</span>
                    <br></br>
                  </td>
                </tr>
                <tr>
                  <td><li>0-100% (AC Charging)</li></td>
                  <td>
                    <CountUp start={0} end={4} delay={3} className="counterStyle"   />Hours <br></br>
                  </td>
                </tr>
                <tr>
                  <td><li>0-100% (Fast DC Charging)</li></td>
                  <td>
                    <CountUp start={0} end={1} delay={3} className="counterStyle"   />Hour 
                    <CountUp start={0} end={30} delay={3} className="counterStyle" />Mins<br></br>
                  </td>
                </tr>
                <tr>
                  <td><li>Charging Rate (Fast DC Charging)</li></td>
                  <td>
                    <CountUp start={0} end={0.5} decimals={1} delay={3} className="counterStyle"   />KM / min <br></br>
                  </td>
                </tr>
              </tbody>

            </table>

          </div>

        </ul>
      </span>


      <span className="adjectives">
        <ul>
          <img src={RangeImg} className="imgStyle" alt="MARK IV component" />
          <Heading heading="Range"/>

          <p>Comes with a great range per discharge cycle.</p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Range</th>
                  <th>295 Wh</th>
                  <th>388.8 Wh</th>
                  <th>600 Wh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Throttle Mode</td>
                  <td>
                    <CountUp start={0} end={30} delay={3} className="counterStyle" /> <span>KM</span>
                  </td>
                  <td>
                    <CountUp start={0} end={40} delay={3} className="counterStyle" /> <span>KM</span>
                  </td>
                  <td>
                    <CountUp start={0} end={65} delay={3} className="counterStyle" /> <span>KM</span>
                  </td>
                </tr>
                <tr>
                <td>Pedal Assist Mode(3 levels)</td>
                  <td>
                    <CountUp start={0} end={38} delay={3} className="counterStyle" /> <span>KM</span>
                  </td>
                  <td>
                    <CountUp start={0} end={45} delay={3} className="counterStyle" /> <span>KM</span>
                  </td>
                  <td>
                    <CountUp start={0} end={70} delay={3} className="counterStyle" /> <span>KM</span>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>

        </ul>
      </span>

    </div>
      
  )

}

export default BikeAdjectives
