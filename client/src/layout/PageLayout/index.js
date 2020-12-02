import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function PageLayout({ children }) {
  return (
    <motion.div initial="initial" animate="animate" variants={pageVariants}>
      {children}
    </motion.div>
  );
}

export default PageLayout;
