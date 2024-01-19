"use client";
import React from "react";
import Skills from "./Skills";
import OtherSkills from "./OtherSkills";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Experiences from "./Experiences";
import ContactMe from "./ContactMe";
import Motion from "./Motion";

const About = () => {
  return (
    <div className="mt-5">
      <div
        id="aboutMe"
        className="w-screen flex flex-col items-center justify-center m-auto mb-5"
      >
        <Motion>
          <div className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">
            About Me
          </div>
        </Motion>
        <div className="border-2 border-blackPurple border-opacity-50 bg-blackPurple bg-opacity-20 w-5/6 mt-5 md:mt-10 px-3 py-3 rounded-lg shadow-md">
          <p className="p-3">
            Hello{","} I am currently a 2nd Year Computer Science student at the
            University of Nottingham Malaysia. In the realm of academia{","} my
            journey has seen me excel as a <b>JPA LSPM scholar </b>
            and awarded the <b>Dean&apos;s List for two consecutive years</b>
            {"."}
          </p>
          <p className="p-3">
            I approach learning with an open mind{","} strongly believing in the
            importance of good time management skills. My{" "}
            <b>
              current passion lies in building web and mobile applications,
              Machine Learning and AI
            </b>
            .
          </p>
          <p className="p-3">
            Please feel free to contact me through email or drop me a message on
            LinkedIn if you want to collaborate with me for projects{","} or
            even just a chat{"!"} I welcome all new opportunities{"!"}{" "}
            <b>
              I am currently looking for an internship job from June 2024 to
              September 2024 as a software engineer{"/"}other suitable positions
              in hope of getting more real-world experiences{"."}
            </b>
          </p>
        </div>
      </div>

      <div
        id="Skills"
        className="mt-10 py-10 w-screen flex flex-col items-center justify-center"
      >
        <Motion>
          <div className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">
            Tech Stacks
          </div>
        </Motion>

        <div className="border-2 border-blackPurple border-opacity-50 bg-blackPurple bg-opacity-20 w-5/6 mt-5 rounded-lg shadow-md">
          <Skills />
        </div>

        <Motion>
          <div className="mt-10 mb-5 text-2xl md:text-3xl lg:text-4xl font-bold md:mt-10">
            Others
          </div>
        </Motion>

        <div className="border-2 border-blackPurple border-opacity-50 bg-blackPurple bg-opacity-20 w-5/6 mt-5 rounded-lg shadow-md mb-5">
          <OtherSkills />
        </div>
      </div>

      <div
        id="Experience"
        className="mt-10 w-screen flex flex-col items-center justify-center"
      >
        <Motion>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Experience
          </div>
        </Motion>
        <div className="border-2 border-blackPurple border-opacity-50 bg-blackPurple bg-opacity-20 w-5/6 mt-5 rounded-lg shadow-md mb-5">
          <Experiences />
        </div>
      </div>

      <div
        id="Achievements"
        className="mt-10 w-screen flex flex-col items-center justify-center"
      >
        <Motion>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Achievements
          </div>
        </Motion>
        <div className="border-2 border-blackPurple border-opacity-50 bg-blackPurple bg-opacity-20 w-5/6 mt-5 rounded-lg shadow-md mb-5">
          <Achievements />
        </div>
      </div>

      <div
        id="myProject"
        className="mt-10 w-screen flex flex-col items-center justify-center"
      >
        <Motion>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
            My Project
          </div>
        </Motion>
        <div className="border-2 border-blackPurple border-opacity-50 bg-blackPurple bg-opacity-20 w-5/6 mt-5 rounded-lg shadow-md mb-5">
          <Projects />
        </div>
      </div>

      <div
        id="contactMe"
        className="mt-10 w-screen flex flex-col items-center justify-center"
      >
        <Motion>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Contact Me
          </div>
        </Motion>
        <div className="border-2 border-blackPurple border-opacity-50 bg-blackPurple bg-opacity-20 w-5/6 mt-5 rounded-lg shadow-md mb-5">
          {/* <Projects/> */}
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default About;
