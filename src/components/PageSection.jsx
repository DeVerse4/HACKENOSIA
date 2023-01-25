import React from "react";

const PageSection = ({ name, title, subtitle, children }) => {
  return (
    <div name={name} className="max-w-screen-xl mx-auto h-fit">
      <div className="mt-20 mb-2 mx-8 lg:text-left">
        <h1 className="lg:text-6xl text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-thPurple to-thOrange">
          {title}
        </h1>
        <p className="mt-8 mb-16 text-xl text-left">{subtitle}</p>

        {children}
      </div>
    </div>
  );
};

export default PageSection;
