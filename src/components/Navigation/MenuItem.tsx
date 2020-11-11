import * as React from 'react';
import { motion } from 'framer-motion';
import './navigation.css';
import { BrowserRouter as Router,
         NavLink,
         Switch, 
         Route
       } from 'react-router-dom';
// import { MenuToggle } from './MenuToggle';
// import { useCycle } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -300 }
    },
    transitionEnd: {display : 'block'},
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 3000 }
    }, 
    transitionEnd: {display : 'none'},
  }
};

const colors = {color: '#49d14e'};

export const MenuItem = ( { i } : { i:number })  => {
  return (
      <React.Fragment>
        <Router>
        <motion.li
          variants={variants}
          className="nav-links"
        >
          <ul>  
              <li>
                <NavLink to="/" style={colors}>Home</NavLink>
              </li>
            <li>
              <NavLink to="/about" style={colors}>About</NavLink>
            </li> 
            <li>
              <NavLink to="/contact" style={colors}>Contact</NavLink>
            </li>  
            <li>
              <NavLink to="/signup" style={colors}>SignUp</NavLink>
            </li>
            <li>
              <NavLink to="/login" style={colors}>Login</NavLink>
            </li>
          </ul>
        </motion.li>

          <Switch>

            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

          </Switch>
        </Router>
      </React.Fragment>
  );
};




function Contact(){
  return <h2></h2>
}

function SignUp(){
  return <h2></h2>
}

function Login(){
  return <h2></h2>
}