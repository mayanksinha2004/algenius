import React from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion

import Title_M from './title_m';
import Header_M from './header_m';
import EmptyRow_M from './emptyrom_m';
import ChipRow_M from './chiprRow_m';
import Description_M from './description_m';
import InputRow_M from './inputRow_m';
import Socials_M from './socials_m';

const MobileComponent = () => {
  // Animation variants for the fade-up effect
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },  // Start from invisible and slightly down
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },  // Fade in and move up to original position
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-custom ">
      {/* Header */}
      <motion.div
        className="w-full pl-[5.97vw] pr-[5.97vw]"
        variants={fadeUpVariant} // Attach the animation variant
        initial="hidden"
        animate="visible"
      >
        <Header_M />
      </motion.div>

      {/* Empty Row */}
      <motion.div
        className="w-full pl-[5.97vw] pr-[5.97vw]"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <EmptyRow_M />
      </motion.div>

      {/* Chip Row */}
      <motion.div
        className="w-full pl-[5.97vw] pr-[5.97vw]"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <ChipRow_M />
      </motion.div>

      {/* Title */}
      <motion.div
        className="w-full pl-[5.97vw] pr-[5.97vw]"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <Title_M />
      </motion.div>

      {/* Description */}
      <motion.div
        className="w-full pl-[5.97vw] pr-[5.97vw]"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <Description_M />
      </motion.div>

      {/* Input Row */}
      <motion.div
        className="w-full pl-[5.97vw] pr-[5.97vw]"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <InputRow_M />
      </motion.div>

      {/* Socials */}
      <motion.div
        className="w-full pl-[5.97vw] pr-[5.97vw]"
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
      >
        <Socials_M />
      </motion.div>

      {/* Add more components here if needed */}
    </div>
  );
};

export default MobileComponent;
