import React from 'react';
import ThemeButton from "../../components/ThemeButton";  // Going up 2 levels

const Company = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-slate-50 to-pink-100 py-16 text-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-pink-400">WE MAKE RELATIONSHIPS</h3>
            <h2 className="text-4xl font-bold">
              Ranked as #1 Top Web & App Development Companies
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              {
                image: "/images/about/badges-a.png", // Updated path
                text: "ABC DEF Industry Leader",
              },
              {
                image: "/images/about/badges-b.png", // Updated path
                text: "Best eCommerce Development Company",
              },
              {
                image: "/images/about/badges-c.png", // Updated path
                text: "ABC DEF High Performer Winner",
              },
              {
                image: "/images/about/badges-d.png", // Updated path
                text: "Top App Developer 2019-20",
              },
            ].map((badge, index) => (
              <div key={index} className="text-center transform transition-transform hover:scale-110">
                <img 
                  src={badge.image} 
                  alt="badge" 
                  className="w-24 h-24 mx-auto transform transition-transform hover:scale-110 md:w-32 md:h-32" 
                />
                <p className="mt-4 text-sm md:text-base">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The section below the grid of badges */}
      <section className="bg-gradient-to-r from-slate-50 to-pink-100 py-16">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">We Promise. We Deliver.</h2>
          <ThemeButton text="Let's Work Together" />
        </div>
      </section>
    </div>
  );
};

export default Company;
