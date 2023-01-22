import React from "react";
import GradientBtn from "./GradientBtn";
import LOGO from "../assets/logoTransparent.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "Schedules",
    },
    {
      id: 2,
      link: "Tracks",
    },
    {
      id: 3,
      link: "Prizes",
    },
    {
      id: 4,
      link: "Sponsors",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <>
      <div className="absolute w-full h-24 bg-black/80 text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
          <div>
            <div className="w-48">
            <img src={LOGO} alt="logo" />
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 hover:text-thOrange cursor-pointer"
                >
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <li key={id} className="p-4 uppercase cursor-pointer">
              <Link
                onClick={() => setIsMenuShown(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <GradientBtn className="mt-10 capitalize" title="Apply Now" />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
