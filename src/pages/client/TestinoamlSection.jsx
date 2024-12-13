import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      reviewer: "Mario Speedwagon",
      position: "Business Owner, Jaipur",
      image: "/images/client/reviewer-a.jpg",
      logo: "/images/client/upwork-logo.png",
      rating: 4,
    },
    {
      id: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      reviewer: "Petey Cruiser",
      position: "Business Owner, Jaipur",
      image: "/images/client/reviewer-b.jpg",
      logo: "/images/client/envato.png",
      rating: 4,
    },
    {
      id: 3,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      reviewer: "Anna Sthesia",
      position: "Business Owner, Jaipur",
      image: "/images/client/reviewer-c.jpg",
      logo: "/images/client/freelancer-logo.png",
      rating: 4,
    },
  ];

  return (
    <>
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-pink-500 font-semibold uppercase">Reviews</h3>
            <h2 className="text-6xl font-bold">Client Testimonials</h2>
            <p className="text-gray-600">Check our customers success stories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-lg p-8 rounded-lg flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-transform duration-300"
                style={{ minHeight: "350px" }} // Enforce larger size
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-pink-500 text-3xl">
                      <i className="fas fa-quote-left"></i>
                    </span>
                    <img
                      src={testimonial.logo}
                      alt="review service logo"
                      className="w-16 h-8 object-contain"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.reviewer}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      {testimonial.reviewer}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`fas fa-star text-yellow-400 ${
                            index >= testimonial.rating ? "text-gray-300" : ""
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
