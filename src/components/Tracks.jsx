import React from "react";
import PageSection from "./PageSection";

import { MdCastForEducation, MdOutlineHealthAndSafety } from "react-icons/md";

const Tracks = () => {
  const Tracks = [
    {
      id: 1,
      icon: <MdCastForEducation size={50} className="text-white" />,
      title: "Education",
      subtitle:
        "This track is for participants who are interested in developing solutions to improve education and access to education. This can include projects related to e-learning, educational resources, and interactive learning experiences.",
    },
    {
      id: 2,
      icon: <MdOutlineHealthAndSafety size={50} className="text-white" />,
      title: "Healthcare",
      subtitle:
        "This track is for participants who are interested in developing solutions to improve healthcare and medical outcomes. This can include projects related to telemedicine, medical billing and record keeping, and managing chronic conditions.",
    },
    {
      id: 2,
      icon: <MdOutlineHealthAndSafety size={50} className="text-white" />,
      title: "Healthcare",
      subtitle:
        "This track is for participants who are interested in developing solutions to improve healthcare and medical outcomes. This can include projects related to telemedicine, medical billing and record keeping, and managing chronic conditions.",
    },
  ];

  return (
    <PageSection
      name="Tracks"
      title="Tracks & Themes"
      subtitle={`
      The theme for this hackathon is "Innovative Solutions for Real World Problems". The goal of this theme is to encourage participants to think creatively and develop solutions that can make a real impact on society and the world. We want participants to come up with unique and out-of-the-box ideas that address pressing issues and challenges facing our society today. We encourage participants to consider the different tracks and to think about how their solutions can be applied to real-world problems.
      
      Our hackathon will feature several tracks that participants can choose from. These tracks will allow participants to focus on a specific area of interest and develop solutions to related problems. The tracks available at the hackathon will be:`}
    >
      <div className="grid lg:grid-cols-3 gap-12 text-black">
        {Tracks.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-5 m-4">{icon}</div>
            </div>
            <h1 className="text-2xl lg:text-4xl my-8 text-white capitalize">{title}</h1>
            <p className="text-lg text-white">{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
    
  );
};

export default Tracks;
