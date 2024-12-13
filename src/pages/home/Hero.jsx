import React from "react";
import Video from "./Video"

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white flex items-center justify-center">
      {/* Left Section */}
      <div className="max-w-md text-left space-y-4">
        <h1 className="text-4xl font-bold leading-tight">
          WEB. <br /> MOBILE. <br /> GRAPHIC. <br /> MARKETING.
        </h1>
        <p className="text-lg">
          Website and App development solution for transforming and innovating
          businesses.
        </p>
        <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition">
          View Case Studies
        </button>
      </div>
      <Video/>
      </div>   
 );
}; 

export default Hero;
