"use client";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useState, useEffect } from "react";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [scrollNav, setScrollNav] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollNav(window.scrollY);
    };
    handleScroll(); //call handleScroll
    window.addEventListener("scroll", handleScroll); //event scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll); //remove event listener
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const downloadResume = () => {
    const pdfUrl = "/assets/YeoYiXin_resume.pdf";

    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.target = "_blank";
    anchor.download = "YeoYiXin_resume.pdf";

    document.body.append(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <>
      <div
        className={`fixed w-screen h-18 md:h-35 shadow-sm z-40 ${
          scrollNav > 30
            ? `transition ease-in-out delay-500 bg-black bg-opacity-80`
            : `backdrop-blur-lg`
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-10 md:w-screen lg:w-screen">
          <div className="md:col-span-7 flex flex-row items-center justify-between md:justify-start md:w-fit ">
            <button
              type="button"
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="lg:hidden hover:transition hover:delay-100 hover:scale-110 hover:bg-opacity-70"
              onClick={toggleMenu}
            >
              <BiMenu className="w-10 h-10 md:w-19 md:h-19 md:mx-3 text-stoneWhite" />
            </button>
            <div className="hidden lg:block md:text-stoneWhite md:mt-3">
              <div className="md:flex md:flex-row items-center justify-between lg:justify-start">
                <ul className="no-underline md:flex md:space-x-4 md:text-lg md:px-2">
                  <li className="">
                    <div className="hover:bg-stoneWhite hover:bg-opacity-10">
                      <a href="#aboutMe" className="px-4 py-2">
                        About Me
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="hover:bg-stoneWhite hover:bg-opacity-10">
                      <a href="#Skills" className="px-4 py-2">
                        Skills
                      </a>
                    </div>
                  </li>
                  {/* newly added */}
                  <li>
                    <div className="hover:bg-stoneWhite hover:bg-opacity-10">
                      <a href="#Experience" className="px-4 py-2">
                        Experience
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="hover:bg-stoneWhite hover:bg-opacity-10">
                      <a href="#Achievements" className="px-4 py-2">
                        Achievements
                      </a>
                    </div>
                  </li>

                  {/* Newly added over */}
                  <li>
                    <div className="hover:bg-stoneWhite hover:bg-opacity-10">
                      <a href="#myProject" className="px-4 py-2">
                        My Project
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="hover:bg-stoneWhite hover:bg-opacity-10">
                      <a href="#contactMe" className="px-4 py-2">
                        Contact Me
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-row-reverse gap-7 md:gap-10  g:gap-10 md:justify-start items-center justify-center px-4 md:mt-2 lg:px-10">
            <div className="flex items-center">
              <button
                type="button"
                className="text-lg text-stoneWhite md:text-xl bg-redderPink hover:bg-redPink hover:transition hover:delay-100 hover:scale-105 px-2 md:px-3 rounded-md"
                onClick={downloadResume}
              >
                Resume
              </button>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/YeoYiXin"
                target="_blank"
                className="no-underline"
              >
                <BsGithub className="w-6 h-6 md:w-19 md:h-19 text-stoneWhite hover:transition hover:delay-100 hover:scale-110 " />
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/yi-xin-yeo-43b98921a/"
                target="_blank"
                className="no-underline"
              >
                <BsLinkedin className="w-6 h-6 md:w-19 md:h-19 text-stoneWhite hover:transition hover:delay-100 hover:scale-110 " />
              </a>
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div
          id="dropdownNavbar"
          className={`fixed ${
            scrollNav > 30
              ? `transition ease-in-out delay-500 bg-black bg-opacity-80`
              : `backdrop-blur-lg`
          } ${
            showMenu ? "block" : "lg:hidden"
          } z-40 left-0 top-10 font-normal divide-y shadow-xl`}
        >
          <NavMenu showMenu={showMenu} />
        </div>
      )}
    </>
  );
};

export default NavBar;
