import React, { Component } from 'react'
import Image1  from './Image1'
// import ImageModal from './ImageModal'
// import Heading from '../Heading' // requires a loader
// import { Carousel } from 'react-bootstrap';
import './galleryContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 





 

class GalleryContainer extends Component {
  render(){

    // const [selectedImg, setselectedImg] = useState(null);
    return (
      <>
        <div className="row">
          <div className="column">
          <h1 className="headStyling">Gallery</h1>
            <div className="galleryContainer">
              <Image1 />
              {/* { selectedImg && <ImageModal selectedImg={selectedImg} setselectedImg={setselectedImg} />} */}
            </div>
          </div>
        </div>
        </>
    )
  }
}

export default GalleryContainer
