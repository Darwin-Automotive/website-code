import React, {
  Component
} from 'react'
// import { ReactDOM } from 'react-dom';
// import {Route, 
//         Switch, 
//         NavLink, 
//         BrowserRouter as Router} from 'react-router-dom';
import Canvas from './landing_page/Canvas'   
// import Progress from "./Navigation/Progress";
import BikeImage from './landing_page/BikeImage';
import Pricing from './Pricing/Pricing'
import SpecDetail from './specifications/SpecDetail';
// import SpecsBrief from './specifications/SpecsBrief';
import Divider from  '../components/Divider';
// import ButtonGroup from "./landing_page/ButtonGroup";
import SpecificationList from './specification-list/SpecificationList';
import GalleryContainer from './gallery/GalleryContainer'
import Footer from './footer/Footer'
// import Buttons from './Buttons';
// import PreorderModal from '../components/landing_page/PreorderModal'

import './main_page.css'
export class Main_page extends Component {
  render() {

    window.addEventListener('DOMContentLoaded', () => {

      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              const id = entry.target.getAttribute('id');
              if(id!=null){
                if (entry.intersectionRatio > 0) {
                  document.querySelector(`nav ol li a[href="#${id}"]`).parentElement.classList.add('active');
                  
                } else {
                  document.querySelector(`nav ol li a[href="#${id}"]`).parentElement.classList.remove('active');
                }
              }
          });
      });
  
      // Track all sections that have an `id` applied
      document.querySelectorAll('section[id]').forEach((section) => {
          observer.observe(section);
      });
      
    });
  


    return (
      <div>
        <nav className="section-nav">
          <ol>
              <li><a href="#markiv">MARK - IV</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#specifications">Specifications</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#footer">Footer</a></li>
          </ol>
        </nav>


        

        <Canvas />
        {/* <SpecsBrief /> */}
        <section id="markiv">
          <BikeImage />
        </section>
        <section id="features">
          <Divider direction="left"/>
          <SpecDetail /> 
        </section>
        <section id="specifications">
          <Divider direction="right" />
          <SpecificationList />
        </section>
        <section id="gallery">
          <Divider direction="left" />
          <GalleryContainer />
        </section>
        <section id="pricing">
          <Divider direction="right" />
          <Pricing />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>

    )
  }
}

export default Main_page
