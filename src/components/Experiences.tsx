"use client";
import React from "react";
import Experience from "./Experience";

const Experiences = () => {
  const experiences = [
    {
      title: "Intern, Tech Engineering",
      issuer: "GXBank Berhad",
      date: "June 2024 - September 2024",
      description:
        "Worked closely with the FinTrust Backend Team, contributing to API development, unit testing (Go), database optimization, and deployment while refining best practices through code reviews and documentation (Swagger).",
    },

    {
      title: "Student Intern - Full Stack Developer",
      issuer: "University of Nottingham Malaysia",
      date: "June 2023 - September 2023",
      description:
        "Led a collaborative team of 2 to develop a website featuring Cartoon, Watercolour and Impressionism filters.",
    },
    {
      title: "Sales Assistant",
      issuer: "Chua Soon Hup",
      date: "April 2021 - September 2021",
      description:
        "Proactively engaged with customers to understand their needs and recommend suitable products which leads to enhanced customer satisfaction and sales growth.",
    },
  ];

  return (
    <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-12">
      {experiences.map((experiences) => {
        return <Experience key={experiences.title} {...experiences} />;
      })}
    </div>
  );
};

export default Experiences;
