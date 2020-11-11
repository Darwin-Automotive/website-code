import React from 'react'
import './imageModal.css'


const ImageModal = ({ selectedImg, setselectedImg }) => {

  const handleClick = (e) => {
    // console.log(e);
    if(e.target.classList.contains('backdrop')){
      setselectedImg(null)
    } 
  }

  return (
    <div 
      className="backdrop" 
      onClick={handleClick}
    >
      <img src={selectedImg} alt="" className="enlarged-img" />
    </div>
  )
}

export default ImageModal
