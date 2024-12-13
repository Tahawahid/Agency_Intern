import { useState } from 'react';

const PortfolioSection = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleZoomIn = (image) => {
    setZoomedImage(image);
  };

  const handleZoomOut = () => {
    setZoomedImage(null);
  };

  return (
    <section className="portfolio-section py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-lg font-semibold text-gray-500">Our Work</span>
          <h2 className="text-4xl font-bold text-gray-800">Our Latest Creative Work</h2>
        </div>
        {/* Grid layout with specific size adjustments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              title: 'Ecommerce Development',
              category: 'Web Application',
              image: 'images/portfolio/image-d.jpg',
              customClass: '',
            },
            {
              title: 'Creative App',
              category: 'iOs, Android',
              image: 'images/portfolio/image-1.jpg',
              customClass: 'w-3/4 h-3/4', // Reduce size for upper-right image
            },
            {
              title: 'Brochure Design',
              category: 'Graphic, Print',
              image: 'images/portfolio/image-6.jpg',
              customClass: 'w-3/4 h-3/4', // Reduce size for lower-left image
            },
            {
              title: 'Icon Pack',
              category: 'iOs, Android',
              image: 'images/portfolio/image-c.jpg',
              customClass: '',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="isotope_item hover:scale-105 transition-transform"
              onClick={() => handleZoomIn(item.image)}
            >
              <div className="item-image overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-auto transition-transform ${zoomedImage === item.image ? 'scale-110' : 'scale-100'} duration-300 ${item.customClass}`}
                />
                {zoomedImage === item.image && (
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
                    onClick={handleZoomOut}
                  ></div>
                )}
              </div>
              <div className="item-info mt-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
