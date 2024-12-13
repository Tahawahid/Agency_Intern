import React from 'react'

const Aboutus = () => {
  return (

    <section className="bg-slate-50 py-16">
      <div className="container mx-auto">
        <div className="flex justify-center text-center">
          <div className="lg:w-10/12">
            <div className="common-heading mb-12">
              <span className="block text-pink-500 text-lg">We Are Creative Agency</span>
              <h1 className="mb-6 text-3xl lg:text-4xl font-bold">
                Why Choose <span className="text-radius text-light text-animation bg-b">Digital Agency</span>
              </h1>
              <p className="text-gray-600 mb-4">
                Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <span className="font-bold">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. <span className="font-bold">Lorem Ipsum </span> is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="text-gray-600">
                Lorem Ipsum is <span className="font-bold">simply dummy</span> text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the <span className="font-bold">printing</span> and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus
