import React from "react";
import logo from "../assets/logoTransparent.png";

const Footer = () => {
  const menu = [
    {
      id: 1,
      title: "Venue",
      subMenu: [
        {
          id: 1,
          title: "Vishveshwarya Group of Institutions, Dadri, Greater Noida, UP 203207",
        },
      ],
    },
    {
      id: 2,
      title: "Find Us",
      subMenu: [
        {
          id: 1,
          title: "Instagram",
          link: "https://instagram.com/hackenosia",
        },
        {
          id: 2,
          title: "Facebook",
          link: "https://instagram.com/hackenosia",
        },
        {
          id: 3,
          title: "Twitter",
          link: "https://instagram.com/hackenosia",
        },
      ],
    },
    {
      id: 3,
      title: "Navigation",
      subMenu: [
        {
          id: 1,
          title: "Home",
        },
        {
          id: 2,
          title: "Schedules",
        },
        {
          id: 3,
          title: "Tracks",
        },
        {
          id: 3,
          title: "Prizes",
        },
      ],
    },
    {
      id: 4,
      title: "Stuff",
      subMenu: [
        {
          id: 1,
          title: "Stuff 1",
        },
        {
          id: 2,
          title: "Stuff 2",
        },
        {
          id: 3,
          title: "Stuff 3",
        },
      ],
    },
  ];

  return (
    <div className="border-t border-white">
      <div className="mb-10 max-w-screen-xl mx-auto">
        <div className="w-full flex justify-center">
          <img src={logo} alt="footer_logo" width="300px" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-12">
          {menu.map(({ id, title, subMenu }) => (
            <div key={id}>
              <h1 className="text-xl font-bold">{title}</h1>
              <ul className="mt-1">
                {subMenu.map(({ id, title, link }) => (
                  <li key={id}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-9 text-center text-sm text-thBlue">
          © Copyright 2022 DeVerse X Hackenosia
        </p>
      </div>
    </div>
  );
};

export default Footer;
