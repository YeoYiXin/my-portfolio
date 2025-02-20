"use client";
import React from "react";
import Project from "./Project";
import Image from "next/image";

const Projects = () => {
  const projects = [
    // PlanMe mobile application
    {
      title: "PlanMe",
      image: "/planme.png",
      code: "",
      projectLink: "", //if projectLink is empty, then it will be a private project
      tech: ["Kotlin", "MVVM", "Jetpack Compose", "Co-Routines", "Hilt", "Retrofit", "Material Design 3", "Firebase", "Google API", "ViewModel"],
      description:
        "PlanMe is a user-friendly travel planning mobile app designed to streamline trip organization by allowing users to upload and manage travel-related screenshots. The app intelligently extracts key details, consolidates recommendations, and provides a seamless itinerary planning experience.",
      modalContent: (
        <>
          <p>
            <b>PlanMe</b> is an AI-powered travel planning mobile application 
            that helps users consolidate places, restaurants, and attractions by 
            intelligently analyzing uploaded screenshots. It eliminates the need for 
            manual note-taking and scattered bookmarks, offering a streamlined trip 
            planning experience.
          </p>
          <p>
            The app utilizes Optical Character Recognition {"("}OCR{")"} and 
            Google Places to pull relevant details from screenshots, 
            automatically categorizing and structuring travel information. Users can 
            then create, modify, and share personalized itineraries with ease.
          </p>
          <p>
            <b>Key Features:</b>
            <ul>
              <li>- Integration with Google API for extracting locations from screenshots</li>
              <li>- Easy organization of saved places for future reference</li>
              <li>- User-friendly interface with a streamlined planning experience</li>
              <li>- Secure cloud storage via Firebase for seamless data access</li>
            </ul>
          </p>
          <p>
            Built with modern technologies such as MVVM, Material Design 3, Compose, and Firebase, PlanMe is designed to enhance travel planning efficiency. Whether for local outings or international trips, PlanMe ensures users never lose track of the places they want to visit.
          </p>
        </>
      ),
    },

    // SEGP App
    {
      title: "Nott-A-Problem (NAP) Mobile Application",
      image: "/napApp.png",
      code: "https://github.com/YeoYiXin/Problem-Reporting-System",
      projectLink: "", //if projectLink is empty, then it will be a private project
      tech: ["Flutter", "Tailwind CSS", "TypeScript", "Flask", "Python", "Tensorflow", "Firebase", "Google Cloud Run"],
      description:
        "A problem reporting mobile application that utilises human as sensors.",
      modalContent: (
        <>
          <p>
            <b>NAP</b> is an innovative 
            IoT-based problem reporting system designed to streamline issue reporting 
            at the University of Nottingham Malaysia. By leveraging AI-driven models 
            and a user-friendly mobile interface, NAP simplifies the process, making 
            problem reporting faster and more efficient.
          </p>
          <p>
            The existing system required users to navigate complex web interfaces 
            and fill out lengthy forms, often discouraging reports. NAP eliminates 
            these barriers by enabling real-time issue detection, automated priority 
            assignments, and seamless verification using AI-powered image classification 
            {"("}MobileNetV2{")"} and GPT-4 summarization.
          </p>
          <p>
            <b>Key Features:</b>
            <ul>
              <li>- AI-powered problem identification with 90% accuracy.</li>
              <li>- Efficient error handling and duplication detection.</li>
              <li>- Automated priority, status, and department assignment.</li>
              <li>- Precise outdoor location detection for issue mapping.</li>
              <li>- Transparent issue tracking for users.</li>
              <li>- Gamification elements to encourage engagement.</li>
            </ul>
          </p>
          <p>
            The application is built using <strong>Flutter</strong> for a smooth 
            cross-platform experience, with backend services hosted on 
            <strong>Google Cloud Run</strong> and <strong>Firebase</strong>. 
            AI models are trained in <strong>TensorFlow</strong> for enhanced 
            classification accuracy.
          </p>
          <p>
            Developed as part of <b>SEGP Group B 2023/24</b>, NAP represents a 
            leap towards a digital-first campus, fostering a proactive culture of maintenance 
            and issue resolution.
          </p>
        </>
      ),
    },

    // SEGP Website
    {
      title: "Nott-A-Problem (NAP) Administrative Website",
      image: "/napWebsite.png",
      code: "https://github.com/YeoYiXin/nap-website",
      projectLink: "", //if projectLink is empty, then it will be a private project
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Firebase", "Google Maps"],
      description:
        "A comprehensive administrative website to visualise the way admin receive the problem report after user submit throup NAP app.",
      modalContent: (
        <>
          <p>
            <b>NAP</b> website is developed to visualise the way administration 
            will view the submitted report.
          </p>
          <p>
            The existing system required users to navigate complex web interfaces 
            and fill out lengthy forms, often discouraging reports. NAP eliminates 
            these barriers by enabling real-time issue detection, automated priority 
            assignments, and seamless verification using AI-powered image classification 
            {"("}MobileNetV2{")"} and GPT-4 summarization.
          </p>
          <p>
            <b>Key Features:</b>
            <ul>
              <li>- Visualisation of the submitted problem report on the administration view.</li>
              <li>- Efficient filtering of email according to location, status, problem class and department.</li>
              <li>- Delete or edit the problem report.</li>
              <li>- View statistical information of the reported problem.</li>
              <li>- Automated assignment of problem to the list of available departments.</li>
            </ul>
          </p>
          <p>
            Developed as part of <b>SEGP Group B 2023/24</b>, NAP represents a 
            leap towards a digital-first campus, fostering a proactive culture of maintenance 
            and issue resolution.
          </p>
        </>
      ),
    },
    
    //portfolio
    {
      title: "Yeo Yi Xin's Portfolio",
      image: "/My_portfolio.png",
      code: "https://github.com/YeoYiXin/my-portfolio",
      projectLink: "", //if projectLink is empty, then it will be a private project
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "EmailJS"],
      description:
        "My very first stunning portfolio to showcase my skills and projects in a dynamic way.",
      modalContent: (
        <>
          <p>
            This portfolio marks my first project built using Next.js framework.
            It is an exceptional portfolio designed to introduce myself, and
            showcase my skills and projects in a dynamic way{"!"} This template
            is built using React library using TypeScript, which provides static
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
            changes to an existing reservation and to validate the customer
            {"&apos;"}s identity when they pick up their rental vehicle.
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
            {"("}Brick Breaker{")"} using JavaFX for building Graphical User
            Interface
            {"("}GUI{")"}.
          </p>
          <p>
            The game is built using MVC principle, which separates the
            application into three main logical components: the model, the view,
            and the controller. The model represents the data, the view
            represents the user interface, and the controller handles the
            communication between the model and view. It also apply
            Liskov&apos;s Substitution Principle, and Single Responsibility
            Principle. Code smells such as duplicated code, long method, and
            long class are also refactored.
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
            up to 40 visitor&apos;s information. Each user&apos;s information is
            stored in a struct that stores the serial number, ticket number,
            name and user&apos;s identification number. The ticket is generated
            using decimal conversion of first 6 characters from the
            visitor&apos;s name including the space{"("}s{")"}. In addition to
            that, the ticket number includes appending the serial number at the
            right. If visitor&apos;s name is less than 6 alphabets, spaces is
            appended at the beginning of the name
            {"("}left side{")"}. If the length of user&apos;s name is greater
            than 6 alphabets, then ticket number will be generated according to
            the decimal conversion of the first 6 characters of the user&apos;s
            name.
          </p>
          <p>
            The system is able to add user information and then providing user
            with their serial number. Total number of visitor&apos;s information
            is also displayed so that the number of visitors can be tracked. If
            the number of visitors exceeds 40, it will restrict the user from
            adding more visitors. The system is also able to display all the
            visitor&apos;s information if needed. Other than that, the system
            can search for one or more visitors&apos; information by their name.
            To search for unique visitor&apos;s information, user can search via
            their serial number, identification number, passport number or
            ticket number. The system is also able to delete one or more
            visitors&apos; information by their name. To delete unique
            visitor&apos;s information, user can delete via their serial number,
            identification number, passport number or ticket number. The system
            is also able to sort the visitor&apos;s name in ascending order.
          </p>
          <p>
            Another interesting implementation is that the system hold the
            ability to save visitors&apos; information from previous execution.
            Deletion of user information will not alter the serial number of the
            other visitors&apos; information below the deleted visitor&apos;s
            information.
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
            wards, outpatient clinics, Intensive Care Units, and outpatient
            consultation rooms within a hospital building. In the system, the
            number of current visitors is generated using Random Number
            Generator and if the number of visitors exceeds the maximum
            capacity, the system will inform user that they are not allowed to
            enter and they will have to wait for a period of time {"("}current
            time + estimated waiting time according to worst case scenario{")"}{" "}
            if they are willing to wait. If the user do not wish to wait, they
            can choose to apply for another location within the hospital
            building.
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
