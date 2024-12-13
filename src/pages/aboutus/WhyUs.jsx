import React from "react";
import ThemeButton from "../../components/ThemeButton";
import Company from "../home/Company";

const App = () => {
  return (
<>
      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl text-gray-500 font-bold">Why Choose Us</h3>
            <h2 className="text-3xl font-bold">
              Why Agency Ranked Top Among Leading Companies
            </h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "/images/icons/computers.svg",
                title: "Streamlined Project Management",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper.",
              },
              
              {
                icon: "/images/icons/worker.svg",
                title: "A Dedicated Team of Experts",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper.",
              },
              {
                icon: "/images/icons/computers.svg",
                title: "Streamlined Project Management",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper.",
              },
              
              {
                icon: "/images/icons/worker.svg",
                title: "A Dedicated Team of Experts",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper.",
              },
              {
                icon: "/images/icons/deal.svg", // Updated path
                title: "Completion of Project in Given Time",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper."
              },

              {
                icon: "/images/icons/deal.svg",
                title: "Completion of Project in Given Time",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white shadow-md p-4 rounded-md">
                <img src={item.icon} alt="icon" className="w-16 h-16 md:w-24 md:h-24 object-contain" />
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <Company />

      {/* Additional Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">We Promise. We Deliver.</h2>
            <ThemeButton text='Lets Work Together' />
          </div>
          <div className="bg-gradient-to-r from-pink-100 to-yellow-100 p-8 rounded-md text-center">
            <h3 className="text-xl font-semibold mb-4">Get New Insights Weekly</h3>
            <p className="text-gray-600 mb-4">
              News letter dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Enter your email
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <input
                type="email"
                placeholder="Email Your Address"
                className="p-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 md:mb-0 md:mr-2"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-r-full shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default App;
