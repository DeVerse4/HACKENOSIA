import React, { useRef, useState, useEffect } from "react";

import heroVideo from "../assets/video.mp4";
import { FaPauseCircle, FaPlayCircle, FaDiscord } from "react-icons/fa";
import GradientBtn from "./GradientBtn";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };
  // CountDown Timer
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = "March, 25, 2023 00:00:00";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex items-center justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />
      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${isVideoPlaying ? "" : "bg-black/80"
          } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
        <h1 className="text-2xl lg:text-2xl text-thBlue">DeVerse Presents</h1>
        <h1 className="text-5xl lg:text-7xl py-3 font-bold tracking-wider">Hackenosia</h1>
        <h1 className="text-3xl lg:text-5xl capitalize mb-12">
          A 24 hours
          <span className="px-1 mx-1 rotate-45 bg-slate-300 text-thOrange font-bold">
            Hackathon
          </span>
          is here
        </h1>

        {/* Countdown Timer */}
        <div className="mb-10 text-gray-300">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl lg:text-6xl font-bold">
                {days}
              </h1>
              <h1 className="text-lg lg:text-xl italic">Days</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl lg:text-6xl">:</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl lg:text-6xl font-bold">
                {hours}
              </h1>
              <h1 className="text-lg lg:text-xl italic">Hours</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl lg:text-6xl">:</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl lg:text-6xl font-bold">
                {minutes}
              </h1>
              <h1 className="text-lg lg:text-xl italic">Minutes</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl lg:text-6xl">:</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl lg:text-6xl font-bold">
                {seconds}
              </h1>
              <h1 className="text-lg lg:text-xl italic">Seconds</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <GradientBtn className="capitalize" title="Apply Now" />
          <GradientBtn className="capitalize mx-12" title={<a href="https://discord.gg/72FYtndXbG"><span className="mr-1">Join</span> <FaDiscord size={25} className="inline" /></a>} />

          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 text-thOrange"
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPlay}
              className="cursor-pointer hover:scale-110 duration-200 text-thOrange"
            />
          )}
        </div>
      </div>
      <article className="w-full fixed bottom-0 bg-yellow-600/70">
        <div>
          <p className="text-md lg:text-xl text-justify px-2">
            "Our website is currently undergoing updates and improvements, please check back soon for a new and enhanced experience!"
          </p>
        </div>
      </article>
    </div>
  );
};

export default HeroSection;
