import React from 'react'

const divider = {
  borderTop: '1px solid #47D14E',
  width: "75%",
  color: "49D14E",
  margin: "8% 7% 0 13%",

}

const dividerBox = (direction) => ({
  boxBorder: '1px solid',
  backgroundColor: '#49D14E',
  width: "80px",
  height: '10px',
  float: direction,
})

function Divider(direction) {
  const dir = new Object(direction);
  return (
    <div>
      <div style={divider}>
        <div style={dividerBox(dir.direction)}></div>
      </div>
    </div>
  )
}

export default Divider
