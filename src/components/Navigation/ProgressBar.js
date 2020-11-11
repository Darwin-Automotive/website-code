import React from 'react'

const progressBarStyle = (scroll) => ({
  position: 'fixed',
  background: `linear-gradient(to right, #47D14E ${scroll}, transparent 0)`,
  width: '100%',
  opacity: '0.85',
  // border: '5px solid #47D19E',
  // borderRadius: '50%',
  height: '10px',
  zIndex: '10',
})

const ProgressBar = ({ scroll }) => {
  return (
    <span style={progressBarStyle(scroll)}>
    </span>
  )
}

export default ProgressBar
