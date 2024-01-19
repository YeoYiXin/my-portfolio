import React, { use, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "full";
}
const Motion = ({ children, width = "fit-content" }: Props) => {
  const mainAnimation = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      mainAnimation.start("visible");
    } else {
      mainAnimation.start("hidden");
    }
  }, [inView, mainAnimation]);

  return (
    <div ref={ref} className={`relative ${width} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainAnimation}
        transition={{ duration: 0.5, delay: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Motion;
