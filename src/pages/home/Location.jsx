import React from "react";

const Location = () => {
  const offices = [
    {
      image: "/images/location/newyork.png",
      title: "New York",
      address: "603 FA Forest Avenue, New York, USA 10021",
    },
    {
      image: "/images/location/sydeny.png",
      title: "Sydney",
      address: "2449 Columbia Boulevard, Sydney, 10021",
    },
    {
      image: "/images/location/rome.png",
      title: "Rome",
      address: "9988 Piazzetta Scalette Rubiani 99, Rome, 84090",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-pink-500 uppercase tracking-wider">
            Our Locations
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Our Office</h2>
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg transform transition-transform hover:scale-105 active:scale-95 hover:shadow-2xl p-6 text-center bg-gradient-to-b from-pink-50 to-white"
            >
              {/* Image */}
              <div className="rounded-lg p-4 mb-6">
                <img
                  src={office.image}
                  alt={office.title}
                  className="mx-auto h-32 object-contain"
                />
              </div>

              {/* Office Information */}
              <h4 className="text-xl font-semibold text-gray-800">{office.title}</h4>
              <p className="text-gray-600 mt-2">{office.address}</p>

              {/* Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fas fa-map-marker-alt"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fas fa-phone-alt"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <i className="fab fa-skype"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
