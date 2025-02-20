"use client";
import React from "react";
import Achievement from "./Achievement";

const Achievements = () => {
  const achievements = [
    {
      title: "FOSE Dean's Excellence Scholarship (DES) Award 2024",
      issuer: "Dean of the Faculty of Science and Engineering (FOSE)",
      image: "",
      description:
        "Awarded the DES, which is for the Top 2% highest performing student of the cohort.",
    },

    {
      title: "1st Runner Up in Alphathon",
      issuer: "WorldQuant BRAIN",
      image: "",
      description:
        "Won 1st Runner Up in an individual competition, Alphathon, lasting from 18th October to 9th November 2023. Participants were required to create alphas, trading algorithm that can generate the highest return on investment.",
    },

    {
      title: "2nd Runner Up Best Presentation in Software Engineering Group Project",
      issuer: "School of Computer Science",
      image: "",
      description:
        "Awarded the 2nd Runner Up Best Presentation for Software Engineering Group Project - a full-year development project. The title of the project is: A Novel IoT-Based Problem Reporting System Utilising Human Sensors: A Case Study at University of Nottingham Malaysia",
    },

    {
      title: "Local Finalists in P&G Peakathon",
      issuer: "Procter & Gamble (P&G)",
      image: "",
      description:
        "Achieved the Top 15 in the local round of P&G Peakathon among more than 200 participants.",
    },

    {
      title: "FOSE Dean's Excellence Scholarship (DES) Award 2023",
      issuer: "Dean of the Faculty of Science and Engineering (FOSE)",
      image: "",
      description:
        "Awarded the DES, which is for the Top 2% highest performing student of the cohort.",
    },

    {
      title: "FOSE Top Student Award 2022",
      issuer: "Dean of the Faculty of Science and Engineering (FOSE)",
      image: "",
      description:
        "Awarded the Top Student Award, which is for the highest performing student among the students in Foundation in Science 2021/22.",
    },

    {
      title: "FOSE Dean's Excellence Scholarship (DES) Award 2022",
      issuer: "Dean of the Faculty of Science and Engineering (FOSE)",
      image: "",
      description:
        "Awarded the DES, which is for the Top 8% highest performing student of the cohort.",
    },

    {
      title: "JPA Full Scholarship",
      issuer: "Malaysia Public Service Department (JPA)",
      image: "",
      description:
        "Secured a full scholarship from JPA to pursue my pre-university studies and undergraduate studies in any course and at any accredited university in Malaysia.",
    },
  ];

  return (
    <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
      {achievements.map((achievements) => {
        return <Achievement key={achievements.title} {...achievements} />;
      })}
    </div>
  );
};

export default Achievements;
