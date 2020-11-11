import React from 'react';
// import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Hamburger } from './Hamburger.tsx';
// import { Background } from '../landing_page/Canvas.js';
import Progress from './Progress'
import Logo from '../../../src/images/new_images/logo1.png';
import './navigation.css';

class Navigation extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Router>
          <div className="navigation_bar">
            <nav>
              <div className="center">
                <img src={Logo} alt="Darwin Logo" />
              </div>
              <div className="progressBar">
                <Progress />
              </div>
            </nav>
          </div>
        </Router>
        {/* <Hamburger /> */}
      </React.Fragment>

    );
  }
};
export default Navigation;