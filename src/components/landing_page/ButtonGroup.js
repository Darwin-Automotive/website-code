import React from 'react';
import Buttons from '../Buttons';



const ButtonGroup = () => {
  return (
    <div>
      <Buttons btnStyle='btn--outline' btnSize='btn--medium' href='/'>
        Button One
      </Buttons>
    
      <Buttons btnStyle='btn--outline' btnSize='btn--medium' href='/about'>
        Button Two
      </Buttons>
    </div>
  )
};

export default ButtonGroup
