// import React, { Component } from 'react'
// import Buttons from '../Buttons'
// import '../buttons.css';
// import './featureList.css'


// // const Buttons = (props) => {
// //   return(
// //     // <div>

// //       // <Link to={buttonDetails.href}>
// //         <a 
// //           className="buttons"
// //           // href={props.href}
// //           onClick={props.onClick}
// //           >
// //           {props.children}
// //         </a>
// //       // </Link>
// //     // </div>
// //   )
// // }


// export class ToggleSpecGroup extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       feature: 'electrical',
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick(e){
//     this.setState({feature: e.target.text}, () => {
//       // console.log(this.state.feature);
//     })
//   }
  
  
//   render(props){
//     const features = ["electrical", "performance", "frameset", "wheels", "drivetrain", "components"]; 
//     return(
//       <div className="featureGroup" feature={this.state.feature} onClick={this.props.onClick}>
//         {/* {this.state.features.forEach((element) => {
//          return <Buttons children={element} href="#" onClick={this.handleClick(element)}/>;
//         })} */}

//         <Buttons 
//           children={features[0]}  
//           onClick={this.handleClick} 
//         />
//         <Buttons 
//           children={features[1]}  
//           onClick={this.handleClick} 
//         />
//         <Buttons 
//           children={features[2]}  
//           onClick={this.handleClick} 
//         />
//         <Buttons 
//           children={features[3]}  
//           onClick={this.handleClick} 
//         />
//         <Buttons 
//           children={features[4]}  
//           onClick={this.handleClick} 
//         />
//         <Buttons 
//           children={features[5]}  
//           onClick={this.handleClick} 
//         />  


//       </div>
//     )

//   }
// }


// export default ToggleSpecGroup




// // export class Buttons extends Component {
// //   constructor(props){
// //     super(props)
// //     this.state = {
// //       href: props.href,
// //       children: props.children,
// //     }
// //     this.handleClick = this.handleClick.bind(this)
// //   }

// //   handleClick(){
// //     console.log(this.state.children)
// //   }
// //   // const buttonDetails = new Object(props)
// //   render(){
// //     return(
// //       // <div>
  
// //         // <Link to={buttonDetails.href}>
// //           <a 
// //             className="buttons"
// //             href={this.state.href}
// //             onClick={this.handleClick}
// //             >
// //             {this.state.children}
// //           </a>
// //         // </Link>
// //       // </div>
// //     )

// //   }
// // }

// // export default Buttons;