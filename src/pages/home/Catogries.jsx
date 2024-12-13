import React from "react";
import { motion } from "framer-motion";

const categories = [
  { image: "/images/icons/icon-1.png", text: "Social Networking", gradient: "from-blue-400 to-blue-200" },
  { image: "/images/icons/icon-2.png", text: "Digital Marketing", gradient: "from-yellow-400 to-yellow-200" },
  { image: "/images/icons/icon-3.png", text: "Ecommerce Development", gradient: "from-green-400 to-green-200" },
  { image: "/images/icons/icon-4.png", text: "Video Service", gradient: "from-red-400 to-red-200" },
  { image: "/images/icons/icon-5.png", text: "Banking Service", gradient: "from-purple-400 to-purple-200" },
  { image: "/images/icons/icon-6.png", text: "Enterprise Service", gradient: "from-pink-400 to-pink-200" },
  { image: "/images/icons/icon-7.png", text: "Education Service", gradient: "from-indigo-400 to-indigo-200" },
  { image: "/images/icons/icon-8.png", text: "Tour and Travels", gradient: "from-teal-400 to-teal-200" },
  { image: "/images/icons/icon-9.png", text: "Health Service", gradient: "from-orange-400 to-orange-200" },
  { image: "/images/icons/icon-10.png", text: "Event & Ticket", gradient: "from-lime-400 to-lime-200" },
  { image: "/images/icons/icon-11.png", text: "Restaurant Service", gradient: "from-rose-400 to-rose-200" },
  { image: "/images/icons/icon-12.png", text: "Business Consultant", gradient: "from-sky-400 to-sky-200" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between items
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Catogries = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-pink-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          {/* Left Section */}
          <div className="lg:w-1/3 v-center mb-8 lg:mb-0">
            <div className="text-center lg:text-left">
              <span className="text-lg sm:text-xl font-bold text-pink-400 block">
                Industries we work for
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Helping Businesses in All Domains
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Successfully delivered digital products Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3">
            {/* Grid of Categories */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {categories.map((card, index) => (
                <motion.div
                  key={index}
                  className={`icon-set p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105 bg-gradient-to-br ${card.gradient}`}
                  variants={cardVariants}
                >
                  <div className="work-card text-center">
                    <div className="icon-bg mb-4">
                      <img
                        src={card.image}
                        alt={card.text}
                        className="w-12 sm:w-16 h-12 sm:h-16 mx-auto"
                      />
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      {card.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catogries;
