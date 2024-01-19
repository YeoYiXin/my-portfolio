import React from "react";
import { Reveal } from "./Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  description: string;
  issuer: string;
  image: string;
  title: string;
}

const Achievement = ({ description, issuer, image, title }: Props) => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div className="mx-2">
          <Reveal width="100%">
            <div className="flex content-center flex-wrap gap-5">
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-md md:text-2xl max-w-[calc(100% - 150px)]">
                  {title}
                </h4>

                <h4 className="font-bold text-sm md:text-xl max-w-[calc(100% - 150px)] mb-2 md:mb-5">
                  {issuer}
                </h4>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="font-extralight text-sm md:text-lg mb-5">
              {description}{" "}
            </p>
          </Reveal>
        </div>
      </motion.div>
    </>
  );
};

export default Achievement;
