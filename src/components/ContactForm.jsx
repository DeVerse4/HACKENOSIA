import React from "react";
import GradientBtn from "./GradientBtn";

const ContactForm = () => {
  return (
    <div className="p-4 text-left border rounded-lg">
      <form
        action="https://getform.io/f/eebf1d10-9cf8-4131-9b26-4fc80ee69838"
        method="POST"
      >
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-lg py-2 font-medium">name</label>
            <input
              type="text"
              name="name"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-lg py-2 font-medium">phone</label>
            <input
              type="text"
              name="phone"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-lg py-2 font-medium">email</label>
            <input
              type="email"
              name="email"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-lg py-2 font-medium">
              message
            </label>
            <textarea
              name="message"
              rows="10"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <GradientBtn className="ml-4 mt-4 capitalize" title="send message" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
