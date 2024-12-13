import React from 'react';

const EnterprisesSection = () => {
  return (
    <section className="bg-blue-50 py-10">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black mb-4">Enterprises</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[
          { image: 'clients-5.png', name: 'Client 5', location: 'USA' },
          { image: 'clients-1.png', name: 'Client 6', location: 'USA' },
          { image: 'clients-2.png', name: 'Client 7', location: 'USA' },
          { image: 'clients-3.png', name: 'Client 8', location: 'USA' },
          { image: 'clients-4.png', name: 'Client 8', location: 'USA' },
          { image: 'clients-5.png', name: 'Client 8', location: 'USA' },
          { image: 'clients-2.png', name: 'Client 8', location: 'USA' },         
        ].map((client, index) => (
          <div key={index} className="text-center">
            <div className="mb-3">
              <img
                src={`/images/client/${client.image}`}
                alt={client.name}
                className="w-32 h-auto mx-auto object-contain"
              />
            </div>
            <p className="text-gray-800 font-medium text-sm md:text-base">
              {client.name}, {client.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default EnterprisesSection;
