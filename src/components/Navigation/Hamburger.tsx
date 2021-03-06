import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion'; 
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';
import { Nav } from './Nav';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 500}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(25px at 40px 40px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 500,
      damping: 50,
    }
  }
};

export const Hamburger = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open": "closed"}
      custom={height}
      ref={containerRef}
      className={!isOpen ? "no-nav" : "nav"}
    >
      <motion.div className="background" variants={sidebar}/>
      <Nav />
      <MenuToggle toggle={() => toggleOpen()}  />
    </motion.nav>

  )
}