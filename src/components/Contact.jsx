import React from "react";
import PageSection from "./PageSection";

import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactinfo = [
    {
      id: 1,
      title: "Address: ",
      subtitle: "Vishveshwarya Group of Institutions, Dadri, Greater Noida, UP 203207",
      link: 'https://www.vgi.ac.in',
    },
    {
      id: 2,
      title: "Email and Phone:",
      subtitle: "deverse2022@gmail.com",
      link: '+91 9507531556',
    },
  ];
  return (
    <PageSection
      name="contact"
      title="Contact"
      subtitle={`We are committed to providing a positive and productive experience for all participants, and we are here to support you throughout the event. If you have any questions or concerns, please don't hesitate to reach out to us.

      If you are experiencing any technical difficulties during the hackathon, our technical team will be available to assist you. They can be reached by email at deverse2022@gmail.com, or on-site during the event.

  `}
    >
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* left */}
        <PageSection>
          <div className="grid lg:grid-rows-4 text-left gap-8 mb-8">

            {contactinfo.map(({ id, title, subtitle, link }) => (
              <div
                key={id}
                className="bg-gradient-to-r from-thBlue to-thOrange text-black p-4 rounded-lg"
              >
                <h1 className="text-2xl font-bold mb-2 text-white">{title}</h1>
                <p className="text-white">{subtitle}</p>
                <a href={link} className="text-white">{link}</a>
              </div>
            ))}
            <div className="grid grid-cols-4 mx-auto w-4/5">
              <div className="flex items-center justify-center cursor-pointer">
                <a href="https://instagram.com/hackenosia" title="Instagram">
                  <FaInstagram size={25} className="hover:scale-150 hover:text-red-600 duration-200" />
                </a>
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                <a href="https://instagram.com/hackenosia" title="Twitter">
                  <FaTwitter size={25} className="hover:scale-150 hover:text-thBlue duration-200" />
                </a>
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                <a href="https://instagram.com/hackenosia" title="Facebook">
                  <FaFacebookF size={25} className="hover:scale-150 hover:text-blue-700 duration-200" />
                </a>
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                <a href="https://instagram.com/hackenosia" title="Telegram">
                  <FaTelegramPlane size={25} className="hover:scale-150 hover:text-blue-400 duration-200" />
                </a>
              </div>
            </div>
          </div>
        </PageSection>
        {/* <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={contactImage}
            alt="contact us"
            className="rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple"
          />

          <p className=" py-12 max-w-md">
            Off what of no stronger that. Oh help this i tapping is door hear i.
            Rare in the i tossed and him has, and hesitating i thy burned into
            or.
          </p>

          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaLinkedin size={25} />
            </div>
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaTwitter size={25} />
            </div>
          </div>
        </div> */}

        {/* right */}

        <div className="w-full lg:w-1/2 h-full rounded-xl p-4">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
