import React from "react";
type MenuProps = {
  showMenu: boolean;
};

const NavMenu = ({ showMenu }: MenuProps) => {
  // const menuStyle = showMenu ? { top: "100%" } : { display: "none" };
  return (
    <>
      <div
        id="dropdownNavbar"
        className="left-0 w-fit z-100 font-normal divide-y shadow-xl"
      >
        <ul
          className="text-sm md:text-xl text-stoneWhite"
          aria-labelledby="dropdownLargeButton"
        >
          <li>
            <hr />
            <div className="hover:bg-stoneWhite hover:bg-opacity-10">
              <a href="#aboutMe" className="block px-4 py-2">
                About Me
              </a>
            </div>
            <hr />
          </li>
          <li>
            <div className="hover:bg-stoneWhite hover:bg-opacity-10">
              <a href="#Skills" className="block px-4 py-2">
                Skills
              </a>
            </div>
            <hr />
          </li>
          <li>
            <div className="hover:bg-stoneWhite hover:bg-opacity-10">
              <a href="#Experience" className="block px-4 py-2">
                Experience
              </a>
            </div>
            <hr />
          </li>
          <li>
            <div className="hover:bg-stoneWhite hover:bg-opacity-10">
              <a href="#Achievements" className="block px-4 py-2">
                Achievements
              </a>
            </div>
            <hr />
          </li>
          <li>
            <div className="hover:bg-stoneWhite hover:bg-opacity-10">
              <a href="#myProject" className="block px-4 py-2">
                My Project
              </a>
            </div>
            <hr />
          </li>
          <li>
            <div className="hover:bg-stoneWhite hover:bg-opacity-10">
              <a href="#contactMe" className="block px-4 py-2">
                Contact Me
              </a>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
