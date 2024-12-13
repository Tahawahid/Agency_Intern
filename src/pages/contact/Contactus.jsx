import React from 'react';
import Form from './Form'
import Information from './Information';
import Subscribe from '../../components/Subscribe';
import Location from '../home/Location';

const ContactForm = () => {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-g-100 py-4 bg-gradient-to-br from-pink-200 to-cyan-200">
        <div className="container mx-auto">
          <div className="text-center mt-4">
            <h2 className="text-4xl font-bold">ContactUs</h2> 
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-8">
            {/* Contact Form Section */}
                <Form/>

            {/* Contact Information Section */}
            <Information/>
         </div>
        </div>
      </section>
      <Location/>
      <Subscribe/>


    </>
  );
};

export default ContactForm;
