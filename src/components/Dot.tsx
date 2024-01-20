import React from "react";
import { useEffect } from "react";
import anime from "animejs";

const Dot = () => {
  return (
    <div className="grid place-content-center px-0 py-12 mt-10 md:mt-5 lg:py-5 lg:px-3 lg:mt-0">
      <DotGrid />
    </div>
  );
};
const GRID_WIDTH = 23;
const GRID_HEIGHT = 26;

const DotGrid = () => {
  //selector, scale - takes an array of all the different stops of the animation
  const animateDots = (startIndex: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: startIndex, //start from where is pressed
      }), //duration to stagger the animation
    });
  };
  useEffect(() => {
    animateDots(0); // Start animation from the first dot by default
  }, []);

  const handleDotClick = (e: any) => {
    const startIndex = e.target.dataset.index;
    animateDots(startIndex);
  };

  const dots = [];
  let index = 0; //to keep track of which dot that is clicked

  //generate the dots
  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-1 md:p-2 transition-colors hover:bg-greyBlue"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-1 w-1 md:h-2 md:w-2 rounded-full bg-gradient-to-b from-darkerGreyBlue to-lighterGreyBlue opacity-50 group-hover:from-indigo group-hover:to-stoneWhite"
            data-index={index}
          ></div>
        </div>
      );
      index++;
    }
  }
  //1fr for evenly sized columns
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};
export default Dot;
