import React, { Component } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import { Buttons } from '../Buttons'
import ElectricalSystem from './ElectricalSystem'
import Performance from './Performance'
import Frameset from './Frameset'
import Wheels from './Wheels'
import Drivetrain from './Drivetrain'
import Components from './Components'
import Heading from '../Heading'
import '../buttons.css'
import './featureList.css'



const Buttons = (props) => {
  // function onClick(){
  //   console.log(props.children);
  // }
  return(
    <div className="buttons">

      {/* // <Link to={buttonDetails.href}> */}
        <a 
          // className="buttons"
          // href={this.props.href}
          onClick={props.onClick}
          >
          {props.children}
        </a>
      {/* // </Link> */}
    </div>
  )
}





export class SpecificationList extends Component {
  constructor(){
    super();
     
    this.state = {
      featureGroup : "electrical",
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e){
    this.setState({featureGroup: e.target.textContent }, () => {
      ;
    }) 
  }
  
  render() {
    const features = ["electrical", "performance", "frameset", "wheels", "drivetrain", "components"]; 


    const displaySpecs = () => {
      switch (this.state.featureGroup) {
        // case "electrical":{
        //   return (
        //     <motion.div layout initial={{borderRadius : 10}}>
        //       <AnimatePresence>{ <ElectricalSystem /> }</AnimatePresence>
        //     </motion.div>
        //   )
        // }
         
        case "performance":{
          // {/* Electrical Features - Performance */}
          return (
            <motion.div layout initial={{borderRadius : 10}}>
              <AnimatePresence>{ <Performance /> }</AnimatePresence>
            </motion.div>
          )
        }
        
        case "frameset":{
          // {/* Mechanical Features - Frameset */}
          return (
            <motion.div layout initial={{borderRadius : 10}}>
              <AnimatePresence>{ <Frameset /> }</AnimatePresence>
            </motion.div>
          )
        }

        case "wheels":{
          // {/* Mechanical Features - Wheels */}
          return (
            <motion.div layout initial={{borderRadius : 10}}>
              <AnimatePresence>{ <Wheels /> }</AnimatePresence>
            </motion.div>
          )

        }
        
        case "drivetrain":{
          // {/* Mechanical Features - Drivetrain */}
          return (
            <motion.div layout initial={{borderRadius : 10}}>
              <AnimatePresence>{ <Drivetrain /> }</AnimatePresence>
            </motion.div>
          )

        }

        case "components":{
          // {/* Mechanical Features - Components */}
          return (
            <motion.div layout initial={{borderRadius : 10}}>
              <AnimatePresence>{ <Components /> }</AnimatePresence>
            </motion.div>
          )

        }
      
        default:{
          return (
            <motion.div layout initial={{borderRadius : 10}}>
              <AnimatePresence>{ <ElectricalSystem /> }</AnimatePresence>
            </motion.div>
          )
        }
      }
    }
    // const toggleClick = () =>{
    //   setisOpen(!isOpen)
    // } 

    return (
      <motion.div className="specStyling">
        <h1 className="headStyling">Specifications</h1>
        <Buttons 
          children={features[0]}  
          onClick={this.handleClick} 
        />
        <Buttons 
          children={features[1]}  
          onClick={this.handleClick} 
        />
        <Buttons 
          children={features[2]}  
          onClick={this.handleClick} 
        />
        <Buttons 
          children={features[3]}  
          onClick={this.handleClick} 
        />
        <Buttons 
          children={features[4]}  
          onClick={this.handleClick} 
        />
        <Buttons 
          children={features[5]}  
          onClick={this.handleClick} 
        /> 
        {/* {console.log("From SL component", this.state.featureGroup)} */}
        {/* Electrical Features - Electrical System */}
        <Heading 
          heading={this.state.featureGroup}
        />
        <AnimateSharedLayout> 
          <motion.div layout initial={{ borderRadius: 10 }}>
            {displaySpecs()}
          </motion.div>       
        </AnimateSharedLayout>
      </motion.div>
    )
  }
}

export default SpecificationList



