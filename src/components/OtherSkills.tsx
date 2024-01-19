"use client";
import React, { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image"; // Import next/image module

interface CardProps {
  children?: React.ReactNode;
}

function Card({ children }: CardProps) {
  const ref = useRef<HTMLDivElement | null>(null); // Initialize the ref with a type of HTMLDivElement or null
  const [isHovered, setIsHovered] = useState(false); //keep track of hover state

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // Store under a single key (xys) instead of separate keys
      // and then use animatedProps.xys.interpolate() to
      // easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 30, tension: 200, friction: 30, precision: 0.00001 },
    };
  });

  return (
    <animated.div
      ref={ref}
      className="flex flex-col p-5 bg-stoneWhite bg-opacity-60  border-opacity-50 shadow-md md:shadow-lg rounded-md h-fit w-fit m-auto mb-5 mt-5 md:mb-10 md:mt-10 md:m-0 transition duration-100 transform hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        if (ref.current) {
          // Only proceed if ref.current is not null
          const x =
            clientX -
            (ref.current.offsetLeft -
              (window.scrollX ||
                window.pageXOffset ||
                document.body.scrollLeft));
          const y =
            clientY -
            (ref.current.offsetTop -
              (window.scrollY ||
                window.pageYOffset ||
                document.body.scrollTop));
          const dampen = 10;
          const xys = [
            -(y - ref.current.clientHeight / 5) / dampen,
            (x - ref.current.clientWidth / 5) / dampen,
            1.07,
          ];
          setAnimatedProps({ xys: xys });
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
}

const OtherSkills = () => {
  const cards = [
    //array of object
    { title: "PHPMyAdmin", image: "/phpmyadmin.svg", width: 120, height: 150 },
    { title: "Git", image: "/git.svg", width: 120, height: 150 },
    { title: "GitHub", image: "/github.svg", width: 120, height: 150 },
    { title: "Visual Studio Code", image: "/VSC.svg", width: 120, height: 150 },
  ];
  const cards1 = [
    //array of object
    { title: "PHPMyAdmin", image: "/phpmyadmin.svg", width: 150, height: 150 },
    { title: "Git", image: "/git.svg", width: 150, height: 150 },
    { title: "GitHub", image: "/github.svg", width: 150, height: 150 },
    { title: "Visual Studio Code", image: "/VSC.svg", width: 150, height: 150 },
  ];

  return (
    <div className="md:m-0" id="skills">
      <div className="md:hidden">
        {cards.map((card, i) => (
          <div
            className="md:w-fit md:flex md:justify-center md:text-center md:m-auto"
            key={i}
          >
            <Card>
              <Image
                src={card.image}
                alt={card.title}
                title={card.title}
                width={card.width}
                height={card.height}
              />
            </Card>
          </div>
        ))}
      </div>

      <div className="hidden md:visible md:flex md:flex-row">
        {cards1.map((card, i) => (
          <div
            className="md:w-fit md:flex md:justify-center md:text-center md:m-auto"
            key={i}
          >
            <Card>
              <Image
                src={card.image}
                alt={card.title}
                title={card.title}
                width={card.width}
                height={card.height}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherSkills;
