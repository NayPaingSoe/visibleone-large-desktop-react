import React from "react";
import { motion } from "framer-motion";

const MotionFadeUp = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  amount = 0.3,
  ...rest
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount }}
    transition={{ duration, ease: "easeOut", delay }}
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default MotionFadeUp;
