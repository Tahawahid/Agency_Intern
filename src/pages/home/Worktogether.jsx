import React from 'react';

const Worktogether = () => {
  return (
    <section className="cta-area py-16 bg-gradient-to-b from-blue-100 via-white to-gray-100 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-2xl">
            <div className="common-heading">
              <span className="text-sm font-semibold text-pink-600 uppercase tracking-wide">Let's work together</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4">We Love to Listen to Your Requirements</h2>
              <a
                href="javascript:void(0)"
                className="inline-block mt-6 py-3 px-8 border border-black text-black-600 rounded-full shadow-md hover:bg-pink-600 hover:text-white active:bg-pink-600  active:text-white transition duration-300"
              >
                Estimate Project 
              </a>
              <p className="cta-call mt-4 text-gray-700 text-sm md:text-base">
                Or call us now{' '}
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 font-medium hover:underline"
                >
                  <i className="fas fa-phone-alt"></i> (123) 456 7890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 w-16 h-16">
        <img src="images/shape/shape-3.svg" alt="shape" className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16">
        <img src="images/shape/shape-4.svg" alt="shape" className="w-full h-full" />
      </div> */}
    </section>
  );
};

export default Worktogether;
