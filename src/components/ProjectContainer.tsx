import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
// to build a container that display all the projects
// 4 on laptop, 3 on tablet, 2 on mobile
// each project is a card
// each card has a title, description, link to github, link to demo
// each card has a image
// once click, it will open a modal to show more details
// modal has a title, description, link to github, link to demo

//this is the inner card that will be displayed in the modal once clicked

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

const ProjectContainer = ({
  isOpen,
  setIsOpen,
  title,
  imgSrc,
  code,
  projectLink,
  tech,
  modalContent,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    // fixed inset-0 z-50 flex items-center justify-center bg-black bg-blur-sm p-5 cursor-pointer
    <div
      className="fixed w-full inset-0 h-full top-0 left-0 right-0 z-50 px-5 py-5 backdrop-blur-sm overflow-y-scroll flex justify-center cursor-pointer list-decimal"
      onClick={() => setIsOpen(false)}
    >
      <button className="right-5 md:right-10 bg-transparent border-none absolute lg:mt-12 mt-1 cursor-pointer">
        <MdClose className="text-3xl md:text-5xl lg:text-6xl" />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-black w-4/5 md:w-3/5 max-width-[700px] h-fit rounded-lg overflow-hidden bg-none shadow-md cursor-auto"
      >
        <Image
          className="w-full"
          src={imgSrc}
          height={300}
          width={660}
          style={{ maxWidth: "100%", height: "auto" }}
          alt={`An image of the ${title} project.`}
        />
        <div className="p-2">
          <h4 className="text-xl md:text-2xl lg:text-4xl">{title}</h4>
          <div className="flex flex-wrap gap-2 text-md md:text-xl lg:text-2xl text-redPink mx-1 my-2">
            {tech.join(" - ")}
          </div>

          <div className="flex flex-col gap-5 text-sm md:text-lg lg:text-xl list-decimal">
            {modalContent}
          </div>

          <div className="mt-10">
            <p className="font-bold text-md md:text-lg lg:text-xl mb-3">
              Project Links<span>:</span>
            </p>
            <div className="flex content-center gap-5">
              <Link target="_blank" rel="nofollow" href={code}>
                <AiFillGithub size={30} />
              </Link>
              {projectLink != "" && (
                <Link target="_blank" rel="nofollow" href={projectLink}>
                  <AiOutlineExport size={30} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;
  if (isOpen) return content;
};

export default ProjectContainer;
