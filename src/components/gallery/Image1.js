import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../images/new_images/exploded render 1.39.jpg'
import img2 from '../../images/new_images/Sequence 02_2.gif'
import img3 from '../../images/new_images/fullBike3.jpg'
import img4 from '../../images/new_images/front.png'
import img5 from '../../images/new_images/Bikeimg1.jpeg'
import img6 from '../../images/new_images/battery.jpeg'
import img7 from '../../images/new_images/fullwhite4.jpg'
import img8 from '../../images/new_images/fullBike2.jpg'
import img9 from '../../images/new_images/fullBike6.jpeg'
import './image.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Image1 = () => {

  const [left, setleft] = useState(1)
  const [center, setcenter] = useState(2)
  const [right, setright] = useState(3)


  const handleLeftClick = () => {
    setleft(left+1)
    setcenter(center-1)
  }  
  const handleRightClick = () => {
    setright(right+1)
    setcenter(center+1)
  }

  // return (
  //   gallery.images.map(({ key, url, title }, i) => {
      return(
        <div>
          {/* Mobile gallery */}
          <div className="mobile-show">
            <Carousel fade={true} >

              <Carousel.Item interval={1000} className="single-img">
                <img
                  src={img1}
                  alt="markiv_gallery"
                  />
              </Carousel.Item>
              <Carousel.Item interval={1000} className="single-img">
                <img
                  src={img2}
                  alt="markiv_gallery"
                  />
              </Carousel.Item>
              <Carousel.Item interval={1000} className="single-img">
                <img
                  src={img3}
                  alt="markiv_gallery"
                  />
              </Carousel.Item>
              <Carousel.Item interval={1000} className="single-img">
                <img
                  src={img4}
                  alt="markiv_gallery"
                  />
              </Carousel.Item>
              <Carousel.Item interval={1000} className="single-img">
                <img
                  src={img5}
                  alt="markiv_gallery"
                  />
              </Carousel.Item>
              <Carousel.Item interval={1000} className="single-img">
                <img
                  src={img6}
                  alt="markiv_gallery"
                  />
              </Carousel.Item>
              <Carousel.Item interval={1000} className="single-img">
                <img
                  src={img7}
                  alt="markiv_gallery"
                  />
              </Carousel.Item>
              <Carousel.Item interval={1000} className="single-img">
                <img
                  src={img8}
                  alt="markiv_gallery"
                  />
              </Carousel.Item>
              <Carousel.Item interval={1000} className="single-img">
                <img
                  src={img9}
                  alt="markiv_gallery"
                  />
              </Carousel.Item>
            </Carousel>
          </div>


          {/* desktop gallery */}
          {/* <div className="desktop-show">
            <div className="left">
              <img src={img+left} alt="" />
            </div>
            <div className="center">
              <img src={img+center} alt="" />
            </div>
            <div className="right">
              <img src={img+right} alt="" />
            </div>
            <a onClick={handleLeftClick()}>Left</a>
            <a onClick={handleRightClick()}>Right</a>
          </div> */}
        </div>
      // )})
  )




}

export default Image1
