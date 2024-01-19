"use client";
import React from "react";
import { useState, useEffect } from "react";
import Dot from "./Dot";
import Motion from "./Motion";

const Introduction = () => {
  const [loop, setLoopNum] = useState(0); //index of jobs array
  const [isDeleting, setIsDeleting] = useState(false); //isDeleting state
  const toRotate = [
    "a Computer Science Student",
    "an aspiring Full Stack Developer",
  ]; //jobs array
  const [text, setText] = useState(""); //letter index
  const [delta, setDelta] = useState(150 - Math.random() * 100); //time to delete and add letter

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]); //run everytime the text get updated

  const tick = () => {
    let i = loop % toRotate.length; //index of toRotate array
    let fullText = toRotate[i]; //get the text from toRotate array

    let updatedText;
    if (isDeleting) {
      updatedText = fullText.substring(0, text.length - 1);
    } else {
      updatedText = fullText.substring(0, text.length + 1);
    }

    setText(updatedText); //update text

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(60); //faster delete
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loop + 1);
      setDelta(70); //slower add
    }
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
    <div className="w-screen h-[23rem] md:h-[20rem] lg:h-screen relative m-auto mb-0">
      {/*Name and animation*/}
      <div className="absolute left-0 lg:left-20 text-lg items-center py-8 md:py-10 mt-10 px-2 md:px-5 lg:px-20 ml-2 lg:ml-20 z-10">
        <Motion>
          <div className="items-center text-3xl md:text-5xl md:py-8 font-bold">
            Hello{","} I am Yeo Yi Xin
          </div>
        </Motion>
        <Motion>
          <div>
            <span className="flex flex-row gap-1 md:gap-2 font-bold text-xl md:text-4xl my-5 ">
              <h1>{"I am "}</h1>
              <h1 className="text-redderPink">{text}</h1>
            </span>
          </div>
        </Motion>
        <Motion>
          <div className="md:py-7">
            <h1 className="font-bold text-xl md:text-4xl">
              Download my resume{":"}
            </h1>
          </div>
        </Motion>
        <Motion>
          <div>
            <span>
              <button
                type="button"
                className="text-xl md:text-3xl my-5 bg-redderPink hover:bg-redPink hover:transition hover:delay-100 hover:scale-105 px-2 md:px-4 md:py-1 rounded-md"
                onClick={downloadResume}
              >
                Resume
              </button>
            </span>
          </div>
        </Motion>
      </div>
      <div className="absolute z-0 right-0 lg:right-20 lg:px-20 lg:mr-20">
        <Dot />
      </div>
    </div>
  );
};

export default Introduction;
