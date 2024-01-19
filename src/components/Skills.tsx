"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; // Import next/image module

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const skillsData = [
    //array of object
    { name: "C", image: "/c.svg", width: 180, height: 180 },
    { name: "Python", image: "/python.svg", width: 160, height: 150 },
    { name: "Java", image: "/java.svg", width: 180, height: 180 },
    { name: "HTML", image: "/html5.svg", width: 180, height: 150 },
    { name: "CSS", image: "/css.svg", width: 190, height: 150 },
    { name: "SQL", image: "/sql.svg", width: 180, height: 150 },
    { name: "Fask", image: "/flask.svg", width: 150, height: 150 },
    { name: "Haskell", image: "/haskell.svg", width: 180, height: 150 },
    { name: "JavaScript", image: "/js.svg", width: 180, height: 150 },
    { name: "PHP", image: "/php.svg", width: 190, height: 150 },
    { name: "React.js", image: "/reactjs.svg", width: 180, height: 150 },
    { name: "TailwindCSS", image: "/tailwindcss.svg", width: 200, height: 150 },
    { name: "TypeScript", image: "/typescript.svg", width: 200, height: 150 },
    { name: "Tensorflow", image: "/Tensorflow.png", width: 200, height: 150 },
  ];

  return (
    <div className="" id="skills">
      <Slider
        {...settings}
        className="w-5/6 h-[15rem] items-center justify-center m-auto"
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="relative w-full h-full items-center justify-center mt-5"
          >
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src={skill.image}
                alt={skill.name}
                title={skill.name}
                width={skill.width}
                height={skill.height}
                layout="fixed"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;
