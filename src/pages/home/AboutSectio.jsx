import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Text */}
        <div className="text-center mb-4 md:mb-8">
          <span className="text-pink-500 uppercase text-xs sm:text-sm font-semibold tracking-wide">
            We Are Creative Agency
          </span>
        </div>

        {/* Main Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            <span className="text-pink-500">Top-rated</span> Web And Mobile App Development Company
          </h1>
        </div>

        {/* Paragraph Section */}
        <div className="max-w-xl md:max-w-3xl mx-auto text-center text-gray-700 leading-relaxed mb-8 md:mb-12 px-2 sm:px-4">
          <p className="mb-4">
            Lorem Ipsum is{" "}
            <span className="text-pink-500 font-semibold">simply dummy</span>{" "}
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. <span className="font-bold">Lorem Ipsum</span>{" "}
            is simply dummy text of the printing and typesetting industry.
            <span className="font-bold"> Lorem Ipsum</span> is simply dummy text
            of the printing and typesetting industry.
          </p>
        </div>

        {/* Subheading */}
        <div className="text-center mb-4 md:mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Big Ideas, Creative People, New Technology.
          </h3>
        </div>

        {/* Final Paragraph */}
        <div className="max-w-xl md:max-w-3xl mx-auto text-center text-gray-700 leading-relaxed px-2 sm:px-4">
          <p>
            Lorem Ipsum is{" "}
            <span className="font-bold">simply dummy</span> text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            specimen book. Lorem Ipsum is simply dummy text of the{" "}
            <span className="font-bold">printing</span> and typesetting
            industry. <span className="font-bold">Lorem Ipsum is simply</span>{" "}
            dummy text of the printing and typesetting industry. is simply dummy
            text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
