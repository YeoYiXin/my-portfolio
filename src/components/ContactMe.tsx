"use client";
import React from "react";
import { useState, useRef } from "react";
import { Reveal } from "./Reveal";
import SendButton from "./SendButton";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5u9yfm9",
        "template_soc1hp6",
        // process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        // process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current!,
        "rCTiLwu9mT9sbLqgH"
        // process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          toast.success("Message sent! Thank you!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setMessage("");
          form.current!.reset();
        },
        (error) => {
          toast.error("Something went wrong", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <ToastContainer />
      <div className=" m-auto rounded-sm mt-5 md:mt-10 lg:mt-15 md:px-10">
        <Reveal width="100%">
          <p className="text-center font-light mx-5 mb-5">
            I am currently looking for internship opportunities or any project
            collaboration opportunities. Feel free to send me an email! Whether
            you have a question or just want to say hi, I will try my best to
            get back to you as soon as possible{"!"}
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:sara.yeo.yixin@gmail.com">
            <div className="flex items-center justify-center gap-3 w-fit text-sm md:text-lg m-auto transition-colors">
              <AiFillMail size="2.4rem" />
              <span className="text-stroneWhite hover:underline">
                sara.yeo.yixin@gmail.com
              </span>
            </div>
          </Link>
        </Reveal>
        <Reveal width="100%">
          <form
            autoComplete="false"
            className="mt-3 mb-12 text-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-wrap md:justify-between md:flex-nowrap">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                name="to_name"
                className="w-full h-8 px-5 py-5 text-sm text-blackPurple bg-lightPurple rounded-md mb-3 outline-none border-b-4 border-b-blackPurple m-3"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                autoComplete="false"
                name="from_name"
                className="w-full h-8 px-5 py-5 text-sm text-blackPurple bg-lightPurple rounded-md mb-3 outline-none border-b-4 border-b-blackPurple m-3"
                required
              />
            </div>
            <div className=" flex flex-wrap md:justify-between md:flex-nowrap">
              <textarea
                placeholder="Your Message"
                autoComplete="false"
                required
                name="message"
                value={message}
                className="w-full h-40 px-5 py-5 text-sm text-blackPurple bg-lightPurple rounded-md mb-3 outline-none border-b-4 border-b-blackPurple m-3"
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <br />
            <div className=" flex justify-center">
              <SendButton>Submit</SendButton>
            </div>
          </form>
        </Reveal>
      </div>
    </>
  );
};

export default ContactMe;
