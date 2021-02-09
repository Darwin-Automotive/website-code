import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import { motion } from 'framer-motion';
// import { Hamburger } from './Hamburger.tsx';
// import { Background } from '../landing_page/Canvas.js';
import Progress from "./Progress";
import Logo from "../../../src/images/new_images/logo1.png";
import "./navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <div className="navigation_bar">
              <nav>
                <div className="center">
                  <Route path="/">
                    <img src={Logo} alt="Darwin Logo" />
                  </Route>
                </div>
                <div className="progressBar">
                  <Progress />
                </div>
              </nav>
            </div>
          </Switch>
        </Router>
        {/* <Hamburger /> */}
      </React.Fragment>
    );
  }
}
export default Navigation;
