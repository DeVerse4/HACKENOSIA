import React from "react";

import PageSection from "./PageSection";

const AboutUs = () => {
  return (
    <PageSection
      name="About Us"
      title="About Us"
      subtitle={`We the members of DeVerse community, A fast growing coders community  `}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-xl">
        {/* left */}
        <div className="flex flex-col gap-4 w-full lg:p-8 bg-gray-900 rounded-lg text-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue p-3">
            Welcoming you to the first ever hackathon at VGI campus! We are thrilled to bring together a diverse group of talented programmers and developers for a 24-hour in-person event on last week of March .
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue p-3">
            During this hackathon, participants will have the opportunity to collaborate and work together to develop innovative solutions to real-world problems. Our goal is to create an environment where participants can push the boundaries of what is possible and develop new technologies and ideas that can make a meaningful impact on the world.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue p-3">
            The theme of the hackathon is open, which means that participants can work on any problem or project they are passionate about. We encourage participants to think outside the box and come up with unique and creative solutions.
            The hackathon will be an intensive and challenging event, but it will also be a lot of fun. We will provide food and drinks throughout the event, and there will be plenty of time for networking and socializing with other participants.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue p-3">
            We are excited to see what the participants will come up with and can't wait to see the innovative solutions that will be developed during the hackathon. Thank you for being a part of this event and we look forward to seeing you at the hackathon!
            Please note that the safety of all participants is our top priority and we will be taking all the necessary precautions to ensure that the hackathon is held in a safe and healthy environment.
          </p>
        </div>
      </div>
    </PageSection>
  );
};

export default AboutUs;
