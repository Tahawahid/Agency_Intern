import React, { useState } from "react";

const ClientReview = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Fred Chener",
      role: "CEO of Aramxx, Ohio, US State",
      image: "images/user-thumb/girl.jpg",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap into electronic typesetting.",
      name: "Mike Smith",
      role: "Business Owner, Sydney, Australia",
      image: "images/user-thumb/boy.jpg",
    },
    {
      text: "It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "Mathilda Burns",
      role: "Bakery Shop Owner, Toronto, Italy",
      image: "images/user-thumb/woman.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev === 0 ? testimonials.length - 1 : prev - 1)
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <span className="text-pink-600 text-sm uppercase tracking-wide font-semibold">
            What our clients say about Niwax
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4">
            Over 1200+ Satisfied Clients and Growing
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Client Images on Left */}
          <div className="flex gap-6 w-full md:w-1/3">
            <img
              src="images/client/client-logo-1.png"
              alt="client"
              className="w-full h-auto object-contain"
            />
            <img
              src="images/client/client-logo-2.png"
              alt="client"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Testimonial Section on Right */}
          <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6 relative">
            <p className="text-gray-700 mb-4">{testimonials[currentTestimonial].text}</p>
            <div className="flex items-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h5 className="font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h5>
                <p className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              >
                •
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              >
                •
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              >
                •
              </button>
            </div>
          </div>
        </div>

        {/* Read More Reviews Section */}
        <div className="text-center mt-16">
          <h4 className="text-2xl font-bold text-gray-900">Read More Reviews</h4>
          <p className="text-gray-600 mb-6">Read our reviews from all over the world.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="transition-transform transform hover:scale-105">
              <img
                src="images/about/reviews-icon-1.png"
                alt="review"
                className="w-12 h-12"
              />
            </a>
            <a href="#" className="transition-transform transform hover:scale-105">
              <img
                src="images/about/reviews-icon-2.png"
                alt="review"
                className="w-12 h-12"
              />
            </a>
            <a href="#" className="transition-transform transform hover:scale-105">
              <img
                src="images/about/reviews-icon-3.png"
                alt="review"
                className="w-12 h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
