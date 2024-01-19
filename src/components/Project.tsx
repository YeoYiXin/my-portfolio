import React from "react";
import { Reveal } from "./Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import ProjectContainer from "./ProjectContainer";
import Image from "next/image";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  image: string;
  tech: string[];
  title: string;
  code: string;
}

const Project = ({
  modalContent,
  projectLink,
  description,
  image,
  tech,
  title,
  code,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div
          onClick={() => setIsOpen(true)}
          className="width-100 mb-5 aspect-video-16-9 cursor-pointer relative rounded-md overflow-hidden"
        >
          <Image
            src={image}
            quality={100}
            height={200}
            style={{ maxWidth: "100%", height: "auto" }}
            width={630}
            alt={`An image of the ${title} project.`}
          />
        </div>
        <div className="mx-5">
          <Reveal width="100%">
            <div className="flex content-center flex-wrap gap-5">
              <h4 className="font-bold text-md md:text-xl max-w-[calc(100% - 150px)]">
                {title}
              </h4>
              <div className="flex gap-5">
                <Link href={code} target="_blank" rel="nofollow">
                  <AiFillGithub className="text-2xl md:text-2xl lg:text-3xl " />
                </Link>

                {projectLink != "" && (
                  <Link href={projectLink} target="_blank" rel="nofollow">
                    <AiOutlineExport className="text-2xl md:text-2xl lg:text-3xl " />
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-5 text-sm md:text-lg text-redderPink mx-0 my-2">
              {tech.join(" - ")}
            </div>
          </Reveal>
          <Reveal>
            <p className="font-extralight text-md md:text-lg mb-5">
              {description}{" "}
              <span
                className="inline-block text-md md:text-lg font-normal text-redderPink cursor-pointer hover:underline"
                onClick={() => setIsOpen(true)}
              >
                Learn more {">"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectContainer
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={image}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};

export default Project;
