import React, { Component } from 'react'

import ProgressBar from './ProgressBar'
export class Progress extends Component {
  
    state = {
      scrollPosition: 0,
    }
    
    listenToScroll = () => {
      document.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
          this.calculateScrollDistance();
        })
      })
    }
    
    calculateScrollDistance = () => {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = this.getDocHeight();
      
      const totalDocScollLength = docHeight - winHeight;
      const scrollPosition = Math.floor(scrollTop/totalDocScollLength * 100)
      
      // console.log("Scroll Top: ",scrollTop)
      // console.log("Window height: ",winHeight)
      // console.log("Document height: ",docHeight)
      // console.log("Scroll Position: ",scrollPosition)
      
      this.setState({
        scrollPosition,
      });
    }
    
    getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight, 
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight,
        );
      };
      
      componentDidMount(){
        this.listenToScroll();
      }
    render() {
      return (
        <>
          <ProgressBar scroll={this.state.scrollPosition + '%'}/>
        </>
      )
    }
}

export default Progress
