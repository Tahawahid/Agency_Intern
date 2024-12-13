import { useEffect } from "react";

const ClientsSection = () => {
  useEffect(() => {
    // Add any necessary animations, e.g., for the fadeIn effect
    const wowElements = document.querySelectorAll('.wow');
    wowElements.forEach((element) => {
      const delay = element.getAttribute('data-wow-delay');
      setTimeout(() => {
        element.classList.add('opacity-100', 'transform', 'scale-100');
      }, delay ? parseFloat(delay) * 1000 : 0);
    });
  }, []);

  return (
    <section className="clients-section bg-gradient-to-r from-slate-50 to-pink-300 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-lg font-semibold text-white">Our happy customers</span>
          <h2 className="mb-8 text-3xl font-bold text-white">Some of our Clients</h2>
        </div>
        <div className="clients-logos text-center">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {[
              { img: 'clients-1.png', name: 'Shutter, USA' },
              { img: 'clients-2.png', name: 'Hipster, USA' },
              { img: 'clients-3.png', name: 'Happy, USA' },
              { img: 'clients-4.png', name: 'Opera Tours, USA' },
              { img: 'clients-5.png', name: 'Royale Stone, UK' },
              { img: 'clients-6.png', name: 'QTP, Australia' },
              { img: 'clients-7.png', name: 'PAPA, Malaysia' },
              { img: 'clients-8.png', name: 'Coffee, Australia' },
              { img: 'clients-9.png', name: 'Bakery, India' },
              { img: 'clients-10.png', name: 'Iconico, India' },
              { img: 'clients-11.png', name: 'Tom N Jerry, UK' },
              { img: 'clients-12.png', name: 'Arch, India' },
              { img: 'clients-13.png', name: 'Aro Group, India' },
              { img: 'clients-14.png', name: 'Tom Group, India' },
              { img: 'clients-4.png', name: 'Premier Pipes, India' },
              { img: 'clients-1.png', name: 'Dynamic, India' },
              { img: 'clients-7.png', name: 'Fns Inc, India' },
              { img: 'clients-2.png', name: 'RP School, India' }
            ].map((client, index) => (
              <li key={index} className="col-6 sm:col-4 md:col-3 lg:col-2 wow opacity-0 scale-95 transform transition-all duration-1000">
                <div className="brand-logo">
                  <img src={`images/client/${client.img}`} alt={client.name} className="img-fluid mx-auto" />
                </div>
                <p className="text-white mt-2">{client.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
