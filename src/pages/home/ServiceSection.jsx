import React, { useState } from "react";
import ThemeButton from "../../components/ThemeButton";

const services = [
  {
    title: "Integrated Services",
    description:
      "We provide an all-in-one solution for your business with a seamless integration of multiple technologies.",
    bgColor: "bg-purple-500",
    icon: "/images/icons/service.svg",
    technologies: [],
  },
  {
    title: "Web Development",
    description:
      "We offer cutting-edge web development services tailored to meet your business needs, with expertise in PHP, .NET, Java, and Joomla.",
    technologies: ["PHP", ".NET", "Java", "Joomla"],
    bgColor: "bg-blue-100",
    icon: "/images/icons/development.svg",
  },
  {
    title: "Ecommerce Development",
    description:
      "Build robust and scalable e-commerce platforms with our Magento, Shopify, and WordPress expertise.",
    technologies: ["Magento", "WP", "Shopify", "Joomla"],
    bgColor: "bg-orange-100",
    icon: "/images/icons/ecommerce.svg",
  },
  {
    title: "Mobile App Development",
    description:
      "We create high-quality iPhone, Android, and cross-platform apps for seamless user experiences.",
    technologies: ["iPhone", "Android", "Cross Platform"],
    bgColor: "bg-pink-100",
    icon: "/images/icons/app.svg",
  },
  {
    title: "Trending Technologies",
    description:
      "Stay ahead in the tech game with our expertise in React.JS, Node.JS, and Angular.JS solutions.",
    technologies: ["React.JS", "Node.JS", "Angular.JS"],
    bgColor: "bg-blue-50",
    icon: "/images/icons/tech.svg",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your business with our SEO, SMO, and PPC digital marketing strategies designed to maximize your online reach.",
    technologies: ["SEO", "SMO", "PPC"],
    bgColor: "bg-yellow-50",
    icon: "/images/icons/seo.svg",
  },
];

const ServiceCard = ({ service, isActive, alwaysVisible, onClick }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 rounded-lg shadow-md cursor-pointer ${service.bgColor} hover:scale-105 transition-transform duration-300`}
      onClick={!alwaysVisible ? onClick : undefined}
    >
      <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
      <h5 className="text-lg font-bold mb-2">{service.title}</h5>
      {alwaysVisible || isActive ? (
        <div className="text-center mt-2">
          {service.technologies.length > 0 && (
            <ul className="flex gap-2 mt-2 flex-wrap justify-center">
              {service.technologies.map((tech, index) => (
                <li
                  key={index}
                  className="text-xs bg-white px-2 py-1 rounded-full shadow"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
          <p className="text-sm text-gray-700 mt-2">{service.description}</p>
        </div>
      ) : (
        <p className="text-sm text-gray-600">Click to reveal details</p>
      )}
    </div>
  );
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            alwaysVisible={index === 0} // Make the first card always visible
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          />
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center">
        <p className="text-lg text-center">
          Hire a <span className="font-bold text-purple-600">Dedicated Developer</span>
        </p>
        <div className="flex justify-center mt-6">
          <ThemeButton text="Hire Me" className="px-8 py-4 text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Services;
