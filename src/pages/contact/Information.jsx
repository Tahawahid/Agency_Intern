import React from 'react';
import { useInView } from 'react-intersection-observer';

const Information = () => {
  // Add observers for each section
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className="w-full lg:w-1/3 space-y-6 lg:space-y-8 px-4 md:px-6 lg:px-0">
      <div
        ref={ref1}
        className={`bg-pink-200 p-4 md:p-6 rounded-lg shadow-md transform transition-transform duration-700 ${
          inView1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h4 className="font-medium text-black text-base md:text-lg lg:text-xl">Phone</h4>
        <p className="text-gray-600 text-sm md:text-base">
          Assistance hours: Monday – Friday, 9 am to 5 pm
        </p>
        <a href="tel:+10000000000" className="text-gray-800 font-medium text-sm md:text-base">
          (+91) 0000 000 000
        </a>
      </div>
      <div
        ref={ref2}
        className={`bg-pink-300 p-4 md:p-6 rounded-lg shadow-md transform transition-transform duration-700 delay-200 ${
          inView2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h4 className="font-medium text-black text-base md:text-lg lg:text-xl">Email</h4>
        <p className="text-gray-600 text-sm md:text-base">
          Our support team will get back in 24-h during standard business hours.
        </p>
        <a href="mailto:info@businessname.com" className="text-gray-800 font-medium text-sm md:text-base">
          info@businessname.com
        </a>
      </div>
      <div
        ref={ref3}
        className={`bg-cyan-200 p-4 md:p-6 rounded-lg shadow-md transform transition-transform duration-700 delay-400 ${
          inView3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h4 className="font-medium text-black text-base md:text-lg lg:text-xl">Skype</h4>
        <p className="text-gray-600 text-sm md:text-base">
          We Are Online: Monday – Friday, 9 am to 5 pm
        </p>
        <a href="skype:niwax.company?call" className="text-gray-800 font-medium text-sm md:text-base">
          digital.company
        </a>
      </div>
    </div>
  );
};

export default Information;
