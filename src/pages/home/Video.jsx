import React from "react";

const VideoPlaySection = () => {
  const handleVideoClick = (e) => {
    e.preventDefault();
    // Open the video in the same page
    window.open("https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0", "_self");
  };

  return (
    <div className="flex items-center">
      {/* Circle with Right Triangle Play Button */}
      <div
        className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full cursor-pointer"
        onClick={handleVideoClick}
      >
        <span className="absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-orange-500 border-b-[15px] border-b-transparent"></span>
      </div>

      {/* Text Content */}
      <div className="title-hero-oth ml-4">
        <p className="text-lg">
          We design digital solutions <span className="text-yellow-400">for brands and companies</span>
        </p>
      </div>
    </div>
  );
};

export default VideoPlaySection;
