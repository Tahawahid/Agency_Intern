import React from "react";

const VideoTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Curt N. Call",
      position: "Business Owner, Jaipur",
      videoLink: "https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0",
      rating: 4,
    },
    {
      id: 2,
      name: "Hugh Briss",
      position: "Business Owner, Jaipur",
      videoLink: "https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0",
      rating: 4,
    },
    {
      id: 3,
      name: "Frank Senbeans",
      position: "Business Owner, Jaipur",
      videoLink: "https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0",
      rating: 4,
    },
  ];

  return (
    <section className="reviews-block py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-pink-500 font-semibold uppercase">Reviews</h3>
          <h2 className="text-4xl font-bold text-gray-800">Video Testimonials</h2>
          <p className="text-gray-600 mt-2">Check our customers' success stories.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <a
                href={testimonial.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-video text-white text-2xl"></i>
              </a>

              <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm mb-4">{testimonial.position}</p>

              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`fas fa-star text-lg ${
                      index < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                    }`}></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
