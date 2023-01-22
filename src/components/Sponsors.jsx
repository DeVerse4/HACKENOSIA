import React from "react";
import PageSection from "./PageSection";

const Sponsors = () => {
  const Sponsors = [
    {
      id: 1,
      title: "Company 1",
      subtitle: "Which type of sponsorship they provide",
    },
    {
      id: 2,
      title: "Company 2",
      subtitle: "Which type of sponsorship they provide",
    },
    {
      id: 3,
      title: "Company 3",
      subtitle: "Which type of sponsorship they provide",
    },
    {
      id: 4,
      title: "Company 4",
      subtitle: "Which type of sponsorship they provide",
    },
  ];

  return (
    <PageSection
      name="Sponsors"
      title="Sponsors"
      subtitle={`A big thank you for our valuable and precious sponsors and parteners`}
    >
      <>
        <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
          {Sponsors.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="bg-gradient-to-r from-thBlue to-thOrange text-black p-4 rounded-lg"
            >
              <h1 className="text-3xl text-white font-bold mb-2">{title}</h1>
              <p className="text-white">{subtitle}</p>
            </div>
          ))}
        </div>
      </>
    </PageSection>
  );
};

export default Sponsors;
