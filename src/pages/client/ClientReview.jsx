import React from 'react';
import Testimonials from './TestinoamlSection';
 import Testinomal from './Testinomal';
//  import Clientslider from './Clientslider';



export const ClientReview = () => {
  return (
    <>
      <section className="bg-gray-100 py-4 bg-gradient-to-br from-pink-200 to-cyan-200">
        <div className="container mx-auto">
          <div className="text-center mt-4">
            <h2 className="text-4xl font-semibold">Client Reviews</h2>
          </div>
        </div>
      </section>
      <Testimonials />
      {/* <Testimonial /> */}
      <Testinomal/>
      <Video/>
      {/* <Clientslider/> */}




    </>
  );
};

export default ClientReview;
