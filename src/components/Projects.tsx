"use client";
import React from "react";
import Project from "./Project";
import Image from "next/image";

const Projects = () => {
  const projects = [
    //portfolio
    {
      title: "Yeo Yi Xin's Portfolio",
      image: "/My_portfolio.png",
      code: "",
      projectLink: "", //if projectLink is empty, then it will be a private project
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "EmailJS"],
      description:
        "My very first stunning portfolio to showcase my skills and projects in a dynamic way.",
      modalContent: (
        <>
          <p>
            This portfolio marks my first project built using Next.js framework.
            It is an exceptional portfolio designed to introduce myself, and
            showcase my skills and projects in a dynamic way! This template is
            built using React library using TypeScript, which provides static
            type checking and help ensure code quality.
          </p>
          <p>
            This portfolio is built with Next.js framework, which offers many
            benefits such as fast page loading times as well as making sure the
            website is performant, responsive, and delivers excellent user
            experience.
          </p>
          <p>
            The template is integrated with EmailJS, a reliable email delivery
            service that allows message to be sent via the contact form.
          </p>
          <p>
            Hence, this portfolio combines the latest technologies and libraries
            that delivers a modern and responsive website.
          </p>
        </>
      ),
    },

    //DBMS web
    {
      title: "Luxury Car Rental System",
      image: "/DBMS.png",
      code: "https://github.com/YeoYiXin/Car-Rental-Website",
      projectLink: "",
      tech: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "PHPMyAdmin"],
      description:
        "A luxury car rental system with dashboard for staff to manage the booking system.",
      modalContent: (
        <>
          <p>
            This project develops a Car Rental Reservation System for a premier
            car rental agency. The website showcases the use of dashboard that
            reflects real-time booking information as well as car availability.
            It also has feature such as dark and light mode.
          </p>
          <p>
            The website can make new reservation. Staff can check the
            availability of the car and make a reservation for a particular
            date. Upon successful reservation, the reservation number is
            provided to the customer.This reservation number is required for
            changes to an existing reservation and to validate the customer's
            identity when they pick up their rental vehicle.
          </p>
          <p>
            Next, the website can be used to change or update booking
            information. Customers may modify their reservation if they would
            like to book a different date. The system then has to verify that
            the unit is available before making any changes to the reservation.
          </p>
          <p>
            Lastly, it can be used to cancel reservation. A customer may cancel
            the reservation for a reserved car rental. The customer must provide
            the reservation ID so that staff members can retrieve the
            reservation information in the system.
          </p>
          <p>
            Therefore, the website has comprehensive features as well as
            stunning user interfaces and prioritise user experience.
          </p>
        </>
      ),
    },
    //React Bank interface
    {
      title: "Tips for Financial Cybersecurity",
      image: "/ReactBank.png",
      code: "https://github.com/YeoYiXin/forage-cybersecurity-website",
      projectLink: "https://yeoyixin.github.io/forage-cybersecurity-website/",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      description:
        "A website focusing on financial cybersecurity, designed and built for Commonwealth Bank.",
      modalContent: (
        <>
          <p>
            The website marks my first React project, styled with TailwindCSS.
            It is a responsive website mainly to share the three main tips for
            financial cybersecurity. It is designed and built to suit the
            interface and colour theme of Commonwealth Bank. Not only that, the
            tips and explanation are written in a simple and easy to understand
            way. Hence, user of all ages can understand the tips and apply it in
            their daily life.
          </p>
          <p>
            This project is designed and built within two days for Commonwealth
            Bank as the Introduction to Software Engineer Forage curiculum.
          </p>
        </>
      ),
    },
    //Brick Breaker Game
    {
      title: "Retro Brick Breaker",
      image: "/BrickBreaker.png",
      code: "",
      projectLink: "", //if projectLink is empty, then it will be a private project
      tech: ["Java", "JavaFX", "CSS", "MVC principle"],
      description: "Classic Brick Breaker game, built with JavaFX.",
      modalContent: (
        <>
          <p>
            Refactoring, testing and extending an existing classic retro game
            (Brick Breaker) using JavaFX for building Graphical User Interface
            (GUI).
          </p>
          <p>
            The game is built using MVC principle, which separates the
            application into three main logical components: the model, the view,
            and the controller. The model represents the data, the view
            represents the user interface, and the controller handles the
            communication between the model and view. It also apply Liskov's
            Substitution Principle, and Single Responsibility Principle. Code
            smells such as duplicated code, long method, and long class are also
            refactored.
          </p>
        </>
      ),
    },
    //linked list theme park
    {
      title: "Theme Park Booking System",
      image: "/CBook.png",
      code: "https://github.com/YeoYiXin/C-Programming",
      projectLink: "",
      tech: ["C"],
      description: "A novel booking system which utilizes singly linked list.",
      modalContent: (
        <>
          <p>
            The novel booking system which utilizes singly linked list to store
            up to 40 visitor's information. Each user's information is stored in
            a struct that stores the serial number, ticket number, name and
            user's identification number. The ticket is generated using decimal
            conversion of first 6 characters from the visitor's name including
            the space(s). In addition to that, the ticket number includes
            appending the serial number at the right. If visitor's name is less
            than 6 alphabets, spaces is appended at the beginning of the name
            (left side). If the length of user's name is greater than 6
            alphabets, then ticket number will be generated according to the
            decimal conversion of the first 6 characters of the user's name.
          </p>
          <p>
            The system is able to add user information and then providing user
            with their serial number. Total number of visitor's information is
            also displayed so that the number of visitors can be tracked. If the
            number of visitors exceeds 40, it will restrict the user from adding
            more visitors. The system is also able to display all the visitor's
            information if needed. Other than that, the system can search for
            one or more visitors' information by their name. To search for
            unique visitor's information, user can search via their serial
            number, identification number, passport number or ticket number. The
            system is also able to delete one or more visitors' information by
            their name. To delete unique visitor's information, user can delete
            via their serial number, identification number, passport number or
            ticket number. The system is also able to sort the visitor's name in
            ascending order.
          </p>
          <p>
            Another interesting implementation is that the system hold the
            ability to save visitors' information from previous execution.
            Deletion of user information will not alter the serial number of the
            other visitors' information below the deleted visitor's information.
          </p>
        </>
      ),
    },
    //Java Crowd Control
    {
      title: "Java Congestion Management And Crowd Control System",
      image: "/Java.png",
      code: "https://github.com/YeoYiXin/Java",
      projectLink: "",
      tech: ["Java"],
      description:
        "A congestion management and crowd control system for a fictitious hospital coded with Java.",
      modalContent: (
        <>
          <p>
            Congestion Management and Crowd Control System is implemented to
            tackle or control congestion and crowded situations in hospital
            areas such as the waiting areas for visitors to visit the in-patient
            wards, outpatient clinics, Intensive Care Units(ICU), and outpatient
            consultation rooms within a hospital building. In the system, the
            number of current visitors is generated using Random Number
            Generator (RGN) and if the number of visitors exceeds the maximum
            capacity, the system will inform user that they are not allowed to
            enter and they will have to wait for a period of time (current time
            + estimated waiting time according to worst case scenario) if they
            are willing to wait. If the user do not wish to wait, they can
            choose to apply for another location within the hospital building.
          </p>
          <p>
            If the user is given permission to enter the specific location
            within the building, the user will be prompted with the distance
            between user and the other visitors. The appropriate social
            distancing protocol is 1.0m. If any visitor is within 1.0m, the
            system will change the contact status of visitor. The available
            contact status include safe contact, close contact, and casual
            contact. Then, the system will inform user the maximum time they are
            allowed in the place they are visiting. There are multiple error
            messages and warning messages in the system to make sure the user
            response to the system is valid.
          </p>
        </>
      ),
    },
  ];
  return (
    <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-12">
      {projects.map((project) => {
        return <Project key={project.title} {...project} />;
      })}
    </div>
  );
};

export default Projects;
