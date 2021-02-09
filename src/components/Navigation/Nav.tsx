import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.007, delayChildren: 0 }
  },
  closed: {
    transition: { staggerChildren: 0, staggerDirection: 0, delayChildren: 0}
  }
};

const itemIds = [0, 1, 2, 3, 4];
export const Nav = () => (
  <motion.ul variants={variants} >
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
  ))}
  </motion.ul>  
);
