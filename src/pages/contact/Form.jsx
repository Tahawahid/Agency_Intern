import React from 'react';
import ThemeButton from '../../components/ThemeButton';

const Form = () => {
  return (
    <div className="w-full lg:w-2/3 mx-auto mb-8 p-8 rounded-lg shadow-lg bg-white">
      <div className="text-left">
        <span className="text-pink-500 font-medium text-sm">Contact Now</span>
        <h2 className="text-3xl font-bold mt-2 mb-4">Have a Question? Write a Message</h2>
        <p className="text-gray-600 mb-8">
          We will catch you as early as we receive the message
        </p>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Enter name"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Enter mobile"
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <select
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select Requirement</option>
            <option value="web">Web</option>
            <option value="graphic">Graphic</option>
            <option value="video">Video</option>
          </select>
        </div>
        <textarea
          rows="5"
          placeholder="Enter your message"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        ></textarea>
        <div className="text-center">
          <ThemeButton text="Submit" className="w-full md:w-auto px-6 md:px-16 py-3" />
        </div>
      </form>
    </div>
  );
}

export default Form;
