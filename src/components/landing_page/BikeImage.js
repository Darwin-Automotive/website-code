import React, { useState } from "react";
// import Buttons from '../Buttons';
import PreorderModal from "./PreorderModal";
import "./bikeImage.css";
import "./preordercss.css";
// import BikeImg1 from '../../images/new_images/fullwhite4.jpg';
// import BikeImg2 from '../../images/new_images/blackbgblackebike1.91.jpg';
import BikeImg3 from "../../images/new_images/fullwhite5.112.png";
import Brochure from "../../random/Spec. sheet for initial customers.pdf";
import SpecsBrief from "../specifications/SpecsBrief";

const BikeImage = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  return (
    <div className="bike_image">
      {/* <div className="events_page">
        <h5>
          We have something exciting lined up. Check this space out for more!
        </h5>
      </div> */}
      <img src={BikeImg3} alt="MARK IV E-bike" />
      <SpecsBrief />
      {/* <Buttons children="Pre order" style={PreorderCSS}/> */}
      <a className="preorder-btn" onClick={() => setisModalOpen(!isModalOpen)}>
        Order Now
      </a>
      {isModalOpen !== false ? (
        <PreorderModal
          setisModalOpen={setisModalOpen}
          isModalOpen={isModalOpen}
        />
      ) : (
        ""
      )}

      <a
        href={Brochure}
        target="_blank"
        rel="noopener noreferrer"
        className="brochure-btn"
      >
        Download Brochure
      </a>
    </div>
  );
};

export default BikeImage;
